---
title: Como publicar um texto neste blog
date: 2026-10-09
summary: Um texto de exemplo que mostra o formato dos posts. Pode apagar quando publicar o primeiro de verdade.
category: Bastidores
lang: pt
---

Este é um **texto de exemplo**. Apague este arquivo quando publicar sua primeira crônica.

## Como criar um novo texto

1. Crie um arquivo `.md` na pasta `src/content/posts/`. O nome do arquivo vira o endereço do texto, por exemplo `o-futuro-do-trabalho.md` vira `/blog/o-futuro-do-trabalho`.
2. Comece o arquivo com o cabeçalho entre `---`, como neste exemplo: título, data, resumo, categoria e idioma (`pt` ou `en`).
3. Escreva o texto abaixo do cabeçalho usando Markdown.
4. Faça commit e push — a Vercel publica sozinha.

## O que dá para usar no texto

Parágrafos normais, *itálico*, **negrito**, [links](https://vercel.com), listas e citações:

> A melhor forma de prever o futuro é criá-lo.

Também dá para colocar subtítulos com `##` e imagens com `![descrição](/imagem.jpg)`, guardando a imagem na pasta `public/`.
