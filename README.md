# Besties – Headless WordPress + Next.js

A proof-of-concept dog daycare marketing site built with Next.js and WordPress.com as a headless CMS. Deploy the frontend to Vercel for free; content is managed in WordPress.com (no coding required).

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **CMS**: WordPress.com (free tier) via REST API
- **Hosting**: Vercel (free tier)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure WordPress (optional)

Without a WordPress.com site, the app uses built-in default content. To use WordPress:

1. Create a free site at [wordpress.com](https://wordpress.com)
2. Create Pages with these slugs: `hero`, `how-it-works`, `benefits`, `schedule`, `founder`, `location`, `about`, `pricing`, `faq`
3. For testimonials, create Posts (optionally in a "testimonials" category)
4. Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_WORDPRESS_URL=https://yoursite.wordpress.com
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Deploy to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add `NEXT_PUBLIC_WORDPRESS_URL` in Project Settings → Environment Variables
4. Deploy

## WordPress Content Structure

### Home page sections (Pages by slug)

| Slug            | Purpose                                           |
|-----------------|---------------------------------------------------|
| `hero`          | Main headline, subtitle, CTA link                  |
| `how-it-works`  | 3 steps (use H3 + paragraph for each)              |
| `benefits`      | Benefit cards (H3 = title, P = description)       |
| `schedule`      | Daily schedule (list items: "time – activity")     |
| `founder`       | Founder story (title + content)                   |
| `location`      | Address, phone, email, hours                      |

### Static pages

- `about`, `pricing`, `faq` – full page content via block editor

### Testimonials

- Create Posts; post title = author name, content/excerpt = quote

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React UI components
└── lib/           # WordPress API client, parsers, defaults
```

## License

MIT
