import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function CategoryCard({ title, description, image, href }: CategoryCardProps) {
  return (
    <Link 
      href={href}
      className="group block space-y-2 min-w-[300px] transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

