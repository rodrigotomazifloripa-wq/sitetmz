import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Search, Zap, BarChart2 } from 'lucide-react'
import { VideoBackground } from './VideoBackground'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description: 'Mapeamos sua operação, identificamos gargalos e definimos quais soluções fazem mais sentido para o seu negócio.',
    color: '#7c3aed',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Implantação',
    description: 'As soluções são configuradas com seus dados reais. Integração com sistemas existentes, treinamento da equipe e go-live.',
    color: '#06b6d4',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Inteligência ativa',
    description: 'Com tudo rodando, a IA aprende com seus padrões — previsões, alertas e insights ficam cada vez mais precisos.',
    color: '#22c55e',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%'])

  return (
    <section ref={ref} id="how" className="relative py-32 overflow-hidden">
      {/* Video covering the full section area */}
      <VideoBackground
        src="/videos/preview.mp4"
        overlayOpacity={0.84}
        overlayColor="8,8,16"
      />

      {/* Extra gradient at top and bottom to blend with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none" />

      {/* Subtle color tint over video to reinforce brand */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10" />

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            Como funciona
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-content"
          >
            Da operação ao insight{' '}
            <span className="text-gradient">em 3 etapas.</span>
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Animated connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-white/5 overflow-hidden">
            <motion.div
              className="h-full origin-left"
              style={{
                width: lineWidth,
                background: 'linear-gradient(to right, #7c3aed, #06b6d4, #22c55e)',
              }}
            />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start glass-strong rounded-2xl p-8"
            >
              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 z-10"
                style={{
                  background: `${step.color}18`,
                  border: `1px solid ${step.color}35`,
                  boxShadow: `0 0 24px ${step.color}20`,
                }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={1.5} />
                <span
                  className="absolute -top-2.5 -right-2.5 text-[10px] font-mono font-black px-1.5 py-0.5 rounded-full text-white"
                  style={{ background: step.color }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-content mb-3">{step.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
