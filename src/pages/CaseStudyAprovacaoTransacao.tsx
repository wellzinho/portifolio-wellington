import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'

/** Conteúdo editorial: ~800–1000px, centralizado; texto alinhado à esquerda */
const shell = 'mx-auto w-full max-w-[56rem] text-left'

/** Corpo: sans limpa, cinza (não preto), entrelinha 1.6 */
const body = 'text-[1rem] leading-[1.6] text-typography-secondary'

const linkClass =
  'font-medium text-accent-cyan underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent-cyan-bright hover:decoration-accent-cyan/60'

/** H1: grande, bold, pouca entrelinha */
const h1 = 'text-4xl font-bold tracking-tight text-typography-primary md:text-5xl md:leading-[1.05]'

/** Subtítulos de seção (H2): médio-grande, bold; espaço acima vem do fluxo entre seções */
const sectionH2 = 'text-xl font-bold tracking-tight text-typography-primary md:text-2xl scroll-mt-24'

/** H3 em blocos (ex.: intro em duas colunas) */
const blockH3 = 'text-lg font-bold tracking-tight text-typography-primary md:text-xl'

/** Listas: bullets discretos, espaçamento entre itens */
const listBase = 'list-disc space-y-3 pl-5 marker:text-zinc-500/90 [li]:pl-1'

/** Placeholders de imagem: largura do container, cantos, sombra sutil */
const mediaFrame =
  'relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-cimento-queimado/40 shadow-[0_18px_48px_-12px_rgba(0,0,0,0.55)]'

/** Respiro vertical entre seções de texto / mídia */
const sectionGap = 'mb-16 md:mb-24'
const blockGap = 'mb-10 md:mb-14'

export default function CaseStudyAprovacaoTransacao() {
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
          <h1 id="titulo-aprovacao-transacao" className={`${h1} ${blockGap}`}>
            Aprovação de transação
          </h1>

          {/* 2. Introdução em duas colunas: O Desafio + Atuação */}
          <section className={sectionGap} aria-labelledby="desafio-heading">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              <div className="space-y-4">
                <h3 id="desafio-heading" className={blockH3}>
                  O Desafio
                </h3>
                <p className={body}>
                  Esse feature no internet Banking nasceu de uma dor dos usuários de agilidade e controle durante a autorização de transações financeiras. Os desafios
                  envolviam garantir conformidade regulatória, aumentar a eficiência operacional e proporcionar uma experiência intuitiva que atendesse aos diversos
                  necessidades dos diferentes perfis dos usuários.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className={blockH3}>Atuação</h3>
                <p className={body}>
                  Meu papel foi desenhar toda a jornada e conduzir o projeto de ponta a ponta para resolver desafios críticos e atender as necessidades dos usuários,
                  para que os mesmos tivessem a percepção de valor ao feature.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Imagem — largura do container */}
          <div id="case-trinus-placeholder-01" className={`${mediaFrame} ${sectionGap} h-[300px] md:h-[400px]`}>
            <img
              src="/imagensTrinus/imagem1%201.png"
              alt="Mockup do fluxo de aprovação de transação — Internet Banking Trinus"
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
          <section className={`${sectionGap} space-y-8`} aria-labelledby="exploracao-heading">
            <h2 id="exploracao-heading" className={`${sectionH2} mb-2`}>
              Exploração e levantamento das dores dos usuários
            </h2>

            <p className={`${body} font-semibold text-typography-primary/95`}>
              Para entender as necessidades e problemas enfrentados pelos usuários, realizei um trabalho aprofundado que incluiu pesquisa, entrevistas e mapeamento das
              jornadas. As etapas foram:
            </p>

            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">Pesquisa e Benchmarking:</strong> Realizei uma análise detalhada de soluções em fintechs e
                bancos, identificando padrões de mercado e melhores práticas aplicáveis ao contexto da Trinusbank.{' '}
                <a
                  href="https://www.figma.com/design/K6gEFEXK4KzbTaJPEiQE6b/Permiss%C3%B5es-de-transa%C3%A7%C3%B5es?node-id=0-1&p=f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Saiba mais sobre a pesquisa.
                </a>
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Entrevistas com Usuários:</strong> Conduzi entrevistas qualitativas com stakeholders internos e
                externos para mapear as principais dificuldades enfrentadas pelos usuários. Observou-se que, pelo perfil da empresa, geramos apenas parte do jornada do
                usuário.{' '}
                <a
                  href="https://www.figma.com/design/K6gEFEXK4KzbTaJPEiQE6b/Permiss%C3%B5es-de-transa%C3%A7%C3%B5es?node-id=1-103&t=ZWYduUt2XYA3kMuB-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Confira as entrevistas.
                </a>
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Construção da Jornada do Usuário:</strong> Mapeei as jornadas atuais e redesenhei fluxos com
                base nos insights coletados, garantindo fluidez e eficiência.{' '}
                <a
                  href="https://www.figma.com/design/K6gEFEXK4KzbTaJPEiQE6b/Permiss%C3%B5es-de-transa%C3%A7%C3%B5es?node-id=1-232&t=pvS3NRexD5q2BHbH-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Veja as jornadas detalhadas.
                </a>
              </li>
            </ul>

            <p className={body}>A partir desse trabalho inicial, segui para as etapas de prototipação, validação e mensuração dos resultados:</p>

            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">Prototipação:</strong> Criação de protótipos interativos testados em rodadas de usabilidade,
                permitindo ajustes rápidos antes do desenvolvimento final.{' '}
                <a
                  href="https://www.figma.com/design/nwlSUSBbM4tU7aAkm36NgR/Prototipo?node-id=0-1&p=f&t=fA6tE1cqnnmNwkKI-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Veja mais detalhes sobre os protótipos.
                </a>
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Medição de Resultados:</strong> Acompanhamento de métricas como tempo médio de aprovação,
                redução de erros operacionais e satisfação do usuário, com iterações contínuas para refinamento.
              </li>
            </ul>
          </section>

          <figure id="case-trinus-placeholder-02" className={`${mediaFrame} ${sectionGap} aspect-[4/3]`}>
            <img
              src="/imagensTrinus/Imagem2.png"
              alt="Exploração e levantamento de dores — materiais de pesquisa e jornada"
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
          <section className={`${sectionGap} space-y-6`} aria-labelledby="solucao-heading">
            <h2 id="solucao-heading" className={`${sectionH2} mb-2`}>
              Solução proposta
            </h2>
            <ul className={`${listBase} ${body}`}>
              <li>
                <strong className="font-bold text-typography-primary">Gestão Centralizada de Permissões:</strong> Um sistema unificado para criar, editar e gerenciar
                perfis com permissões personalizadas.
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Dashboard de Controle:</strong> Uma interface clara e objetiva para acompanhamento de status
                de aprovações, exibindo dados como aprovadas, negadas e pendentes.
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Habilitar e Desabilitar Permissões:</strong> Funcionalidade que permite ativar ou restringir
                rapidamente permissões de acordo com as necessidades operacionais.
              </li>
              <li>
                <strong className="font-bold text-typography-primary">Criação de Usuário Operador:</strong> A possibilidade de configurar operadores com permissões
                específicas para aprovar ou solicitar transações, incluindo a definição de quais tipos de contas esses operadores podem visualizar. Esse controle
                garante maior segurança e adequação às necessidades organizacionais.
              </li>
            </ul>
          </section>

          <figure id="case-trinus-placeholder-03" className={`${mediaFrame} mb-10 h-[240px] md:mb-12 md:h-[300px]`}>
            <img
              src="/imagensTrinus/imagem3.png"
              alt="Solução proposta — interface do fluxo de permissões e aprovações"
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

          <div className={`mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-2 md:gap-8`}>
            <figure id="case-trinus-placeholder-04" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
              <img
                src="/imagensTrinus/Imagem2.png"
                alt="Solução proposta — detalhe da interface"
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
            <figure id="case-trinus-placeholder-05" className={`${mediaFrame} h-[220px] min-h-0 md:h-[280px]`}>
              <img
                src="/imagensTrinus/imagem4.png"
                alt="Solução proposta — vista complementar do fluxo"
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
          <section className={`${sectionGap} space-y-6`} aria-labelledby="resultados-heading">
            <h2 id="resultados-heading" className={`${sectionH2} mb-2`}>
              Resultados
            </h2>
            <ul className={`${listBase} ${body}`}>
              <li>Redução de 30% no tempo de aprovação de operações complexas.</li>
              <li>Maior conformidade regulatória com padronização de fluxos e permissões.</li>
              <li>Aumento da eficiência operacional com a eliminação de processos manuais em processos.</li>
              <li>Melhoria significativa na experiência do usuário, gerando mais agilidade e segurança nas transações financeiras.</li>
            </ul>
          </section>

          <figure id="case-trinus-placeholder-06" className={`${mediaFrame} ${sectionGap} h-[280px] md:h-[420px] lg:h-[480px]`}>
            <img
              src="/imagensTrinus/imagem5.png"
              alt="Resultados e visão geral da solução — stack de telas"
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

          {/* Conclusão */}
          <section className="mb-20 md:mb-24" aria-labelledby="conclusao-heading">
            <h2 id="conclusao-heading" className={`${sectionH2} mb-6 md:mb-8`}>
              Conclusão
            </h2>
            <p className={body}>
              Este projeto foi essencial para transformar a experiência dos usuários da Trinusbank, trazendo mais segurança e controle para transações financeiras. Com
              a solução implementada, conseguimos atender às necessidades do mercado, melhorar a eficiência e garantir a satisfação dos usuários finais.
            </p>
          </section>
        </div>
      </article>

      <footer className="relative z-10 border-t border-white/[0.08] py-12 md:py-16" aria-label="Rodapé" />
    </div>
  )
}
