import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Regulamentei - Transformando complexidade em conformidade.",
  description:
    "Consultoria regulatória especializada para o setor de saúde. Oferecemos suporte completo em regularização empresarial, auditoria documental e inteligência regulatória.",
  keywords:
    "regulamentei, consultoria regulatória, anvisa, vigilância sanitária, regularização empresarial, setor de saúde, AFE, AE, auditoria documental, pedro alves, farmacêutico, regulação",
  authors: [{ name: "Pedro Alves", url: "https://regulamentei.com.br" }],
  creator: "Pedro Alves",
  publisher: "Regulamentei",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://regulamentei.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Regulamentei - Consultoria Regulatória para o Setor de Saúde",
    description:
      "Transformando complexidade em conformidade. Consultoria especializada em regularização empresarial, auditoria documental e inteligência regulatória.",
    url: "https://regulamentei.com.br",
    siteName: "Regulamentei",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 500,
        height: 500,
        alt: "Regulamentei Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulamentei - Consultoria Regulatória para o Setor de Saúde",
    description:
      "Transformando complexidade em conformidade. Consultoria especializada em regularização empresarial, auditoria documental e inteligência regulatória.",
    creator: "@regulamentei",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.svg",
    },
  },
  verification: {
    google: "google-site-verification=CODIGO_VERIFICACAO",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://regulamentei.com.br" />
        <meta name="google-site-verification" content="CODIGO_VERIFICACAO" />
      </head>
      <body>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>

        {/* Schema.org para LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Regulamentei",
              description: "Consultoria regulatória especializada para o setor de saúde.",
              url: "https://regulamentei.com.br",
              telephone: "+5551993984165",
              email: "pedro@regulamentei.com.br",
              logo: "https://regulamentei.com.br/logo.svg",
              image: "https://regulamentei.com.br/logo.svg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto Alegre",
                addressRegion: "RS",
                addressCountry: "BR",
              },
              founder: {
                "@type": "Person",
                name: "Pedro Alves",
                jobTitle: "Farmacêutico e Especialista em Regulação",
              },
              sameAs: ["https://www.instagram.com/regulamentei", "https://www.linkedin.com/company/regulamentei"],
            }),
          }}
        />
      </body>
    </html>
  )
}
