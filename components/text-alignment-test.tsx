"use client"

import { useState, useEffect } from "react"

export function TextAlignmentTest() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 640)
    }

    updateScreenInfo()
    window.addEventListener("resize", updateScreenInfo)
    return () => window.removeEventListener("resize", updateScreenInfo)
  }, [])

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white p-3 rounded-lg text-sm z-50 md:block hidden">
      <div>Largura: {screenWidth}px</div>
      <div>Dispositivo: {isMobile ? "Mobile" : screenWidth < 1024 ? "Tablet" : "Desktop"}</div>
      <div>Justificação: {isMobile ? "Desabilitada" : "Ativa"}</div>
    </div>
  )
}
