import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-white/5 bg-base"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-black text-sm text-white">T</div>
            <span className="font-display font-bold text-base text-content">TMZ Conect</span>
          </div>
          <p className="text-sm text-white/35 leading-relaxed max-w-xs">
            Automação & IA sob medida para resultados reais. Sistemas, agentes e integrações que transformam como sua empresa opera.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Navegação</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: '#modules', label: 'Serviços' },
              { href: '#how', label: 'Como funciona' },
              { href: '#portfolio', label: 'Portfólio' },
              { href: '#results', label: 'Resultados' },
              { href: '#contact', label: 'Contato' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Contato</p>
          <div className="flex flex-col gap-3">
            <a href="https://wa.me/5548988776092" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              (48) 98877-6092
            </a>
            <a href="mailto:tmzconect@gmail.com"
              className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              tmzconect@gmail.com
            </a>
            <div className="flex items-center gap-2.5 text-sm text-white/40">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              Florianópolis, SC
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-xs text-white/20">© {new Date().getFullYear()} TMZ Conect. Todos os direitos reservados.</p>
      </div>
    </motion.footer>
  )
}
