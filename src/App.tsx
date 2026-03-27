import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, CreditCard, BrainCircuit, Code2, Sparkles, PenTool, Clock3, Building2, BarChart3, Briefcase } from 'lucide-react'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { BorderBeam } from '@/components/magicui/border-beam'
import './App.css'

const LINKEDIN_PROFILE =
  'https://www.linkedin.com/in/wellington-de-moura-silveira-9b5947136/'
const BEHANCE_PROFILE = 'https://www.behance.net/wellinwell1994'

/* --- Experience Data --- */
const experiences = [
  {
    company: 'meutudo',
    role: 'Product Designer',
    mediaLabel: 'Componentes de seguros',
    mediaImage: '/imagemhome/imagem1.png',
    problema: 'Experiência de seguros fragmentada, com baixa clareza na navegação, dificuldades no entendimento do produto e fricções no pós-venda.',
    solucao: [
      'Refatoração da subhome de seguros',
      'Reestruturação da jornada de contratação e gerenciamento',
      'Criação da jornada de acionamento de seguro',
      'Padronização da experiência entre produtos (vida e renda)',
      'Melhoria da jornada de pós-venda',
      'Uso de métricas para tomada de decisão',
    ],
    resultado: [
      'Aumento de clareza e entendimento do produto pelos usuários',
      'Redução de fricções na navegação',
      'Evolução da tomada de decisão baseada em dados',
    ],
  },
  {
    company: 'Grupo Ybera Paris',
    role: 'Product Designer',
    mediaLabel: 'Fluxo Ybera Club',
    mediaImage: '/imagemhome/imagem2.png',
    problema: 'Baixo engajamento dos usuários e ausência de estratégias estruturadas de retenção.',
    solucao: [
      'Criação da jornada de gamificação',
      'Refatoração da plataforma',
      'Levantamento de dores dos usuários',
      'Implementação de melhorias contínuas',
    ],
    resultado: [
      'Aumento do engajamento dos usuários',
      'Maior retenção dentro da plataforma',
      'Evolução da maturidade de produto',
    ],
  },
  {
    company: 'Trinus',
    role: 'Product Designer',
    tag: 'Real Estate & FinTech',
    mediaLabel: 'Dashboard de rentabilidade',
    mediaImage: '/imagemhome/imagem3.png',
    problema: 'Necessidade de centralizar a jornada de investimento imobiliário e gestão de recebíveis em uma plataforma única para investidores e parceiros.',
    solucao: [
      'Design de ecossistema digital focado em transparência de dados',
      'Dashboards de rentabilidade',
      'Fluxos de formalização de contratos digitais',
    ],
    resultado: [
      'Unificação da experiência do usuário entre diferentes produtos da holding',
      'Redução do tempo de suporte',
      'Aumento da autonomia do investidor',
    ],
  },
  {
    company: 'Banco BV',
    role: 'Product Designer',
    tag: 'Banco de Varejo',
    mediaLabel: 'Interface mobile',
    mediaImage: '/imagemhome/imagem4.png',
    mediaImageOffsetY: 88,
    problema: 'Modernização da jornada de crédito e financiamento de veículos para tornar o processo menos burocrático e mais focado no autoatendimento.',
    solucao: [
      'Refinamento de componentes de interface (UI)',
      'Testes de usabilidade para otimizar conversão',
      'Otimização de simulações de financiamento',
    ],
    resultado: [
      'Melhoria na fluidez da jornada de contratação',
      'Alinhamento do Design System com objetivos de negócio',
      'Métricas HEART para mensurar a saúde do produto e eficiência da jornada',
    ],
  },
]

/* --- Motion variants --- */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const resultItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2 + i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
}

/* --- Experience Card Component --- */
function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-[32px] rounded-card border border-white/[0.08] bg-cimento-queimado/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-cimento-queimado-hover/90"
    >
      {/* Media placeholder */}
      <div className="lg:w-[42%] lg:min-w-[320px] aspect-video lg:aspect-[4/3] bg-page-secondary/60 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex items-center justify-center shrink-0">
        {'mediaImage' in exp && exp.mediaImage ? (
          <img
            src={exp.mediaImage}
            alt={`${exp.company} — ${exp.mediaLabel}`}
            className="h-full w-full object-cover object-center"
            style={{
              objectPosition: `center calc(50% + ${'mediaImageOffsetY' in exp && exp.mediaImageOffsetY ? exp.mediaImageOffsetY : 0}px)`,
            }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-typography-secondary/50">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wider">{exp.mediaLabel}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 lg:p-8 min-w-0">
        <header className="mb-6">
          <h3 className="text-xl font-semibold text-typography-primary group-hover:text-accent-cyan transition-colors">{exp.company}</h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <p className="text-label font-medium text-typography-secondary uppercase tracking-wider">{exp.role}</p>
            {'tag' in exp && exp.tag && (
              <span className="text-label font-medium text-accent-cyan/80 uppercase tracking-wider">• {exp.tag}</span>
            )}
          </div>
        </header>

        <div className="space-y-6 max-w-[65ch]">
          {/* Problema */}
          <div>
            <p className="text-[0.7rem] font-semibold text-typography-secondary uppercase tracking-wider mb-2">Contexto do problema</p>
            <p className="text-[0.9375rem] text-typography-primary leading-relaxed">{exp.problema}</p>
          </div>

          {/* Solução */}
          <div>
            <p className="text-[0.7rem] font-semibold text-typography-secondary uppercase tracking-wider mb-2">Solução implementada</p>
            <ul className="space-y-1.5">
              {exp.solucao.map((item, i) => (
                <li key={i} className="text-[0.9375rem] text-typography-primary flex items-start gap-2">
                  <span className="text-accent-cyan mt-1.5 shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultado - Grid 2x2 com animação */}
          <div>
            <p className="text-[0.7rem] font-semibold text-accent-cyan uppercase tracking-wider mb-3">Resultado alcançado</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exp.resultado.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  variants={resultItemVariants}
                  className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                >
                  <span className="text-accent-cyan shrink-0 mt-0.5">•</span>
                  <span className="text-[0.9375rem] text-typography-primary leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* --- Animated Counter --- */
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeOut * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* --- Hero Visual: Abstract neon tech illustration --- */
function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg h-80 lg:h-96 flex items-center justify-center animate-float">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
        {/* Outer glow ring */}
        <circle cx="200" cy="200" r="140" stroke="url(#heroGrad1)" strokeWidth="1" opacity="0.4" className="animate-pulse" />
        <circle cx="200" cy="200" r="120" stroke="url(#heroGrad2)" strokeWidth="0.5" opacity="0.6" />
        {/* Abstract person/VR silhouette */}
        <ellipse cx="200" cy="220" rx="45" ry="70" fill="rgba(20,20,20,0.6)" stroke="url(#heroGrad2)" strokeWidth="1.5" opacity="0.9" />
        {/* VR headset shape */}
        <path d="M165 185 Q200 165 235 185 L235 210 Q200 195 165 210 Z" fill="none" stroke="url(#heroGrad1)" strokeWidth="2" opacity="0.9" />
        <circle cx="200" cy="195" r="8" fill="url(#heroGrad1)" opacity="0.8" />
        {/* Floating tech elements */}
        <circle cx="100" cy="120" r="4" fill="#22D3EE" opacity="0.8" className="animate-float-slow" />
        <circle cx="300" cy="280" r="3" fill="#FF4D8D" opacity="0.8" className="animate-float" style={{ animationDelay: '2s' }} />
        <rect x="280" y="100" width="8" height="8" rx="2" fill="url(#heroGrad1)" opacity="0.6" className="animate-float-slow" style={{ animationDelay: '1s' }} />
        <rect x="110" y="260" width="6" height="6" rx="1" fill="#00D4FF" opacity="0.6" className="animate-float" style={{ animationDelay: '3s' }} />
        {/* Grid lines */}
        <line x1="200" y1="60" x2="200" y2="340" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <line x1="60" y1="200" x2="340" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3385" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4D8D" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#FF3385" />
          </linearGradient>
        </defs>
      </svg>
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-pink-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-cyan-500/15 blur-3xl animate-float-slow" />
    </div>
  )
}

const featuredProjects = [
  {
    title: 'Jornada de Acionamento de Seguro',
    description: 'Fluxo crítico para usuários acionarem seguros, com foco em clareza e confiança em momentos sensíveis.',
    tag: 'UX / Design de Serviço',
    icon: Receipt,
    mediaLabel: 'Fluxo de acionamento',
    casePath: '/case/acionamento-seguro',
    mediaImage: '/acionarseguro/imagem1.png',
  },
  {
    title: 'Redesign da Subhome de Seguros',
    description: 'Reestruturação completa da experiência de seguros, melhorando navegação, clareza e usabilidade em todo o produto.',
    tag: 'Fintech / Seguros',
    icon: CreditCard,
    mediaLabel: 'Subhome de seguros',
    casePath: '/case/subhome-seguros',
    mediaImage: '/novahome/imagem1.png',
  },
  {
    title: 'Aprovação de Transação',
    description:
      'Redução de 30% no tempo de aprovação de operações complexas e maior conformidade regulatória',
    tag: 'Aumento de produtividade / Estratégia de produto',
    icon: BarChart3,
    mediaLabel: 'Fluxo Trinus',
    casePath: '/case/aprovacao-transacao',
    mediaImage: '/imagensTrinus/Imagem2.png',
    mediaImageOffsetX: 24,
  },
]

/* --- Project Card (bento - supports compact variant) --- */
function ProjectCard({ project, index, compact = false }: { project: (typeof featuredProjects)[0]; index: number; compact?: boolean }) {
  const Icon = project.icon
  const className = `group flex flex-col ${compact ? 'lg:flex-row' : 'lg:flex-row'} gap-6 lg:gap-[32px] rounded-card border border-white/[0.08] bg-cimento-queimado/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-cimento-queimado-hover/90`
  const motionCardProps = {
    custom: index,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin: '-50px' as const },
    variants: cardVariants,
    className,
  }

  const inner = (
    <>
      {/* Media placeholder: imagem opcional ou ícone + rótulo */}
      <div
        className={`${
          compact ? 'w-full min-h-0 lg:w-[38%] lg:min-w-[240px]' : 'w-full min-h-0 lg:w-[42%] lg:min-w-[320px]'
        } aspect-video lg:aspect-[4/3] bg-page-secondary/60 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex shrink-0 items-center justify-center relative overflow-hidden`}
      >
        {'mediaImage' in project && project.mediaImage ? (
          <img
            src={project.mediaImage}
            alt={`${project.title} — ${project.mediaLabel}`}
            className="absolute inset-0 block h-full w-full max-h-none max-w-none object-cover object-center"
            style={{
              objectPosition: `calc(50% + ${'mediaImageOffsetX' in project && project.mediaImageOffsetX ? project.mediaImageOffsetX : 0}px) center`,
            }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-typography-secondary/50 group-hover:text-accent-cyan/70 transition-colors">
            <Icon className={`${compact ? 'w-10 h-10' : 'w-14 h-14'}`} strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-wider">{project.mediaLabel}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 p-6 ${compact ? 'lg:p-6' : 'lg:p-8'} min-w-0 flex flex-col justify-center`}>
        <span className="text-[0.7rem] font-semibold text-typography-secondary uppercase tracking-wider mb-2">{project.tag}</span>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold text-typography-primary mb-3 group-hover:text-accent-cyan transition-colors`}>
          {project.title}
        </h3>
        <p className={`text-[0.9375rem] text-typography-primary leading-relaxed ${compact ? 'max-w-none line-clamp-3' : 'max-w-[65ch]'} mb-4`}>
          {project.description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan group-hover:gap-3 transition-all">
          Ver case
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
      </div>
    </>
  )

  if ('casePath' in project && project.casePath) {
    const to = project.casePath
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    )
  }

  return (
    <motion.a {...motionCardProps} href="#">
      {inner}
    </motion.a>
  )
}

const impactMetrics = [
  { value: 40, prefix: '-', suffix: '%', label: 'de redução em bloqueios indevidos de conta' },
  { value: 30, prefix: '-', suffix: '%', label: 'no tempo na aprovação de transações' },
  { value: 15, prefix: '+', suffix: '%', label: 'aumento na satisfação do usuário feita através da análise SUS' },
]

function App() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Floating gradient lights in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-[12px]">
        <div className="mx-auto w-full max-w-[56rem] px-6 md:px-8 flex items-center justify-between h-20">
          <a href="#" className="font-semibold text-typography-primary text-lg tracking-tight hover:text-accent-cyan transition-colors duration-300">
            Portfólio
          </a>
          <nav className="flex items-center gap-6 md:gap-10">
            <a href="#projects" className="text-typography-secondary text-sm font-medium hover:text-typography-primary transition-colors duration-300">
              Projetos
            </a>
            <a href="#about" className="text-typography-secondary text-sm font-medium hover:text-typography-primary transition-colors duration-300">
              Sobre
            </a>
            <a href="#experience" className="px-6 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:shadow-neon hover:scale-105 transition-all duration-300">
              Experiência
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-section-lg mx-auto w-full max-w-[56rem] px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-hero md:text-hero-lg font-extrabold text-typography-primary max-w-2xl leading-[1.1] tracking-tight">
                Product Designer focado em{' '}
                <span className="bg-gradient-to-r from-accent-pink via-accent-magenta to-accent-cyan bg-clip-text text-transparent">
                  produtos complexos
                </span>{' '}
                e decisões baseadas em dados
              </h1>
              <p className="text-typography-secondary text-lg max-w-xl leading-relaxed">
                Experiência em fintech, seguros e produtos digitais de alto impacto
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-accent-pink via-accent-magenta to-accent-cyan hover:shadow-neon hover:shadow-accent-pink/30 hover:scale-105 transition-all duration-300"
              >
                Ver meus trabalhos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Featured Projects - Bento Box (1 em cima, 2 embaixo) */}
        <section id="projects" className="py-section mx-auto w-full max-w-[56rem] px-6 md:px-8">
          <h2 className="text-section font-semibold text-typography-primary mb-16">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - full width em cima */}
            <div className="lg:col-span-2">
              <ProjectCard project={featuredProjects[0]} index={0} />
            </div>
            {/* Cards 2 e 3 - lado a lado embaixo */}
            <ProjectCard project={featuredProjects[1]} index={1} compact />
            <ProjectCard project={featuredProjects[2]} index={2} compact />
          </div>
        </section>

        {/* Impact Metrics - animação com motion */}
        <section className="py-section mx-auto w-full max-w-[56rem] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative p-8 rounded-card border border-white/[0.08] bg-cimento-queimado/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-cimento-queimado-hover/90 hover:shadow-[0_0_24px_rgba(255,51,133,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent mb-2"
                    >
                      {metric.prefix}<AnimatedCounter target={metric.value} suffix={metric.suffix} />
                    </motion.div>
                    <p className="text-typography-secondary text-base font-medium">
                      {metric.label}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Sobre Mim - Refatorado */}
        <section id="about" className="relative w-full py-section overflow-hidden bg-background">
          <FlickeringGrid
            className="absolute inset-0 z-0 opacity-[0.15]"
            squareSize={6}
            gridGap={8}
            color="#404040"
            maxOpacity={0.4}
            flickerChance={0.1}
          />
          <div className="relative z-10 mx-auto w-full max-w-[56rem] px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Coluna 1: Título, subtítulo e cards escaneáveis */}
              <div className="text-left space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-typography-primary">
                  Sobre Mim
                </h2>
                <p className="text-xl md:text-2xl font-semibold leading-snug bg-gradient-to-r from-accent-pink via-accent-magenta to-accent-cyan bg-clip-text text-transparent">
                  Product Designer Sênior | Transformando complexidade em resultados através de dados e design estratégico.
                </p>

                {/* Cards escaneáveis com BorderBeam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                  {[
                    { icon: Clock3, title: '10+ Anos de Trajetória', desc: 'Especialista no ecossistema de produtos digitais.' },
                    { icon: Building2, title: 'Setores de Alta Complexidade', desc: 'Fintech, Real Estate e Insurtech.' },
                    { icon: Briefcase, title: 'Experiência de Mercado', desc: 'Vivo, Zoop, Ebanx, Agence e outras.' },
                    { icon: Sparkles, title: 'Workflow com IA', desc: 'Uso avançado de Cursor e Figma AI.' },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="group relative p-5 md:p-6 bg-white/[0.03] rounded-card border border-white/[0.08] space-y-2 overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]"
                    >
                      <BorderBeam
                        size={150}
                        duration={12}
                        delay={idx * 2}
                        colorFrom="#FF3385"
                        colorTo="#00D4FF"
                        borderWidth={1}
                        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="relative flex items-center gap-3">
                        <card.icon className="h-6 w-6 md:h-7 md:w-7 shrink-0 text-accent-cyan" />
                        <h4 className="text-base md:text-lg font-bold text-typography-primary">{card.title}</h4>
                      </div>
                      <p className="relative text-sm text-typography-secondary leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2: OrbitingCircles dinâmico (sem "Tech" estático) */}
              <div className="relative flex h-[450px] md:h-[550px] w-full items-center justify-center overflow-hidden rounded-card">
                <div className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px]">
                  {/* Ícone central */}
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cimento-queimado/90 border-2 border-accent-pink/20 shadow-[0_0_30px_rgba(255,51,133,0.2)]">
                    <BrainCircuit className="h-7 w-7 md:h-8 md:w-8 text-accent-cyan" />
                  </div>
                  {/* Órbita 1 - interna, rápida (Design/IA) */}
                  <OrbitingCircles radius={90} duration={14} path={false} iconSize={36}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cimento-queimado/90 border border-white/10 text-accent-pink">
                      <PenTool className="h-4 w-4" />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cimento-queimado/90 border border-white/10 text-accent-magenta">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cimento-queimado/90 border border-white/10 text-accent-cyan">
                      <Code2 className="h-4 w-4" />
                    </div>
                  </OrbitingCircles>
                  {/* Órbita 2 - média, sentido inverso (metodologias) */}
                  <OrbitingCircles radius={150} duration={22} reverse path iconSize={32}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-typography-secondary">
                      <span className="text-[10px] font-bold">UX</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-typography-secondary">
                      <span className="text-[10px] font-bold">UI</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-typography-secondary">
                      <span className="text-[10px] font-bold">IA</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-typography-secondary">
                      <span className="text-[10px] font-bold">DS</span>
                    </div>
                  </OrbitingCircles>
                  {/* Órbita 3 - externa, lenta (dados/testes) */}
                  <OrbitingCircles radius={220} duration={32} path iconSize={28}>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-typography-secondary">
                      <BarChart3 className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-typography-secondary">
                      <Code2 className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-typography-secondary">
                      <Building2 className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-typography-secondary">
                      <span className="text-[9px] font-bold">Testes</span>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-typography-secondary">
                      <span className="text-[9px] font-bold">Dados</span>
                    </div>
                  </OrbitingCircles>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Experience - Cards verticais */}
        <section id="experience" className="py-section mx-auto w-full max-w-[56rem] px-6 md:px-8">
          <h2 className="text-section font-semibold text-typography-primary mb-12">
            Experiência
          </h2>

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </section>

        {/* CTA - Currículo LinkedIn */}
        <section className="py-section mx-auto w-full max-w-[56rem] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group relative rounded-card border border-white/[0.08] bg-cimento-queimado/80 backdrop-blur-sm overflow-hidden p-8 md:p-12 text-center transition-all duration-300 hover:border-white/[0.12] hover:bg-cimento-queimado-hover/90"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-pink/5 via-transparent to-accent-cyan/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <p className="relative text-xl md:text-2xl font-semibold text-typography-primary mb-6">
              Deseja ver minha trajetória completa?
            </p>
            <a
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:shadow-neon hover:shadow-accent-pink/30 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Acessar Currículo no LinkedIn
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 border-t border-white/10">
          <div className="mx-auto w-full max-w-[56rem] px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-typography-secondary text-sm">
              © {new Date().getFullYear()} Portfólio de Senior Product Designer
            </p>
            <div className="relative z-10 flex gap-6">
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-typography-secondary text-sm hover:text-accent-cyan transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href={BEHANCE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-typography-secondary text-sm hover:text-accent-cyan transition-colors cursor-pointer"
              >
                Behance
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
