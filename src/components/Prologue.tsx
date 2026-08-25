import { PROLOGUE, THESIS } from '../data/content'
import Reveal from './Reveal'

export default function Prologue() {
  return (
    <section className="section" id="prologue" aria-labelledby="prologue-title">
      <div className="canvas prologue">
        <Reveal as="p" className="eyebrow">序 · 引魂</Reveal>
        <h2 id="prologue-title" className="visually-hidden">序 — 引魂</h2>
        <Reveal className="prologue__columns" delay={160}>
          <span className="vertical">{PROLOGUE.verticalRight}</span>
          <span className="vertical">{PROLOGUE.verticalLeft}</span>
        </Reveal>
        <Reveal as="p" className="prologue__passage" delay={320}>
          {PROLOGUE.passage}
        </Reveal>
        <Reveal className="prologue__divider" delay={420}><hr className="rule" /></Reveal>
        <Reveal as="p" className="thesis" delay={520}>{THESIS}</Reveal>
      </div>
    </section>
  )
}
