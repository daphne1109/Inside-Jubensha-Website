# 灵魂摆渡·鸳鸯 — 渡船卷轴

Single-page promotional site for the immersive mystery script.
Design spec: [`docs/plans/2026-08-25-du-chuan-juan-zhou-design.md`](docs/plans/2026-08-25-du-chuan-juan-zhou-design.md).

Vite + React + TypeScript. No animation, UI or CSS libraries — Intersection Observer,
CSS custom properties and native `<dialog>` cover everything the spec asks for.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run fonts    # regenerate the self-hosted font subsets (see below)
```

## Content

All copy lives in [`src/data/content.ts`](src/data/content.ts). Nothing is duplicated
into components, and no factual detail is baked into an image.

**Re-run `npm run fonts` after changing any copy.** The self-hosted fonts are subsets
containing only the glyphs the source currently uses; a new character will otherwise
fall back to a system font.

## Assets

Originals are kept in `assets/source/` and are not shipped. `public/` holds the
derived, production-ready versions.

The supplied video needed two fixes, both applied at encode time:

- a `KlingAI 3.0` watermark in the bottom-right — removed by cropping 1280×720 → 1280×672
- a visible jump cut on loop (the camera pushes in over the five seconds, so the last
  frame does not match the first) — resolved by encoding a forward + reversed
  ping-pong, giving a genuinely seamless 10s loop rather than hiding the cut

Regenerate with:

```bash
ffmpeg -i assets/source/kling_20260825_VIDEO_Create_a_5_3498_0.mp4 -filter_complex "[0:v]crop=1280:672:0:0,split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v];[0:a]volume=8dB,asplit[c][d];[d]areverse[e];[c][e]concat=n=2:v=0:a=1[aud]" -map "[v]" -map "[aud]" -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k public/media/hero.mp4
```

The title composition was split into three reusable pieces (`public/art/`): the
calligraphic wordmark, the lacquer 沉浸式悬疑剧本 banner, and the small red seal (also
the favicon). The hook line, the divider phrase and the four facts are HTML.

`hero-mobile.mp4` is a portrait crop centred on the boat, chosen at runtime from
`(max-width: 640px) and (orientation: portrait)` — a desktop window always gets the
wide encode, including after a resize.

## Still needed

- **Booking QR code** → drop as `public/qr/booking-qr.png`. Until then the panel shows
  a clearly labelled placeholder; no code change is needed when the file lands.
- **Contact platform name and instruction text** → `BOOKING` in `src/data/content.ts`.
- **Hook wording**: the spec (§5.1) reads 一段**孽**缘 while the supplied title artwork
  reads 一段**鸳**缘. The spec's wording is in use — one string in `content.ts` if the
  artwork is authoritative instead.
- Character lines in `SOULS` are original atmospheric copy written to the emotional
  themes in the spec. They imply no plot and should be reviewed by the author.
