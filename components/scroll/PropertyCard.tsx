import Image from "next/image"
import Link from "next/link"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  title: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  location: string
  href: string
  isFavorite?: boolean
  isGuestFavorite?: boolean
}

export function PropertyCard({
  title,
  description,
  image,
  rating,
  reviews,
  price,
  location,
  href,
  isFavorite,
  isGuestFavorite,
}: PropertyCardProps) {
  return (
    <Link 
      href={href}
      className="group block space-y-3 min-w-[300px] transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
        >
          <Heart className={isFavorite ? "fill-red-500 stroke-red-500" : ""} />
        </Button>
        {isGuestFavorite && (
          <Badge variant="secondary" className="absolute left-2 top-2">
            Guest favorite
          </Badge>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <p className="font-semibold">
          K{price} <span className="font-normal text-muted-foreground">per term</span>
        </p>
      </div>
    </Link>
  )
}

