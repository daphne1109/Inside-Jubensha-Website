# 《灵魂摆渡·鸳鸯》渡船卷轴网站设计

Date: 2026-08-25

## 1. Objective

Create a complete, single-page promotional website for the immersive mystery script 《灵魂摆渡·鸳鸯》. The experience should be cinematic first and lead naturally to booking through a contact QR code.

The page must remain atmospheric and spoiler-free. The supplied character notes indicate emotional themes, but they do not establish the complete plot. Website copy should therefore be treated as thematic interpretation rather than canonical story summary.

## 2. Confirmed direction

- Primary purpose: immersion followed by booking conversion
- Page format: complete scrolling landing page
- Creative structure: 渡船卷轴
- Visual treatment: 幽冥黑卷
- Dominant tone: 幽冥凄美
- Character presentation: purely atmospheric, not a role-selection guide
- Video behaviour: muted autoplay, continuous loop, visible sound toggle
- Booking behaviour: an on-page contact panel containing a QR code
- Frontend architecture: Vite, React, and TypeScript

## 3. Supplied assets

- `kling_20260825_VIDEO_Create_a_5_3498_0.mp4`
  - 1280 x 720 H.264 video
  - Approximately five seconds
  - Contains an AAC audio track
- `ling hun bai du text.png`
  - Transparent title composition containing the central calligraphy and supporting text
- `website guide image.png`
  - Visual reference for the intended dark Chinese suspense direction

## 4. Narrative concept

The page is a black ceremonial scroll unfolding downward. A faint gold river line travels through it and joins each section using seals, knots, and ink marks.

The thematic thesis is:

> 六个未渡之人，三种执念，三段“鸳鸯”命数。

The three emotional chapters are:

1. **守护未歇 — 野草 × 荒棘**
   - Emotional source: family, brotherhood, wartime loyalty, and unadorned love
   - Teaser: “烽火焚尽来路，仍有人替故人守着归途。”
2. **此意未言 — 残灯 × 断腔**
   - Emotional source: family, master and apprentice, opera, and unspoken affection
   - Teaser: “灯未灭，腔已断；未说出口的，最难渡。”
3. **奔赴未尽 — 薄羽 × 灼烬**
   - Emotional source: mutual devotion, sacrifice, and family attachment
   - Teaser: “纵使薄羽成灰，也要向余烬深处奔赴。”

These lines establish tone only. They must not imply undisclosed plot events.

## 5. Content sequence

### 5.1 渡口 — Hero

- Full-viewport looping background video
- Central title artwork
- Category label: 沉浸式悬疑剧本
- Hook: “一条渡船，摆渡执念；一段孽缘，谁是归人？”
- Primary action: 立即预约
- Secondary scroll cue: 向下入渡
- Compact facts: 6人（3男3女）, 4–5小时, 中等难度, 情感·沉浸·推理
- Minimal navigation: 渡口 / 执念 / 六魂 / 入局
- Sound toggle in the upper-right

### 5.2 序 — 引魂

A narrow poetic passage introduces the river as the boundary between memory and release. It should use a few large vertical characters and one short horizontal passage rather than a conventional explanatory paragraph.

### 5.3 卷一至卷三 — 三段执念

Three alternating left-and-right compositions introduce the emotional chapters. Each contains:

- Chapter seal
- Vertical chapter title
- Two character names
- One short poetic line
- Abstract visual motif

No role rankings, player suitability labels, avoidance notes, or detailed relationship explanations appear on the public page.

### 5.4 六魂 — Character constellation

Six names appear like hanging identity slips around a dim circular 渡 seal. Hovering on desktop or tapping on touch devices reveals one short enigmatic line per character.

### 5.5 入局 — Experience information

Present the practical details as engraved gold marks rather than modern cards:

- Six players, three men and three women
- Four to five hours
- Medium difficulty and beginner-friendly
- Emotional, immersive, and deductive experience

Real testimonials can be added later. Fabricated player reviews must not be used.

### 5.6 归处 — Booking

The gold river line reaches a final lacquer-red seal. Activating it opens an accessible contact panel containing:

- Booking QR code
- Platform or contact label
- One short instruction
- Close control

Closing line: “此岸已远，彼岸未明。你，可愿登船？”

## 6. Visual system

### Palette

- Ink black: `#07090A`
- Deep smoke: `#151A1D`
- Smoke blue-grey: `#49535B`
- Aged bone: `#D8C5A2`
- Muted gold: `#A77A3F`
- Lacquer red: `#731C18`

Exact colors may be tuned against the video after browser rendering.

### Materials and motifs

- Near-black silk or fibrous paper texture
- Fine muted-gold rules
- Mist, diluted ink edges, red seals, and faint water reflections
- One irregular river line linking the complete page
- Generous negative space; darkness is a structural element

### Typography

- Preserve the supplied title artwork for the primary wordmark
- Use a self-hosted open-source Chinese serif such as 思源宋体 for readable text
- Consider ZCOOL XiaoWei for selected headings
- Use a calligraphic font such as Ma Shan Zheng only for brief accents
- Use vertical typography for chapter headings and decorative phrases, not long body copy
- Subset and serve WOFF2 files to control Chinese font payload size

## 7. Layout behaviour

### Desktop

- Full-screen hero
- Centered content canvas with the river line drifting through it
- Chapter compositions alternate across the river
- Navigation is fixed but visually quiet
- A seal-based progress indicator indicates the current chapter

### Mobile

- Background video uses a carefully selected crop or dedicated mobile encode
- River line moves to the left edge
- Content becomes a single readable column
- Vertical text is decorative and limited
- Hover interactions become explicit tap interactions
- Title and facts are separated so they can scale independently

## 8. Motion and sound

- Video starts muted using autoplay, loop, and playsInline
- Sound control fades audio in and out gently
- Title enters through opacity and mist, not large translation
- Chapter seals stamp into place as their sections enter the viewport
- Ink reveals and mist drift remain slow and restrained
- Parallax is slight and limited to decorative layers
- Reduced-motion mode disables parallax and nonessential reveals
- Failed video playback falls back to a poster frame

The five-second video loop must be checked for a visible cut. If necessary, derive an edited loop with a subtle transition rather than hiding the issue behind heavy effects.

## 9. React architecture

Recommended components:

- `App`
- `HeroVideo`
- `PrimaryNavigation`
- `ScrollProgress`
- `Prologue`
- `ObsessionChapter`
- `SoulConstellation`
- `ExperienceDetails`
- `BookingPanel`
- `SoundControl`

Character and chapter content should live in typed data structures rather than being duplicated across components. React state should remain local and minimal:

- Sound enabled or muted
- Active chapter
- Open character fragment
- Booking panel visibility

CSS custom properties define color, type scale, spacing, and motion timing. Intersection Observer should drive chapter state and reveal classes; a large animation framework is unnecessary unless later visual requirements justify it.

## 10. Asset preparation

- Extract a high-quality poster frame from the video
- Create an optimized MP4 and evaluate whether WebM produces a meaningful saving
- Create a mobile-friendly video crop or encode if the original composition does not survive portrait cropping
- Crop the supplied transparent title composition into reusable elements
- Keep factual details as HTML rather than baked image text
- Convert large transparent artwork to an efficient browser format
- Do not ship the guide image; retain it only as a reference

## 11. Failure and fallback states

- Video failure: show poster image without layout shift
- Autoplay failure: show poster and a restrained play control
- Audio failure: remain muted and disable the sound control gracefully
- Missing QR code during development: show an intentional placeholder with a clear label
- JavaScript failure: retain visible title, premise, experience facts, and contact fallback in semantic HTML where practical

## 12. Verification

- Desktop Chrome and Safari
- iPhone Safari and representative Android dimensions
- Muted autoplay and inline mobile playback
- Sound toggle and audio fade
- Keyboard access and visible focus states
- Booking panel focus management and Escape-to-close behaviour
- Touch interaction for all character fragments
- Reduced-motion mode
- Contrast and title legibility across the complete video loop
- Layout at narrow, standard, and ultrawide viewports
- Slow-network loading and poster fallback
- Production asset sizes and font payload

## 13. Inputs still required

- Final booking QR code
- Contact platform name and instruction text
- Any official synopsis or approved marketing copy when available
- Confirmation of whether the supplied title composition may be cropped into separate production assets

