import { User } from "lucide-react"
import Image from "next/image"

interface FounderCardProps {
  name: string
  title: string
  description: string
  imageSrc?: string
}

export function FounderCard({ name, title, description, imageSrc }: FounderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
          {imageSrc ? (
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 border-2 border-teal-500 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="w-48 h-48 rounded-full bg-teal-100 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 border-2 border-teal-500 transition-transform duration-300 hover:scale-105 flex-shrink-0">
              <User className="h-20 w-20 text-teal-600" />
            </div>
          )}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-teal-600 font-medium mb-3">{title}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
