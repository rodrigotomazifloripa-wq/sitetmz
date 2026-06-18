import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { VideoBackground } from './VideoBackground'
import { MagneticButton } from './MagneticButton'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Video background with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <VideoBackground
          src="/videos/hero.mp4"
          overlayOpacity={0.62}
          overlayColor="8,8,16"
        />
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-base to-transparent pointer-events-none z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 mx-auto max-w-7xl px-6 w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[11px] font-semibold text-primary-light tracking-[0.18em] uppercase">
            Florianópolis, SC · Atuando em +10 estados
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-xl font-black text-content mb-6 max-w-5xl"
        >
          Automação & IA
          <br />
          <span className="text-gradient">sob medida.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-12"
        >
          Sistemas, agentes e integrações que conectam seus dados,
          reduzem custos e escalam seu atendimento — para resultados reais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base transition-colors duration-200 glow-sm"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/15 hover:border-primary/40 text-white font-semibold text-base transition-all duration-200"
          >
            Ver o que construímos
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
