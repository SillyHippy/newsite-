import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import LocalBusinessSchema from '@/components/ui/local-business-schema';
import ServiceSchema from '@/components/ui/service-schema';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';
import EnhancedFAQPageSchema from '@/components/ui/enhanced-faq-page-schema';
import EnhancedOrganizationSchema from '@/components/ui/enhanced-organization-schema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Osage County OK | Licensed Professional Service | Just Legal Solutions',
  description: 'Licensed process server throughout Osage County, Oklahoma. Serving Pawhuska, Skiatook. Same-day service available.',
  keywords: 'process server Osage County, legal document service Osage County, court papers Oklahoma, Pawhuska courthouse, process serving Pawhuska Skiatook, skip tracing Osage County',
  openGraph: {
    title: 'Process Server Osage County OK | Just Legal Solutions',
    description: 'Licensed process server throughout Osage County, Oklahoma. Professional legal document service in all cities and towns.',
    url: 'https://justlegalsolutions.org/counties/osage-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Osage County OK',
    description: 'Licensed process server throughout Osage County, Oklahoma. Professional service in all cities.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/osage-county',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Counties', url: '/counties' },
  { name: 'Osage County', url: '/counties/osage-county' },
];

const osageCountyFAQs = [
  {
    question: "How much does a process server cost in Osage County?",
    answer: "We offer competitive rates for Osage County process serving with standard, rush, and same-day emergency service available throughout all cities including Pawhuska, Skiatook. Contact us for current pricing or visit our pricing page for detailed information."
  },
  {
    question: "Which cities in Osage County do you serve?",
    answer: "We serve all cities and towns in Osage County including Pawhuska, Skiatook, plus all unincorporated areas within the county boundaries."
  },
  {
    question: "Where do you file court documents in Osage County?",
    answer: "Court documents are filed at the Osage County Courthouse located at 600 Grandview Ave., Pawhuska, OK 74056. Phone: (918) 287-4104."
  },
  {
    question: "How long does service take in Osage County?",
    answer: "Standard service takes 3-5 business days anywhere in Osage County. Rush service is completed within 24 hours, and same-day emergency service is available for urgent situations."
  },
  {
    question: "Are you licensed to serve process throughout Osage County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with the Osage County Clerk. We maintain all required bonds and certifications for county-wide service."
  },
  {
    question: "Can you serve papers in rural areas of Osage County?",
    answer: "Yes, we serve legal documents in all areas of Osage County including rural and unincorporated areas outside city limits with the same professional standards and pricing."
  }
];

export default function OsageCountyProcessServer() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Osage County Process Server - Just Legal Solutions",
      "url": "https://justlegalsolutions.org/counties/osage-county",
      "telephone": "+1-405-923-0139",
      "areaServed": [
        {
          "@type": "City",
          "name": "Pawhuska",
          "addressRegion": "OK"
        },
        {
          "@type": "City", 
          "name": "Skiatook",
          "addressRegion": "OK"
        },
        {
          "@type": "City",
          "name": "Hominy", 
          "addressRegion": "OK"
        },
        {
          "@type": "City",
          "name": "Fairfax",
          "addressRegion": "OK"
        }
      ],
      "serviceType": "Process Server",
      "provider": {
        "@type": "Organization",
        "@id": "https://justlegalsolutions.org/#organization"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <EnhancedFAQPageSchema 
        faqs={osageCountyFAQs}
        pageTitle="Osage County Process Server - FAQ"
        pageUrl="https://justlegalsolutions.org/counties/osage-county"
      />
      <EnhancedOrganizationSchema />
      <Navbar />
      <LocalBusinessSchema
        name="Just Legal Solutions - Osage County Process Server"
        address={{
          streetAddress: "County-wide Service",
          addressLocality: "Pawhuska",
          addressRegion: "Oklahoma",
          postalCode: "74000"
        }}
        phone="(539) 367-6832"
        description="Professional process server throughout Osage County, Oklahoma providing legal document service in all cities including Pawhuska, Skiatook."
        serviceArea={["Osage County", "Oklahoma"]}
      />
      
      <ServiceSchema
        serviceName="Process Server Osage County"
        serviceDescription="Professional legal document service throughout Osage County, Oklahoma including all cities, towns, and unincorporated areas with same-day service available."
        serviceArea="Osage County, Oklahoma"
        priceRange="$60-$150"
        serviceType="Legal Services"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Process Server <span className="text-yellow-400">Osage County, Oklahoma</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                County-Wide Legal Document Service • All Cities & Towns • Professional Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  View Our Pricing
                </Link>
              </div>
              <a 
                href="tel:5393676832" 
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call Now: (539) 367-6832
              </a>
            </div>
          </div>
        </section>

        {/* County Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Legal Services Throughout Osage County
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>County Seat:</strong> Pawhuska<br/>
                    <strong>Established:</strong> 1907 (Oklahoma Statehood)<br/>
                    <strong>Major Cities:</strong> Pawhuska, Skiatook
                  </p>
                  <p>
                    Osage County represents an important part of Oklahoma&apos;s legal landscape, serving diverse communities from the county seat of Pawhuska to rural areas throughout the county. Our process serving team provides comprehensive coverage throughout all incorporated cities and unincorporated areas.
                  </p>
                  <p>
                    We understand the unique characteristics of each community in Osage County, ensuring professional service regardless of location while maintaining consistent standards and competitive pricing throughout the county.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Osage County Service Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>County Seat:</span>
                    <span className="font-semibold">Pawhuska</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cities Served:</span>
                    <span className="font-semibold">2 incorporated cities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courthouse:</span>
                    <span className="font-semibold">600 Grandview Ave.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Hours:</span>
                    <span className="font-semibold">8:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cities & Towns We Serve in Osage County
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Pawhuska</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 2,984</p>
                <p className="text-gray-700 text-sm mb-4">Named for Paw-Hiu-Skah (White Hair), Osage chief. Oil boom from Osage Nation lease sales under Million Dollar Elm...</p>
                <Link 
                  href="/service-areas/pawhuska"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Skiatook</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 8,036</p>
                <p className="text-gray-700 text-sm mb-4">Osage settlement, oil boom town...</p>
                <Link 
                  href="/service-areas/skiatook"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents in Osage County?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving throughout all cities and towns in Osage County • Licensed • Bonded • Insured
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:5393676832" 
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call: (539) 367-6832
              </a>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 border-2 border-blue-500 font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Calendar className="w-6 h-6" />
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      
        {/* County Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Service Available</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Link 
                  href="/pricing"
                  className="block text-center hover:bg-green-100 transition-colors rounded-lg"
                >
                  <div className="text-3xl font-bold text-green-900 mb-2">Pricing</div>
                  <div className="text-gray-700">View All Rates →</div>
                </Link>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-900 mb-2">Licensed</div>
                <div className="text-gray-700">Bonded & Insured</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-900 mb-2">100%</div>
                <div className="text-gray-700">Professional Affidavits</div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Osage County Service Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional process serving throughout Osage County, Oklahoma - from Pawhuska to Skiatook and all areas in between
              </p>
            </div>
            <GoogleMapsEmbed 
              countyName="Osage County"
              cityName="Pawhuska"
              state="Oklahoma"
              title="Osage County Process Server Coverage Area"
            />
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Just Legal Solutions in Osage County?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unmatched expertise and reliability for all your Osage County process serving needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">Licensed & Bonded</h3>
                </div>
                <p className="text-gray-700">
                  Fully licensed with Osage County Clerk, bonded and insured for your protection. All legal requirements met and exceeded.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-green-900">Same-Day Service</h3>
                </div>
                <p className="text-gray-700">
                  Emergency same-day service available throughout Osage County. Rush services completed within 24 hours guaranteed.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-purple-900">Local Knowledge</h3>
                </div>
                <p className="text-gray-700">
                  Deep familiarity with Osage County geography, from Pawhuska&apos;s neighborhoods to rural routes throughout the county.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-orange-900">Detailed Documentation</h3>
                </div>
                <p className="text-gray-700">
                  Comprehensive affidavits with GPS coordinates, photos, and detailed service notes for Court evidence.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-red-900">Statewide Network</h3>
                </div>
                <p className="text-gray-700">
                  Part of Oklahoma&apos;s largest process serving network. If we can&apos;t serve it in Osage County, our partners will.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-900">Track Record</h3>
                </div>
                <p className="text-gray-700">
                  Thousands of successful serves in Osage County with 99.2% success rate and zero court challenges to our affidavits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Process Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Process Serving Throughout the County
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our County-Wide Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>All Legal Documents:</strong> Divorce papers, custody modifications, eviction notices, small claims, civil complaints, subpoenas
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Professional Skip Tracing:</strong> Advanced location services when addresses are unknown or outdated
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Court Filing Services:</strong> Same-day filing, certified copies, and document retrieval services
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Rush & Emergency Service:</strong> Same-day service available throughout the county for urgent legal matters
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Oklahoma Legal Requirements</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>Process Server Licensing:</strong> All process servers must be licensed with the county clerk and maintain a $2,000 bond.
                  </div>
                  <div>
                    <strong>Service Standards:</strong> Service must comply with Oklahoma Rules of Civil Procedure Title 12. Proper service includes personal delivery or approved substitute methods.
                  </div>
                  <div>
                    <strong>Affidavit Requirements:</strong> Professional affidavits of service must be filed with the court, detailing time, place, and method of service.
                  </div>
                  <div>
                    <strong>Due Process Protection:</strong> Proper service ensures constitutional due process rights are protected in all legal proceedings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Coverage Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete County Coverage
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Professional process serving in every city, town, and unincorporated area throughout the county
            </p>
            <div className="bg-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Serve Your Documents?</h3>
              <p className="text-blue-100 mb-6">
                Licensed, bonded, and insured process serving throughout the county • Same-day service available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:5393676832" 
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 border-2 border-blue-500 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {osageCountyFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}