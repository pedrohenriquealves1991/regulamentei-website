"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  shortDescription: string
  icon?: ReactNode
  slug: string
}

export function ServiceCard({ title, shortDescription, icon, slug }: ServiceCardProps) {
  return (
    <Link href={`/servicos/${slug}`} passHref legacyBehavior>
      <motion.a
        className="border-l-4 border-teal-500 p-6 bg-white rounded-r shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[16rem] md:min-h-[18rem]" // Altura mínima responsiva
        whileHover={{ y: -5 }}
      >
        <div>
          {" "}
          {/* Agrupador para título/ícone e descrição para o justify-between */}
          <div className="flex items-center mb-3">
            {icon && (
              <div className="mr-3 text-teal-600 transition-transform duration-300 group-hover:scale-110">{icon}</div>
            )}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 text-justified text-body-optimized leading-relaxed">{shortDescription}</p>
        </div>

        <div className="pt-4">
          <span className="text-teal-600 group-hover:text-teal-700 font-semibold flex items-center transition-colors duration-300 self-end">
            Saiba Mais
            <ArrowRight
              size={18}
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </span>
        </div>
      </motion.a>
    </Link>
  )
}
