import { useCallback, useRef, useState } from 'react'
import { BOOKING, CHAPTERS, FACTS, HERO, NAV } from './data/content'
import { useActiveSection } from './hooks'
import HeroVideo from './components/HeroVideo'
import PrimaryNavigation from './components/PrimaryNavigation'
import SoundControl from './components/SoundControl'
import ScrollProgress from './components/ScrollProgress'
import RiverLine from './components/RiverLine'
import Prologue from './components/Prologue'
import ObsessionChapter from './components/ObsessionChapter'
import SoulConstellation from './components/SoulConstellation'
import ExperienceDetails from './components/ExperienceDetails'
import BookingPanel from './components/BookingPanel'
import Reveal from './components/Reveal'

const SECTION_IDS = NAV.map((n) => n.id)
const MOTIF_GLYPHS = ['野', '灯', '烬']
const FADE_MS = 900

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const fadeRef = useRef(0)
  const [sound, setSound] = useState(false)
  const [audioBroken, setAudioBroken] = useState(false)
  const [booking, setBooking] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  const fadeAudio = useCallback((to: number) => {
    const audio = audioRef.current
    if (!audio) return
    cancelAnimationFrame(fadeRef.current)
    const from = audio.paused ? 0 : audio.volume
    if (to > 0) {
      audio.volume = 0
      void audio.play().catch(() => setAudioBroken(true))
    }
    const started = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / FADE_MS)
      audio.volume = from + (to - from) * t
      if (t < 1) fadeRef.current = requestAnimationFrame(step)
      else if (to === 0) {
        audio.pause()
        audio.currentTime = 0
      }
    }
    fadeRef.current = requestAnimationFrame(step)
  }, [])

  const toggleSound = () => {
    setSound((on) => {
      fadeAudio(on ? 0 : 1)
      return !on
    })
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/beijing-fantasy-meditations.mp3"
        loop
        preload="metadata"
        onError={() => setAudioBroken(true)}
      />
      <PrimaryNavigation active={active}>
        <SoundControl on={sound} disabled={audioBroken} onToggle={toggleSound} />
      </PrimaryNavigation>
      <ScrollProgress active={active} />

      <main className="page">
        {/* 渡口 */}
        <section className="hero" id="ferry" aria-labelledby="hero-title">
          <HeroVideo
            videoRef={videoRef}
            onUnavailable={() => {
              setAudioBroken(true)
              setSound(false)
            }}
          />

          <div className="hero__inner">
            <div className="hero__stack">
              <h1 id="hero-title" className="hero__title">
                <span className="visually-hidden">灵魂摆渡·鸳鸯 — {HERO.category}</span>
                <img
                  className="hero__wordmark"
                  src="/art/wordmark.png"
                  alt=""
                  width={665}
                  height={650}
                  fetchPriority="high"
                />
                <img
                  className="hero__label"
                  src="/art/label-banner.png"
                  alt=""
                  width={100}
                  height={290}
                />
              </h1>
              <p className="hero__hook">
                {HERO.hook.map((clause) => (
                  <span key={clause}>{clause}</span>
                ))}
              </p>
              <button type="button" className="hero__cta" onClick={() => setBooking(true)}>
                {HERO.cta}
              </button>
            </div>
          </div>

          <div className="hero__foot">
            <ul className="hero__facts">
              {FACTS.map((fact) => (
                <li key={fact.label}>
                  <b>{fact.value}</b>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
            <a className="hero__cue" href="#prologue">
              {HERO.scrollCue}
              <i aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* 卷轴主体：一条河线贯穿 */}
        <div className="scroll-body">
          <RiverLine />
          <Prologue />

          {/* 卷一至卷三 */}
          <section className="section" id="chapters" aria-labelledby="chapters-title">
            <div className="canvas">
              <Reveal as="p" className="eyebrow">三段执念</Reveal>
              <h2 id="chapters-title" className="visually-hidden">卷一至卷三 — 三段执念</h2>
              <div className="chapters">
                {CHAPTERS.map((chapter, i) => (
                  <ObsessionChapter
                    key={chapter.id}
                    chapter={chapter}
                    side={i % 2 === 0 ? 'left' : 'right'}
                    glyph={MOTIF_GLYPHS[i]}
                  />
                ))}
              </div>
            </div>
          </section>

          <SoulConstellation />
          <ExperienceDetails />

          {/* 归处 */}
          <section className="section" id="destination" aria-labelledby="destination-title">
            <div className="canvas booking">
              <h2 id="destination-title" className="visually-hidden">归处 — 预约登船</h2>
              <Reveal>
                <button type="button" className="booking__seal" onClick={() => setBooking(true)}>
                  {BOOKING.seal}
                  <small>{BOOKING.openLabel}</small>
                </button>
              </Reveal>
              <Reveal as="p" className="booking__closing" delay={280}>
                {BOOKING.closingLine}
              </Reveal>
            </div>
          </section>
        </div>
      </main>

      <footer className="foot">灵魂摆渡·鸳鸯 · {HERO.category}</footer>

      <BookingPanel open={booking} onClose={() => setBooking(false)} />
    </>
  )
}
