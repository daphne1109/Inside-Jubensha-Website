import type { Chapter } from '../data/content'
import { useInView } from '../hooks'

type Props = { chapter: Chapter; side: 'left' | 'right'; glyph: string }

export default function ObsessionChapter({ chapter, side, glyph }: Props) {
  const { ref, inView } = useInView<HTMLElement>('-18% 0px -18% 0px')

  return (
    <article
      ref={ref}
      className={`chapter ${inView ? 'is-visible' : ''}`}
      data-side={side}
      aria-labelledby={`${chapter.id}-title`}
    >
      <div className="chapter__body">
        <div className="chapter__heading">
          <span className="chapter__seal" aria-hidden="true">
            <span>{chapter.index}</span>
          </span>
          <h3 id={`${chapter.id}-title`} className="chapter__title vertical">
            {chapter.title}
          </h3>
        </div>
        <p className="chapter__souls">
          {chapter.souls[0]}
          <i aria-hidden="true" />
          {chapter.souls[1]}
        </p>
        <p className="chapter__teaser">{chapter.teaser}</p>
      </div>
      <div className="chapter__motif" data-glyph={glyph} aria-hidden="true" />
    </article>
  )
}
