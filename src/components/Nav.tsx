import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Serviços', href: '#modules' },
  { label: 'Como Funciona', href: '#how' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Resultados', href: '#results' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-black text-sm text-white transition-transform duration-200 group-hover:scale-110">
            T
          </div>
          <span className="font-display font-bold text-base text-content tracking-tight">TMZ Conect</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
        >
          Falar com especialista
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-sm text-white/70 font-medium">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="inline-flex justify-center px-5 py-3 rounded-full bg-primary text-white text-sm font-bold">
              Falar com especialista
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
