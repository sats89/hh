import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Train, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Sydney Harbor Hostel",
  description:
    "Get in touch with Sydney Harbor Hostel. Find our location, contact details, and directions. Located in Sydney CBD near major attractions.",
  keywords: "Sydney Harbor Hostel contact, hostel location Sydney, Sydney CBD accommodation contact",
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us or find your way to Sydney Harbor Hostel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  123 George Street
                  <br />
                  Sydney NSW 2000
                  <br />
                  Australia
                </p>
                <p className="text-sm text-gray-500">
                  Located in the heart of Sydney CBD, just minutes walk from Circular Quay and the Opera House
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">+61 2 9876 5432</p>
                <p className="text-sm text-gray-500">Available 24/7 for bookings and inquiries</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">info@sydneyharborhostel.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Reception Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">24/7 Reception</p>
                <p className="text-sm text-gray-500">
                  Check-in: 2:00 PM - 11:00 PM
                  <br />
                  Check-out: 7:00 AM - 11:00 AM
                  <br />
                  Late check-in available
                </p>
              </CardContent>
            </Card>
          </div>
        {/* Map Section */}
        <div className="mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5947363207845!2d151.20699831521!3d-33.86882098065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sGeorge%20St%2C%20Sydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1635123456789!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sydney Harbor Hostel Location"
            ></iframe>
          </div>
          {/* Transportation */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Get Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <span>From Airport</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Airport Link train to Circular Quay (13 minutes)</li>
                  <li>• 5-minute walk from Circular Quay Station</li>
                  <li>• Taxi/Uber: 20-30 minutes depending on traffic</li>
                  <li>• Airport shuttle services available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Train className="h-5 w-5 text-blue-600" />
                  <span>Public Transport</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Circular Quay Station: 5-minute walk</li>
                  <li>• Wynyard Station: 8-minute walk</li>
                  <li>• Multiple bus routes along George Street</li>
                  <li>• Ferry terminal at Circular Quay nearby</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
          
        </div>
{/* Contact Form */}
          {/* <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Booking inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your inquiry..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
        
      </div>
    </div>
  )
}
