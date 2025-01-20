"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryCard } from "./CategoryCard"
import { PropertyCard } from "./PropertyCard"
import { ScrollableSection } from "./scrollableSection"

const categories = [
  {
    title: "Primary Schools",
    description: "Quality education for grades 1-7",
    image: "/placeholder.svg?height=300&width=400",
    href: "/schools/primary"
  },
  {
    title: "Secondary Schools",
    description: "Excellence in grades 8-12",
    image: "/placeholder.svg?height=300&width=400",
    href: "/schools/secondary"
  },
  {
    title: "Colleges",
    description: "Professional and vocational training",
    image: "/placeholder.svg?height=300&width=400",
    href: "/schools/colleges"
  },
  {
    title: "Teveta Accredited Institions",
    description: "Professional and vocational training",
    image: "/placeholder.svg?height=300&width=400",
    href: "/schools/colleges"
  }
]

const schools = [
  {
    title: "Victoria Falls Academy",
    description: "Premier boarding school with excellent facilities and academic programs",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.87,
    reviews: 30,
    price: 15000,
    location: "Livingstone",
    href: "/schools/victoria-falls-academy",
    isGuestFavorite: true
  },
  {
    title: "Lusaka International School",
    description: "International curriculum with modern facilities",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.74,
    reviews: 53,
    price: 20000,
    location: "Lusaka",
    href: "/schools/lusaka-international",
    isFavorite: true
  },
  {
    title: "Copperbelt College",
    description: "Leading technical and vocational training institution",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.79,
    reviews: 19,
    price: 12000,
    location: "Kitwe",
    href: "/schools/copperbelt-college"
  },
   {
    title: "Rhodespark School",
    description: "Leading technical and vocational training institution",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.79,
    reviews: 19,
    price: 13000,
    location: "Kitwe",
    href: "/schools/copperbelt-college"
  },
  
]

export function SchoolDirectory() {
  return (
    <div className="space-y-10 p-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="boarding">Boarding</TabsTrigger>
          <TabsTrigger value="dayschool">Day School</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollableSection title="Browse by category">
        {categories.map((category) => (
          <div key={category.title} className="">
            <CategoryCard {...category} />
          </div>
        ))}
      </ScrollableSection>

      <ScrollableSection title="Top rated schools">
        {schools.map((school) => (
          <div key={school.title} className="">
            <PropertyCard {...school} />
          </div>
        ))}
      </ScrollableSection>
    </div>
  )
}

