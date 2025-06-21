"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"
import { useMobile } from "@/hooks/use-mobile" // Importar o novo hook

const navLinks = [
  { name: "Início", href: "/#home" },
  { name: "Serviços", href: "/#services" },
  { name: "Pagamento", href: "/#payment" },
  { name: "Seja um consultor", href: "/#consultores" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" },
]

interface NavbarProps {
  variant?: "default" | "internal"
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(variant === "internal")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile() // Usar o hook useMobile

  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Lógica de scroll para definir se o header deve ter fundo (quando não é mobile e menu está fechado)
    if (variant === "internal") {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false) // Simplificado, pois isMobile e isMenuOpen são tratados em showSolidBg
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Chamada inicial para definir o estado com base no scroll atual
    return () => window.removeEventListener("scroll", handleScroll)
  }, [variant]) // Dependência simplificada

  useEffect(() => {
    // Lógica para fechar o menu ao clicar fora
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
        // Ao fechar o menu, se estiver no topo da home e não for página interna,
        // o header deve voltar a ser transparente (isScrolled = false)
        if (variant !== "internal" && window.scrollY <= 10) {
          setIsScrolled(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, variant]) // Adicionado variant à dependência

  // Determina se o header deve ter fundo sólido
  const showSolidBg = isMobile || isScrolled || variant === "internal" || isMenuOpen

  const headerClasses = showSolidBg ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  const logoLinkColor = showSolidBg ? "text-teal-700" : "text-white"
  const navLinkColorBase = showSolidBg ? "text-gray-800" : "text-white" // Para desktop
  const navLinkHoverColor = showSolidBg ? "hover:text-teal-700" : "hover:text-yellow-400"
  const mobileMenuButtonColor = showSolidBg ? "text-teal-700" : "text-white"

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen
    setIsMenuOpen(newMenuState)
    // Se estiver abrindo o menu, ou se já estiver scrollado/interno, força fundo sólido
    if (newMenuState || isScrolled || variant === "internal" || isMobile) {
      setIsScrolled(true)
    } else if (variant !== "internal" && window.scrollY <= 10) {
      // Se estiver fechando no topo da home (e não for mobile), volta a transparente
      setIsScrolled(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo size="header" className="mr-3" />
            <Link href="/" className={`font-bold text-xl transition-colors duration-300 ${logoLinkColor}`}>
              REGULAMENTEI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`font-medium transition-colors duration-300 ${navLinkColorBase} ${navLinkHoverColor}`}
                      onClick={(e) => {
                        if (link.href.startsWith("/#") && window.location.pathname === "/") {
                          e.preventDefault()
                          const targetId = link.href.substring(2)
                          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            className={`md:hidden ${mobileMenuButtonColor}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav ref={menuRef} className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-700"
                  onClick={(e) => {
                    // Fechar o menu ao clicar em um link
                    setIsMenuOpen(false)
                    // Lógica de scroll para o link clicado
                    if (link.href.startsWith("/#") && window.location.pathname === "/") {
                      e.preventDefault()
                      const targetId = link.href.substring(2)
                      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    // Restaurar estado de isScrolled ao fechar o menu
                    if (!isMobile && variant !== "internal" && window.scrollY <= 10) {
                      setIsScrolled(false)
                    } else {
                      setIsScrolled(true) // Mantém ou define como scrollado se for mobile ou já scrollado/interno
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
