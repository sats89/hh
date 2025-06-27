import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Wifi, Coffee, Shield, Clock, Users, Star } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7UZeMVbnLbBeMqV16iL2cMUSH8bG-XiukrXBFOPl-FvXMpHcKQf7htpYUXm8q1P-LujK8ronxtS9OT3WAi2xkzqJdYnAjXcWlic8_N4ZjCYpiLHY-bCVIg1ZZcIzWiUzYfRtX9GjIo8CcAeEtHyp_7d8I9CY3Qns344JWd-hr-0Cqkak7l_6pgbnvzRvLK6CRpCWv-u3dJ6lOuYC-tsiztejyeh8D5uUX2cHEC9eFf7Wa2NCwJJbq3cTRu7v9o27JXHtNzRp46Q)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Sydney Harbor Hostel</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your gateway to Sydney's best attractions. Clean, comfortable, and affordable accommodation in the heart of
            the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-background text-primary hover:bg-secondary">
              <Link href="#book">Book Your Stay</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-background text-primary hover:bg-secondary"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Sydney Harbor Hostel?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the best of Sydney with our modern amenities and prime location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
                <p className="text-muted-foreground">
                  Located in Sydney CBD, walking distance to Circular Quay, Opera House, and Harbour Bridge
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free WiFi</h3>
                <p className="text-muted-foreground">High-speed internet throughout the hostel to keep you connected</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Common Areas</h3>
                <p className="text-muted-foreground">Spacious kitchen, lounge areas, and rooftop terrace for socializing</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                <p className="text-muted-foreground">24/7 security, lockers in every room, and keycard access</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Reception</h3>
                <p className="text-muted-foreground">Round-the-clock assistance and check-in flexibility</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Atmosphere</h3>
                <p className="text-muted-foreground">Meet fellow travelers from around the world in our vibrant community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comfortable Accommodation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of clean, modern rooms designed for comfort and affordability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="4-bed dormitory room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">4-Bed Dorm</h3>
                <p className="text-muted-foreground mb-4">
                  Shared dormitory with individual lockers, reading lights, and power outlets
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$35/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="6-bed dormitory room"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">6-Bed Dorm</h3>
                <p className="text-muted-foreground mb-4">
                  Budget-friendly option with all essential amenities and great atmosphere
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$28/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground">4.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Private room" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Private Room</h3>
                <p className="text-muted-foreground mb-4">Comfortable private room with shared bathroom facilities</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$75/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Sydney?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book your stay at Sydney Harbor Hostel and start your Australian adventure today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-primary hover:bg-secondary">
              Book Direct & Save
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-primary-foreground hover:bg-background hover:text-primary bg-transparent"
            >
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
