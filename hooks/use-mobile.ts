"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768 // Corresponde ao breakpoint 'md' do Tailwind

export function useMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  // Inicializa assumindo mobile se window não estiver disponível (SSR)
  // ou se a largura inicial for menor que o breakpoint
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return true // Assume mobile no SSR
    return window.innerWidth < breakpoint
  })

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Verifica imediatamente no primeiro render do cliente
    checkDeviceType()

    // Adiciona listener para mudanças de tamanho
    window.addEventListener("resize", checkDeviceType)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkDeviceType)
    }
  }, [breakpoint])

  return isMobile
}
