# Backend real - Yung Garcia Archive

API Node/Express para transformar o admin do site em painel real.

- `GET /api/site`: entrega o design publicado para todos os visitantes.
- `POST /api/auth/login`: login admin com senha hash.
- `PUT /api/site`: salva o design global, protegido por JWT.
- `POST /api/upload`: upload protegido de imagens/videos.

## Rodar local

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run hash-password -- "sua-senha-forte"
npm start
```

Coloque o hash gerado em `ADMIN_PASSWORD_HASH` dentro do `.env`.

## Conectar no frontend

Depois de publicar a API, edite `config.js`:

```js
window.YUNG_GARCIA_API_BASE = "https://sua-api.onrender.com";
```

Com isso, o admin passa a salvar no backend. Sem essa URL, o site continua em modo local.

## Deploy recomendado

Use Render, Railway, Fly.io ou VPS. Para banco, use MongoDB Atlas.

Variaveis obrigatorias:

- `MONGODB_URI`
- `MONGODB_DB`
- `ADMIN_PASSWORD_HASH`
- `JWT_SECRET`
- `ALLOWED_ORIGINS`

Inclua em `ALLOWED_ORIGINS`:

```text
https://akayunggarcia.github.io
```
