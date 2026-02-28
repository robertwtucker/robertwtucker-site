# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server (uses cross-env INIT_CWD=$PWD)
pnpm build        # Build for production (contentlayer2 build → next build → postbuild RSS)
pnpm serve        # Start production server
pnpm lint         # Run ESLint with auto-fix across app, components, layouts, lib, scripts
pnpm analyze      # Bundle analyzer (sets ANALYZE=true)
```

The package manager is **pnpm** (`pnpm@10.24.0`). There are no tests in this project.

## Architecture

This is a personal blog/portfolio site adapted from timlrx's [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog). It is built on **Next.js 16** (App Router, Turbopack) with **Contentlayer2** for MDX content processing and **Tailwind CSS v4** for styling. It is deployed to Vercel with a single long-running `master` branch.

### Content Pipeline

- Content lives in `data/blog/` (MDX) and `data/authors/` (MDX)
- `contentlayer.config.ts` defines `Blog` and `Authors` document types with computed fields (slug, readingTime, toc, structuredData)
- On build success, Contentlayer generates `app/tag-data.json` (tag counts) and `public/search.json` (kbar search index)
- The postbuild script (`scripts/postbuild.mjs`) generates `public/feed.xml` via `scripts/rss.mjs`
- Generated types are available as `contentlayer/generated` (path-aliased in tsconfig)

### Routing & Pages

- `app/` uses Next.js App Router with file-based routing
- `app/blog/[...slug]/` — individual blog post pages
- `app/tags/` — tag browsing
- `app/projects/` — projects showcase (data in `data/projectsData.ts`)
- `app/about/` — author page

### Component & Layout Structure

- `components/` — shared UI primitives (Header, Footer, Link, Image, Tag, etc.)
- `layouts/` — full-page layouts consumed by pages: `PostLayout`, `PostSimple`, `PostBanner`, `ListLayout`, `ListLayoutWithTags`, `AuthorLayout`
- `app/Main.tsx` — homepage rendering logic
- Path aliases: `@/components/*`, `@/data/*`, `@/layouts/*`, `@/css/*`

### Configuration

- `data/siteMetadata.js` — central config: site URLs, analytics (Umami via `NEXT_UMAMI_ID`), comments (Giscus via `NEXT_PUBLIC_GISCUS_*` env vars), search provider (kbar)
- `data/headerNavLinks.ts` — navigation items
- SVGs are handled via `@svgr/webpack` and imported as React components

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- `prettier-plugin-tailwindcss` enforces class ordering
- Prettier config: no semicolons, single quotes, 100 char print width, trailing commas (ES5)
- Font: `Space_Grotesk` from Google Fonts via `next/font`
