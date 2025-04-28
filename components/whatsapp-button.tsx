"use client"

import { WhatsappLogo } from "@/components/icons"
import { useState, useEffect } from "react"

interface WhatsappButtonProps {
  phoneNumber: string
}

export function WhatsappButton({ phoneNumber }: WhatsappButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 z-50 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Contato via WhatsApp"
    >
      <WhatsappLogo className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
        Fale Conosco
      </span>
    </button>
  )
}
