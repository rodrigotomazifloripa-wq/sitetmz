import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { VideoBackground } from './VideoBackground'

const STATS = [
  { value: 120, suffix: '+', label: 'Clientes atendidos', prefix: '' },
  { value: 250, suffix: '+', label: 'Projetos entregues', prefix: '' },
  { value: 50,  suffix: '+', label: 'Agentes de IA em produção', prefix: '' },
  { value: 10,  suffix: '+', label: 'Estados brasileiros', prefix: '' },
]

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const step = value / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) { setDisplay(value); clearInterval(timer) }
      else setDisplay(current)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{prefix}{Math.round(display)}{suffix}</span>
}

export function ResultsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="results" className="relative py-40 overflow-hidden">
      {/* Video background */}
      <VideoBackground
        src="/videos/results.mp4"
        overlayOpacity={0.80}
        overlayColor="4,4,12"
      />

      {/* Gradient vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            Resultados reais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-white"
          >
            Números que{' '}
            <span className="text-gradient">falam por si.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center glass-strong rounded-2xl p-8"
            >
              <div className="text-5xl md:text-6xl font-black text-gradient mb-3 font-display">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-white/50 leading-snug font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
