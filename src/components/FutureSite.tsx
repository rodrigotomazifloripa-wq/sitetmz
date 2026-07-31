import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  CircuitBoard,
  Factory,
  Menu,
  MessageCircle,
  Workflow,
  X,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/5548988776092?text=Olá!%20Vim%20pelo%20site%20da%20TMZ%20Co.%20e%20quero%20conversar%20sobre%20uma%20solução.'

const services = [
  {
    icon: Factory,
    index: '01',
    title: 'Automação industrial',
    text: 'Integramos robôs, máquinas, sensores e sistemas para criar operações mais precisas, seguras e produtivas.',
  },
  {
    icon: CircuitBoard,
    index: '02',
    title: 'Sistemas sob medida',
    text: 'Desenvolvemos plataformas que traduzem a rotina real da empresa — sem obrigar sua operação a caber em um software genérico.',
  },
  {
    icon: BrainCircuit,
    index: '03',
    title: 'IA aplicada ao negócio',
    text: 'Usamos inteligência artificial onde ela gera valor: análise, previsão, atendimento, decisão e execução de tarefas.',
  },
  {
    icon: Workflow,
    index: '04',
    title: 'Integração de processos',
    text: 'Conectamos ERP, CRM, equipamentos, dados e equipes para eliminar ilhas de informação e retrabalho.',
  },
  {
    icon: Bot,
    index: '05',
    title: 'Robótica e células inteligentes',
    text: 'Projetamos a inteligência que coordena robôs e processos industriais, da necessidade ao funcionamento em campo.',
  },
  {
    icon: ChartNoAxesCombined,
    index: '06',
    title: 'Dados que orientam ação',
    text: 'Transformamos dados dispersos em painéis, alertas e indicadores que revelam o que precisa acontecer agora.',
  },
]

const process = [
  {
    number: '01',
    title: 'Imersão na operação',
    text: 'Entramos no contexto da empresa, ouvimos as pessoas e observamos como processos, sistemas e máquinas funcionam de verdade.',
  },
  {
    number: '02',
    title: 'Diagnóstico profundo',
    text: 'Mapeamos causas, gargalos, riscos e oportunidades. A tecnologia só entra depois que o problema está claro.',
  },
  {
    number: '03',
    title: 'Solução sem fronteiras',
    text: 'Combinamos software, automação, robótica, dados e IA na medida certa — uma arquitetura feita para a sua realidade.',
  },
  {
    number: '04',
    title: 'Evolução contínua',
    text: 'Implantamos, medimos e refinamos. A solução acompanha a operação e continua gerando resultado depois da entrega.',
  },
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.52, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function MediaVideo({ src, label, className = '' }: { src: string; label: string; className?: string }) {
  return (
    <figure className={`media-frame ${className}`}>
      <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={label} />
      <div className="media-vignette" aria-hidden="true" />
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export function FutureSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="future-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#inicio" className="brand-word" aria-label="TMZ Co. — início">TMZ <span>Co.</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#metodo">Método</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button button-small desktop-cta">Iniciar conversa</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} aria-label="Navegação móvel">
            {['solucoes', 'metodo', 'experiencia', 'contato'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item === 'metodo' ? 'Método' : item[0].toUpperCase() + item.slice(1)}</a>
            ))}
          </motion.nav>
        )}
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero-section">
          <video className="hero-video" src="/media/hero-robot.mp4" autoPlay muted loop playsInline preload="auto" aria-label="Robô em movimento representando a integração entre tecnologia e indústria" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>25+ anos transformando operações</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease: [0.2, 0.8, 0.2, 1] }}>
              Onde a operação<br />encontra <em>inteligência.</em>
            </motion.h1>
            <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              Sistemas, automação industrial, robótica e IA conectados para resolver o que limita o seu negócio.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.56 }}>
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Analisar minha operação <ArrowRight /></a>
              <a className="text-link" href="#metodo">Conhecer nosso método <ArrowDownRight /></a>
            </motion.div>
          </div>
          <div className="hero-proof"><strong>25+</strong><span>anos de experiência<br />entre negócio e tecnologia</span></div>
        </section>

        <section className="statement-section">
          <Reveal className="statement-grid">
            <p className="section-index">01 / POSICIONAMENTO</p>
            <h2>Não vendemos tecnologia.<br /><span>Resolvemos operações.</span></h2>
            <p className="statement-copy">Antes de propor uma ferramenta, investigamos o negócio em profundidade. A solução pode estar em um sistema, em um robô, em IA — ou na integração inteligente de tudo isso.</p>
          </Reveal>
        </section>

        <section id="solucoes" className="services-section page-section">
          <div className="section-heading">
            <div><p className="section-index">02 / CAPACIDADES</p><h2>Tecnologia sem<br />fronteiras artificiais.</h2></div>
            <p>Escolhemos a tecnologia pelo problema que ela resolve, não pelo rótulo que ela carrega.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.article key={service.title} className="service-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="card-top"><span>{service.index}</span><service.icon aria-hidden="true" /></div>
                <h3>{service.title}</h3><p>{service.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="industrial-story page-section">
          <MediaVideo src="/media/robot-operation.mp4" label="Robô industrial em operação" />
          <Reveal className="story-copy">
            <p className="section-index">ENGENHARIA EM MOVIMENTO</p>
            <h2>Do código ao chão de fábrica.</h2>
            <p>Quando software, automação e robótica deixam de trabalhar separados, a operação ganha ritmo, rastreabilidade e capacidade de evoluir.</p>
            <ul><li>Integração entre máquinas e sistemas</li><li>Automação orientada por dados</li><li>Robôs aplicados a desafios reais</li></ul>
          </Reveal>
        </section>

        <section id="metodo" className="method-section page-section">
          <div className="section-heading"><div><p className="section-index">03 / MÉTODO TMZ</p><h2>A solução começa<br />antes da tecnologia.</h2></div><p>Análise profunda para encontrar a causa — não apenas aliviar o sintoma.</p></div>
          <div className="process-list">
            {process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section id="experiencia" className="experience-section page-section">
          <Reveal className="experience-number"><span>+</span>25<small>ANOS</small></Reveal>
          <Reveal className="experience-copy">
            <p className="section-index">EXPERIÊNCIA QUE LÊ O CONTEXTO</p>
            <h2>Visão técnica.<br />Entendimento de negócio.</h2>
            <p>Mais de duas décadas acompanhando a evolução da tecnologia e, principalmente, as transformações das empresas. Essa experiência permite enxergar relações que uma análise superficial não encontra.</p>
            <p>Não começamos pela resposta pronta. Fazemos as perguntas certas, conectamos as dores da operação e construímos uma solução inovadora, viável e alinhada ao resultado esperado.</p>
          </Reveal>
        </section>

        <section className="presentation-story page-section">
          <Reveal className="story-copy">
            <p className="section-index">TECNOLOGIA QUE AS PESSOAS ENTENDEM</p>
            <h2>Complexidade por dentro.<br />Clareza para decidir.</h2>
            <p>Apresentamos cada solução de forma transparente: o problema identificado, a lógica aplicada e o impacto esperado na operação. Porque inovação só cria confiança quando pode ser compreendida.</p>
          </Reveal>
          <MediaVideo src="/media/client-presentation.mp4" label="Apresentação de sistema para clientes" />
        </section>

        <section id="contato" className="contact-section">
          <div><p className="section-index">VAMOS OLHAR MAIS FUNDO?</p><h2>Seu próximo avanço pode estar escondido no processo de hoje.</h2></div>
          <a className="contact-circle" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Conversar com a TMZ Co. pelo WhatsApp"><MessageCircle /><span>Iniciar<br />diagnóstico</span><ArrowRight /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a href="#inicio" className="brand-word">TMZ <span>Co.</span></a>
          <p>Sistemas · Automação industrial<br />Robótica · Inteligência artificial</p>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contato</p>
          <a href="https://wa.me/5548988776092" target="_blank" rel="noreferrer">+55 48 98877-6092</a>
          <a href="mailto:contato@tmzconect.com">contato@tmzconect.com</a>
        </div>
        <div className="footer-location">
          <p className="footer-label">Base</p>
          <p>Florianópolis, SC<br />Atendimento em todo o Brasil</p>
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} TMZ Co.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
