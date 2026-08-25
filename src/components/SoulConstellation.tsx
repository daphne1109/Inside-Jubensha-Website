import { useState } from 'react'
import { SOULS } from '../data/content'
import Reveal from './Reveal'

export default function SoulConstellation() {
  const [open, setOpen] = useState<string | null>(null)
  // On a hover-capable pointer the slip already opens on hover; letting click
  // toggle as well would just close what the pointer just opened.
  const [canHover] = useState(() => window.matchMedia('(hover: hover)').matches)

  return (
    <section className="section" id="souls" aria-labelledby="souls-title">
      <div className="canvas souls">
        <Reveal as="p" className="eyebrow">六魂</Reveal>
        <h2 id="souls-title" className="visually-hidden">六魂 — 未渡之人</h2>
        <Reveal className="souls__ring" delay={140}>
          <span className="souls__core" aria-hidden="true">渡</span>
          {SOULS.map((soul, i) => {
            const isOpen = open === soul.name
            return (
              <div
                key={soul.name}
                className="soul"
                data-open={isOpen}
                style={
                  {
                    '--a': `${(360 / SOULS.length) * i - 90}deg`,
                    '--sway-delay': `${i * 0.55}s`,
                  } as React.CSSProperties
                }
                onMouseEnter={canHover ? () => setOpen(soul.name) : undefined}
                onMouseLeave={
                  canHover ? () => setOpen((cur) => (cur === soul.name ? null : cur)) : undefined
                }
              >
                <button
                  type="button"
                  className="soul__slip"
                  aria-expanded={isOpen}
                  aria-controls={`soul-${i}`}
                  onClick={() => setOpen(!isOpen || canHover ? soul.name : null)}
                  onFocus={() => setOpen(soul.name)}
                >
                  {soul.name}
                </button>
                <p className="soul__line" id={`soul-${i}`}>{soul.line}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
