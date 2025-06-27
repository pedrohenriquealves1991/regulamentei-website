"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"
import { useMobile } from "@/hooks/use-mobile"

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
  const isMobile = useMobile()

  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (variant === "internal") {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [variant])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
        if (variant !== "internal" && window.scrollY <= 10) {
          setIsScrolled(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, variant])

  // Usar mobile-first approach para evitar FOUC
  const showSolidBg = isMobile || isScrolled || variant === "internal" || isMenuOpen

  // Classes otimizadas para mobile-first
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    showSolidBg ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  } ${isMobile ? "mobile-optimized-header" : ""}`

  const logoLinkColor = showSolidBg ? "text-teal-700" : "text-white"
  const navLinkColorBase = showSolidBg ? "text-gray-800" : "text-white"
  const navLinkHoverColor = showSolidBg ? "hover:text-teal-700" : "hover:text-yellow-400"
  const mobileMenuButtonColor = showSolidBg ? "text-teal-700" : "text-white"

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen
    setIsMenuOpen(newMenuState)
    if (newMenuState || isScrolled || variant === "internal" || isMobile) {
      setIsScrolled(true)
    } else if (variant !== "internal" && window.scrollY <= 10) {
      setIsScrolled(false)
    }
  }

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo size="header" className="mr-3" />
            <Link
              href="/"
              className={`font-bold text-xl transition-colors duration-300 text-optimized ${logoLinkColor}`}
            >
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
                      className={`font-medium transition-colors duration-300 text-optimized ${navLinkColorBase} ${navLinkHoverColor}`}
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
                  className="block py-2 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-700 text-body-optimized"
                  onClick={(e) => {
                    setIsMenuOpen(false)
                    if (link.href.startsWith("/#") && window.location.pathname === "/") {
                      e.preventDefault()
                      const targetId = link.href.substring(2)
                      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    if (!isMobile && variant !== "internal" && window.scrollY <= 10) {
                      setIsScrolled(false)
                    } else {
                      setIsScrolled(true)
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
