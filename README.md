# meu-web-site

Site pessoal de Dayse Alexia — cartão de visita + blog. React + TypeScript + Vite, CSS puro (CSS Modules).

## Rodar localmente

```bash
npm install
npm run dev
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, título, bio, e-mail, LinkedIn, GitHub | `src/data/profile.ts` |
| Outros sites / portfólio | `sites` em `src/data/profile.ts` |
| Textos da interface (PT/EN) | `src/i18n.tsx` |
| Cores e fontes | `src/styles/global.css` |
| Foto e currículo | `public/foto.jpg`, `public/Dayse_Alexia_CV_PT.pdf` |
| Endereço do site (prévia no WhatsApp/LinkedIn) | `.env` → `VITE_SITE_URL` |

## Publicar um texto no blog

Crie um arquivo `.md` em `src/content/posts/` — o nome do arquivo vira o endereço (`/blog/nome-do-arquivo`):

```md
---
title: Título do texto
date: 2026-10-09
summary: Uma frase de resumo.
category: Negócios
lang: pt
---

Texto em Markdown...
```

## Deploy na Vercel

Importe o repositório em vercel.com — o framework Vite é detectado automaticamente. Depois do primeiro deploy, atualize `VITE_SITE_URL` no `.env` com o domínio final.
