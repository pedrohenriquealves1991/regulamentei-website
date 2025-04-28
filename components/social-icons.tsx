import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

interface SocialIconsProps {
  className?: string
  iconSize?: number
  variant?: "default" | "footer"
}

export function SocialIcons({ className = "", iconSize = 20, variant = "default" }: SocialIconsProps) {
  const iconColor = variant === "footer" ? "text-white hover:text-yellow-400" : "text-teal-600 hover:text-teal-700"

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Link
        href="https://www.instagram.com/regulamentei"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconColor}`}
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/regulamentei"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconColor}`}
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </Link>
    </div>
  )
}
