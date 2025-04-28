import { WhatsappButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { FounderCard } from "@/components/founder-card"
import { HowWeWork } from "@/components/how-we-work"
import { AnimatedSection } from "@/components/animated-section"
import { Navbar } from "@/components/navbar"
import { Logo } from "@/components/logo"
import { SocialIcons } from "@/components/social-icons"
import { MapPin, Mail, Shield, FileCheck, FlaskConical, Truck, FileWarning, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="w-full bg-teal-700 text-white pt-24 pb-16 px-4">
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
              <Logo size="hero-large" className="mb-8 md:mb-0 md:mr-8" />

              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">REGULAMENTEI</h1>
                <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
                <p className="text-lg md:text-xl">Transformando complexidade em conformidade.</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Quem Somos</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <AnimatedSection animation="slide-in-left" delay={200}>
                <FounderCard
                  name="Pedro Alves"
                  title="Farmacêutico | Especialista em Regulação"
                  description="Com 10 anos de experiência no setor regulatório de saúde, fundei a Regulamentei para transformar a complexidade dos processos regulatórios em soluções claras e eficientes para empresas que buscam conformidade."
                />
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={300}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3">A Empresa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A Regulamentei nasceu da ideia de criar uma consultoria regulatória mais arrojada, que não apenas
                    resolve problemas, mas antecipa soluções que o cliente pode não ter visualizado por falta de uma
                    inteligência regulatória interna.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nosso foco é atender pequenas e médias empresas que não possuem capacidade ou para as quais não faz
                    sentido investir em uma área regulatória ou de qualidade própria. Preenchemos esse espaço com
                    soluções eficientes e personalizadas.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={400}>
              <HowWeWork />
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
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <Logo size="medium" className="mr-3" />
                <h2 className="text-2xl font-bold">REGULAMENTEI</h2>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-xl font-semibold mb-2">Entre em contato</h3>
                <p className="text-white/80">Estamos prontos para ajudar sua empresa</p>
              </div>
            </div>

            <AnimatedSection animation="fade-in">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="mb-2 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Porto Alegre, RS | Brasil
                  </p>
                  <p className="mb-2 flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Contato:{" "}
                    <a href="mailto:pedro@regulamentei.com.br" className="hover:underline ml-1">
                      pedro@regulamentei.com.br
                    </a>
                  </p>
                  <div className="mt-4">
                    <SocialIcons variant="footer" iconSize={22} />
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="text-sm">Regulamento e privacidade de seus dados conforme a LGPD (Lei 13.709/2018)</p>
                  <p className="text-sm mt-1">© 2025 Regulamentei. Todos os direitos reservados.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <WhatsappButton phoneNumber="5551993984165" />
      </main>
    </>
  )
}
