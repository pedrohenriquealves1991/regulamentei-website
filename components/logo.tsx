import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "small" | "medium" | "large" | "header" | "hero-large"
  className?: string
}

export function Logo({ size = "medium", className = "" }: LogoProps) {
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 60, height: 60 },
    large: { width: 100, height: 100 },
    header: { width: 50, height: 50 },
    "hero-large": { width: 400, height: 400 },
  }

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/logo.png"
        alt="Regulamentei Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        className="transition-transform duration-300 hover:scale-105"
        priority
      />
    </Link>
  )
}
