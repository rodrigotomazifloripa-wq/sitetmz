import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MODULES } from '../data/modules'
import { ExternalLink } from 'lucide-react'

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="portfolio" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base/60 to-surface pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4"
            >
              Portfólio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-black text-content"
            >
              Sistemas que já{' '}
              <span className="text-gradient">construímos.</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light font-semibold transition-colors shrink-0 mb-1"
          >
            Ver demonstração ao vivo
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-5 rounded-xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{}}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 100% 80% at 20% 20%, ${mod.accent}15, transparent)` }}
              />
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${mod.accent}18` }}
              >
                <mod.icon className="w-5 h-5" style={{ color: mod.accent }} />
              </div>
              <h3 className="font-display text-sm font-bold text-content mb-1 leading-snug">{mod.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: mod.accent }}>
                {mod.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
