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
    src: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80",
    alt: "Shared dorm room with bunk beds and lockers",
    category: "rooms",
    title: "Shared Dorm Room",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    alt: "Private single room with desk and window",
    category: "rooms",
    title: "Private Single Room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
    alt: "Cozy twin room with beds and wardrobe",
    category: "rooms",
    title: "Twin Room",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    alt: "Modern shared kitchen with appliances",
    category: "amenities",
    title: "Shared Kitchen",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    alt: "Common lounge area with sofas and TV",
    category: "amenities",
    title: "Common Lounge",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    alt: "Laundry room with washing machines",
    category: "amenities",
    title: "Laundry Room",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    alt: "Clean shared bathroom with showers",
    category: "amenities",
    title: "Shared Bathroom",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Study area with desks and chairs",
    category: "amenities",
    title: "Study Area",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Outdoor courtyard with seating",
    category: "amenities",
    title: "Outdoor Courtyard",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Hostel entrance and reception area",
    category: "location",
    title: "Reception",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    alt: "Bicycle storage area",
    category: "amenities",
    title: "Bike Storage",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Hostel building exterior",
    category: "location",
    title: "Hostel Exterior",
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
