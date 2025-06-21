"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768 // Corresponde ao breakpoint 'md' do Tailwind

export function useMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  // Inicializa como false para SSR, será atualizado no cliente.
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Verifica no primeiro render do cliente
    checkDeviceType()

    window.addEventListener("resize", checkDeviceType)
    return () => {
      window.removeEventListener("resize", checkDeviceType)
    }
  }, [breakpoint])

  return isMobile
}
