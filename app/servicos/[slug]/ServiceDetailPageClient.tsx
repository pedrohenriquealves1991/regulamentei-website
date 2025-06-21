"use client"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { WhatsappButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import type { Service } from "@/lib/services-data" // Importar o tipo Service

// CallToAction é agora parte do conteúdo vindo de services-data.ts
// BackToServicesLink permanece como um componente local aqui.
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

// Remover a definição local de servicesData daqui.

interface ServiceDetailPageClientProps {
  service: Service | null // Aceita o objeto service (ou null) como prop
}

export function ServiceDetailPageClient({ service }: ServiceDetailPageClientProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!service) {
    // Este é um fallback caso o prop service seja null.
    // A página Server Component (page.tsx) já deve ter um fallback mais robusto.
    return (
      <>
        <Navbar variant="internal" />
        <main className="flex min-h-screen flex-col items-center justify-center pt-20 px-4 bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Serviço não encontrado</h1>
            <p className="text-lg text-gray-600 mb-8">Não foi possível carregar os detalhes deste serviço.</p>
            <Link
              href="/#services"
              className="inline-flex items-center text-teal-600 hover:text-teal-800 py-2 px-4 rounded-md border border-teal-500 hover:bg-teal-50 transition-colors duration-300 group text-lg"
            >
              <ChevronLeft size={20} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar aos serviços
            </Link>
          </div>
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
            <BackToServicesLink />
          </AnimatedSection>
        </div>
      </main>
      <WhatsappButton phoneNumber="5551993984165" />
    </>
  )
}
