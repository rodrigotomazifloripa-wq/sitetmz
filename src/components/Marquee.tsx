const ITEMS = [
  'Agentes de IA',
  'Automação sob medida',
  'Previsão de Compras',
  'Dashboards Inteligentes',
  'Integração ERP & CRM',
  'Análise de Churn',
  'Soluções Personalizadas',
  'IA para seu negócio',
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface/50 py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
