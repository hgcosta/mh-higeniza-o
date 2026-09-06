# CLAUDE.md

Projeto: site catálogo da **MH · Higienização de Estofados** (Next.js 15 App Router, React 19, TypeScript, CSS puro).

## Regras deste repo

- Sem Tailwind, sem CSS-in-JS, sem UI kit. Estilo em \`app/globals.css\` usando as variáveis \`--azul-*\`, \`--tinta*\`, \`--fundo\`, \`--borda\`. Nunca introduzir cor nova fora dessa paleta.
- Fontes só via \`next/font/google\` no \`app/layout.tsx\`: Archivo (títulos) e Instrument Sans (corpo).
- **Todo conteúdo textual e de dados vive em \`lib/site.ts\`** — não hardcodar copy nos componentes novos.
- Componentes são Server Components por padrão; \`"use client"\` só onde há estado (\`Hero\`, \`AntesDepois\`).
- Idioma da UI e dos nomes de dados: português (pt-BR).
- Imagens em \`public/img\`, vídeo em \`public/video\`.

## Pendências conhecidas

1. Número de WhatsApp, telefone, e-mail e Instagram são exemplos (\`lib/site.ts\`).
2. Avatares dos depoimentos e \`video-poster.png\` são placeholders.
3. Não há formulário de contato — os CTAs levam ao WhatsApp/âncoras.

## Comandos

\`\`\`bash
npm install
npm run dev
npm run build
\`\`\`
