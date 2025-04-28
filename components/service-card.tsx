import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="border-l-4 border-teal-500 p-6 bg-white rounded-r shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="flex items-center mb-3">
        {icon && <div className="mr-3 text-teal-600">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
