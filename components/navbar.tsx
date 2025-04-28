"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"
import { SocialIcons } from "./social-icons"

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Quem Somos", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo size="header" className="mr-3" />
            <Link
              href="/"
              className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? "text-teal-700" : "text-white"
              }`}
            >
              REGULAMENTEI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`font-medium transition-colors duration-300 ${
                        isScrolled ? "text-gray-800 hover:text-teal-700" : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialIcons variant={isScrolled ? "default" : "footer"} iconSize={18} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-teal-700" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-4 py-3 border-t border-gray-100 mt-2">
              <SocialIcons />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
