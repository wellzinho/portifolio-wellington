import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Layers, Link2, Mail, Network, Sparkles, Target, Users } from 'lucide-react'
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

/** Listas: bullets discretos, espaçamento entre itens */
const listBase = 'list-disc space-y-3 pl-5 marker:text-zinc-500/90 [li]:pl-1'

/** Ícones menores alinhados ao texto */
const icon = 'h-5 w-5 shrink-0 text-accent-cyan-bright'

/** Destaque técnico para Service Blueprint */
const blueprintHighlight =
  'relative overflow-hidden rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 px-5 py-4 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]'

/** Placeholders de imagem: largura do container, cantos, sombra sutil */
const mediaFrame =
  'relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-cimento-queimado/40 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.55)]'

/** Respiro vertical entre seções de texto / mídia */
const sectionGap = 'mb-16 md:mb-24'
const blockGap = 'mb-10 md:mb-14'

export default function CaseStudyAcionamentoSeguro() {
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
          <h1 id="titulo-acionar-seguro" className={`${h1} ${blockGap}`}>
            <span className="inline-flex items-center gap-3">
              <Target className={icon} aria-hidden />
              Acionar Seguro
            </span>
          </h1>

          {/* 2. Introdução em duas colunas: O Desafio + Atuação */}
          <section className={sectionGap} aria-labelledby="desafio-heading-acionamento">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              <div className="space-y-4">
                <h3 id="desafio-heading-acionamento" className={blockH3}>
                  <span className="inline-flex items-center gap-3">
                    <Target className={icon} aria-hidden />
                    O Desafio
                  </span>
                </h3>
                <p className={body}>
                  O desafio consistia em criar a primeira jornada nativa de acionamento de seguro (Sinistro) para perda de renda CLT. O projeto transformou um processo burocrático via telefone em uma experiência transparente, orquestrando fluxos complexos entre o app e operações de back-office sem dependência de APIs legadas.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className={blockH3}>
                  <span className="inline-flex items-center gap-3">
                    <Users className={icon} aria-hidden />
                    Atuação e Liderança de Design
                  </span>
                </h3>
                <p className={body}>
                  Como Product Designer Sênior, liderei o alinhamento estratégico entre Produto e Engenharia. Priorizei o MVP de Perda de Renda CLT com base no volume de dados e coordenei a criação de ferramentas de alinhamento (CSD e Blueprint) para garantir que as limitações técnicas da seguradora parceira não impactassem a confiança do usuário.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Imagem — largura do container */}
          <div id="case-acionamento-placeholder-01" className={`${mediaFrame} ${sectionGap} h-[300px] md:h-[520px] lg:h-[620px]`}>
            <img
              src="/acionarseguro/imagem2.png"
              alt="Mockup do Acionar Seguro — fluxo nativo e estados de confiança"
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

          {/* 4. Exploração */}
          <section className={`${sectionGap} space-y-8`} aria-labelledby="exploracao-heading-acionamento">
            <h2 id="exploracao-heading-acionamento" className={`${sectionH2} mb-2`}>
              Imersão e Estratégia
            </h2>

            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">
                  <span className="inline-flex items-center gap-3">
                    <Target className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                    Matriz CSD (Workshop Colaborativo):
                  </span>
                </strong>{' '}
                Realizei um workshop colaborativo com PMs e Tech Leads para alinhar o conhecimento do time. Definimos como Certeza a necessidade de uso do Design System; como Suposição, o ganho de confiança do usuário com a jornada nativa; e como Dúvida, a viabilidade técnica da comunicação com a seguradora parceira.{' '}
                <a
                  href="https://www.figma.com/design/naf54O8h6e4FNH1ZUqgEun/Meutudo?node-id=0-1&t=wL4URfiLFvCzYHOA-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                >
                  Ver detalhes
                </a>
              </li>
              <li>
                <div className={blueprintHighlight}>
                  <strong className="font-bold text-typography-primary">
                    <span className="inline-flex items-center gap-3">
                      <Network className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                      Service Blueprint:
                    </span>
                  </strong>
                  <p className={`${body} mt-2`}>
                    Desenhei o ecossistema completo conectando o Front-stage (usuário enviando documentos via App) ao Back-stage (analista operando via ERP interno).
                  </p>
                  <p className={`${body} mt-2`}>
                    Mapeei o fluxo manual onde o analista realiza o download e upload dos documentos na plataforma parceira, tornando a fricção tecnológica invisível para o cliente final.
                  </p>
                  <p className={`${body} mt-2`}>
                    Estruturei réguas de comunicação para notificações e e-mails, garantindo que o usuário soubesse exatamente o status da análise, mesmo em processos híbridos (meutudo + Icatu).{' '}
                    <a
                      href="https://www.figma.com/design/naf54O8h6e4FNH1ZUqgEun/Meutudo?node-id=2-4446&t=wL4URfiLFvCzYHOA-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                    >
                      Ver blueprint
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <figure id="case-acionamento-placeholder-02" className={`${mediaFrame} ${sectionGap} aspect-[4/3]`}>
            <img
              src="/acionarseguro/imagem7.png"
              alt="Imersão e Estratégia — Matriz CSD, Service Blueprint e comunicação"
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

          {/* 5. Solução proposta */}
          <section className={`${sectionGap} space-y-6`} aria-labelledby="solucao-heading-acionamento">
            <h2 id="solucao-heading-acionamento" className={`${sectionH2} mb-2`}>
              Execução e Uso de IA
            </h2>
            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">
                  <span className="inline-flex items-center gap-3">
                    <Layers className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                    Fluxo e User Flow:
                  </span>
                </strong>{' '}
                Desenvolvi o caminho macro com foco em transparência e educação, reduzindo a ansiedade do usuário em momentos críticos.{' '}
                <a
                  href="https://www.figma.com/design/naf54O8h6e4FNH1ZUqgEun/Meutudo?node-id=2-5488&t=wL4URfiLFvCzYHOA-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                >
                  Ver userflow
                </a>
              </li>
              <li>
                <strong className="font-bold text-typography-primary">
                  <span className="inline-flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                    Aceleração com IA:
                  </span>
                </strong>{' '}
                Utilizeio Figma AI e Whisk para{' '}
                <a
                  href="https://www.figma.com/design/naf54O8h6e4FNH1ZUqgEun/Meutudo?node-id=2-17740&t=wL4URfiLFvCzYHOA-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                >
                  prototipação
                </a>{' '}
                rápida e{' '}
                <a
                  href="https://www.figma.com/design/naf54O8h6e4FNH1ZUqgEun/Meutudo?node-id=2-6602&t=wL4URfiLFvCzYHOA-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                >
                  benchmarking
                </a>
                , gerando hipóteses de fricção que ajudaram a antecipar problemas na jornada antes mesmo do desenvolvimento.
              </li>
            </ul>
          </section>

          <section className={`${sectionGap} space-y-6`} aria-labelledby="solucao-proposta-heading-acionamento">
            <h2 id="solucao-proposta-heading-acionamento" className={`${sectionH2} mb-2`}>
              Solução Proposta
            </h2>
            <ul className={`${listBase} ${body}`}>
              <li>
                <span className="mr-2 inline-flex align-top">
                  <Link2 className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                </span>
                <strong className="font-bold text-typography-primary">Integração App e ERP:</strong> Desenvolvimento de uma interface onde o usuário centraliza o envio de documentos, que são processados por analistas internos através do ERP, garantindo que o cliente não precise contatar a seguradora externa.
              </li>
              <li>
                <span className="mr-2 inline-flex align-top">
                  <Mail className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                </span>
                <strong className="font-bold text-typography-primary">Estratégia de Comunicação Híbrida:</strong> Criação de componentes informativos específicos para clientes com apólices na Icatu, deixando claro que o status e a solicitação de novos documentos seriam feitos via e-mail, mitigando a fricção de não termos uma atualização em tempo real via API.
              </li>
              <li>
                <span className="mr-2 inline-flex align-top">
                  <Layers className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                </span>
                <strong className="font-bold text-typography-primary">Jornada Unificada de Certificados:</strong> Solução de design que trata de forma transparente a existência de múltiplos certificados (meutudo e Icatu), permitindo que o usuário tenha uma experiência única de seguros dentro do app.
              </li>
              <li>
                <span className="mr-2 inline-flex align-top">
                  <BookOpen className="h-5 w-5 text-accent-cyan-bright" aria-hidden />
                </span>
                <strong className="font-bold text-typography-primary">Education:</strong> Criação de uma seção de education para deixar claro ao usuário documentos necessário, tempo de análise, parceria Icatu e etc.
              </li>
            </ul>
          </section>

          <figure id="case-acionamento-placeholder-03" className={`${mediaFrame} mb-10 h-[352px] md:mb-12 md:h-[412px] lg:h-[452px]`}>
            <img
              src="/acionarseguro/imagem3.png"
              alt="Execução e Uso de IA — interface do fluxo do Acionar Seguro"
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{ objectPosition: 'center calc(50% + 16px)' }}
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

          <div className={`mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-2 md:gap-8`}>
            <figure id="case-acionamento-placeholder-04" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
              <img
                src="/acionarseguro/imagem4.png"
                alt="Fluxo e dados — detalhes do acompanhamento e do status"
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
            <figure id="case-acionamento-placeholder-05" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
              <img
                src="/acionarseguro/imagem5.png"
                alt="Comunicação — notificações e e-mails do processo"
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

          {/* Resultados */}
          <section className={`${sectionGap} space-y-6`} aria-labelledby="resultados-heading-acionamento">
            <h2 id="resultados-heading-acionamento" className={`${sectionH2} mb-2`}>
              Resultados e Impacto
            </h2>
            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">Validação de Hipóteses:</strong> Realizei testes de usabilidade via Maze (10 usuários) que confirmaram a clareza da jornada "zero a um", provando que o fluxo longo era compensado pela segurança e transparência das informações.{' '}
                <a
                  href="https://app.maze.co/report/Perda-de-renda-CLT/1jyav7mlv9jvcw/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60"
                >
                  Ver teste
                </a>
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Eficiência e Design System:</strong> Entrega de uma jornada 100% aderente ao regulatório, construída com componentes do Design System, o que garantiu velocidade de implementação e consistência visual.
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Cultura de Design e IA:</strong> Consolidei o uso de IA Generativa como ferramenta de produtividade no workflow e reforcei a importância de trazer o usuário para o centro das decisões através de testes, mesmo em ambientes complexos de seguros.
              </li>
            </ul>
          </section>

          <figure id="case-acionamento-placeholder-06" className={`${mediaFrame} ${sectionGap} h-[344px] md:h-[484px] lg:h-[544px]`}>
            <img
              src="/acionarseguro/imagem6.png"
              alt="Resultados e Impacto — stack de telas do Acionar Seguro"
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{ objectPosition: 'center calc(50% - 32px)' }}
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

          {/* Conclusão */}
          <section className="mb-20 md:mb-24" aria-labelledby="conclusao-heading-acionamento">
            <h2 id="conclusao-heading-acionamento" className={`${sectionH2} mb-6 md:mb-8`}>
              Conclusão
            </h2>
            <p className={body}>
              Acionar Seguro traduziu burocracia em clareza: construímos uma jornada nativa para perda de renda CLT, conectando front-stage e back-stage com um Service Blueprint que elimina fricções técnicas. Com Design System e IA no workflow, garantimos transparência, eficiência e confiança desde o primeiro documento até o acompanhamento do sinistro. Após as validar a jornada a mesma serviu como jornada core para replicar nas coberturas de invalidez por acidente, perda de renda PJ e morte acidental.
            </p>
          </section>
        </div>
      </article>

      <footer className="relative z-10 border-t border-white/[0.08] py-12 md:py-16" aria-label="Rodapé" />
    </div>
  )
}
