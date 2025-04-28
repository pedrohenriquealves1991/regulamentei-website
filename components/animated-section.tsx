"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left"
}

export function AnimatedSection({ children, className, delay = 0, animation = "fade-up" }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    "fade-in": "opacity-0 transition-opacity duration-700 ease-out",
    "slide-in-right": "opacity-0 translate-x-10 transition-all duration-700 ease-out",
    "slide-in-left": "opacity-0 -translate-x-10 transition-all duration-700 ease-out",
  }

  const visibleClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-in-right": "opacity-100 translate-x-0",
    "slide-in-left": "opacity-100 translate-x-0",
  }

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && visibleClasses[animation], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
