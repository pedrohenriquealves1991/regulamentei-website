import type { ReactNode } from "react"

// Define CallToAction aqui, pois ele é parte do conteúdo de cada serviço.
// Se se tornar mais complexo, pode ser um componente separado importado aqui.
const CallToAction = () => (
  <p className="mt-10 text-xl font-semibold text-center text-teal-700">
    Pronto para avançar? Entre em contato conosco e garanta a condução de seu processo com segurança, agilidade e total
    conformidade regulatória!
  </p>
)

export interface Service {
  title: string
  content: ReactNode
  slug: string
}

// Interface para a estrutura original de servicesData, usada por generateStaticParams
export interface ServicesObject {
  [key: string]: {
    title: string
    content: ReactNode
  }
}

export const servicesData: ServicesObject = {
  "regularizacao-empresarial-e-analise-de-viabilidade": {
    title: "Regularização Empresarial e Análise de Viabilidade",
    content: (
      <>
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
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
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
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
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
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
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
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
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
          Na Regulamentei, montamos ou revisamos todo o conjunto de documentos para que seu estudo atenda rigorosamente
          às normas da ANVISA e dos Comitês de Ética em Pesquisa (CEP/CONEP). Acompanhe como estruturamos cada etapa:
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Avaliação de Viabilidade e Requisitos</h3>
            <p className="text-lg mb-3 text-justified text-body-optimized">
              Analisamos o escopo do estudo e classificamos o dispositivo em risco I, II, III ou IV.
            </p>
            <p className="text-lg text-justified text-body-optimized">
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
            <p className="mb-4 text-lg text-justified text-body-optimized">
              Nós preparamos ou aperfeiçoamos cada documento essencial:
            </p>
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
            <p className="text-lg mb-3 text-justified text-body-optimized">
              Enviamos o Dossiê de Investigação Clínica de Dispositivo Médico (DICD) pela Plataforma Eletrônica de
              Peticionamento (PET) da ANVISA e, em paralelo, ao Comitê de Ética em Pesquisa (CEP/CONEP).
            </p>
            <p className="text-lg text-justified text-body-optimized">
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
        <p className="mb-6 text-xl leading-relaxed text-justified text-body-optimized">
          A Regulamentei ajuda você a pensar em novas oportunidades de mercado, analisando a concorrência e facilitando
          a expansão do seu portfólio de produtos.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Identificação de Novas Áreas de Atuação</h3>
            <p className="text-lg text-justified text-body-optimized">
              Analisamos o mercado e a legislação para sugerir nichos promissores e áreas de expansão para sua empresa
              no setor de saúde.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benchmarking Regulatório</h3>
            <p className="text-lg text-justified text-body-optimized">
              Realizamos um levantamento de dispositivos médicos e produtos para saúde similares já registrados e
              comercializados, analisando seus diferenciais e requisitos regulatórios.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conexões com Fabricantes Internacionais</h3>
            <p className="text-lg mb-3 text-justified text-body-optimized">
              Expandir sua rede de fornecedores e parceiros é crucial. Nós facilitamos esse processo:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                <strong>Prospecção e Contato:</strong> Auxiliamos na busca e no estabelecimento de contato com
                fabricantes estrangeiros de dispositivos médicos e outros produtos para saúde.
              </li>
              <li>
                <strong>Avaliação de Conformidade Preliminar:</strong> Oferecemos suporte na análise da documentação
                técnica e certificações de produtos importados para verificar a viabilidade de regularização no Brasil.
              </li>
              <li>
                <strong>Suporte em Negociações:</strong> Orientamos sobre os aspectos regulatórios que podem impactar
                acordos comerciais e parcerias.
              </li>
            </ul>
          </div>
        </div>
        <CallToAction />
      </>
    ),
  },
}

export const getServiceBySlug = (slug: string): Service | null => {
  const serviceContent = servicesData[slug]
  if (!serviceContent) return null
  return {
    ...serviceContent,
    slug,
  }
}
