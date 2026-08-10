# Shikshya Tech Hub — Website

The production frontend for **Shikshya Tech Hub**, a practical technology education platform for
students, schools and colleges.

Built as a **fully static site** — no backend, no database, no authentication, no API. Everything
that looks dynamic (course search, category filters, the FAQ accordion, the mobile menu, contact
form validation) runs in the browser from local data.

- **Live pages:** Home, Courses, Course Detail, Workshops, Tutors, Schools & Institutions, Contact
- **Deploys free** to GitHub Pages from GitHub Actions

---

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Commands](#commands)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Editing content](#editing-content)
  - [Courses](#courses)
  - [Workshops](#workshops)
  - [Tutors](#tutors)
  - [Contact details](#contact-details)
  - [Socials and navigation](#socials-and-navigation)
  - [Testimonials](#testimonials)
  - [Using your real logo file](#using-your-real-logo-file)
- [The contact form](#the-contact-form)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [1. Point GitHub Pages at Actions](#1-point-github-pages-at-actions)
  - [2. The custom domain](#2-the-custom-domain)
  - [3. Push](#3-push)
- [SEO checklist](#seo-checklist)
- [Accessibility](#accessibility)
- [Content rules](#content-rules)

---

## Tech stack

| Layer      | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | Next.js 15 (App Router), `output: 'export'` — static HTML |
| Language   | TypeScript (strict)                                       |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens)               |
| UI         | React 19                                                   |
| Icons      | `lucide-react` (brand glyphs hand-drawn in `SocialIcon`)   |
| Fonts      | Poppins (display), Inter (body), JetBrains Mono (labels)   |
| Hosting    | GitHub Pages (static), deployed by GitHub Actions          |
| DNS        | Cloudflare (DNS + proxy only — no Cloudflare hosting)      |

There is deliberately **no** runtime dependency on Node, so the output is a plain folder of HTML,
CSS, JS and images that any static host can serve.

---

## Getting started

Requires **Node.js 20.9+** (Node 20 LTS or newer).

```bash
git clone <your-repo-url>


npm run dev
```

Open <http://localhost:3000>.

---

## Commands

| Command             | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload                                 |
| `npm run build`     | Production build → static site in `./out`                            |
| `npm start`         | Serve the built `./out` folder locally (preview the real output)     |
| `npm run preview`   | `build` then `start`                                                 |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)                  |
| `npm run typecheck` | `tsc --noEmit`                                                       |

> `npm run build` writes to `out/`. That folder is what gets published to GitHub Pages; it is
> git-ignored and built fresh by CI on every push.

---

## Project structure

```
.
├── .github/workflows/pages.yml    # GitHub Pages build + deployment
├── CNAME                          # Custom domain (repository root copy)
├── public/                        # Static assets served from /
│   ├── favicon.svg, favicon.ico, apple-touch-icon.png
│   ├── icon-192.png, icon-512.png, site.webmanifest
│   ├── og.png                     # OpenGraph / Twitter share image
│   ├── CNAME                      # Custom domain — copied into out/ by the build
│   └── _headers                   # Inert on GitHub Pages (Cloudflare Pages format)
├── src/
│   ├── app/                       # Routes (App Router)
│   │   ├── layout.tsx             # Fonts, global metadata, navbar + footer
│   │   ├── page.tsx               # Home
│   │   ├── courses/page.tsx       # Course listing (search + filters)
│   │   ├── courses/[slug]/page.tsx# Course detail (one page per course)
│   │   ├── workshops/page.tsx
│   │   ├── tutors/page.tsx
│   │   ├── schools/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx          # 404
│   │   ├── robots.ts              # → /robots.txt
│   │   ├── sitemap.ts             # → /sitemap.xml
│   │   └── globals.css            # Design tokens + base styles
│   │
│   ├── components/
│   │   ├── layout/                # Navbar, MobileMenu, Footer
│   │   ├── brand/                 # Logo, SocialIcon
│   │   ├── ui/                    # Button, Badge, Chip, Eyebrow, SectionHeading,
│   │   │                          # IconTile, Breadcrumb, Accordion, Reveal,
│   │   │                          # Container, Section, PageHero
│   │   ├── courses/               # CourseCard, CourseGrid, CourseFilter,
│   │   │                          # CourseExplorer, CourseDetail
│   │   ├── workshops/             # WorkshopCard, CustomWorkshopCard
│   │   ├── tutors/                # TutorCard, TutorProfile
│   │   ├── sections/              # Hero, Stats, About, CoursesPreview, WhyUs,
│   │   │                          # HowItWorks, TutorsPreview, SchoolsCTA,
│   │   │                          # Testimonials, FAQ, ContactSection
│   │   └── forms/                 # ContactForm
│   │
│   ├── data/                      # ← ALL EDITABLE CONTENT LIVES HERE
│   │   ├── courses.ts             # The nine courses + detail content
│   │   ├── workshops.ts           # Workshop topics
│   │   ├── tutors.ts              # Tutor profiles
│   │   ├── content.ts             # About, Why Us, How It Works, schools, FAQ
│   │   └── site.ts                # Site config, nav, contact details, footer
│   │
│   └── lib/                       # icons registry, `cn` helper
├── next.config.mjs                # static export config
└── tsconfig.json
```

---

## Design system

All brand tokens live in one place: [`src/app/globals.css`](src/app/globals.css), inside the
Tailwind v4 `@theme` block. Change a value there and it updates everywhere.

**Colours**

| Token      | Hex       | Used for                  |     | Token      | Hex       | Used for              |
| ---------- | --------- | ------------------------- | --- | ---------- | --------- | --------------------- |
| Ink        | `#0B1533` | primary text              |     | Green      | `#10C98B` | CTA accent            |
| Navy       | `#0A1A3F` | dark sections             |     | Green Dark | `#0BA976` | CTA gradient end      |
| Navy2      | `#081231` | navy gradient end         |     | Yellow     | `#FFCE3A` | badges / highlights   |
| Electric   | `#1E6BFF` | primary blue              |     | Mist       | `#F3F7FD` | page background       |
| Electric2  | `#43A0FF` | gradient top              |     | Mist2      | `#EAF1FB` | chips / tints         |
| Royal      | `#0052D4` | deep brand blue           |     | Line       | `#E4ECF7` | hairline borders      |
| Purple     | `#7C4DFF` | secondary                 |     | Muted      | `#5D6E8C` | secondary text        |
| Cyan       | `#25C2E6` | secondary                 |     | OnDark     | `#E7EEFB` | text on navy          |
|            |           |                           |     | OnMute     | `#96A8CE` | secondary on navy     |

Used as normal Tailwind utilities: `text-ink`, `bg-mist`, `border-line`, `text-onmute`, …

**Gradients** are CSS classes so they stay identical everywhere:
`g-blue`, `g-brand`, `g-cyan`, `g-green`, `g-navy`, `g-mist`, plus `g-text` / `g-text-cyan` for
gradient headlines and `g-glow` / `g-glow-purple` for ambient blobs.

**Type scale** — fluid classes that clamp between mobile and the 1440 desktop reference:
`t-hero` (34→56px), `t-h2` (26→40px), `t-h3`, `t-card-title` (18→22px), `t-body`, `t-small`,
`t-mono` (12px uppercase, tracked).

**The signature motif.** The circuit-style underline in the logo ("TECH HUB") is reused as the
eyebrow above every section heading: a short rule + a node dot + an uppercase mono label. It is
implemented once in [`src/components/ui/Eyebrow.tsx`](src/components/ui/Eyebrow.tsx) — use
`<SectionHeading eyebrow="…" />` and you get it for free.

---

## Editing content

Almost nothing requires touching a component. Content lives in `src/data/`.

### Courses

Edit [`src/data/courses.ts`](src/data/courses.ts). Adding an object to the `courses` array is all
that is needed — the listing page, the search index, the sitemap, the footer links and a full
detail page at `/courses/<slug>/` are all generated from it.

```ts
{
  slug: 'game-development',          // becomes /courses/game-development/
  title: 'Game Development',
  category: 'Development',           // must be one of the CourseCategory values
  level: 'Beginner–Intermediate',    // Beginner | Beginner–Intermediate | Intermediate | All levels
  icon: 'code',                      // a key from src/lib/icons.ts
  summary: 'One line, shown on the card.',
  duration: '6 weeks',               // null → renders an "editable placeholder" badge
  projects: 4,                       // null → renders an "editable placeholder" badge
  certificate: 'On completion',
  overview: ['Paragraph one.', 'Paragraph two.'],
  learn: ['Bullet', 'Bullet'],       // two-column checklist
  projectList: [{ title: '…', description: '…' }],
  tools: ['Unity', 'C#'],            // rendered as chips
  outcomes: ['…'],
  faqs: [{ question: '…', answer: '…' }],
}
```

Fields set to `null` deliberately render as a labelled **editable placeholder** instead of a made-up
value. Fill them in and the placeholder disappears.

Category → accent gradient is mapped in `categoryGradient` in the same file. Filter chips come from
`courseFilters`.

### Workshops

Edit [`src/data/workshops.ts`](src/data/workshops.ts).

```ts
{
  slug: 'ai-awareness',
  title: 'AI Awareness',
  icon: 'brain',
  gradient: 'g-blue',                // g-blue | g-brand | g-cyan | g-green
  duration: null,                    // ← set e.g. '2 hours' to replace the placeholder
  description: '…',
  highlights: ['…', '…', '…'],
}
```

Durations ship as `null` on purpose — set them once your programme lengths are fixed. The
"Need a Custom Workshop?" tile is rendered separately as the eighth card and needs no data.

### Tutors

Edit [`src/data/tutors.ts`](src/data/tutors.ts).

**Bikash Kadayat** is the only real profile, and it contains only the information that was
supplied. Every other entry has `isPlaceholder: true` and renders as a clearly-marked editable card.

To publish a new tutor, replace a placeholder's fields and set `isPlaceholder: false`. Set
`linkedin` / `github` to real URLs and the dashed placeholder buttons become live links.

> Do not add years of experience, employers, awards, certifications or student numbers unless you
> can verify them — see [Content rules](#content-rules).

### Contact details

Edit [`src/data/contact.ts`](src/data/contact.ts) — the single source for the email, both phone
numbers, the address and the office hours. The contact page cards, the home page contact block and
the inquiry form's fallback links all read from it, so one edit updates every one of them.

```ts
export const contactDetails = {
  email: 'sikshyatechhub@gmail.com',
  phones: [{ display: '9765437327', href: 'tel:+9779765437327' }, …],
  location: 'Kathmandu, Bagmati Province, Nepal',
  officeHours: '7:00 AM – 6:00 PM',
};
```

Changing the email also repoints the inquiry form, since `formSubmitAction` is derived from it —
note that a new address needs its own FormSubmit activation.

### Socials and navigation

Edit [`src/data/site.ts`](src/data/site.ts).

- `siteConfig.url` — **change this to your real domain** before deploying (it drives canonical URLs,
  OpenGraph tags and the sitemap).
- `socialLinks` — set `href` to a real URL to activate each button.
- `navItems` — the navbar and mobile menu.
- `footerColumns` — the four footer link columns.
- `stats` — the strip under the hero.

### Testimonials

[`src/data/content.ts`](src/data/content.ts) → `testimonials`. They ship empty and render as
labelled skeleton placeholders. Fill in `quote`, `author` and `role` and the card switches to the
published layout automatically. **Never invent one.**

The same file holds the About pillars, Why Us features, How It Works steps, school benefits, the
partnership process and the home page FAQ.

### Using your real logo file

The site currently renders a CSS/SVG reconstruction of the wordmark. To use your original artwork:

1. Add both versions to `public/`:
   - `public/logo.png` — transparent background (for light navbars)
   - `public/logo-white.png` — white knockout (for the navy footer)
2. In [`src/components/brand/Logo.tsx`](src/components/brand/Logo.tsx), change:
   ```ts
   const LOGO_MODE: 'wordmark' | 'image' = 'image';
   ```

Every navbar, mobile menu and footer picks it up automatically.

---

## The contact form

The site is frontend-only, so the inquiry form posts straight to
[FormSubmit](https://formsubmit.co) — a plain HTML `POST` to
`https://formsubmit.co/sikshyatechhub@gmail.com`, which emails the inquiry on. No server, no API
route, no keys, nothing secret in the bundle: the endpoint is just the public address.

It is a normal form submission rather than a `fetch()` call on purpose — `_captcha` needs a real
page to draw its challenge, so an AJAX POST would lose spam protection. The browser lands on
FormSubmit's confirmation page, which is also why the app never claims delivery itself.

Fields arrive in the email as **Full Name, Email, Phone, School or Organization, Interested Course,
Message**, under the subject *New Shikshya Tech Hub Website Inquiry*.

### Activating it (once, after the first deploy)

1. Submit the form once **from the live site**.
2. FormSubmit emails an activation link to `sikshyatechhub@gmail.com` — check Spam and Promotions.
3. Open it and confirm.
4. Send one more test inquiry to verify delivery.

Nothing is forwarded until that activation is done.

### Optional: your own thank-you page

Once the real production domain is live, add a `/thank-you` route and one hidden field to the form:

```tsx
<input type="hidden" name="_next" value="https://<your-domain>/thank-you/" />
```

It must be an absolute URL on the live domain — `localhost` will not work. Without it, visitors see
FormSubmit's own confirmation page, which is a perfectly fine default.

---

## Deploying to GitHub Pages

The build produces a static `out/` folder, so hosting is free and requires no server.
GitHub Pages hosts the site; Cloudflare only provides DNS (and the optional proxy).

**Live domain:** <https://shikshyatechhub.bikashkadayat.com.np>

### 1. Point GitHub Pages at Actions

**Repository → Settings → Pages → Build and deployment → Source: _GitHub Actions_.**

This is required. With the older *Deploy from a branch* source, GitHub runs Jekyll over the
repository root and publishes the rendered `README.md` — not this Next.js site — because `out/`
is git-ignored and never committed.

No repository secret is needed. The workflow authenticates to Pages with the built-in
`GITHUB_TOKEN` via OIDC (`id-token: write`).

### 2. The custom domain

**Repository → Settings → Pages → Custom domain:**

```
shikshyatechhub.bikashkadayat.com.np
```

Tick **Enforce HTTPS** once the certificate has been issued.

The domain is also stored in two files, both containing exactly that one line with no scheme,
no trailing slash and no trailing newline:

| File          | Purpose                                                            |
| ------------- | ------------------------------------------------------------------ |
| `CNAME`       | Repository root copy                                                |
| `public/CNAME`| Copied to `out/CNAME` by `next build`, so it ships in the artifact  |

The matching Cloudflare DNS record (managed in the Cloudflare dashboard, **not** from this repo):

| Type  | Name             | Target                  |
| ----- | ---------------- | ----------------------- |
| CNAME | `shikshyatechhub`| `bikashkadayat.github.io` |

> If you change the domain, update `CNAME`, `public/CNAME`, `siteConfig.url` in
> `src/data/site.ts`, the verification step in `.github/workflows/pages.yml`, and the GitHub
> Pages custom-domain setting — all five.

### 3. Push

```bash
git add .
git commit -m "Shikshya Tech Hub website"
git push origin main
```

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) then runs on every push to `main`:
install → typecheck → lint → build → verify `CNAME` → upload artifact → deploy. You can also
trigger it manually from the **Actions** tab (`workflow_dispatch`).

### A note on `public/_headers`

That file is Cloudflare Pages syntax. GitHub Pages ignores it, so the cache and security headers
it declares are **not** applied to the live site. GitHub Pages does not support custom headers at
all; if you need them, set them as Transform Rules on the Cloudflare proxy in front of the domain.

---

## SEO checklist

Already implemented:

- Unique `<title>` and description on every page, with a `%s | Shikshya Tech Hub` template
- OpenGraph + Twitter card metadata, and a branded `og.png` share image
- Canonical URLs per page
- `robots.txt` and `sitemap.xml` generated at build time (course pages included)
- `site.webmanifest`, favicon (SVG + ICO) and an Apple touch icon
- Semantic HTML with a single `<h1>` per page and an ordered heading hierarchy
- Descriptive `alt` text; decorative visuals marked `aria-hidden`

**Before going live:** set `siteConfig.url` to your real domain.

---

## Accessibility

- Skip-to-content link, semantic landmarks (`header` / `nav` / `main` / `footer`)
- Visible focus ring on every interactive element
- Mobile menu is a proper dialog: focus moves in on open, is trapped while open, returns to the
  trigger on close, Escape closes it, and background scroll is locked
- Accordion uses real buttons with `aria-expanded` / `aria-controls`
- Every form field has a real `<label>`; errors use `aria-invalid` + `aria-describedby`, and submit
  moves focus to the first invalid field
- Filter results announce via `aria-live`
- `prefers-reduced-motion` disables all animation and scroll-reveal
- Scroll reveals fall back to fully visible without JavaScript

---

## Content rules

These are baked into the data files and must be preserved when editing.

**Never invent:** student numbers, testimonials, partnerships, awards, certifications, client logos,
company achievements, statistics, or tutor credentials.

- The only real tutor profile is **Bikash Kadayat**; every other profile is an editable placeholder.
- The stats strip carries no invented metrics — "9+" is simply the number of courses actually listed
  on this site, and the other three are statements about approach, not scale.
- Testimonials are empty skeleton placeholders until real ones are supplied.
- Contact details are placeholders until real values are set.

Where information is missing, the UI shows a deliberate, labelled **editable placeholder** rather
than a plausible-sounding guess.
# Shikshya-Tech-Hub-
