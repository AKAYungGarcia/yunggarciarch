import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import { MongoClient } from "mongodb";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3001);
const jwtSecret = process.env.JWT_SECRET;
const passwordHash = process.env.ADMIN_PASSWORD_HASH;
const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "yung_garcia_archive";
const uploadDir = path.resolve(__dirname, process.env.UPLOAD_DIR || "uploads");
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!jwtSecret || !passwordHash || !mongoUri) {
  console.error("Configure JWT_SECRET, ADMIN_PASSWORD_HASH e MONGODB_URI no .env");
  process.exit(1);
}

fs.mkdirSync(uploadDir, { recursive: true });

const client = new MongoClient(mongoUri);
await client.connect();
const db = client.db(dbName);
const siteCollection = db.collection("site");

const app = express();
app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origem nao permitida"));
  }
}));
app.use(express.json({ limit: "2mb" }));
app.use("/uploads", express.static(uploadDir, { maxAge: "30d", immutable: true }));

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20 });
const writeLimiter = rateLimit({ windowMs: 60 * 1000, limit: 60 });

function requireAdmin(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  try {
    req.admin = jwt.verify(token, jwtSecret);
    return next();
  } catch {
    return res.status(401).json({ error: "nao autorizado" });
  }
}

async function getSiteDoc() {
  const doc = await siteCollection.findOne({ _id: "current" });
  return doc || { _id: "current", data: null, updatedAt: null };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, name: "yung-garcia-archive-backend" });
});

app.get("/api/site", async (_req, res) => {
  const doc = await getSiteDoc();
  res.json({ data: doc.data, updatedAt: doc.updatedAt });
});

app.post("/api/auth/login", authLimiter, async (req, res) => {
  const password = String(req.body?.password || "");
  const ok = await bcrypt.compare(password, passwordHash);
  if (!ok) return res.status(401).json({ error: "senha incorreta" });
  const token = jwt.sign({ role: "admin" }, jwtSecret, { expiresIn: "12h" });
  res.json({ token });
});

app.put("/api/site", writeLimiter, requireAdmin, async (req, res) => {
  const siteData = req.body?.data;
  if (!siteData || typeof siteData !== "object") return res.status(400).json({ error: "data invalido" });
  const updatedAt = new Date();
  await siteCollection.updateOne(
    { _id: "current" },
    { $set: { data: siteData, updatedAt } },
    { upsert: true }
  );
  res.json({ ok: true, updatedAt });
});

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, uploadDir),
  filename: (_req, file, callback) => {
    const ext = path.extname(file.originalname).toLowerCase().slice(0, 12);
    callback(null, `${Date.now()}-${crypto.randomBytes(8).toString("hex")}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    if (!/^image\/|^video\//.test(file.mimetype)) return callback(new Error("tipo de arquivo nao permitido"));
    callback(null, true);
  }
});

app.post("/api/upload", writeLimiter, requireAdmin, upload.single("file"), (req, res) => {
  const publicPath = `/uploads/${req.file.filename}`;
  res.json({ url: publicPath, filename: req.file.filename });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "erro interno" });
});

app.listen(port, () => {
  console.log(`Yung Garcia Archive API on :${port}`);
});
