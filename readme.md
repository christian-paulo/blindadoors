# BlindaDoors

Site institucional da BlindaDoors — fabricante português de portas blindadas sob medida (São João da Madeira).

Stack: **Next.js 15 (App Router) + React 19 + Tailwind CSS 3 + TypeScript**.

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

---

## Deploy na Vercel

1. **Push para um repositório Git** (GitHub, GitLab ou Bitbucket).
2. No dashboard da Vercel: **Add New → Project → Import** e seleciona o repositório.
3. A Vercel detecta Next.js automaticamente. Não há env vars necessárias para já.
4. **Deploy** — fica disponível num URL `*.vercel.app`.
5. **Domínio próprio**: Settings → Domains → adicionar `blindadoors.pt` (a Vercel emite SSL automaticamente).

Ou via CLI:

```bash
npm install -g vercel
vercel              # primeira deploy: liga ao projeto
vercel --prod       # promove para produção
```

---

## Estrutura

```
app/
  layout.tsx        # fonts, metadata, JSON-LD
  page.tsx          # landing page (server component)
  globals.css       # design system completo
components/
  Nav.tsx           # client — toggle do mobile menu
  FAQList.tsx       # client — accordion
public/
  (vazio — colocar aqui as fotos)
tailwind.config.ts  # tokens (cores, fonts, breakpoints, animations)
```

---

## Substituir placeholders por fotografias reais

Os placeholders são gradientes com label visível ("FOTO — substituir aqui"). Para cada zona:

1. **Adicionar a imagem** a `public/img/<nome>.jpg`
2. **Editar `app/globals.css`** — substituir o `background:` do seletor pelo `background-image: url(...)` correspondente
3. **Esconder a label** — adicionar `display: none` no pseudo-elemento `::before` ou `::after`

### Tabela de mapeamentos

| Seletor CSS              | Ficheiro sugerido                  | Aspect ratio |
|--------------------------|------------------------------------|--------------|
| `.hero-photo`            | `/img/hero-porta.jpg`              | 9:16 / 16:9  |
| `.medida-photo`          | `/img/fabrica-mao.jpg`             | 4:5          |
| `.alt-img.style-1`       | `/img/estrutura-aco.jpg`           | 5:4          |
| `.alt-img.style-2`       | `/img/fechadura-7pontos.jpg`       | 5:4          |
| `.alt-img.style-3`       | `/img/isolamento.jpg`              | 5:4          |
| `.modelo.classic .modelo-img`   | `/img/modelo-classic.jpg`   | 3:4          |
| `.modelo.urban .modelo-img`     | `/img/modelo-urban.jpg`     | 3:4          |
| `.modelo.signature .modelo-img` | `/img/modelo-signature.jpg` | 3:4          |
| `.processo-photo`        | `/img/processo-fabrica.jpg`        | 21:9         |

### Exemplo (hero):

```css
.hero-photo {
  background-image: url('/img/hero-porta.jpg');
  background-size: cover;
  background-position: center;
}
.hero-photo::after { display: none; }   /* esconde a label */
```

Para conversão futura para `next/image` (recomendado): trocar a `<div className="hero-photo">` por `<Image fill src="/img/hero-porta.jpg" alt="..." priority />` dentro de um wrapper com `position: relative`.

---

## Dados a substituir antes do lançamento

Centralizados nas constantes do topo de [app/page.tsx](./app/page.tsx) e em [app/layout.tsx](./app/layout.tsx):

- [ ] `PHONE` e `PHONE_HREF` — número real (`+351 ...`)
- [ ] `EMAIL` — email institucional
- [ ] `SITE_URL` em `app/layout.tsx` — domínio final
- [ ] Schema.org `localBusinessSchema` — morada exacta, telefone, horário
- [ ] Estatísticas hero (anos, portas instaladas) — confirmar
- [ ] Testemunhos — substituir os exemplo
- [ ] Listagem de cidades por região (`COBERTURA`)
- [ ] `public/og-image.jpg` — imagem 1200×630 para preview em redes sociais
- [ ] `public/favicon.ico` — favicon do site

---

## Notas de design

- **Tipografia**: Fraunces (display, italianizado) + Manrope (sans-serif), via `next/font/google`.
- **Paleta**: bege quente, dourado bronze como acento (`--accent: #8b6b3d`).
- **Breakpoints**: 720px (tablet), 1024px (desktop).
- **Animações**: hero `slideUp` em sequência, marquee infinito, hover micro-interactions.
- **Acessibilidade**: tap targets, `aria-label` no menu mobile, `aria-expanded` no toggle.
