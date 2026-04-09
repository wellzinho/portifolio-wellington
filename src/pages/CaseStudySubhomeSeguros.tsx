import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BarChart3, Layers, Search, Sparkles, Target } from 'lucide-react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'

/** Conteúdo editorial: ~800–1000px, centralizado; texto alinhado à esquerda */
const shell = 'mx-auto w-full max-w-[56rem] text-left'

/** Corpo: sans limpa, cinza (não preto), entrelinha 1.6 */
const body = 'text-[1rem] leading-[1.6] text-typography-secondary'

/** H1: grande, bold, pouca entrelinha */
const h1 = 'text-4xl font-bold tracking-tight text-typography-primary md:text-5xl md:leading-[1.05]'

/** Subtítulos de seção (H2): médio-grande, bold; espaço acima vem do fluxo entre seções */
const sectionH2 = 'text-xl font-bold tracking-tight text-typography-primary md:text-2xl scroll-mt-24'

/** H3 em blocos (ex.: intro em duas colunas) */
const blockH3 = 'text-lg font-bold tracking-tight text-typography-primary md:text-xl'

/** Placeholders de imagem: largura do container, cantos, sombra sutil */
const mediaFrame =
  'relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-cimento-queimado/40 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.55)]'

/** Respiro vertical entre seções de texto / mídia */
const sectionGap = 'mb-16 md:mb-24'
const blockGap = 'mb-10 md:mb-14'

const resultIconWrap =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/[0.07] text-accent-cyan shadow-[0_0_24px_-8px_rgba(34,211,238,0.35)]'

export default function CaseStudySubhomeSeguros() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page-primary grid-bg">
      <div className="pointer-events-none fixed inset-0 z-0">
        <FlickeringGrid
          className="h-full w-full opacity-[0.12]"
          squareSize={5}
          gridGap={7}
          color="#525252"
          maxOpacity={0.32}
          flickerChance={0.1}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-page-primary/85 via-transparent to-page-primary/92" />

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/75 backdrop-blur-[12px]">
        <div className={`flex h-20 items-center justify-between px-6 md:px-8 ${shell}`}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-typography-secondary transition-colors hover:text-accent-cyan">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar ao portfólio
          </Link>
          <span className="text-label font-semibold uppercase tracking-wider text-typography-secondary/80">Caso de estudo</span>
        </div>
      </header>

      <article className="relative z-10 px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
        <div className={shell}>
          {/* 1. Título */}
          <h1 id="titulo-subhome-seguros" className={`${h1} ${blockGap}`}>
            Redesign da Subhome de Seguros
          </h1>

          {/* 2. Introdução em duas colunas: O Desafio + Atuação */}
          <section className={sectionGap} aria-labelledby="desafio-heading-subhome">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              <div className="space-y-4">
                <h3 id="desafio-heading-subhome" className={blockH3}>
                  O Desafio
                </h3>
                <p className={body}>
                  A subhome de seguros apresentava baixo engajamento e inconsistência estética em relação ao ecossistema da marca. O desafio era desvincular a percepção
                  visual de &quot;empréstimo&quot;, predominante nos outros produtos, e construir uma vitrine de serviços que fosse intuitiva, padronizada pelo Design
                  System e orientada às necessidades reais de gerenciamento e conversão.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className={blockH3}>Atuação</h3>
                <p className={body}>
                  Como Product Designer Sênior, liderei a imersão técnica e estratégica. Colaborei com os times de Dados e Research para mapear dores latentes, realizei
                  um benchmark interno rigoroso para garantir a consistência da plataforma e coordenei a validação técnica junto aos stakeholders.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Imagem — largura do container */}
          <div id="case-subhome-placeholder-01" className={`${mediaFrame} ${sectionGap} h-[380px] md:h-[480px]`}>
            <img
              src="/novahome/imagem1.png"
              alt="Mockup do redesign da subhome de seguros — navegação e produtos"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <BorderBeam size={300} duration={15} className="z-10" delay={0} colorFrom="#22c55e" colorTo="#fde047" />
            <BorderBeam
              size={300}
              duration={15}
              className="z-10"
              delay={7.5}
              borderWidth={2}
              colorFrom="#22c55e"
              colorTo="#fde047"
            />
          </div>

          {/* 4. Desenvolvimento e Imersão */}
          <section className={`${sectionGap} space-y-6`} aria-labelledby="imersao-heading-subhome">
            <h2 id="imersao-heading-subhome" className={`${sectionH2} mb-2`}>
              Desenvolvimento e Imersão
            </h2>
            <ul className="space-y-6 md:space-y-7">
              <li className="flex gap-4 md:gap-5">
                <span className={resultIconWrap} aria-hidden>
                  <BarChart3 className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 space-y-1.5">
                  <p className={`${body} font-bold text-typography-primary`}>Diagnóstico de Dados</p>
                  <p className={body}>
                    Em colaboração com o time de Dados, identificamos que o comportamento primário dos usuários era buscar por <strong className="font-semibold text-typography-primary">acionamento de seguro</strong>, <strong className="font-semibold text-typography-primary">suporte</strong> e <strong className="font-semibold text-typography-primary">consulta de apólices</strong>. Transformamos esses insights em atalhos inteligentes na interface.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 md:gap-5">
                <span className={resultIconWrap} aria-hidden>
                  <Search className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 space-y-1.5">
                  <p className={`${body} font-bold text-typography-primary`}>Imersão em Research</p>
                  <p className={body}>
                    Mapeamos que a <strong className="font-semibold text-typography-primary">falta de padronização</strong> gerava desorientação. A maior dor era a dificuldade em localizar seguros contratados e a <strong className="font-semibold text-typography-primary">falta de clareza no fluxo de contratação</strong> de novos produtos, como o Seguro de Vida.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <figure id="case-subhome-placeholder-02" className={`${mediaFrame} ${sectionGap} aspect-[4/3] py-[88px]`}>
            <img
              src="/novahome/imagem2.png"
              alt="Desenvolvimento e imersão — métricas, atalhos e exploração visual na subhome de seguros"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <BorderBeam size={300} duration={15} className="z-10" delay={0} colorFrom="#22c55e" colorTo="#fde047" />
            <BorderBeam
              size={300}
              duration={15}
              className="z-10"
              delay={7.5}
              borderWidth={2}
              colorFrom="#22c55e"
              colorTo="#fde047"
            />
          </figure>

          {/* 5. Prototipação e Refinamento */}
          <section className={`${sectionGap} space-y-6`} aria-labelledby="prototipacao-heading-subhome">
            <h2 id="prototipacao-heading-subhome" className={`${sectionH2} mb-2`}>
              Prototipação e Refinamento
            </h2>
            <div className="space-y-6">
              <p className={body}>
                A refatoração da subhome de seguros não foi um exercício de estética, mas de arquitetura de decisão. O desafio era apresentar produtos complexos (Vida e
                Renda) e ofertas isoladas (Stand-alone) de forma que o usuário não se sentisse &quot;bombardeado&quot; por ofertas, mas sim &quot;protegido&quot; por
                soluções.
              </p>

              <div className="space-y-5">
                <section className="space-y-2">
                  <h3 className={`${body} font-bold text-typography-primary`}>1. A Hero Vision: Proteção em Primeiro Lugar</h3>
                  <p className={body}>
                    No topo da hierarquia, estabeleci uma <em className="font-medium text-typography-primary">Hero Section</em> dinâmica. O objetivo foi dar visibilidade
                    imediata aos seguros contratáveis de forma isolada, criando um ponto de entrada direto e sem distrações. Isso resolve a dor de quem busca uma solução
                    específica, removendo camadas de navegação.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className={`${body} font-bold text-typography-primary`}>2. Atalhos Estratégicos: Redução de Fricção</h3>
                  <p className={body}>
                    Logo abaixo da Hero, posicionei os atalhos de gestão para reduzir a carga cognitiva (
                    <em className="font-medium text-typography-primary">Cognitive Load</em>). O usuário que já é cliente não quer procurar como acionar o seguro: ele
                    precisa de acessibilidade imediata. A proximidade dos botões de gestão com a oferta principal reforça a sensação de controle sobre o produto.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className={`${body} font-bold text-typography-primary`}>3. O Gancho do Diferencial: A Prova Social do Sorteio</h3>
                  <p className={body}>
                    Introduzi o card de Sorteios Mensais como elemento de quebra de padrão. Ele não é apenas um benefício; é um gatilho emocional que diferencia a meutudo.
                    do mercado tradicional e frio de seguros. Ao destacar o valor do prêmio e a proximidade do próximo sorteio, transformamos a manutenção do seguro em
                    expectativa positiva (ganho), e não apenas em custo (perda).
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className={`${body} font-bold text-typography-primary`}>4. Scroll Progressivo vs. Carga Cognitiva</h3>
                  <p className={body}>
                    Para novas ofertas, utilizei scroll vertical segmentado. Em vez de uma grade densa, os produtos aparecem de forma sequencial. Essa técnica de{' '}
                    <em className="font-medium text-typography-primary">Progressive Disclosure</em> garante que o usuário processe uma oferta por vez, evita paralisia de
                    escolha e mantém a interface mobile-first moderna e leve, alinhada aos padrões de players como Nubank.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className={`${body} font-bold text-typography-primary`}>5. Humanização e Branding</h3>
                  <p className={body}>
                    O resultado final afasta a percepção de crédito consignado para um posicionamento de seguro e cuidado. A hierarquia de cores e o espaçamento generoso (
                    <em className="font-medium text-typography-primary">whitespace</em>) foram calibrados para transmitir transparência e confiança, elementos fundamentais
                    para conversão em produtos de proteção financeira.
                  </p>
                </section>
              </div>

              <p className={body}>
                <a
                  href="https://www.figma.com/design/BDgOHsNn37XDhAhjH1ZKv3/nova-home?node-id=1-7964&t=2ZECJ7pFdpPocPgA-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline underline-offset-2 transition-colors hover:text-accent-cyan/80"
                >
                  Ver protótipo
                </a>
              </p>
            </div>
          </section>

          <section className="relative mb-20 overflow-hidden rounded-2xl border border-white/[0.08] bg-cimento-queimado/30 p-5 md:mb-28 md:p-8">
            <div className="relative z-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-8">
              <div className="space-y-4">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan md:text-left">DE: Subhome de Seguros (Visual Antigo)</p>
                <figure id="case-subhome-placeholder-04" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
                  <img
src="/novahome/imagem3.png"
              alt="Subhome de seguros antiga com inconsistências visuais e baixa padronização"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                  <BorderBeam size={300} duration={15} className="z-10" delay={0} colorFrom="#22c55e" colorTo="#fde047" />
                  <BorderBeam
                    size={300}
                    duration={15}
                    className="z-10"
                    delay={7.5}
                    borderWidth={2}
                    colorFrom="#22c55e"
                    colorTo="#fde047"
                  />
                </figure>
              </div>

              <div className="mx-auto hidden h-full items-center md:flex" aria-hidden>
                <div className="relative flex h-full min-h-[280px] items-center">
                  <span className="h-[72%] w-px bg-white/20" />
                  <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-page-primary/90 p-2 text-accent-cyan shadow-[0_0_22px_-8px_rgba(34,211,238,0.7)]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan md:text-left">
                  PARA: Subhome de Seguros (Redesign Padronizado)
                </p>
                <figure id="case-subhome-placeholder-05" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
                  <img
src="/novahome/imagem4.png"
              alt="Nova subhome de seguros padronizada como vitrine estratégica com atalhos inteligentes"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                  <BorderBeam size={300} duration={15} className="z-10" delay={0} colorFrom="#22c55e" colorTo="#fde047" />
                  <BorderBeam
                    size={300}
                    duration={15}
                    className="z-10"
                    delay={7.5}
                    borderWidth={2}
                    colorFrom="#22c55e"
                    colorTo="#fde047"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* Resultados — peso visual de conclusão (magic.ui: BorderBeam + grid tech) */}
          <section
            className={`relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-cimento-queimado/50 via-page-primary/80 to-page-primary/95 p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.55)] md:p-10 lg:p-12 ${sectionGap}`}
            aria-labelledby="resultados-heading-subhome"
          >
            <BorderBeam size={400} duration={18} className="z-[1] opacity-90" delay={0} colorFrom="#22d3ee" colorTo="#a855f7" />
            <BorderBeam
              size={400}
              duration={18}
              className="z-[1] opacity-90"
              delay={9}
              borderWidth={2}
              colorFrom="#a855f7"
              colorTo="#22d3ee"
            />
            <div className="relative z-10">
              <h2 id="resultados-heading-subhome" className={`${sectionH2} mb-8 text-2xl md:text-3xl md:leading-tight`}>
                Resultados
              </h2>
              <ul className="space-y-6 md:space-y-7">
                <li className="flex gap-4 md:gap-5">
                  <span className={resultIconWrap} aria-hidden>
                    <Layers className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className={`${body} font-bold text-typography-primary`}>Padronização Sistêmica</p>
                    <p className={body}>
                      Implementação total do Design System, otimizando a manutenção e futuras escalas.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 md:gap-5">
                  <span className={resultIconWrap} aria-hidden>
                    <BarChart3 className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className={`${body} font-bold text-typography-primary`}>Design Orientado a Dados</p>
                    <p className={body}>
                      Criação de atalhos baseados no comportamento real de uso, elevando o potencial de engajamento.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 md:gap-5">
                  <span className={resultIconWrap} aria-hidden>
                    <Sparkles className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className={`${body} font-bold text-typography-primary`}>Inovação no Workflow</p>
                    <p className={body}>
                      Aceleração do ciclo de design através de ferramentas de IA para geração de assets e protótipos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 md:gap-5">
                  <span className={resultIconWrap} aria-hidden>
                    <Target className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className={`${body} font-bold text-typography-primary`}>Foco em Conversão</p>
                    <p className={body}>
                      Estabelecimento de um storytelling visual claro que transformou a página em uma vitrine estratégica, dissociando-a da imagem de produtos de
                      crédito.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 md:gap-5">
                  <span className={resultIconWrap} aria-hidden>
                    <BarChart3 className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className={`${body} font-bold text-typography-primary`}>Métricas de Impacto</p>
                    <ul className={`${body} list-disc space-y-1 pl-5`}>
                      <li>
                        <strong className="font-semibold text-typography-primary">+40% de Engajamento:</strong> Através da padronização de cards e aumento da escaneabilidade, elevamos a interação com ofertas secundárias que antes eram ignoradas.
                      </li>
                      <li>
                        <strong className="font-semibold text-typography-primary">+15% em Conversão Stand-alone:</strong> O destaque visual estratégico e a hierarquia clara na Hero Section impulsionaram a contratação direta de produtos isolados.
                      </li>
                      <li>
                        <strong className="font-semibold text-typography-primary">-25% de Drop-off (Abandono):</strong> A redução da carga cognitiva e a padronização dos CTAs garantiram uma jornada fluida, mantendo o usuário no funil até a conclusão.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </article>

      <footer className="relative z-10 border-t border-white/[0.08] py-12 md:py-16" aria-label="Rodapé" />
    </div>
  )
}
