import { useEffect, useState } from 'react'
import { NAV } from '../data/content'
import type { ReactNode } from 'react'

type Props = { active: string; children?: ReactNode }

export default function PrimaryNavigation({ active, children }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav" data-scrolled={scrolled} aria-label="主要导航">
      <span className="nav__mark">Inside</span>
      <ul className="nav__links">
        {NAV.map(({ id, label }) => (
          <li key={id}>
            <a className="nav__link" href={`#${id}`} aria-current={active === id}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  )
}
