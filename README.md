# R&R Land Management — Marketing Site

Marketing site for R&R Land Management — excavation, septic, ponds, driveways, land clearing, utilities, bush hogging, and retaining walls across East Tennessee.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **TypeScript**, **React Hook Form + zod**.

---

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

---

## Where the content lives

All site copy and configuration is in plain TypeScript files — edit these and the site updates everywhere it appears.

| What you want to change | Edit this file |
|---|---|
| Phone numbers, email, address, hours, service area, payment methods | [`content/site.ts`](content/site.ts) |
| Service descriptions (short and long) | [`content/services.ts`](content/services.ts) |
| Gallery photos and videos | [`content/gallery.ts`](content/gallery.ts) |
| Home hero copy / tagline | [`components/Hero.tsx`](components/Hero.tsx) |
| Why-R&R points | [`components/WhyUs.tsx`](components/WhyUs.tsx) |
| About-page story / standards / equipment copy | [`app/about/page.tsx`](app/about/page.tsx) |
| Footer tagline & columns | [`components/Footer.tsx`](components/Footer.tsx) |

After editing, save and the dev server will hot-reload. For production, just commit and push — Vercel rebuilds automatically.

---

## Adding photos to the gallery

Photos live in [`public/gallery/`](public/gallery/). Drop new files in there and add an entry in [`content/gallery.ts`](content/gallery.ts):

```ts
{
  src: '/gallery/your-new-photo.jpg',
  alt: 'Brief description for accessibility and SEO',
  category: 'Driveway',  // must match a service category for filtering
},
```

**Categories** that map to filter buttons:
`Septic` · `Driveway` · `Pond` · `Land Clearing` · `Utilities` · `Bush Hogging` · `Retaining Wall` · `Excavation`

**Photo tips:**
- Recommended size: ~1600px wide, JPG or WebP, ~80% quality (~500 KB – 1 MB)
- Use real alt text — describe what's in the shot. Helps SEO and screen readers.
- Add `feature: true` to make a photo span 2×2 in the grid (use sparingly — best for the strongest shots)

### Converting iPhone photos (HEIC) on macOS

iPhone photos save as `.HEIC` which browsers don't display. Convert before dropping into the gallery:

```bash
# In the folder that contains the HEIC files
for f in *.HEIC; do
  sips -s format jpeg -Z 1600 "$f" --out "${f%.HEIC}.jpg"
done
```

This resizes them to 1600px max and converts to JPG. Move the `.jpg` files into `public/gallery/`.

### Adding a video

Videos play inline in the gallery with a "Video" badge. To add one:

1. Convert to MP4 if needed (most modern phones already record MP4 or HEVC):
   ```bash
   ffmpeg -i original.MOV -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset medium -crf 26 -movflags +faststart -an your-video.mp4
   ```
2. Make a JPG poster frame so the tile shows something before play:
   ```bash
   ffmpeg -ss 1 -i original.MOV -frames:v 1 -q:v 4 your-video-poster.jpg
   ```
3. Drop both files into `public/gallery/` and add to `content/gallery.ts`:
   ```ts
   {
     src: '/gallery/your-video.mp4',
     poster: '/gallery/your-video-poster.jpg',
     alt: 'What the video shows',
     category: 'Bush Hogging',
     type: 'video',
   },
   ```

**⚠ 25 MB asset limit.** Cloudflare Pages refuses any single file over 25 MB. After encoding, check size:

```bash
ls -la public/gallery/*.mp4 | awk '{printf "%5.1f MB  %s\n", $5/1048576, $9}'
```

If any video is over ~23 MB, re-encode at lower bitrate:

```bash
ffmpeg -i original.MOV -vf "scale='min(1080,iw)':-2" -c:v libx264 -preset slow -crf 30 -movflags +faststart -an your-video.mp4
```

Drop CRF higher (32, 34) if still too big. Quality difference is barely perceptible for outdoor work footage.

---

## Wiring up the contact form to real email

Right now the quote form posts to `/api/quote` which **logs to the server console only**. Submissions are not delivered anywhere yet. Pick one of these to fix that before launch:

### Option 1 — Resend (recommended)

Clean API, free tier covers 3,000 emails/month, requires verifying your sending domain.

1. Sign up at [resend.com](https://resend.com), verify a sending domain (e.g. `rrlandmanagement.com`)
2. Install: `npm install resend`
3. Add `RESEND_API_KEY` to your Vercel environment variables (Project → Settings → Environment Variables)
4. Edit [`app/api/quote/route.ts`](app/api/quote/route.ts) — the file has a TODO block with the exact code to drop in. The summarized version:
   ```ts
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({
     from: 'quotes@rrlandmanagement.com',
     to: 'kingshelby30@gmail.com',
     replyTo: data.email,
     subject: `New quote — ${data.name} (${data.service})`,
     text: JSON.stringify(data, null, 2),
   });
   ```

### Option 2 — Formspree (zero backend code)

Easier if you don't want to manage an API key. Free tier = 50 submissions/month.

1. Sign up at [formspree.io](https://formspree.io), create a form, copy the form ID
2. In [`components/QuoteForm.tsx`](components/QuoteForm.tsx), change the `fetch('/api/quote', …)` call to post directly to `https://formspree.io/f/YOUR_FORM_ID`
3. Submissions land in your Formspree inbox and forward to `kingshelby30@gmail.com`

### Option 3 — SendGrid

Same shape as Resend. Use `@sendgrid/mail`. SendGrid's free tier is more limited but if you already have an account it's a natural fit.

---

## Deploying to Cloudflare Pages

The repo is set up for Cloudflare Pages with the `@cloudflare/next-on-pages` adapter. All API routes use the edge runtime so they run on Cloudflare Workers.

### First-time deploy

1. Push the project to GitHub (private repo is fine)
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Pick the GitHub repo, click **Begin setup**
4. Configure the build:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: leave blank (or `site/` if the repo's root is somewhere above)
   - **Environment variables** → add `NODE_VERSION` = `20`
5. **Save and Deploy**
6. After the first deploy, go to **Settings → Functions** and add this **Compatibility flag** for both Production and Preview: `nodejs_compat`. Then redeploy (Deployments → ⋯ → Retry deployment).
7. You get a `*.pages.dev` URL — test it.

### Custom domain (Cloudflare DNS)

If your domain is already on Cloudflare:

1. Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `rrlandmanagement.com` (and `www.rrlandmanagement.com` separately if you want both)
3. Cloudflare auto-creates the CNAME records since DNS is already on their side. HTTPS provisions automatically.
4. Update `site.url` in [`content/site.ts`](content/site.ts) to the live domain — this affects the sitemap, JSON-LD schema, and OG tags.

### Subsequent deploys

Just push to your `main` branch. Cloudflare Pages auto-rebuilds.

### Environment variables

If you wire up an email service, add the API key in Cloudflare: Pages project → **Settings → Environment variables** → **Add variable**. Apply to **Production** and **Preview**.

### Local Cloudflare-style preview

To test the Cloudflare build locally before pushing:

```bash
npm run pages:build
npx wrangler pages dev .vercel/output/static
```

This catches edge-runtime issues that `next dev` won't.

---

## SEO checklist before launch

- [ ] Update `site.url` in `content/site.ts` to the real domain
- [ ] Add a real `og-image.png` (1200×630) to `public/` — referenced from page metadata
- [ ] Verify the `LocalBusiness` JSON-LD address & geo coordinates in `content/site.ts` — especially `geo.lat` / `geo.lng`
- [ ] Submit `https://YOUR-DOMAIN/sitemap.xml` to Google Search Console
- [ ] Add Google Business Profile link to `sameAs` array in `lib/jsonld.ts`
- [ ] Verify the contact form actually emails (test it from the live site)

---

## Project structure

```
app/                  # Pages (App Router)
  layout.tsx          # Root layout — fonts, header, footer, JSON-LD schema
  page.tsx            # Home
  services/page.tsx
  gallery/page.tsx
  about/page.tsx
  contact/page.tsx
  api/quote/route.ts  # Quote form handler (currently logs only — see above)
  sitemap.ts          # Generates /sitemap.xml
  robots.ts           # Generates /robots.txt
  not-found.tsx       # 404 page
components/           # Reusable React components
content/              # Editable site copy (you edit these)
  site.ts
  services.ts
  gallery.ts
lib/                  # Utilities (zod schema, JSON-LD builder, photo helpers)
public/               # Static files served at the root
  logo.png
  gallery/            # Photos and videos
```

---

## Tech notes

- **Next.js version**: 14.2.x (latest patch). The remaining `npm audit` advisories are issues bundled inside Next 14 itself and would only be resolved by upgrading to Next 16 — out of scope for this site, but worth re-checking after Vercel publishes a Next 14 backport.
- **No backwards-compat polyfills** — modern evergreen browsers only.
- **Bun, pnpm, yarn** all work as substitutes for npm if you prefer.

## Questions?

Anything broken or unclear in this setup, talk to whoever maintains the site.
