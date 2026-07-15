# Yung Garcia Archive

Site de Yung Garcia / akayunggarcia.

O frontend continua rodando sem npm, sem build e sem baixar dependencias.
Agora tambem existe um backend real preparado em `backend/` para salvar o admin globalmente.

## Abrir localmente

Abra `index.html` no navegador.

## Publicar no GitHub Pages

Envie todos os arquivos desta pasta para um repositorio do GitHub:

- `index.html`
- `styles.css`
- `tactical.css`
- `app.js`
- `.nojekyll`
- `assets/`
- `videoclipes/`

Depois ative em:

`Settings > Pages > Deploy from a branch > main > /root`

O link ficara parecido com:

`https://SEU-USUARIO.github.io/yung-garcia-archive/`

## Admin

O painel abre por:

`/admin/`

Sem backend configurado, as edicoes ficam salvas no navegador.
Com backend configurado em `config.js`, o botao `salvar` publica o design para todos os visitantes.

## Backend real

A API esta em `backend/`.

Ela inclui:

- login admin com senha hash;
- token JWT;
- MongoDB para salvar o design;
- endpoint publico para carregar o site;
- endpoint protegido para salvar alteracoes;
- upload protegido de imagens/videos.

Leia `backend/README.md` para publicar em Render, Railway, Fly.io ou VPS.
