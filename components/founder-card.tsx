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
        <div className="flex items-center mb-4">
          {imageSrc ? (
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-teal-500 transition-transform duration-300 hover:scale-105">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mr-4 border-2 border-teal-500 transition-transform duration-300 hover:scale-105">
              <User className="h-8 w-8 text-teal-600" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-teal-600 font-medium">{title}</p>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
