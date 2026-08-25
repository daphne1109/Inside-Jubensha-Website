import { useScrollProgress } from '../hooks'

/** One irregular gold line threading the whole scroll, drawn in as the page advances. */
const PATH =
  'M50 0 C 22 90, 78 150, 52 240 S 12 380, 46 470 S 88 580, 50 680 S 16 790, 50 880 C 50 930, 50 965, 50 1000'
const LENGTH = 1180 // approximate; only the ratio matters for the draw-in

export default function RiverLine() {
  const progress = useScrollProgress()

  return (
    <div className="river" aria-hidden="true">
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="riverGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A77A3F" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#C79A5C" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#731C18" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path className="river__bed" d={PATH} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path
          className="river__flow"
          d={PATH}
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={LENGTH}
          strokeDashoffset={LENGTH * (1 - progress)}
        />
      </svg>
    </div>
  )
}
