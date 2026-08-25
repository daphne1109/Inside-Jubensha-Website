import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export type ClickPulse = { id: number; x: number; y: number } | null

type Props = {
  pulse: ClickPulse
  onComplete: () => void
}

export default function ClickAura({ pulse, onComplete }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {pulse && (
        <motion.span
          key={pulse.id}
          className="click-aura"
          style={{ left: pulse.x, top: pulse.y }}
          initial={{ opacity: reduceMotion ? 0 : 0.72, scale: 0.2 }}
          animate={{ opacity: 0, scale: reduceMotion ? 0.2 : 1.9 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.72, ease: 'easeOut' }}
          onAnimationComplete={onComplete}
        />
      )}
    </AnimatePresence>
  )
}
