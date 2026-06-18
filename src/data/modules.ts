import {
  TrendingUp,
  Factory,
  UserSearch,
  Sparkles,
  Orbit,
  BarChart3,
  Boxes,
  Landmark,
} from 'lucide-react'
import type { ComponentType } from 'react'

export interface Module {
  id: string
  name: string
  tagline: string
  description: string
  accent: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
}

export const MODULES: Module[] = [
  {
    id: 'foresight',
    name: 'Previsão de Demanda',
    tagline: 'Inteligência de Tendências de Compra',
    description: 'Antecipe a próxima compra de cada cliente com previsões baseadas em histórico e padrões de consumo.',
    accent: '#f97316',
    icon: TrendingUp,
  },
  {
    id: 'prism',
    name: 'Produção',
    tagline: 'Dashboard de Produção em Tempo Real',
    description: 'Acompanhe produção, expedição e carteira financeira em um painel vivo e atualizado.',
    accent: '#3b82f6',
    icon: Factory,
  },
  {
    id: 'lumina',
    name: 'Clientes',
    tagline: 'Análise 360° por Cliente',
    description: 'Visão completa de cada cliente: histórico, ticket médio, produtos e comportamento de compra.',
    accent: '#22c55e',
    icon: UserSearch,
  },
  {
    id: 'genesis',
    name: 'Orçamentos',
    tagline: 'Orçamentação com Inteligência Artificial',
    description: 'Gere orçamentos precisos em minutos com análise inteligente de embalagens e custos.',
    accent: '#a855f7',
    icon: Sparkles,
  },
  {
    id: 'orbit',
    name: 'Vendas',
    tagline: 'Gestão de Relacionamento Comercial',
    description: 'Pipeline de vendas, conversão por vendedor e origem dos leads em um CRM visual.',
    accent: '#06b6d4',
    icon: Orbit,
  },
  {
    id: 'apex',
    name: 'BI Executivo',
    tagline: 'Business Intelligence Executivo',
    description: 'Indicadores estratégicos de receita, margem e crescimento para a decisão executiva.',
    accent: '#eab308',
    icon: BarChart3,
  },
  {
    id: 'vault',
    name: 'Estoque',
    tagline: 'Gestão Inteligente de Estoque',
    description: 'Controle de estoque com alertas críticos, curva ABC e giro inteligente de produtos.',
    accent: '#ec4899',
    icon: Boxes,
  },
  {
    id: 'meridian',
    name: 'Financeiro',
    tagline: 'Painel Financeiro para Decisão',
    description: 'DRE, fluxo de caixa e inadimplência consolidados para decisões financeiras seguras.',
    accent: '#14b8a6',
    icon: Landmark,
  },
]
