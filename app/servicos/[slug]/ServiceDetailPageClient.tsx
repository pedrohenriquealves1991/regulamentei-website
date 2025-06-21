"use client"

import type React from "react"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { WhatsappButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const CallToAction = () => (
  <p className="mt-10 text-xl font-semibold text-center text-teal-700">
    Pronto para avançar? Entre em contato conosco e garanta a condução de seu processo com segurança, agilidade e total
    conformidade regulatória!
  </p>
)

// Novo componente para o link/botão de voltar
const BackToServicesLink = () => (
  <div className="mt-12 text-center">
    <Link
      href="/#services"
      className="inline-flex items-center text-teal-600 hover:text-teal-800 py-2 px-4 rounded-md border border-teal-500 hover:bg-teal-50 transition-colors duration-300 group text-lg"
    >
      <ChevronLeft size={20} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
      Voltar aos serviços
    </Link>
  </div>
)

const servicesData: { [key: string]: { title: string; content: React.ReactNode } } = {
  "regularizacao-empresarial-e-analise-de-viabilidade": {
    title: "Regularização Empresarial e Análise de Viabilidade",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          Na Regulamentei, auxiliamos na regularização da sua empresa junto aos órgãos de Vigilância Sanitária,
          garantindo segurança e operação dentro da lei.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Oferecemos:</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Análise de viabilidade regulatória para novos projetos ou expansão da área de atuação.</li>
          <li>Apoio para obtenção de alvará sanitário.</li>
          <li>Peticionamento de Autorização de Funcionamento (AFE) junto à ANVISA.</li>
          <li>
            Apoio técnico para obtenção de Autorização Especial (AE) para empresas que manipulam ou transportam produtos
            controlados (Portaria 344/98).
          </li>
          <li>Atualização cadastral de porte de empresa junto à ANVISA.</li>
        </ul>
        <CallToAction />
      </>
    ),
  },
  "documentacao-de-medicamentos": {
    title: "Registro e Pós-Registro de Medicamentos",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          Garantimos a conformidade e a qualidade da documentação técnica dos seus medicamentos em todas as fases do
          ciclo de vida.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossos serviços incluem:</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Elaboração de formulação e processo fabril para sólidos, líquidos e semissólidos.</li>
          <li>Elaboração de análise de riscos considerando o ciclo de vida do produto.</li>
          <li>Resposta técnica a exigências farmacotécnicas.</li>
          <li>Revisão de Parecer de Análise Técnica da Empresa - PATE.</li>
        </ul>
        <CallToAction />
      </>
    ),
  },
  "licenciamento-para-transportadoras": {
    title: "Licenciamento para Transportadoras",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          Seu transporte regularizado para atuar com produtos controlados. A Regulamentei presta suporte completo para
          transportadoras que necessitam da licença sanitária para operar com substâncias sujeitas ao controle da
          ANVISA.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nosso serviço inclui:</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Análise de requisitos legais com base na Portaria 344/98.</li>
          <li>Apoio documental e técnico para peticionamento do licenciamento sanitário.</li>
          <li>Intermediação com as vigilâncias sanitárias locais.</li>
          <li>Orientações sobre Boas Práticas de Transporte.</li>
        </ul>
        <CallToAction />
      </>
    ),
  },
  "solucao-para-exigencias": {
    title: "Solução para Exigências",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          Responda exigências da ANVISA com precisão técnica. Recebeu uma exigência e não sabe como responder? A
          Regulamentei pode te ajudar a encontrar uma solução.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Oferecemos:</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Interpretação técnica das exigências (regularização, correção de documentos, etc.).</li>
          <li>Respostas fundamentadas com embasamento em legislações atualizadas.</li>
          <li>Apoio documental em processos de medicamentos, dispositivos médicos e pesquisa clínica.</li>
          <li>Acompanhamento até a aceitação da documentação.</li>
        </ul>
        <CallToAction />
      </>
    ),
  },
  "pesquisa-clinica-de-dispositivos-medicos": {
    title: "Pesquisa Clínica de Dispositivos Médicos",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          Na Regulamentei, montamos ou revisamos todo o conjunto de documentos para que seu estudo atenda rigorosamente
          às normas da ANVISA e dos Comitês de Ética em Pesquisa (CEP/CONEP). Acompanhe como estruturamos cada etapa:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Avaliação de Viabilidade e Requisitos</h3>
            <p className="text-lg mb-3">
              Analisamos o escopo do estudo e classificamos o dispositivo em risco I, II, III ou IV.
            </p>
            <p className="text-lg">
              Identificamos todas as normas aplicáveis — Resolução da Diretoria Colegiada (RDC) 837/2023, Instrução
              Normativa (IN) 321/2024, norma ISO 14155 (Boas Práticas Clínicas em Dispositivos Médicos) — e mapeamos
              exigências de registro/notificação na Agência Nacional de Vigilância Sanitária (ANVISA), parecer do Comitê
              de Ética em Pesquisa (CEP) e, se necessário, da Comissão Nacional de Ética em Pesquisa (CONEP), além de
              requisitos de metrologia e certificação pelo Sistema Brasileiro de Avaliação da Conformidade (SBAC).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Construção ou Revisão do Dossiê de Investigação Clínica de Dispositivo Médico (DICD)
            </h3>
            <p className="mb-4 text-lg">Nós preparamos ou aperfeiçoamos cada documento essencial:</p>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                <strong>Protocolo de Pesquisa:</strong> desenho do estudo, critérios de inclusão/exclusão, desfechos
                primários e secundários, fluxograma de visitas e plano estatístico.
              </li>
              <li>
                <strong>Termo de Consentimento Livre e Esclarecido (TCLE):</strong> versão clara e completa para
                garantir o conhecimento pleno dos participantes.
              </li>
              <li>
                <strong>Case Report Forms (CRFs)</strong> e <strong>Relatórios de Monitoramento:</strong> formulários de
                coleta de dados e arquivo de relatórios de supervisão do ensaio.
              </li>
              <li>
                <strong>Plano de Gerenciamento de Riscos:</strong> avaliação conforme ISO 14971, com identificação de
                perigos, controles e monitoramento de riscos residuais.
              </li>
              <li>
                <strong>Documentação de Boas Práticas Clínicas (BPC – Good Clinical Practice):</strong> comprovação de
                treinamento e certificação da equipe, conforme IN 321/2024.
              </li>
              <li>
                <strong>Parecer do CEP/CONEP:</strong> organização e checagem dos documentos entregues aos comitês para
                aprovação ética.
              </li>
              <li>
                <strong>Dossiê Técnico do Dispositivo Médico:</strong> especificações, relatórios pré-clínicos e
                comprovação de registro ou notificação prévia junto à ANVISA.
              </li>
              <li>
                <strong>Orçamento e Cronograma de Atividades:</strong> planilha detalhada de custos e calendário de
                todas as etapas.
              </li>
              <li>
                <strong>Apólice de Seguro de Responsabilidade Civil:</strong> quando exigida, garantimos a cobertura
                necessária.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Submissão e Acompanhamento de Respostas às Exigências
            </h3>
            <p className="text-lg mb-3">
              Enviamos o Dossiê de Investigação Clínica de Dispositivo Médico (DICD) pela Plataforma Eletrônica de
              Peticionamento (PET) da ANVISA e, em paralelo, ao Comitê de Ética em Pesquisa (CEP/CONEP).
            </p>
            <p className="text-lg">
              Analisamos cada exigência que a ANVISA emite, redigimos complementos e atualizamos documentos e protocolos
              para atender às solicitações técnicas.
            </p>
          </div>
        </div>
        <CallToAction />
      </>
    ),
  },
  "inteligencia-regulatoria": {
    title: "Inteligência Regulatória Estratégica",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed">
          A Regulamentei ajuda você a pensar em novas oportunidades de mercado, analisando a concorrência e facilitando
          a expansão do seu portfólio de produtos.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Identificação de Novas Áreas de Atuação</h3>
            <p className="text-lg">
              Analisamos o mercado e a legislação para sugerir nichos promissores e áreas de expansão para sua empresa
              no setor de saúde.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benchmarking Regulatório</h3>
            <p className="text-lg">
              Realizamos um levantamento de dispositivos médicos similares já registrados e comercializados de um
              determinado fabricante ou linha de produtos analisando seus diferenciais e requisitos regulatórios.
            </p>
          </div>
        </div>
        <CallToAction />
      </>
    ),
  },
}

export function ServiceDetailPageClient({ params }: { params: { slug: string } }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const service = servicesData[params.slug]

  if (!service) {
    return (
      <>
        <Navbar variant="internal" />
        <main className="flex min-h-screen flex-col items-center justify-center pt-20 px-4">
          <h1 className="text-2xl font-bold text-gray-800">Serviço não encontrado</h1>
          <Link href="/#services" className="mt-4 text-teal-600 hover:text-teal-800">
            Voltar aos serviços
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar variant="internal" />
      <main className="flex min-h-screen flex-col pt-24 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection animation="fade-in">
            <Link href="/#services" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 group">
              <ChevronLeft size={20} className="mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar aos serviços
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-l-4 border-teal-500 pl-4">
              {service.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">{service.content}</div>
            <BackToServicesLink /> {/* Adicionado o link/botão de voltar aqui */}
          </AnimatedSection>
        </div>
      </main>
      <WhatsappButton phoneNumber="5551993984165" />
    </>
  )
}
