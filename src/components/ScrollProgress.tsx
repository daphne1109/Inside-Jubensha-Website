import { NAV } from '../data/content'

type Props = { active: string }

export default function ScrollProgress({ active }: Props) {
  return (
    <div className="progress" aria-hidden="true">
      {NAV.map(({ id, label }) => (
        <span key={id} className="progress__dot" aria-current={active === id}>
          {label[0]}
        </span>
      ))}
    </div>
  )
}
