import { useEffect, useState, type RefObject } from 'react'

const DESKTOP = { src: '/media/hero.mp4', poster: '/media/hero-poster.jpg' }
const MOBILE = { src: '/media/hero-mobile.mp4', poster: '/media/hero-poster-mobile.jpg' }
const PORTRAIT = '(max-width: 640px) and (orientation: portrait)'

type Status = 'playing' | 'blocked' | 'failed'

type Props = {
  videoRef: RefObject<HTMLVideoElement | null>
  onUnavailable: () => void
}

export default function HeroVideo({ videoRef, onUnavailable }: Props) {
  // <source media> is unreliable across browsers, so pick the encode ourselves —
  // and keep tracking the query, or a resized desktop window keeps the portrait crop.
  const [source, setSource] = useState(() =>
    window.matchMedia(PORTRAIT).matches ? MOBILE : DESKTOP,
  )
  const [status, setStatus] = useState<Status>('playing')

  useEffect(() => {
    const query = window.matchMedia(PORTRAIT)
    const sync = () => setSource(query.matches ? MOBILE : DESKTOP)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  // Swapping src reloads the element, so autoplay has to be re-armed each time.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => setStatus('blocked'))
  }, [videoRef, source])

  const start = () => {
    videoRef.current?.play().then(
      () => setStatus('playing'),
      () => setStatus('failed'),
    )
  }

  const fail = () => {
    setStatus('failed')
    onUnavailable()
  }

  return (
    <div className="hero__media">
      {status === 'failed' ? (
        <img src={source.poster} alt="" aria-hidden="true" />
      ) : (
        <video
          ref={videoRef}
          src={source.src}
          poster={source.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onError={fail}
        />
      )}
      {status === 'blocked' && (
        <div className="hero__playback">
          <button type="button" className="hero__play" onClick={start}>
            播放画面
          </button>
        </div>
      )}
    </div>
  )
}
