const storageKey = "akayunggarcia-standalone-v24";
const adminKey = "akayunggarcia-admin-ok";
const adminTokenKey = "akayunggarcia-admin-token";
const adminPassHash = "0a18524cbd273b68bd8dd473597504e35012cec19ac366e6e77bd8e3e19e5b30";
const apiBase = String(window.YUNG_GARCIA_API_BASE || "").replace(/\/$/, "");
const oldStorageKeys = [
  "akayunggarcia-standalone-v1",
  "akayunggarcia-standalone-v2",
  "akayunggarcia-standalone-v3",
  "akayunggarcia-standalone-v4",
  "akayunggarcia-standalone-v5",
  "akayunggarcia-standalone-v6",
  "akayunggarcia-standalone-v7",
  "akayunggarcia-standalone-v8",
  "akayunggarcia-standalone-v9",
  "akayunggarcia-standalone-v10",
  "akayunggarcia-standalone-v11",
  "akayunggarcia-standalone-v12",
  "akayunggarcia-standalone-v13",
  "akayunggarcia-standalone-v14",
  "akayunggarcia-standalone-v15",
    "akayunggarcia-standalone-v16",
  "akayunggarcia-standalone-v17",
  "akayunggarcia-standalone-v18",
  "akayunggarcia-standalone-v19",
  "akayunggarcia-standalone-v20",
  "akayunggarcia-standalone-v21",
  "akayunggarcia-standalone-v22",
  "akayunggarcia-standalone-v23"
];

const fallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900'%3E%3Cdefs%3E%3CradialGradient id='g'%3E%3Cstop offset='0' stop-color='%2300d4ff'/%3E%3Cstop offset='.45' stop-color='%23d72bff'/%3E%3Cstop offset='1' stop-color='%23030208'/%3E%3C/radialGradient%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='900' height='900' fill='url(%23g)'/%3E%3Crect width='900' height='900' filter='url(%23n)' opacity='.24'/%3E%3Cpath d='M60 680 C210 520 300 800 440 610 S680 390 840 560' fill='none' stroke='%23fff' opacity='.28' stroke-width='3'/%3E%3C/svg%3E";

const designVersion = "final-product-v1";

const spotifyArtistUrl = "https://open.spotify.com/intl-pt/artist/2TIEjez69Y8t9qvfWKeyXS";
const instagramUrl = "https://instagram.com/akaynggarcia";

const initialData = {
  designVersion,
  artistName: "Yung Garcia Archive",
  tagline: "som, video, contato e arquivo visual.",
  citySignal: "alien military archive / online",
  spotifyEmbed:
    "https://open.spotify.com/embed/artist/2TIEjez69Y8t9qvfWKeyXS?utm_source=generator&theme=0",
  theme: {
    background: "#010403",
    surface: "rgba(1, 18, 10, 0.78)",
    accent: "#36ff7f",
    accent2: "#b8ffd2",
    text: "#eef8ed",
    muted: "#93b79e",
    serif: "'Old English Text MT', 'Engravers Old English', 'Cloister Black', 'UnifrakturCook', Georgia, serif",
    mono: "'IBM Plex Mono', 'Courier New', monospace",
    sans: "'Arial Narrow', 'Bahnschrift Condensed', 'Roboto Condensed', Arial, sans-serif",
    rain: true,
    noise: true,
    glitch: true
  },
  effects: {
    obscureUpcoming: true,
    mediaFilters: true,
    bloodLayer: true,
    gridLayer: true,
    brutalType: true,
    chaos: 72,
    wallImage: "./assets/koln-cathedral-bg.svg",
    wallImageOpacity: 86,
    wallMotion: true,
    wallSpeed: 42,
    alienShips: true,
    rainIntensity: 36,
    glitchIntensity: 26,
    parallaxDepth: 42,
    greenLight: 92,
    glyphDensity: 76,
    cursorLight: 56,
    cathedralBlur: 8,
    scrollDepth: 38,
    performanceMode: false
  },
  phrases: ["spotify.", "youtube.", "instagram.", "orcamento."],
  worldNodes: [
    {
      type: "spotify",
      title: "Spotify",
      text: "ouvir agora.",
      link: spotifyArtistUrl
    },
    {
      type: "instagram",
      title: "@akaynggarcia",
      text: "fotos, contato e bastidores.",
      link: instagramUrl
    },
    {
      type: "youtube",
      title: "YouTube",
      text: "videoclipes e arquivo audiovisual.",
      link: "#videoclipes"
    },
    {
      type: "fotos",
      title: "Fotos",
      text: "capas, frames e identidade.",
      link: "#visual"
    },
    {
      type: "musicas",
      title: "Musicas",
      text: "Miragens, 8 ou 80, Fuck the Fame, Designer e Perc.",
      link: "#musica"
    },
    {
      type: "contato",
      title: "Orcamento",
      text: "feat, show, collab e projeto.",
      link: "#contato"
    }
  ],
  portalObjects: [
    {
      label: "SPOTIFY",
      title: "Spotify",
      text: "ouvir catalogo",
      link: spotifyArtistUrl,
      kind: "audio"
    },
    {
      label: "MIRAGENS",
      title: "Miragens",
      text: "faixa principal / abrir player",
      link: "#musica",
      kind: "audio"
    },
    {
      label: "TOP 5",
      title: "Destaques",
      text: "Miragens, 8 ou 80, Fuck the Fame, Designer, Perc",
      link: "#musica",
      kind: "audio"
    },
    {
      label: "INSTAGRAM",
      title: "@akaynggarcia",
      text: "contato e visual",
      link: instagramUrl,
      kind: "social"
    },
    {
      label: "YOUTUBE",
      title: "videoclipes",
      text: "clipes e arquivo",
      link: "#videoclipes",
      kind: "video"
    },
    {
      label: "ORCAMENTO",
      title: "contato",
      text: "show / feat / collab",
      link: "#contato",
      kind: "mind"
    }
  ],
  mediaHubs: [
    {
      type: "spotify",
      title: "Spotify",
      link: spotifyArtistUrl,
      note: "Miragens / 8 ou 80 / Fuck the Fame / Designer / Perc",
      items: [
        { title: "Miragens", label: "faixa principal", link: spotifyArtistUrl, image: "./assets/cover-miragens.svg" },
        { title: "8 ou 80", label: "destaque", link: spotifyArtistUrl, image: "./assets/cover-8ou80.svg" },
        { title: "Fuck the Fame", label: "destaque", link: spotifyArtistUrl, image: "./assets/cover-fuck-the-fame.svg" },
        { title: "Designer", label: "destaque", link: spotifyArtistUrl, image: "./assets/cover-designer.svg" },
        { title: "Perc", label: "destaque", link: spotifyArtistUrl, image: "./assets/cover-perc.svg" }
      ]
    },
    {
      type: "instagram",
      title: "Instagram",
      link: instagramUrl,
      note: "contato / fotos / bastidores",
      items: []
    },
    {
      type: "youtube",
      title: "YouTube",
      link: "#videoclipes",
      note: "videoclipes / arquivo",
      items: [
        { title: "Miragens", label: "videoclipe", link: "https://www.youtube.com/watch?v=dQ-1liAPqEc&pp=ygUFZnljdXA%3D", image: fallbackImage },
        { title: "Guapanese", label: "videoclipe", link: "https://www.youtube.com/watch?v=9_VRg8ilLTw&pp=ygUFZnljdXA%3D", image: fallbackImage },
        { title: "Designer", label: "videoclipe", link: "https://youtu.be/pLTXhJ_MLfM?si=uD5og09E7Y9KV1Df", image: fallbackImage }
      ]
    }
  ],
  videos: [
    {
      title: "Miragens",
      label: "videoclipe",
      url: "https://www.youtube.com/watch?v=dQ-1liAPqEc&pp=ygUFZnljdXA%3D",
      embed: "https://www.youtube.com/embed/dQ-1liAPqEc",
      description: "Videoclipe oficial no arquivo Yung Garcia."
    },
    {
      title: "Guapanese",
      label: "videoclipe",
      url: "https://www.youtube.com/watch?v=9_VRg8ilLTw&pp=ygUFZnljdXA%3D",
      embed: "https://www.youtube.com/embed/9_VRg8ilLTw",
      description: "Videoclipe oficial no arquivo Yung Garcia."
    },
    {
      title: "Designer",
      label: "videoclipe",
      url: "https://youtu.be/pLTXhJ_MLfM?si=uD5og09E7Y9KV1Df",
      embed: "https://www.youtube.com/embed/pLTXhJ_MLfM",
      description: "Videoclipe oficial no arquivo Yung Garcia."
    }
  ],
  about: [
    "Rapper independente.",
    "Arquivo central: som, clipe, visual e contato.",
    "Destaques: Miragens, 8 ou 80, Fuck the Fame, Designer e Perc.",
    "Para ouvir: Spotify.",
    "Para contato, feat, show, collab ou orcamento: Instagram/email."
  ],
  tracks: [
    {
      title: "Miragens",
      cover: "./assets/cover-miragens.svg",
      mood: "faixa principal",
      description: "O centro emocional do arquivo.",
      link: spotifyArtistUrl
    },
    {
      title: "8 ou 80",
      cover: "./assets/cover-8ou80.svg",
      mood: "destaque",
      description: "Energia extrema, sem meio termo.",
      link: spotifyArtistUrl
    },
    {
      title: "Fuck the Fame",
      cover: "./assets/cover-fuck-the-fame.svg",
      mood: "destaque",
      description: "Anti-fama, arquivo sujo, foco no som.",
      link: spotifyArtistUrl
    },
    {
      title: "Designer",
      cover: "./assets/cover-designer.svg",
      mood: "destaque / video",
      description: "Faixa conectada ao arquivo audiovisual.",
      link: spotifyArtistUrl
    },
    {
      title: "Perc",
      cover: "./assets/cover-perc.svg",
      mood: "destaque",
      description: "Mais agressiva, seca e subterranea.",
      link: spotifyArtistUrl
    }
  ],
  gallery: [],
  thoughts: [
    {
      tag: "fotos",
      title: "Visual",
      body: "Capas, frames e fotos entram aqui quando forem selecionadas."
    },
    {
      tag: "videos",
      title: "Videoclipes",
      body: "Clipes e cortes conectados ao YouTube."
    },
    {
      tag: "spotify",
      title: "Spotify",
      body: "Onde o visitante deve ouvir primeiro."
    },
    {
      tag: "contato",
      title: "Orcamento",
      body: "Feats, shows, collabs, campanhas e projetos."
    }
  ],
  contact: {
    email: "contato@yunggarcia.art",
    instagram: instagramUrl,
    text: "Para feat, show, collab, campanha, videoclipe ou orcamento: chame no Instagram ou mande email."
  }
};

let data = loadData();
let activeTab = "theme";
let audioContext;

function loadData() {
  try {
    oldStorageKeys.forEach((key) => localStorage.removeItem(key));
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return normalizeData(saved || structuredClone(initialData));
  } catch {
    return structuredClone(initialData);
  }
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

async function loadRemoteData() {
  if (!apiBase) return;
  try {
    const response = await fetch(`${apiBase}/api/site`, { cache: "no-store" });
    if (!response.ok) throw new Error("backend indisponivel");
    const payload = await response.json();
    data = normalizeData(payload.data || structuredClone(initialData));
    saveData();
    renderSite();
    if (!document.getElementById("adminTools")?.classList.contains("hidden")) renderEditor();
    showSaveStatus("backend conectado");
  } catch {
    showSaveStatus("backend offline; usando local");
  }
}

async function loginRemoteAdmin(password) {
  if (!apiBase) return false;
  try {
    const response = await fetch(`${apiBase}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    if (!response.ok) return false;
    const payload = await response.json();
    sessionStorage.setItem(adminTokenKey, payload.token);
    return true;
  } catch {
    return false;
  }
}

async function saveDataRemote(message = "salvo") {
  saveData();
  if (!apiBase) {
    showSaveStatus(`${message} local`);
    return;
  }
  const token = sessionStorage.getItem(adminTokenKey);
  if (!token) {
    showSaveStatus("salvo local; login backend pendente");
    return;
  }
  try {
    const response = await fetch(`${apiBase}/api/site`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    if (!response.ok) throw new Error("falha ao publicar");
    showSaveStatus(`${message} no backend`);
  } catch {
    showSaveStatus("salvo local; backend falhou");
  }
}

function showSaveStatus(message = "salvo") {
  const status = document.getElementById("saveStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.add("is-saved");
  clearTimeout(showSaveStatus.timer);
  showSaveStatus.timer = setTimeout(() => status.classList.remove("is-saved"), 1400);
}

function normalizeData(value) {
  const shouldApplyCurrentVisuals = value.designVersion !== designVersion;
  const previousDefaultTagline = "deep scan / infected hud / links";
  const previousDefaultArtistNames = ["AKAYUNGGARCIA", "akayunggarcia"];
  const previousDefaultCitySignals = ["sinal aberto / akayunggarcia"];
  return {
    ...structuredClone(initialData),
    ...value,
    designVersion,
    artistName: previousDefaultArtistNames.includes(value.artistName) ? initialData.artistName : value.artistName || initialData.artistName,
    tagline: value.tagline === previousDefaultTagline ? initialData.tagline : value.tagline || initialData.tagline,
    citySignal: previousDefaultCitySignals.includes(value.citySignal) ? initialData.citySignal : value.citySignal || initialData.citySignal,
    theme: shouldApplyCurrentVisuals ? { ...initialData.theme } : { ...initialData.theme, ...(value.theme || {}) },
    effects: shouldApplyCurrentVisuals ? { ...initialData.effects } : { ...initialData.effects, ...(value.effects || {}) }
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function applyTheme() {
  const root = document.documentElement;
  const body = document.body;
  root.style.setProperty("--bg", data.theme.background);
  root.style.setProperty("--surface", data.theme.surface);
  root.style.setProperty("--accent", data.theme.accent);
  root.style.setProperty("--accent2", data.theme.accent2);
  root.style.setProperty("--text", data.theme.text);
  root.style.setProperty("--muted", data.theme.muted);
  root.style.setProperty("--serif", data.theme.serif);
  root.style.setProperty("--mono", data.theme.mono);
  root.style.setProperty("--sans", data.theme.sans);
  root.style.setProperty("--admin-chaos", `${data.effects.chaos || 72}`);
  root.style.setProperty("--wall-speed", `${Math.max(12, 92 - (data.effects.wallSpeed || 54))}s`);
  root.style.setProperty("--rain-intensity", `${(data.effects.rainIntensity ?? 36) / 100}`);
  root.style.setProperty("--glitch-intensity", `${(data.effects.glitchIntensity ?? 26) / 100}`);
  root.style.setProperty("--parallax-depth", `${(data.effects.parallaxDepth ?? 42) / 100}`);
  root.style.setProperty("--green-light", `${(data.effects.greenLight ?? 72) / 100}`);
  root.style.setProperty("--glyph-density", `${(data.effects.glyphDensity ?? 62) / 100}`);
  root.style.setProperty("--cursor-strength", `${(data.effects.cursorLight ?? 56) / 100}`);
  root.style.setProperty("--cathedral-blur", `${Math.max(0, data.effects.cathedralBlur ?? 8) / 10}px`);
  root.style.setProperty("--scroll-depth", `${(data.effects.scrollDepth ?? 38) / 100}`);
  const green = (data.effects.greenLight ?? 72) / 100;
  const glyphs = (data.effects.glyphDensity ?? 62) / 100;
  const rain = (data.effects.rainIntensity ?? 36) / 100;
  const glitch = (data.effects.glitchIntensity ?? 26) / 100;
  const cursor = (data.effects.cursorLight ?? 56) / 100;
  root.style.setProperty("--green-alpha-soft", (green * 0.16).toFixed(3));
  root.style.setProperty("--green-alpha-mid", (green * 0.24).toFixed(3));
  root.style.setProperty("--green-alpha-strong", (green * 0.5).toFixed(3));
  root.style.setProperty("--glyph-opacity", (0.2 + glyphs * 0.44).toFixed(3));
  root.style.setProperty("--glyph-opacity-soft", (0.18 + glyphs * 0.22).toFixed(3));
  root.style.setProperty("--rain-opacity", (0.18 + rain * 0.64).toFixed(3));
  root.style.setProperty("--glitch-opacity", (0.08 + glitch * 0.16).toFixed(3));
  root.style.setProperty("--cursor-alpha-soft", (cursor * 0.18).toFixed(3));
  root.style.setProperty("--cursor-alpha-strong", (cursor * 0.3).toFixed(3));
  root.style.setProperty("--cursor-opacity", (cursor * 0.22).toFixed(3));
  root.style.setProperty("--green-shadow", `${(10 + green * 14).toFixed(1)}px`);
  root.style.setProperty("--green-shadow-small", `${(8 + green * 20).toFixed(1)}px`);
  body.classList.toggle("no-media-filters", !data.effects.mediaFilters);
  body.classList.toggle("no-blood-layer", !data.effects.bloodLayer);
  body.classList.toggle("no-grid-layer", !data.effects.gridLayer);
  body.classList.toggle("soft-type", !data.effects.brutalType);
  body.classList.toggle("obscure-upcoming", !!data.effects.obscureUpcoming);
  body.classList.toggle("wall-motion", !!data.effects.wallMotion);
  body.classList.toggle("no-alien-ships", !data.effects.alienShips);
  body.classList.toggle("performance-mode", !!data.effects.performanceMode);
  body.classList.toggle("low-power", shouldUseLowPowerMode());
  const wallImageLayer = document.getElementById("wallImageLayer");
  const wallImage = String(data.effects.wallImage || "").trim();
  wallImageLayer.style.backgroundImage = wallImage ? `url("${wallImage}")` : "";
  wallImageLayer.style.opacity = wallImage ? `${(data.effects.wallImageOpacity || 42) / 100}` : "0";
  body.classList.toggle("has-wall-image", !!wallImage);
  document.getElementById("noise").style.display = data.theme.noise ? "block" : "none";
}

function renderSite() {
  applyTheme();
  document.title = `${data.artistName}`;
  const glitchClass = data.theme.glitch ? "glitch" : "";
  const visibleMediaHubs = data.mediaHubs
    .map((hub) => ({ ...hub, items: (hub.items || []).filter((item) => !isEmptyDisplayItem(item)) }))
    .filter((hub) => hub.items.length > 0);
  const visiblePortalObjects = data.portalObjects.filter((item) => !isEmptyDisplayItem(item));
  const visibleGallery = data.gallery.filter((item) => !isEmptyDisplayItem(item));

  document.getElementById("site").innerHTML = `
    <section class="room hero">
      <div class="inner">
        <p class="kicker boot-signal">${escapeHtml(data.citySignal)}</p>
        <h1 class="${glitchClass}" data-glitch="${escapeHtml(data.artistName)}">${escapeHtml(data.artistName)}</h1>
        <p class="tagline">${escapeHtml(data.tagline)}</p>
        <div class="actions">
          <a href="#musica">ouvir</a>
          <a href="#videoclipes">videos</a>
          <a href="${escapeHtml(data.contact.instagram)}" target="_blank" rel="noreferrer">instagram</a>
          <a href="#contato">orcamento</a>
        </div>
      </div>
    </section>

    ${section("hud", "hub principal", "spotify / instagram / youtube / contato", `
      <div class="pirate-hud">
        <div class="hud-scratch">alien archive / listener route</div>
        ${visibleMediaHubs.map((hub, index) => `
          <article class="hud-window ${hub.type} h${index + 1}">
            <header>
              <span>${escapeHtml(hub.type)}</span>
              <a href="${escapeHtml(hub.link)}" target="_blank" rel="noreferrer">abrir</a>
            </header>
            <h3>${escapeHtml(hub.title)}</h3>
            <p>${escapeHtml(hub.note)}</p>
            <div class="media-strip">
              ${hub.items.map((item) => `
                <${item.link ? "a" : "figure"} class="${isUpcomingItem(item) ? "is-upcoming" : ""}" ${item.link ? `href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer"` : ""}>
                  <img src="${escapeHtml(item.image || fallbackImage)}" alt="${escapeHtml(item.title)}">
                  <figcaption>
                    <strong>${escapeHtml(item.title)}</strong>
                    <span>${escapeHtml(item.label)}</span>
                  </figcaption>
                </${item.link ? "a" : "figure"}>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    `)}

    ${section("portal", "rotas", "links essenciais", `
      <div class="object-wall">
        <div class="wall-stamp">YUNG<br>GARCIA</div>
        <div class="wall-warning">YUNG GARCIA</div>
        <div class="wall-note">Spotify, YouTube, Instagram e orcamento.</div>
        ${visiblePortalObjects.map((item, index) => `
          <a class="portal-object ${item.kind} p${index + 1}" href="${escapeHtml(item.link)}" target="${item.link.startsWith("#") ? "_self" : "_blank"}" rel="noreferrer">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.text)}</p>
          </a>
        `).join("")}
      </div>
    `)}

    ${section("mundo", "arquivo", "mapa rapido", `
      <div class="mindmap">
        <div class="mind-center">
          <span class="tag">centro</span>
          <h3>${escapeHtml(data.artistName)}</h3>
          <p>som, video, visual e contato.</p>
        </div>
        ${data.worldNodes.map((node, index) => `
          <a class="mind-node n${index + 1}" href="${escapeHtml(node.link)}" target="${node.link.startsWith("#") ? "_self" : "_blank"}" rel="noreferrer">
            <span>${escapeHtml(node.type)}</span>
            <strong>${escapeHtml(node.title)}</strong>
            <p>${escapeHtml(node.text)}</p>
          </a>
        `).join("")}
      </div>
    `)}

    ${section("musica", "som", "destaques no Spotify", `
      <div class="music-grid">
        <div class="glass"><iframe class="spotify" src="${escapeHtml(data.spotifyEmbed)}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify"></iframe></div>
        <div class="tracks">
          ${data.tracks.map((track) => `
            <article class="track ${isUpcomingItem(track) ? "is-upcoming" : ""}">
              <img src="${escapeHtml(track.cover || fallbackImage)}" alt="">
              <div>
                <span class="mood">${escapeHtml(track.mood)}</span>
                <h3>${escapeHtml(track.title)}</h3>
                <p>${escapeHtml(track.description)}</p>
                <a href="${escapeHtml(track.link)}" target="_blank" rel="noreferrer">ouvir</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `)}

    ${section("videoclipes", "video", "videoclipes / YouTube", `
      <div class="video-grid">
        ${data.videos.map((video) => `
          <article class="video-card glass">
            <div class="video-frame">
              <iframe src="${escapeHtml(video.embed)}" title="${escapeHtml(video.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="video-copy">
              <span class="tag">${escapeHtml(video.label)}</span>
              <h3>${escapeHtml(video.title)}</h3>
              <p>${escapeHtml(video.description)}</p>
              <a href="${escapeHtml(video.url)}" target="_blank" rel="noreferrer">abrir no YouTube</a>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="actions subfolder-actions">
        <a href="./videoclipes/">abrir subpasta de videoclipes</a>
      </div>
    `)}

    ${section("identidade", "perfil", "arquivo do artista", `
      <div class="bio">
        <p class="vertical">musica / fotos / videos / atalhos</p>
        <div class="bio-lines">${data.about.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</div>
      </div>
    `)}

    ${visibleGallery.length ? section("visual", "fotos / capas / prints", "galeria", `
      <div class="gallery">
        ${visibleGallery.map((item, index) => `
          <figure class="${index % 3 === 0 ? "big" : "small"}">
            <img src="${escapeHtml(item.image || fallbackImage)}" alt="${escapeHtml(item.title)}">
            <figcaption>
              <span class="tag">${escapeHtml(item.title)}</span>
              <p>${escapeHtml(item.caption)}</p>
            </figcaption>
          </figure>
        `).join("")}
      </div>
    `) : ""}

    ${section("ideias", "servicos", "som / visual / contato", `
      <div class="thoughts">
        ${data.thoughts.map((item) => `
          <article class="thought glass">
            <span class="tag">${escapeHtml(item.tag)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    `)}

    <section id="contato" class="room contact">
      <div class="inner">
        <h2>contato / orcamento</h2>
        <p>${escapeHtml(data.contact.text)}</p>
        <div class="actions">
          <a href="mailto:${escapeHtml(data.contact.email)}">email</a>
          <a href="${escapeHtml(data.contact.instagram)}" target="_blank" rel="noreferrer">instagram</a>
          <a href="${escapeHtml(data.contact.instagram)}" target="_blank" rel="noreferrer">pedir orcamento</a>
        </div>
      </div>
    </section>
  `;
}

function section(id, marker, title, content) {
  return `
    <section id="${id}" class="room">
      <div class="inner">
        <header class="section-head">
          <div>
            <p class="kicker">${marker}</p>
            <h2>${title}</h2>
          </div>
        </header>
        ${content}
      </div>
    </section>
  `;
}

function isUpcomingItem(item) {
  const text = `${item.title || ""} ${item.label || ""} ${item.mood || ""} ${item.description || ""}`.toLowerCase();
  return ["proxim", "lancamento", "lançamento", "adicionar", "em atualizacao", "em atualização"].some((term) => text.includes(term));
}

function isEmptyDisplayItem(item) {
  const text = `${item.label || ""} ${item.caption || ""} ${item.description || ""} ${item.text || ""}`.toLowerCase();
  const hasRealLink = item.link && !String(item.link).startsWith("#");
  const placeholderImage = !item.image || item.image === fallbackImage;
  const placeholderText = [
    "link e capa a confirmar",
    "trocar por foto real",
    "substituir por",
    "link a confirmar"
  ].some((term) => text.includes(term));
  return placeholderImage && placeholderText && !hasRealLink;
}

function renderEditor() {
  const editor = document.getElementById("editor");
  const map = {
    theme: themeEditor,
    text: textEditor,
    music: musicEditor,
    gallery: galleryEditor,
    blocks: blocksEditor,
    tools: toolsEditor
  };
  editor.innerHTML = map[activeTab]();
  bindEditor();
}

function input(path, label, type = "text") {
  return `<div class="field"><label>${label}</label><input data-path="${path}" type="${type}" value="${escapeHtml(getPath(path))}"></div>`;
}

function imageInput(path, label) {
  const value = getPath(path) || "";
  const preview = value || "./assets/koln-cathedral-bg.svg";
  return `
    <div class="field image-field">
      <label>${label}</label>
      <div class="image-edit-row">
        <img src="${escapeHtml(preview)}" alt="">
        <input data-path="${path}" type="text" value="${escapeHtml(value)}" placeholder="./assets/arquivo.jpg ou https://...">
      </div>
    </div>
  `;
}

function range(path, label, min = 0, max = 100) {
  return `<div class="field"><label>${label}: ${escapeHtml(getPath(path))}</label><input data-path="${path}" type="range" min="${min}" max="${max}" value="${escapeHtml(getPath(path))}"></div>`;
}

function textarea(path, label) {
  return `<div class="field"><label>${label}</label><textarea data-path="${path}">${escapeHtml(getPath(path))}</textarea></div>`;
}

function themeEditor() {
  return `
    ${input("theme.background", "fundo", "color")}
    ${input("theme.accent", "neon 1", "color")}
    ${input("theme.accent2", "neon 2", "color")}
    ${input("theme.text", "texto", "color")}
    ${input("theme.serif", "fonte serif")}
    ${input("theme.mono", "fonte mono")}
    ${input("theme.sans", "fonte sans")}
    ${checkbox("theme.rain", "chuva digital")}
    ${checkbox("theme.noise", "ruido/vhs")}
    ${checkbox("theme.glitch", "glitch")}
  `;
}

function textEditor() {
  return `
    ${input("artistName", "nome artistico")}
    ${input("tagline", "linha principal")}
    ${input("citySignal", "sinal do site")}
    ${textarea("phrases", "itens da home - um por linha")}
    ${textarea("about", "informacoes - uma por linha")}
    ${textarea("worldNodes", "mindmap / portais em JSON")}
    ${textarea("portalObjects", "parede de links/objetos em JSON")}
    ${input("contact.email", "email")}
    ${input("contact.instagram", "instagram")}
    ${textarea("contact.text", "texto de contato")}
  `;
}

function trackVisualEditor() {
  return data.tracks.map((track, index) => `
    <div class="editor-card">
      <h3>${escapeHtml(track.title || `musica ${index + 1}`)}</h3>
      ${input(`tracks.${index}.title`, "titulo")}
      ${input(`tracks.${index}.mood`, "tag / status")}
      ${textarea(`tracks.${index}.description`, "descricao curta")}
      ${input(`tracks.${index}.link`, "link")}
      ${imageInput(`tracks.${index}.cover`, "capa da musica")}
    </div>
  `).join("");
}

function musicEditor() {
  return `
    ${input("spotifyEmbed", "spotify embed")}
    <div class="tool-help">edite capa, titulo e link das musicas sem mexer no JSON.</div>
    ${trackVisualEditor()}
    <details class="raw-json">
      <summary>videoclipes</summary>
      ${textarea("videos", "videoclipes em JSON")}
    </details>
    <details class="raw-json">
      <summary>json avancado das musicas</summary>
      ${textarea("tracks", "musicas em JSON")}
    </details>
  `;
}

function galleryVisualEditor() {
  return data.gallery.map((item, index) => `
    <div class="editor-card">
      <h3>${escapeHtml(item.title || `foto ${index + 1}`)}</h3>
      ${input(`gallery.${index}.title`, "titulo")}
      ${textarea(`gallery.${index}.caption`, "legenda")}
      ${imageInput(`gallery.${index}.image`, "imagem / foto / frame")}
    </div>
  `).join("");
}

function hudDisplayEditor() {
  return data.mediaHubs.map((hub, hubIndex) => `
    <div class="editor-card display-editor">
      <h3>${escapeHtml(hub.title || hub.type || `display ${hubIndex + 1}`)}</h3>
      ${input(`mediaHubs.${hubIndex}.title`, "nome da janela")}
      ${input(`mediaHubs.${hubIndex}.type`, "categoria")}
      ${input(`mediaHubs.${hubIndex}.note`, "nota curta")}
      ${input(`mediaHubs.${hubIndex}.link`, "link principal")}
      <div class="display-items">
        ${(hub.items || []).map((item, itemIndex) => `
          <div class="mini-editor-card">
            ${imageInput(`mediaHubs.${hubIndex}.items.${itemIndex}.image`, "imagem do display")}
            ${input(`mediaHubs.${hubIndex}.items.${itemIndex}.title`, "titulo")}
            ${input(`mediaHubs.${hubIndex}.items.${itemIndex}.label`, "label")}
            ${input(`mediaHubs.${hubIndex}.items.${itemIndex}.link`, "link")}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function galleryEditor() {
  return `
    <div class="tool-help">troque fotos, frames, capas e imagens que aparecem nos displays soltos da HUD.</div>
    <h3 class="editor-section-title">fotos / galeria</h3>
    ${galleryVisualEditor()}
    <h3 class="editor-section-title">display da HUD</h3>
    ${hudDisplayEditor()}
    <details class="raw-json">
      <summary>json avancado da galeria</summary>
      ${textarea("gallery", "galeria em JSON")}
    </details>
    <details class="raw-json">
      <summary>json avancado dos displays</summary>
      ${textarea("mediaHubs", "hud youtube/spotify/instagram em JSON")}
    </details>
  `;
}

function blocksEditor() {
  return textarea("thoughts", "ideias/blocos em JSON");
}

function toolsEditor() {
  return `
    <div class="tool-help">controles rapidos da catedral alienigena. muda na hora.</div>
    <div class="preset-grid">
      ${presetButton("cathedral", "Catedral Alien")}
      ${presetButton("thermalMonitor", "Visao Tática")}
      ${presetButton("archive", "Arquivo Militar")}
      ${presetButton("alienNight", "Noite Alien")}
      ${presetButton("lowMotion", "Modo Leve")}
      ${presetButton("controlledChaos", "Caos Técnico")}
    </div>
    ${checkbox("effects.obscureUpcoming", "ofuscar proximos lancamentos")}
    ${checkbox("effects.mediaFilters", "blur/filtro sujo nas imagens")}
    ${checkbox("effects.bloodLayer", "respingos de sangue")}
    ${checkbox("effects.gridLayer", "grade por cima do fundo")}
    ${checkbox("effects.brutalType", "fonte brutal/gotica")}
    ${checkbox("effects.performanceMode", "modo performance / menos movimento")}
    ${range("effects.chaos", "intensidade do caos visual", 0, 100)}
    ${range("effects.rainIntensity", "chuva cinematografica", 0, 100)}
    ${range("effects.glitchIntensity", "glitch de vitral", 0, 100)}
    ${range("effects.parallaxDepth", "profundidade/parallax", 0, 100)}
    ${range("effects.scrollDepth", "profundidade do scroll", 0, 100)}
    ${range("effects.greenLight", "luz verde da catedral", 0, 100)}
    ${range("effects.glyphDensity", "glyphs/particulas", 0, 100)}
    ${range("effects.cursorLight", "forca da luz do cursor", 0, 100)}
    ${range("effects.cathedralBlur", "blur da catedral", 0, 60)}
    ${input("effects.wallImage", "imagem de parede")}
    ${range("effects.wallImageOpacity", "forca da parede", 0, 100)}
    ${checkbox("effects.wallMotion", "fundo rolando eternamente")}
    ${range("effects.wallSpeed", "velocidade do fundo", 0, 100)}
    ${checkbox("effects.alienShips", "naves alienigenas")}
  `;
}

function presetButton(name, label) {
  return `<button class="preset-button" data-preset="${name}" type="button">${label}</button>`;
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function checkbox(path, label) {
  return `<label class="field"><span>${label}</span><input data-path="${path}" type="checkbox" ${getPath(path) ? "checked" : ""}></label>`;
}

function getPath(path) {
  const value = path.split(".").reduce((obj, key) => obj[key], data);
  return Array.isArray(value) || typeof value === "object" ? JSON.stringify(value, null, 2) : value;
}

function setPath(path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((obj, key) => obj[key], data);
  if (["phrases", "about"].includes(path)) {
    target[last] = value.split("\n").map((line) => line.trim()).filter(Boolean);
  } else if (["tracks", "videos", "gallery", "thoughts", "worldNodes", "portalObjects", "mediaHubs"].includes(path)) {
    target[last] = JSON.parse(value);
  } else if ([
    "effects.chaos",
    "effects.wallImageOpacity",
    "effects.wallSpeed",
    "effects.rainIntensity",
    "effects.glitchIntensity",
    "effects.parallaxDepth",
    "effects.greenLight",
    "effects.glyphDensity",
    "effects.cursorLight",
    "effects.cathedralBlur",
    "effects.scrollDepth"
  ].includes(path)) {
    target[last] = Number(value);
  } else {
    target[last] = value;
  }
}

function bindEditor() {
  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      applyAnimationPreset(button.dataset.preset);
      saveData();
      renderSite();
      renderEditor();
      showSaveStatus("preset aplicado");
    });
  });

  document.querySelectorAll("[data-path]").forEach((field) => {
    field.addEventListener("input", () => {
      try {
        const preview = field.closest(".image-edit-row")?.querySelector("img");
        if (preview) preview.src = field.value || "./assets/koln-cathedral-bg.svg";
        setPath(field.dataset.path, field.type === "checkbox" ? field.checked : field.value);
        saveData();
        renderSite();
        showSaveStatus("pre-salvo");
      } catch {
        field.style.borderColor = "#72fff2";
        showSaveStatus("erro no campo");
      }
    });
  });
}

function applyAnimationPreset(name) {
  const presets = {
    cathedral: {
      chaos: 58,
      rainIntensity: 48,
      glitchIntensity: 28,
      parallaxDepth: 64,
      scrollDepth: 58,
      greenLight: 84,
      glyphDensity: 60,
      cursorLight: 70,
      cathedralBlur: 14,
      wallImageOpacity: 92,
      wallSpeed: 34,
      wallMotion: true,
      alienShips: true,
      performanceMode: false
    },
    archive: {
      chaos: 38,
      rainIntensity: 22,
      glitchIntensity: 18,
      parallaxDepth: 32,
      scrollDepth: 28,
      greenLight: 44,
      glyphDensity: 36,
      cursorLight: 38,
      cathedralBlur: 22,
      wallImageOpacity: 54,
      wallSpeed: 22,
      wallMotion: false,
      alienShips: false,
      performanceMode: false
    },
    thermalMonitor: {
      chaos: 70,
      rainIntensity: 34,
      glitchIntensity: 64,
      parallaxDepth: 54,
      scrollDepth: 62,
      greenLight: 96,
      glyphDensity: 88,
      cursorLight: 76,
      cathedralBlur: 8,
      wallImageOpacity: 82,
      wallSpeed: 48,
      wallMotion: true,
      alienShips: true,
      performanceMode: false
    },
    alienNight: {
      chaos: 74,
      rainIntensity: 62,
      glitchIntensity: 46,
      parallaxDepth: 74,
      scrollDepth: 68,
      greenLight: 100,
      glyphDensity: 76,
      cursorLight: 88,
      cathedralBlur: 10,
      wallImageOpacity: 94,
      wallSpeed: 62,
      wallMotion: true,
      alienShips: true,
      performanceMode: false
    },
    lowMotion: {
      chaos: 28,
      rainIntensity: 12,
      glitchIntensity: 8,
      parallaxDepth: 12,
      scrollDepth: 8,
      greenLight: 46,
      glyphDensity: 18,
      cursorLight: 24,
      cathedralBlur: 20,
      wallImageOpacity: 62,
      wallSpeed: 8,
      wallMotion: false,
      alienShips: false,
      performanceMode: true
    },
    controlledChaos: {
      chaos: 82,
      rainIntensity: 70,
      glitchIntensity: 58,
      parallaxDepth: 68,
      scrollDepth: 52,
      greenLight: 88,
      glyphDensity: 84,
      cursorLight: 78,
      cathedralBlur: 12,
      wallImageOpacity: 88,
      wallSpeed: 72,
      wallMotion: true,
      alienShips: true,
      performanceMode: false
    }
  };
  data.effects = { ...data.effects, ...(presets[name] || presets.cathedral) };
}

function setupAdmin() {
  const panel = document.getElementById("yx-admin-777");
  const isAdminRoute = location.hash === "#yx-admin-777" || /\/admin\/?$/.test(location.pathname);
  panel.hidden = !isAdminRoute;
  document.body.classList.toggle("admin-route", isAdminRoute);
  if (!isAdminRoute) return;

  setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  if (sessionStorage.getItem(adminKey) === "true") unlockAdmin();

  document.getElementById("loginBtn").addEventListener("click", async () => {
    const password = document.getElementById("adminPass").value;
    const remoteOk = await loginRemoteAdmin(password);
    const typedHash = await sha256Hex(password);
    if (remoteOk || typedHash === adminPassHash) {
      sessionStorage.setItem(adminKey, "true");
      unlockAdmin();
      showSaveStatus(apiBase ? "admin conectado ao backend" : "admin local");
    } else {
      showSaveStatus("senha incorreta");
    }
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      renderEditor();
    });
  });

  document.getElementById("saveBtn").addEventListener("click", async () => {
    await saveDataRemote("salvo");
    renderSite();
    renderEditor();
  });

  document.getElementById("exportBtn").addEventListener("click", () => {
    document.getElementById("jsonBox").value = JSON.stringify(data, null, 2);
    showSaveStatus("json exportado");
  });

  document.getElementById("copyJsonBtn").addEventListener("click", async () => {
    const value = JSON.stringify(data, null, 2);
    document.getElementById("jsonBox").value = value;
    await navigator.clipboard.writeText(value);
    showSaveStatus("json copiado");
  });

  document.getElementById("downloadJsonBtn").addEventListener("click", () => {
    const value = JSON.stringify(data, null, 2);
    document.getElementById("jsonBox").value = value;
    const blob = new Blob([value], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "yung-garcia-archive-design.json";
    link.click();
    URL.revokeObjectURL(url);
    showSaveStatus("backup baixado");
  });

  document.getElementById("importBtn").addEventListener("click", async () => {
    data = JSON.parse(document.getElementById("jsonBox").value);
    await saveDataRemote("importado");
    renderSite();
    renderEditor();
  });

  document.getElementById("resetBtn").addEventListener("click", async () => {
    data = structuredClone(initialData);
    await saveDataRemote("reset salvo");
    renderSite();
    renderEditor();
  });
}

function unlockAdmin() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("adminTools").classList.remove("hidden");
  renderEditor();
}

function shouldUseLowPowerMode() {
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const smallScreen = innerWidth < 720;
  return !!data.effects.performanceMode || memory <= 4 || cores <= 4 || smallScreen;
}

function setupRain() {
  const canvas = document.getElementById("rain");
  const ctx = canvas.getContext("2d");
  const drops = [];
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)");
  let visible = true;
  let lastFrame = 0;
  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, data.effects.performanceMode ? 1 : 1.5);
    canvas.width = Math.floor(innerWidth * ratio);
    canvas.height = Math.floor(innerHeight * ratio);
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    drops.length = 0;
    const count = innerWidth < 760 ? 42 : 72;
    for (let i = 0; i < count; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.28 + Math.random() * 2.2,
        length: 40 + Math.random() * 150,
        drift: -0.35 + Math.random() * 0.7,
        alpha: 0.1 + Math.random() * 0.32
      });
    }
  }
  function frame(now = 0) {
    if (!visible) {
      requestAnimationFrame(frame);
      return;
    }
    if (now - lastFrame < 32) {
      requestAnimationFrame(frame);
      return;
    }
    lastFrame = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const reduceMotion = prefersReduced.matches || data.effects.performanceMode;
    const intensity = data.theme.rain && !reduceMotion ? Math.min(0.75, (data.effects.rainIntensity ?? 36) / 100) : 0;
    if (intensity > 0) {
      const activeDrops = Math.max(8, Math.floor(drops.length * intensity));
      ctx.strokeStyle = data.theme.accent2 || "#b8ffd2";
      ctx.lineWidth = Math.max(1, Math.min(2, devicePixelRatio || 1) * (0.45 + intensity));
      drops.slice(0, activeDrops).forEach((drop) => {
        ctx.globalAlpha = drop.alpha * intensity;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.drift * drop.length, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed * Math.min(devicePixelRatio || 1, 1.5) * (0.55 + intensity);
        drop.x += drop.drift * Math.min(devicePixelRatio || 1, 1.5);
        if (drop.y > canvas.height + drop.length) drop.y = -drop.length;
        if (drop.x < -drop.length) drop.x = canvas.width + drop.length;
        if (drop.x > canvas.width + drop.length) drop.x = -drop.length;
      });
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    visible = !document.hidden;
  });
  resize();
  frame();
}

function setupAudio() {
  document.getElementById("audioToggle").addEventListener("click", () => {
    if (audioContext) {
      audioContext.close();
      audioContext = null;
      return;
    }
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    audioContext = new AudioCtor();
    const osc = audioContext.createOscillator();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    osc.frequency.value = 74;
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 18;
    filter.type = "lowpass";
    filter.frequency.value = 360;
    gain.gain.value = 0.025;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    lfo.start();
  });
}

function setupCursorLight() {
  const light = document.getElementById("cursorLight");
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)");
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  addEventListener("mousemove", (event) => {
    tx = event.clientX - 128;
    ty = event.clientY - 128;
  });
  function frame() {
    if (document.hidden) {
      requestAnimationFrame(frame);
      return;
    }
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    const enabled = !prefersReduced.matches && !data.effects.performanceMode;
    light.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${enabled ? 1 : 0.72})`;
    requestAnimationFrame(frame);
  }
  frame();
}

function setupParallax3D() {
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  const root = document.documentElement;
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)");
  let lastWrite = 0;
  let lastValues = "";

  addEventListener("mousemove", (event) => {
    tx = (event.clientX / innerWidth - 0.5) * 2;
    ty = (event.clientY / innerHeight - 0.5) * 2;
  });

  addEventListener("deviceorientation", (event) => {
    if (typeof event.gamma !== "number" || typeof event.beta !== "number") return;
    tx = Math.max(-1, Math.min(1, event.gamma / 28));
    ty = Math.max(-1, Math.min(1, (event.beta - 45) / 38));
  });

  function frame(now = 0) {
    if (document.hidden) {
      requestAnimationFrame(frame);
      return;
    }
    const reduceMotion = prefersReduced.matches || data.effects.performanceMode;
    const depth = reduceMotion ? 0 : (data.effects.parallaxDepth ?? 42) / 100;
    const scrollDepth = reduceMotion ? 0 : (data.effects.scrollDepth ?? 38) / 100;
    x += (tx - x) * 0.055;
    y += (ty - y) * 0.055;
    if (now - lastWrite < 32) {
      requestAnimationFrame(frame);
      return;
    }
    lastWrite = now;
    const compactValues = `${x.toFixed(3)},${y.toFixed(3)},${scrollY}`;
    if (compactValues === lastValues) {
      requestAnimationFrame(frame);
      return;
    }
    lastValues = compactValues;
    root.style.setProperty("--mx", (x * depth).toFixed(3));
    root.style.setProperty("--my", (y * depth).toFixed(3));
    const scrollRatio = (scrollY / Math.max(1, document.body.scrollHeight - innerHeight)) * scrollDepth;
    root.style.setProperty("--sy", scrollRatio.toFixed(3));
    root.style.setProperty("--mx-10", `${(x * depth * 10).toFixed(2)}px`);
    root.style.setProperty("--mx-16", `${(x * depth * 16).toFixed(2)}px`);
    root.style.setProperty("--mx-20", `${(x * depth * 20).toFixed(2)}px`);
    root.style.setProperty("--mx-22", `${(x * depth * 22).toFixed(2)}px`);
    root.style.setProperty("--mx-28", `${(x * depth * 28).toFixed(2)}px`);
    root.style.setProperty("--mx-n10", `${(x * depth * -10).toFixed(2)}px`);
    root.style.setProperty("--mx-n20", `${(x * depth * -20).toFixed(2)}px`);
    root.style.setProperty("--mx-n28", `${(x * depth * -28).toFixed(2)}px`);
    root.style.setProperty("--my-8", `${(y * depth * 8).toFixed(2)}px`);
    root.style.setProperty("--my-10", `${(y * depth * 10).toFixed(2)}px`);
    root.style.setProperty("--my-12", `${(y * depth * 12).toFixed(2)}px`);
    root.style.setProperty("--my-n8", `${(y * depth * -8).toFixed(2)}px`);
    root.style.setProperty("--my-n12", `${(y * depth * -12).toFixed(2)}px`);
    root.style.setProperty("--sy-10", `${(scrollRatio * -10).toFixed(2)}px`);
    root.style.setProperty("--sy-18p", `${(scrollRatio * -18).toFixed(2)}%`);
    root.style.setProperty("--sy-34", `${(scrollRatio * -34).toFixed(2)}px`);
    root.style.setProperty("--sy-60", `${(scrollRatio * -60).toFixed(2)}px`);
    root.style.setProperty("--sy-70", `${(scrollRatio * -70).toFixed(2)}px`);
    root.style.setProperty("--sy-80", `${(scrollRatio * -80).toFixed(2)}px`);
    root.style.setProperty("--sy-96", `${(scrollRatio * -96).toFixed(2)}px`);
    requestAnimationFrame(frame);
  }

  frame();
}

renderSite();
loadRemoteData();
setupRain();
setupAudio();
setupCursorLight();
setupParallax3D();
setupAdmin();
setTimeout(() => document.getElementById("boot").classList.add("done"), 1300);
