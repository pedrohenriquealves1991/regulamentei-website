import { WhatsappButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { FounderCard } from "@/components/founder-card"
import { HowWeWork } from "@/components/how-we-work"
import { AnimatedSection } from "@/components/animated-section"
import { Navbar } from "@/components/navbar"
import { Logo } from "@/components/logo"
import { PaymentMethods } from "@/components/payment-methods"
import { MapPin, Mail, Shield, FileCheck, FlaskConical, Truck, FileWarning, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="w-full bg-teal-700 text-white pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-8">
              <Logo size="hero-xl" className="mb-8" />
              <h1 className="text-4xl md:text-6xl font-bold text-center">REGULAMENTEI</h1>
              <div className="w-16 h-1 bg-yellow-400 my-4"></div>
              <p className="text-lg md:text-xl text-center">Transformando complexidade em conformidade.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Sobre</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <AnimatedSection animation="slide-in-left" delay={200}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3">A Empresa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A Regulamentei nasce para atender empresas de pequeno e médio porte do setor de saúde que não
                    dispõem de uma estrutura regulatória ou de qualidade interna com experiência ou tamanho suficientes
                    para demandas pontuais e sazonais, como lançamento de um produto, preparação para auditorias ou
                    resposta a exigências da Anvisa e da Vigilância Sanitária.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Como consultoria, a Regulamentei não se limita a apresentar diagnósticos e planos de ação genéricos:
                    compreende a realidade de cada cliente, propõe soluções viáveis e atua lado a lado em cada etapa.
                    Para garantir atendimento de qualidade, conta com uma rede colaborativa de farmacêuticos, químicos e
                    engenheiros de alimentos, acionada conforme a especialidade requerida, tudo sob um orçamento único e
                    com pagamento por cartão de crédito, sem contratos longos ou complexos.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={300}>
                <FounderCard
                  name="Pedro Alves"
                  title="Farmacêutico | Especialista em Regulação"
                  description="Com 10 anos de experiência no setor regulatório de saúde, fundei a Regulamentei para transformar a complexidade dos processos regulatórios em soluções claras e eficientes para empresas que buscam conformidade."
                  imageSrc="/pedro-alves.jpeg"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={400}>
              <HowWeWork />
            </AnimatedSection>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section id="payment" className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Facilidade de Pagamento</h2>
              <PaymentMethods />
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 px-4 max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Nossos Serviços</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <ServiceCard
                icon={<Shield className="h-6 w-6 text-teal-600" />}
                title="Regularização Empresarial"
                description="Suporte completo para novos negócios na área da saúde: obtenção de alvarás sanitários, AFE e AE com agilidade e segurança regulatória."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <ServiceCard
                icon={<FileCheck className="h-6 w-6 text-teal-600" />}
                title="Auditoria Documental"
                description="Revisão técnica especializada de sistemas de qualidade para garantir conformidade com exigências da Anvisa e Vigilância Sanitária."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <ServiceCard
                icon={<FlaskConical className="h-6 w-6 text-teal-600" />}
                title="Análise de Viabilidade"
                description="Estudos técnico-regulatórios para lançamento de medicamentos, dispositivos médicos, cosméticos e saneantes."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <ServiceCard
                icon={<Truck className="h-6 w-6 text-teal-600" />}
                title="Licenciamento para Transporte"
                description="Assessoria completa para transportadoras de produtos de saúde: regularização sanitária, documentação e adequação às normas para cargas especiais."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <ServiceCard
                icon={<FileWarning className="h-6 w-6 text-teal-600" />}
                title="Solução para Exigências"
                description="Resposta técnica a exigências complexas da Anvisa e estratégias para desbloqueio de processos regulatórios."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <ServiceCard
                icon={<BarChart3 className="h-6 w-6 text-teal-600" />}
                title="Inteligência Regulatória"
                description="Mapeamento completo dos concorrentes no mercado brasileiro: identifique quem são e quais dispositivos médicos similares estão registrados na Anvisa."
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mt-auto bg-teal-700 text-white py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center">
                  <Logo size="small" className="mr-3" />
                  <h2 className="text-2xl font-bold">REGULAMENTEI</h2>
                </div>
                <p className="flex items-center mt-4">
                  <MapPin className="h-5 w-5 mr-3" />
                  Porto Alegre, RS | Brasil
                </p>
              </div>

              <div className="text-left md:text-right">
                <h3 className="text-xl font-semibold mb-4">Entre em contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center md:justify-end">
                    <Mail className="h-5 w-5 mr-3" />
                    <a href="mailto:pedro@regulamentei.com.br" className="hover:text-yellow-400 transition-colors">
                      pedro@regulamentei.com.br
                    </a>
                  </p>
                  <p className="flex items-center md:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <a
                      href="https://www.instagram.com/regulamentei"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      instagram.com/regulamentei
                    </a>
                  </p>
                  <p className="flex items-center md:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <a
                      href="https://www.linkedin.com/company/regulamentei"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      linkedin.com/company/regulamentei
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <p className="text-sm text-center">
                Regulamento e privacidade de seus dados conforme a LGPD (Lei 13.709/2018)
              </p>
              <p className="text-sm text-center mt-1">© 2025 Regulamentei. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <WhatsappButton phoneNumber="5551993984165" />
      </main>
    </>
  )
}
