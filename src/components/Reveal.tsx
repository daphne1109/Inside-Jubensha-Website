import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks'

type Props = {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
} & Record<string, unknown>

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
