# Zeeshan Altaf — Professional Portfolio Website

A professional portfolio and services website for **Zeeshan Altaf**, AI Transformation Leader & Agentic AI Architect specializing in AI-powered SaaS applications, Agentic AI workflows, automation workflows, and Agentic RAG systems.

🌐 **Live Site:** [zeeshanai.cloud](https://zeeshanai.cloud)

---

## Features

- **Dark / Light theme** toggle with system preference detection (`next-themes`)
- **Neural-network particle background** powered by `@tsparticles`
- **Glass-morphism UI** — cards with backdrop blur, gradient borders, glow effects
- **Framer Motion animations** — scroll reveals, staggered children, hover interactions
- **MDX Blog** — version-controlled posts with frontmatter, reading time, tag filters
- **Contact form** integrated with n8n webhook (server-side proxy, API key auth) with math CAPTCHA
- **Fully responsive** — mobile, tablet, and desktop layouts

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated heading, CTA buttons, social links, particle background |
| **Services** | AI-Powered SaaS Apps, Agentic Workflows, Automation, Agentic RAG |
| **Featured Projects** | ResuMatchAI, InvoiceExtract, FitFusion, DocGenie, ChargeMap PK |
| **Automation Workflows** | Multi-Agent Slackbot, YouTube Analytics |
| **Blog** | Latest 3 posts preview with link to full blog listing |
| **Contact** | Validated form with math CAPTCHA, submitting to n8n webhook |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Animations | Framer Motion |
| Particles | @tsparticles/react + @tsparticles/slim |
| Theme | next-themes |
| Blog | next-mdx-remote + gray-matter |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Toasts | sonner |

---

## Projects Showcased

| Project | Live Demo | Source Code |
|---|---|---|
| ResuMatchAI | [resumatch.zeeshanai.cloud](https://resumatch.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/resume-match-ai) |
| InvoiceExtract | [invoicextract.zeeshanai.cloud](https://invoicextract.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/invoice-extract) |
| FitFusion | [fitfusion.zeeshanai.cloud](https://fitfusion.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/fit-fusion) |
| DocGenie | [docgenie.zeeshanai.cloud](https://docgenie.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/docgenie-ai) |
| YouTube Analytic | [yt-analytics.zeeshanai.cloud](https://yt-analytics.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/professional-profile-webpage) |
| ChargeMap PK | [chargemap-pk.zeeshanai.cloud](https://chargemap-pk.zeeshanai.cloud/) | [GitHub](https://github.com/mzeeshanaltaf/ev-chargers-pk) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/mzeeshanaltaf/ai-automation-agency.git
cd ai-automation-agency
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# n8n webhook URL for contact form submissions
N8N_WEBHOOK_URL=your_n8n_webhook_url_here

# Optional: API key sent as x-api-key header to the webhook
N8N_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage (all sections)
│   ├── globals.css             # Tailwind + CSS variables + utilities
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual blog post
│   └── api/contact/route.ts    # n8n webhook proxy
├── components/
│   ├── layout/                 # Navbar, Footer, SectionWrapper
│   ├── sections/               # HeroSection, ServicesSection, etc.
│   ├── ui/                     # GlassCard, GlowButton, ThemeToggle, etc.
│   └── blog/                   # BlogCard, BlogContent
├── content/blog/               # MDX blog posts
├── data/                       # services, projects, automations, navigation
├── hooks/                      # useScrollProgress, useInViewAnimation
├── lib/                        # utils, mdx, constants
└── types/                      # TypeScript interfaces
```

---

## Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-03-12"
excerpt: "A brief description of the post."
tags: ["AI", "Automation"]
readingTime: "5 min read"
---

Your content here...
```

---

## Deployment

Deploy to [Vercel](https://vercel.com) in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Set the `N8N_WEBHOOK_URL` and `N8N_API_KEY` environment variables in your Vercel project settings.

---

## License

MIT
