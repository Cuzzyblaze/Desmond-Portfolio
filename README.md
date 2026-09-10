# Desmond Didacus — Portfolio

A single-page portfolio site for Desmond Didacus, Software Developer & founder
of [ICT Result](https://ictresult.com).

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Before you deploy: add your photo

The hero section expects a headshot at `public/profile.jpg`. Until that file
exists it falls back to a "DD" initials avatar automatically, so the site
works either way — but for the real deal:

1. Drop your photo in as `public/profile.jpg` (a square-ish image, at least
   600×600px, works best).
2. That's it — the `Avatar` component picks it up automatically.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All of the text content — projects, services, stats, and contact/social
links — lives in one place: [`src/lib/data.ts`](src/lib/data.ts). Edit that
file to update anything on the site without touching components.

## Deploying to Vercel via GitHub

1. **Push this project to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select "Import Git Repository" and choose the repo you just pushed
   - Framework preset: Next.js (auto-detected) — no config needed
   - Click **Deploy**

3. Vercel will give you a live URL (e.g. `your-project.vercel.app`). You can
   later attach a custom domain from the Vercel project's **Settings → Domains**
   tab.

Every future `git push` to `main` automatically redeploys the site.

## Project structure

```
src/
  app/            # Next.js app router entry (layout, page, global styles)
  components/      # All page sections and UI pieces
  lib/data.ts      # Projects, services, stats, contact/social links
```
