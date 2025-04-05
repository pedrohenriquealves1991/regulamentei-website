import { WhatsappButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { MapPin, Mail, Shield, FileCheck, FlaskConical, Truck, FileWarning, BarChart3, Building2 } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-teal-700 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">REGULAMENTEI</h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
        <p className="text-lg md:text-xl">Transformando complexidade em conformidade.</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-6">
                       Sobre
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somos especialistas em conformidade regulatória para o setor de saúde. Nossa missão é transformar a
            complexidade dos processos regulatórios em soluções claras e eficientes para nossos clientes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Com uma equipe de profissionais altamente qualificados, oferecemos suporte completo para empresas que
            precisam navegar pelo complexo ambiente regulatório brasileiro.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            Nossos <span className="text-teal-700">processos eficientes e transparentes</span>, aliados a uma{" "}
            <span className="text-teal-700">equipe especializada e dedicada</span>, garantem resultados consistentes e
            de alta qualidade para todos os nossos clientes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Shield className="h-6 w-6 text-teal-600" />}
            title="Regularização Empresarial"
            description="Suporte completo para novos negócios na área da saúde: obtenção de alvarás sanitários, AFE e AE com agilidade e segurança regulatória."
          />
          <ServiceCard
            icon={<FileCheck className="h-6 w-6 text-teal-600" />}
            title="Auditoria Documental"
            description="Revisão técnica especializada de sistemas de qualidade para garantir conformidade com exigências da Anvisa e Vigilância Sanitária."
          />
          <ServiceCard
            icon={<FlaskConical className="h-6 w-6 text-teal-600" />}
            title="Análise de Viabilidade"
            description="Estudos técnico-regulatórios para lançamento de medicamentos, dispositivos médicos, cosméticos e saneantes."
          />
          <ServiceCard
            icon={<Truck className="h-6 w-6 text-teal-600" />}
            title="Licenciamento para Transporte"
            description="Assessoria completa para transportadores: regularização sanitária e documentação para cargas especiais."
          />
          <ServiceCard
            icon={<FileWarning className="h-6 w-6 text-teal-600" />}
            title="Solução para Exigências"
            description="Resposta técnica a exigências complexas da Anvisa e estratégias para desbloqueio de processos regulatórios."
          />
          <ServiceCard
            icon={<BarChart3 className="h-6 w-6 text-teal-600" />}
            title="Inteligência Regulatória"
            description="Mapeamento completo dos concorrentes no mercado brasileiro: identifique quem são e quais dispositivos médicos similares estão registrados na Anvisa."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-teal-700 text-white py-8 px-4 text-center">
        <p className="mb-2 flex items-center justify-center">
          <MapPin className="h-5 w-5 mr-2" />
          Porto Alegre, RS | Brasil
        </p>
        <p className="mb-4 flex items-center justify-center">
          <Mail className="h-5 w-5 mr-2" />
          Contato:{" "}
          <a href="mailto:pedro@regulamentei.com.br" className="hover:underline ml-1">
            pedro@regulamentei.com.br
          </a>
        </p>
        <p className="text-sm">Regulamento e privacidade de seus dados conforme a LGPD (Lei 13.709/2018)</p>
        <p className="text-sm mt-1">© 2025 Regulamentei. Todos os direitos reservados.</p>
      </footer>

      {/* WhatsApp Button */}
      <WhatsappButton phoneNumber="5551993984165" />
    </main>
  )
}

