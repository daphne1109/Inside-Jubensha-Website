import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export default function AncientAtmosphere() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const upperDrift = useTransform(scrollYProgress, [0, 1], ['-8%', '14%'])
  const lowerDrift = useTransform(scrollYProgress, [0, 1], ['10%', '-12%'])

  return (
    <div className="atmosphere" aria-hidden="true">
      <motion.div
        className="atmosphere__smoke atmosphere__smoke--upper"
        style={{ y: reduceMotion ? 0 : upperDrift }}
        animate={reduceMotion ? undefined : { x: ['-3%', '4%', '-3%'], opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="atmosphere__smoke atmosphere__smoke--lower"
        style={{ y: reduceMotion ? 0 : lowerDrift }}
        animate={reduceMotion ? undefined : { x: ['4%', '-4%', '4%'], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 23, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="atmosphere__aura"
        animate={reduceMotion ? undefined : { opacity: [0.18, 0.38, 0.18], scale: [0.94, 1.07, 0.94] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
