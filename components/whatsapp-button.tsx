"use client"

import { WhatsappLogo } from "@/components/icons"

interface WhatsappButtonProps {
  phoneNumber: string
}

export function WhatsappButton({ phoneNumber }: WhatsappButtonProps) {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <WhatsappLogo className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
        Fale Conosco
      </span>
    </button>
  )
}

