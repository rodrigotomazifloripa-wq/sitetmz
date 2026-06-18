import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

const WA_NUMBER = '5548988776092'
const WA_MSG = 'Olá! Vim pelo site da TMZ Conect e quero saber mais sobre as soluções de automação e IA.'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`

  return (
    <section ref={ref} id="contact" className="relative py-32 bg-base overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan/8 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong rounded-3xl p-12 md:p-20 relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Vamos conversar
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-content mb-5"
          >
            Pronto para transformar
            <br />
            <span className="text-gradient">sua empresa com IA?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-base leading-relaxed mb-12 max-w-md mx-auto"
          >
            Estamos prontos para mapear seus processos, identificar oportunidades e construir a solução ideal para o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-base transition-colors duration-200 hover:shadow-xl hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </MagneticButton>

            <MagneticButton
              href="mailto:tmzconect@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/15 hover:border-primary/40 text-white font-semibold text-base transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              tmzconect@gmail.com
              <ArrowRight className="w-4 h-4 opacity-50" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
