import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery - Sydney Harbor Hostel",
  description:
    "View photos of Sydney Harbor Hostel rooms, amenities, and surrounding areas. See our clean dormitories, common areas, and prime Sydney CBD location.",
  keywords: "Sydney Harbor Hostel photos, hostel rooms Sydney, dormitory photos, Sydney accommodation gallery",
}

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "4-bed dormitory with modern bunk beds",
    category: "rooms",
    title: "4-Bed Dormitory",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "6-bed dormitory with lockers",
    category: "rooms",
    title: "6-Bed Dormitory",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Private room with comfortable bed",
    category: "rooms",
    title: "Private Room",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Modern shared kitchen facility",
    category: "amenities",
    title: "Shared Kitchen",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Comfortable lounge area",
    category: "amenities",
    title: "Common Lounge",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rooftop terrace with city views",
    category: "amenities",
    title: "Rooftop Terrace",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Clean shared bathroom",
    category: "amenities",
    title: "Shared Bathroom",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sydney Opera House nearby",
    category: "location",
    title: "Sydney Opera House",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Harbour Bridge view",
    category: "location",
    title: "Harbour Bridge",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Circular Quay ferry terminal",
    category: "location",
    title: "Circular Quay",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Royal Botanic Gardens",
    category: "location",
    title: "Botanic Gardens",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=600",
    alt: "George Street shopping area",
    category: "location",
    title: "George Street",
  },
]

export default function GalleryPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our modern facilities, comfortable rooms, and prime Sydney location
          </p>
        </div>

        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  )
}
