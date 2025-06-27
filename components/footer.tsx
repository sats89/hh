import Link from "next/link"
import { MapPin, Phone, Mail, Wifi, Coffee, Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-600">
                <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#2563eb" />
                <path d="M8 20l8-12 8 12H8z" fill="#fff" />
                <circle cx="16" cy="18" r="2" fill="#2563eb" />
              </svg>
              </div>
              <span className="text-xl font-bold">Sydney Harbor Hostel</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your home away from home in the heart of Sydney. Clean, comfortable, and affordable accommodation with
              modern amenities.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 George Street, Sydney NSW 2000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="#book" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+61 2 9876 5432</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@sydneyharborhostel.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Amenities</h4>
              <div className="flex space-x-4 text-gray-300">
                <Wifi className="h-4 w-4" title="Free WiFi" />
                <Coffee className="h-4 w-4" title="Common Area" />
                <Car className="h-4 w-4" title="Nearby Parking" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sydney Harbor Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
