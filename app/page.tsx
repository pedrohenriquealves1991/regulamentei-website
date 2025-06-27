"use client"

import { WhatsappButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { FounderCard } from "@/components/founder-card"
import { HowWeWork } from "@/components/how-we-work"
import { AnimatedSection } from "@/components/animated-section"
import { Navbar } from "@/components/navbar"
import { PaymentMethods } from "@/components/payment-methods"
import { Logo } from "@/components/logo"
import { MapPin, Mail, Shield, FlaskConical, Truck, FileWarning, Microscope, Lightbulb } from "lucide-react"
import { WhatsappLogo } from "@/components/icons"

import { useEffect } from "react"
import { ConsultantCtaSection } from "@/components/consultant-cta-section"
import { usePathname } from "next/navigation" // Importar usePathname

export default function Home() {
  const pathname = usePathname() // Usar para re-executar o efeito se o path mudar (embora o hash não faça parte do pathname)

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "auto" }) // Mudado para behavior: 'auto'
        }
      }
    }

    // Executar após o ciclo de renderização atual para garantir que os elementos estejam no DOM.
    // Um pequeno atraso pode ser necessário se o conteúdo da página for carregado dinamicamente
    // e afetar as dimensões do layout.
    const timerId = setTimeout(handleHashScroll, 0) // Usar timeout 0

    return () => clearTimeout(timerId) // Limpar o timeout ao desmontar
  }, [pathname]) // Re-executar o efeito se o pathname mudar (útil se a navegação para hash for via Link que muda o path)
  // Para hashes na mesma página, o clique no Link do Navbar já tem seu próprio scrollIntoView.
  // Este useEffect é mais para quando a página Home é carregada diretamente com um hash.

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="w-full bg-gradient-to-r from-teal-700 to-teal-600 text-white py-20 md:py-32 px-4 flex items-center justify-center"
        >
          <div className="container mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-optimized">
                Regulamentei — Consultoria em Assuntos Regulatórios para pequenas e médias empresas da área da saúde
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-body-optimized">
                Precisa lidar com a ANVISA e não tem um setor regulatório interno, podemos te ajudar.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="max-w-2xl mx-auto text-lg mb-10 space-y-4">
                <p className="text-body-optimized">
                  Cuidamos da parte regulatória para você se concentrar no que importa: operar com segurança e dentro da
                  lei.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5551993984165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-200 text-teal-700 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg"
                >
                  Fale Conosco
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg"
                >
                  Conheça os Serviços
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 text-optimized">Nossos Serviços</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <ServiceCard
                icon={<Shield className="h-8 w-8 text-teal-600" />}
                title="Regularização Empresarial e Análise de Viabilidade"
                shortDescription="Transforme sua empresa em um negócio regularizado. Conduzimos todo o processo para obtenção de licenças, AFE e AE."
                slug="regularizacao-empresarial-e-analise-de-viabilidade"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <ServiceCard
                icon={<FlaskConical className="h-8 w-8 text-teal-600" />}
                title="Registro e Pós-Registro de Medicamentos"
                shortDescription="Elaboração de formulação, processo fabril, análise de riscos e revisão de PATE para sólidos, líquidos e semissólidos."
                slug="documentacao-de-medicamentos"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <ServiceCard
                icon={<Truck className="h-8 w-8 text-teal-600" />}
                title="Licenciamento para Transportadoras"
                shortDescription="Suporte completo para transportadoras obterem a licença sanitária para operar com substâncias controladas."
                slug="licenciamento-para-transportadoras"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <ServiceCard
                icon={<FileWarning className="h-8 w-8 text-teal-600" />}
                title="Solução para Exigências"
                shortDescription="Resposta técnica e ágil a exigências da ANVISA, com análise, redação e organização documental para garantir a conformidade."
                slug="solucao-para-exigencias"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <ServiceCard
                icon={<Microscope className="h-8 w-8 text-teal-600" />}
                title="Pesquisa Clínica de Dispositivos Médicos"
                shortDescription="Montagem e revisão do dossiê de investigação (DICD) para atender às normas da ANVISA e CEP/CONEP."
                slug="pesquisa-clinica-de-dispositivos-medicos"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <ServiceCard
                icon={<Lightbulb className="h-8 w-8 text-teal-600" />}
                title="Inteligência Regulatória Estratégica"
                shortDescription="Identifique novas oportunidades de mercado, analise a concorrência e expanda seu portfólio com insights regulatórios e conexões internacionais."
                slug="inteligencia-regulatoria"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section id="payment" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 text-optimized">
                Facilidade de Pagamento
              </h2>
              <PaymentMethods />
            </AnimatedSection>
          </div>
        </section>

        {/* Consultant CTA Section */}
        <section id="consultores" className="py-16 px-4 bg-white">
          <ConsultantCtaSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 text-optimized">A Empresa</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <AnimatedSection animation="slide-in-left" delay={200}>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-justified text-body-optimized">
                    A Regulamentei nasce para atender empresas de pequeno e médio porte do setor de saúde que não
                    dispõem de uma estrutura regulatória ou de qualidade interna com experiência ou tamanho suficientes
                    para demandas pontuais e sazonais, como lançamento de um produto, preparação para auditorias ou
                    resposta a exigências da Anvisa e da Vigilância Sanitária.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justified text-body-optimized">
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

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-optimized">Fale Conosco</h2>
              <p className="text-lg text-gray-600 mb-10">
                Estamos prontos para atender você. Entre em contato diretamente pelo WhatsApp.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/5551993984165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <WhatsappLogo className="h-6 w-6" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-12 text-gray-600">
                <p className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                  Porto Alegre, RS | Brasil
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-teal-700 text-white py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Logo size="small" className="mr-3" />
                <h2 className="text-2xl font-bold">REGULAMENTEI</h2>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm mb-2">
                  <Mail className="inline-block h-4 w-4 mr-1 align-middle" />
                  <a href="mailto:pedro@regulamentei.com.br" className="hover:text-yellow-400 transition-colors">
                    pedro@regulamentei.com.br
                  </a>
                </p>
                <p className="text-sm">Regulamento e privacidade de seus dados conforme a LGPD (Lei 13.709/2018)</p>
                <p className="text-sm mt-1">© 2025 Regulamentei. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <WhatsappButton phoneNumber="5551993984165" />
      </main>
    </>
  )
}
