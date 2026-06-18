import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Network, Zap, Timer } from 'lucide-react'

const PROBLEMS = [
  {
    icon: Network,
    title: 'Sistemas que não conversam',
    description: 'ERP, CRM, WhatsApp e planilhas em paralelo sem integração. Dados inconsistentes, retrabalho constante, decisões lentas.',
    accent: '#7c3aed',
  },
  {
    icon: Zap,
    title: 'Atendimento que não escala',
    description: 'Equipe sobrecarregada respondendo as mesmas dúvidas, agendando manualmente e perdendo leads fora do horário comercial.',
    accent: '#f97316',
  },
  {
    icon: Timer,
    title: 'Processos manuais que travam o crescimento',
    description: 'Orçamentos feitos à mão, relatórios montados toda semana, follow-up que se perde. Cada processo manual custa tempo e dinheiro.',
    accent: '#ec4899',
  },
]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 bg-base overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div style={{ y }} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            O problema
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-content"
          >
            Tecnologia genérica não
            <br />
            <span className="text-gradient">resolve problema específico.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-2xl p-8 group relative overflow-hidden"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: p.accent }}
              />

              {/* Icon — larger */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${p.accent}18`,
                  border: `1px solid ${p.accent}30`,
                  boxShadow: `0 0 20px ${p.accent}10`,
                }}
              >
                <p.icon className="w-7 h-7" style={{ color: p.accent }} strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-lg font-bold text-content mb-3">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
