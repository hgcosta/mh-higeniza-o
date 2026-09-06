# MH · Higienização de Estofados — site em Next.js

Site institucional/catálogo da MH, portado do protótipo HTML para **Next.js 15 (App Router) + React 19 + TypeScript**.

## Rodar localmente

\`\`\`bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
\`\`\`

Sem dependências além de next/react — nada de Tailwind ou UI kit. O estilo vive em \`app/globals.css\` com tokens CSS.

## Estrutura

\`\`\`
app/
  layout.tsx        fontes (Archivo + Instrument Sans via next/font), metadata
  page.tsx          composição da home
  globals.css       tokens + todas as classes de estilo
components/
  Header.tsx        topo fixo, nav ancorada, ícones sociais, CTA
  Hero.tsx          [client] vídeo com overlay de play
  Servicos.tsx      6 cards (5 serviços + card destaque de impermeabilização)
  AntesDepois.tsx   [client] slider de comparação por arraste + grade de 8 pares
  Depoimentos.tsx   3 depoimentos + nota média
  Processo.tsx      4 passos
  Orcamento.tsx     CTA + cartão de contato
  Rodape.tsx        rodapé com chips sociais
  BotaoWhatsApp.tsx FAB fixo
  Icons.tsx         SVGs WhatsApp / Instagram
lib/site.ts         TODO o conteúdo (serviços, pares antes/depois, depoimentos, etapas, contato)
public/img          fotos reais dos atendimentos
public/video        hero.mp4
\`\`\`

## O que trocar antes de publicar

Tudo em \`lib/site.ts\`:

- \`contato.whatsapp\` — hoje \`5500000000000\` (formato DDI+DDD+número, sem símbolos)
- \`contato.telefone\`, \`contato.email\`, \`contato.instagram\`
- preços de cada item de \`servicos\`
- \`depoimentos[].avatar\` — os três avatares ainda são imagens genéricas
- \`public/img/video-poster.png\` — poster do vídeo, ainda gerado (textura), não foto real

## Tokens de design

| Token | Valor | Uso |
| --- | --- | --- |
| \`--azul-900\` | #062B5C | fundo escuro, títulos |
| \`--azul-700\` | #073A85 | fim dos gradientes |
| \`--azul-500\` | #0B4CA8 | header, links, gradiente hero |
| \`--azul-100\` | #8CCBF2 | acento, botões primários |
| \`--tinta\` | #0B2545 | texto corpo |
| \`--tinta-suave\` | #5C7699 | texto secundário |
| \`--fundo\` | #EEF3FA | fundo da página |
| \`--borda\` | #DCE7F5 | bordas de card |

Tipografia: **Archivo** 600/700/800 (títulos, números, sigla MH) e **Instrument Sans** 400–700 (corpo). Ambas via \`next/font/google\`, expostas como \`--font-archivo\` / \`--font-instrument\`.

Escala de títulos: h1 hero 60px / -0.04em / uppercase; h2 seção 40px / -0.035em; h3 card 21px; corpo 15–18px.

Raios: 999px (pílulas), 12px (imagens de par), 16–18px (cards), 20–24px (blocos grandes).

## Comportamentos

- **Hero**: \`<video>\` com poster; overlay de play cobre o vídeo enquanto pausado, ao clicar remove mute e dá play, e os \`controls\` nativos aparecem só durante a reprodução.
- **Antes & Depois**: o slider usa \`clipPath: inset(...)\` sobre a camada "antes"; pointer events fazem o arraste, setas ←/→ movem 4% (acessibilidade). Posição inicial 52%.
- **Cards de serviço**: hover eleva a sombra e tinge a borda de \`--azul-100\`.
- **Responsivo**: 1060px esconde os ícones sociais do header; 1000px empilha hero e painel de orçamento e reduz o slider; 900px esconde a tagline; 600px reduz paddings e escala de títulos.
- **Preços**: \`<Servicos mostrarPrecos />\` — passe \`false\` para esconder a linha de preço em todos os cards.

## Notas de fidelidade

Alta fidelidade: cores, tipografia, espaçamentos e interações vêm 1:1 do protótipo aprovado. As fotos em \`public/img\` são reais do cliente (8 pares antes/depois + imagens dos serviços) — só avatares e poster do vídeo continuam como placeholder.
