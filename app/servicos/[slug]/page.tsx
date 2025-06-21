import type React from "react"
import type { Metadata } from "next"
import { ServiceDetailPageClient } from "./ServiceDetailPageClient"
import { getServiceBySlug, servicesData } from "@/lib/services-data" // Atualizado para importar do novo local
import { Navbar } from "@/components/navbar" // Para o fallback
import Link from "next/link" // Para o fallback
import type { ReactNode } from "react" // Para o fallback

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) {
    return {
      title: "Serviço não encontrado | Regulamentei",
    }
  }
  return {
    title: `${service.title} | Regulamentei`,
    description: `Detalhes sobre o serviço de ${service.title} oferecido pela Regulamentei.`,
  }
}

// Componente de fallback caso o serviço não seja encontrado no nível do Server Component
function NotFoundService(): ReactNode {
  return (
    <>
      <Navbar variant="internal" />
      <main className="flex min-h-screen flex-col items-center justify-center pt-20 px-4 bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Serviço não encontrado</h1>
          <p className="text-lg text-gray-600 mb-8">O serviço que você está procurando não existe ou foi movido.</p>
          <Link
            href="/#services"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 py-2 px-4 rounded-md border border-teal-500 hover:bg-teal-50 transition-colors duration-300 group text-lg"
          >
            <ChevronLeftIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar aos serviços
          </Link>
        </div>
      </main>
    </>
  )
}
// Ícone simples para o fallback, pode ser substituído por lucide-react se preferir
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    // Se generateStaticParams estiver correto, isso não deve acontecer para slugs válidos.
    // Mas é um fallback caso a busca por slug falhe por algum motivo.
    return <NotFoundService />
  }

  return <ServiceDetailPageClient service={service} /> // Passa o objeto service como prop
}

export async function generateStaticParams() {
  // Usa servicesData (o objeto) do novo local para gerar os slugs
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}
