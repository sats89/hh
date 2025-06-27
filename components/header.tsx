"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-600">
              <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#2563eb" />
                <path d="M8 20l8-12 8 12H8z" fill="#fff" />
                <circle cx="16" cy="18" r="2" fill="#2563eb" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Sydney Harbor Hostel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <Button asChild>
              <Link href="#book">Book Now</Link>
            </Button> */}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="#book">Book Now</Link>
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
