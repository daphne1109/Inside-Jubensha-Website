import { FACTS } from '../data/content'
import Reveal from './Reveal'

export default function ExperienceDetails() {
  return (
    <section className="section" id="entry" aria-labelledby="entry-title">
      <div className="canvas entry">
        <Reveal as="p" className="eyebrow">入局</Reveal>
        <h2 id="entry-title" className="visually-hidden">入局 — 体验信息</h2>
        <ul className="marks">
          {FACTS.map((fact, i) => (
            <Reveal as="li" key={fact.label} className="mark" delay={i * 120}>
              <span className="mark__value">{fact.value}</span>
              <span className="mark__label">{fact.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
