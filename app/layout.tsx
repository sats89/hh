import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sydney Harbor Hostel - Budget Accommodation in Sydney CBD",
    template: "%s | Sydney Harbor Hostel",
  },
  description:
    "Affordable hostel accommodation in Sydney CBD. Clean rooms, modern amenities, and prime location near Sydney Harbor. Book your stay today.",
  keywords: "Sydney hostel, budget accommodation, backpacker hostel, Sydney CBD, cheap accommodation Sydney",
  authors: [{ name: "Sydney Harbor Hostel" }],
  creator: "Sydney Harbor Hostel",
  publisher: "Sydney Harbor Hostel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sydneyharborhostel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sydney Harbor Hostel - Budget Accommodation in Sydney CBD",
    description:
      "Affordable hostel accommodation in Sydney CBD. Clean rooms, modern amenities, and prime location near Sydney Harbor.",
    url: "https://sydneyharborhostel.com",
    siteName: "Sydney Harbor Hostel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sydney Harbor Hostel",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Harbor Hostel - Budget Accommodation in Sydney CBD",
    description:
      "Affordable hostel accommodation in Sydney CBD. Clean rooms, modern amenities, and prime location near Sydney Harbor.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Sydney Harbor Hostel",
              description: "Affordable hostel accommodation in Sydney CBD with modern amenities and prime location.",
              url: "https://sydneyharborhostel.com",
              telephone: "+61-2-9876-5432",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 George Street",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                postalCode: "2000",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.8688,
                longitude: 151.2093,
              },
              priceRange: "$25-$80",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free WiFi",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "24/7 Reception",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Shared Kitchen",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
