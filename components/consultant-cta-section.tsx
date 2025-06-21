"use client" // Adicionado para AnimatedSection e interações futuras se houver
import { AnimatedSection } from "./animated-section"
import { Mail, Briefcase, ShieldCheck, Handshake, DollarSign } from "lucide-react"

export function ConsultantCtaSection() {
  return (
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection animation="fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center border-b-2 border-teal-500 pb-4">
          Junte-se à Nossa Rede de Consultores
        </h2>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
          Buscamos consultores regulatórios para colaborar em projetos sob demanda relacionados a medicamentos,
          dispositivos médicos, cosméticos, alimentos, saneantes, boas práticas de fabricação, pesquisa clínica, etc. Se
          você é um especialista em sua área e deseja utilizar seu conhecimento para gerar retornos financeiros sem
          precisar empreender, a Regulamentei é para você.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <h3 className="text-2xl font-semibold text-teal-700 mb-6 mt-8 flex items-center">
          <Handshake size={28} className="mr-3" /> Como Funciona a Nossa Parceria
        </h3>
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
          <div className="flex items-start">
            <Briefcase size={24} className="text-teal-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Trabalho Sob Demanda e Flexível</h4>
              <p className="text-gray-600">
                Você atuará em projetos específicos, alinhados com sua especialidade e disponibilidade. Ideal para
                profissionais que buscam flexibilidade e diversidade em sua atuação como freelancer.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheck size={24} className="text-teal-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Foco Total nos Projetos</h4>
              <p className="text-gray-600">
                A Regulamentei cuida de toda a gestão administrativa: prospecção de clientes, negociação de propostas,
                elaboração de contratos e processos de cobrança. Sua preocupação será exclusivamente com o projeto
                contratado.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <DollarSign size={24} className="text-teal-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Remuneração Transparente</h4>
              <p className="text-gray-600">
                A remuneração é transparente e o valor acordado pelo serviço técnico passará por sua aprovação. Cobramos
                apenas uma pequena taxa de administração que cobre nossos custos de gestão e prospecção.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheck size={24} className="text-teal-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Confidencialidade e Discrição</h4>
              <p className="text-gray-600">
                Compreendemos que muitos consultores já possuem vínculos empregatícios. Asseguramos total sigilo e
                discrição em nossa parceria, permitindo que você desenvolva projetos como freelancer sem qualquer tipo
                de conflito ou exposição indesejada.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={300}>
        <h3 className="text-2xl font-semibold text-teal-700 mb-6 mt-10 flex items-center">
          <Mail size={28} className="mr-3" /> Faça Parte do Nosso Banco de Talentos
        </h3>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Se você se identifica com nossa proposta e deseja colaborar com a Regulamentei, envie seu currículo e uma
            breve apresentação de suas áreas de expertise para o e-mail abaixo.
          </p>
          <a
            href="mailto:pedro@regulamentei.com.br?subject=Interesse em Parceria como Consultor"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg"
          >
            <Mail size={20} />
            Enviar Currículo
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
}
