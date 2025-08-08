import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
  description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
  keywords: ['contact process server', 'just legal solutions contact', 'process server tulsa contact', 'legal services oklahoma contact', 'business services contact', 'process serving contact'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Contact Information',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://justlegalsolutions.org/contact'
  },
  openGraph: {
    title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/contact',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjMEIxMzJCIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkp1c3QgTGVnYWwgU29sdXRpb25zPC90ZXh0Pgo8dGV4dCB4PSI2MDAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjQ0JENUU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvY2VzcyBTZXJ2aW5nICZhbXA7IEJ1c2luZXNzIFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K',
      width: 1200,
      height: 630,
      alt: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
    images: ['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjMEIxMzJCIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkp1c3QgTGVnYWwgU29sdXRpb25zPC90ZXh0Pgo8dGV4dCB4PSI2MDAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjQ0JENUU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvY2VzcyBTZXJ2aW5nICZhbXA7IEJ1c2luZXNzIFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K'],
  }
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Script id="contact-schema">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Just Legal Solutions",
            "description": "Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma.",
            "url": "https://justlegalsolutions.org/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Just Legal Solutions",
              "url": "https://justlegalsolutions.org",
              "telephone": "+15393676832",
              "email": "info@justlegalsolutions.org",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Tulsa",
                "addressRegion": "OK",
                "postalCode": "74101",
                "addressCountry": "US"
              },
              "openingHours": [
                "Mo-Su 00:00-23:59"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+15393676832",
                "contactType": "customer service",
                "areaServed": "Oklahoma",
                "availableLanguage": "English"
              }
            }
          }
        `}
      </Script>

      <GoogleSpecificOptimization />
      <BingYahooOptimization />
      <DuckDuckGoOptimization />
      <SearchEngineUniversalOptimization />
      
      <EnhancedBreadcrumbSchema 
        items={[
          { name: "Home", url: "https://justlegalsolutions.org" },
          { name: "Contact", url: "https://justlegalsolutions.org/contact" }
        ]} 
      />

      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Just Legal Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact us for professional process serving, courier services, 
              and business solutions throughout Tulsa County, Oklahoma.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a 
                        href="tel:+15393676832" 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        (539) 367-6832
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Call for immediate assistance and quotes
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:info@justlegalsolutions.org" 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        info@justlegalsolutions.org
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Send us detailed requests and documents
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Service Area</h3>
                      <p className="text-gray-700">
                        Tulsa County, Oklahoma<br />
                        Tulsa, Broken Arrow, Sapulpa<br />
                        Bixby, Owasso, Glenpool
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Statewide Oklahoma coverage available
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <div className="text-gray-700">
                        <p className="font-semibold">Available 24/7</p>
                        <p>We&apos;re here when you need us</p>
                        <p>Same-day service available</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Professional service available anytime, day or night
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-red-600">Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Need same-day or emergency process serving?
                  </p>
                  <a 
                    href="tel:+15393676832" 
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now: (539) 367-6832
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Process Serving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional legal document delivery throughout Oklahoma with certified, bonded process servers.
                </p>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing & Service Options
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Executive support, event coordination, HR services, and administrative solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive Assistant Services</li>
                  <li>• Event Planning & Coordination</li>
                  <li>• HR & Payroll Support</li>
                  <li>• Travel Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Courier Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Secure document delivery and courier services for businesses and legal professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-Day Delivery Available</li>
                  <li>• Secure Document Handling</li>
                  <li>• Statewide Oklahoma Coverage</li>
                  <li>• Professional Service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
