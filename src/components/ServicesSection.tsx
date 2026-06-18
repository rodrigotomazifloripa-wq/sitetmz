import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BrainCircuit, Blocks, LineChart, MonitorDot, Workflow, UsersRound } from 'lucide-react'

const SERVICES = [
  {
    id: 'agentes-ia',
    icon: BrainCircuit,
    name: 'Agentes de Atendimento com IA',
    tagline: 'Atendimento 24/7 sem aumentar equipe',
    description: 'Agentes virtuais que atendem clientes de forma natural: agendam, cancelam, respondem dúvidas e enviam lembretes — integrados ao seu CRM e canais digitais.',
    accent: '#7c3aed',
  },
  {
    id: 'solucoes',
    icon: Blocks,
    name: 'Soluções Personalizadas',
    tagline: 'Se você imagina, nós desenvolvemos',
    description: 'Automação e inteligência artificial construídas do zero para o seu processo. Conectamos dados, sistemas e pessoas conforme sua necessidade.',
    accent: '#06b6d4',
  },
  {
    id: 'previsao',
    icon: LineChart,
    name: 'Previsão de Compras',
    tagline: 'Antecipe a demanda antes que falte',
    description: 'Modelos preditivos integrados ao seu banco de dados e CRM que identificam quando cada cliente precisará recomprar.',
    accent: '#22c55e',
  },
  {
    id: 'dashboards',
    icon: MonitorDot,
    name: 'Dashboards Inteligentes',
    tagline: 'Decisão baseada em dados reais',
    description: 'Painéis customizados que consolidam produção, vendas, financeiro e estoque em tempo real — acessíveis de qualquer dispositivo.',
    accent: '#f97316',
  },
  {
    id: 'integracoes',
    icon: Workflow,
    name: 'Integrações ERP & CRM',
    tagline: 'Seus sistemas falando a mesma língua',
    description: 'Conectamos ERP, CRM, e-commerce e WhatsApp para eliminar retrabalho, erros manuais e inconsistência de informações.',
    accent: '#eab308',
  },
  {
    id: 'churn',
    icon: UsersRound,
    name: 'Análise de Churn & Retenção',
    tagline: 'Identifique quem está prestes a sair',
    description: 'Algoritmos que detectam padrões de comportamento e sinalizam clientes em risco antes da perda — ação proativa, não reativa.',
    accent: '#ec4899',
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section ref={ref} id="modules" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-surface to-surface pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            O que fazemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-content"
          >
            Automação que resolve.{' '}
            <span className="text-gradient">Resultado que aparece.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-7 rounded-2xl glass overflow-hidden group transition-all duration-300"
              style={{
                borderColor: hovered === svc.id ? `${svc.accent}40` : undefined,
                boxShadow: hovered === svc.id ? `0 0 40px ${svc.accent}12` : undefined,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 50% at 0% 0%, ${svc.accent}10, transparent)` }}
              />

              {/* Icon — larger and more prominent */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${svc.accent}18`,
                  border: `1px solid ${svc.accent}25`,
                  boxShadow: `0 0 20px ${svc.accent}10`,
                }}
              >
                <svc.icon className="w-7 h-7" style={{ color: svc.accent }} strokeWidth={1.5} />
              </div>

              <h3 className="font-display font-bold text-base text-content mb-1">{svc.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: svc.accent }}>
                {svc.tagline}
              </p>
              <p className="text-sm text-white/45 leading-relaxed">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
