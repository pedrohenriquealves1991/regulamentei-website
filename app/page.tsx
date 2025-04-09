import { WhatsappButton } from "@/components/whatsapp-button";
import { ServiceCard } from "@/components/service-card";
import {
  MapPin,
  Mail,
  Shield,
  FileCheck,
  FlaskConical,
  Truck,
  FileWarning,
  BarChart3,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-teal-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            REGULAMENTEI
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl md:text-2xl">
            Transformando complexidade em conformidade.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-yellow-400"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Sobre
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa expertise inclui análise de exigências regulatórias, revisão de sistemas de qualidade e desenvolvimento de estratégias personalizadas para interação com Anvisa e VISAs.
            </p>
            <div className="w-full border-t border-gray-200 my-4"></div>
            <p className="text-lg text-gray-700 font-medium">
              Todas as demandas são avaliadas individualmente, com foco na otimização de processos regulatórios.
            </p>
          </div>
        </div>
      </section>

      {/* Quem é a Regulamentei */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Quem é a Regulamentei
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  A Regulamentei nasceu da minha trajetória de <strong className="text-teal-600">10 anos atuando no setor regulatório</strong> de saúde. Sou <strong className="text-teal-600">Pedro Alves</strong>, farmacêutico com especialização em regulação.
                </p>
                <p className="text-lg text-gray-700">
                  Construí uma <strong className="text-teal-600">rede de especialistas qualificados</strong> que complementam nosso trabalho nas diversas áreas regulatórias.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4 text-teal-700">Especialidades:</h3>
              <ul className="space-y-3">
                {['Medicamentos', 'Dispositivos Médicos', 'Saneantes', 'Cosméticos', 'Regularização de Empresas'].map((item) => (
                  <li key={item} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield className="h-8 w-8 text-teal-600" />}
              title="Regularização Empresarial"
              description="Suporte completo para novos negócios na área da saúde: obtenção de alvarás sanitários, AFE e AE com agilidade e segurança regulatória."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <ServiceCard
              icon={<FileCheck className="h-8 w-8 text-teal-600" />}
              title="Auditoria Documental"
              description="Revisão técnica especializada de sistemas de qualidade para garantir conformidade com exigências da Anvisa e Vigilância Sanitária."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <ServiceCard
              icon={<FlaskConical className="h-8 w-8 text-teal-600" />}
              title="Análise de Viabilidade"
              description="Estudos técnico-regulatórios para lançamento de medicamentos, dispositivos médicos, cosméticos e saneantes."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <ServiceCard
              icon={<Truck className="h-8 w-8 text-teal-600" />}
              title="Licenciamento para Transporte"
              description="Assessoria completa para transportadores: regularização sanitária e documentação para cargas especiais."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <ServiceCard
              icon={<FileWarning className="h-8 w-8 text-teal-600" />}
              title="Solução para Exigências"
              description="Resposta técnica a exigências complexas da Anvisa e estratégias para desbloqueio de processos regulatórios."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <ServiceCard
              icon={<BarChart3 className="h-8 w-8 text-teal-600" />}
              title="Inteligência Regulatória"
              description="Mapeamento completo dos concorrentes no mercado brasileiro: identifique quem são e quais dispositivos médicos similares estão registrados na Anvisa."
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-teal-700 to-teal-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <address className="not-italic">
              <p className="flex items-center mb-3">
                <MapPin className="h-5 w-5 mr-3" />
                Porto Alegre, RS | Brasil
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:pedro@regulamentei.com.br" className="hover:underline">
                  pedro@regulamentei.com.br
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sobre Nós</a></li>
              <li><a href="#" className="hover:underline">Serviços</a></li>
              <li><a href="#" className="hover:underline">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <p className="text-sm mb-2">
              Conformidade com a LGPD (Lei 13.709/2018)
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Regulamentei. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsappButton phoneNumber="5551993984165" />
    </main>
  );
}
