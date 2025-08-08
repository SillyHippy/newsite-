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
  title: 'Process Server Creek County OK | Licensed Professional Service | Just Legal Solutions',
  description: 'Licensed process server throughout Creek County, Oklahoma. Serving Sapulpa, Bristow, Kellyville. Same-day service available.',
  keywords: 'process server Creek County, legal document service Creek County, court papers Oklahoma, Sapulpa courthouse, process serving Sapulpa Bristow Kellyville, skip tracing Creek County',
  openGraph: {
    title: 'Process Server Creek County OK | Just Legal Solutions',
    description: 'Licensed process server throughout Creek County, Oklahoma. Professional legal document service in all cities and towns.',
    url: 'https://justlegalsolutions.org/counties/creek-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Creek County OK',
    description: 'Licensed process server throughout Creek County, Oklahoma. Professional service in all cities.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/creek-county',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Counties', url: '/counties' },
  { name: 'Creek County', url: '/counties/creek-county' },
];

const creekCountyFAQs = [
  {
    question: "How much does a process server cost in Creek County?",
    answer: "We offer competitive rates for Creek County process serving with standard, rush, and same-day emergency service available throughout all cities including Sapulpa, Bristow, Kellyville. Contact us for current pricing or visit our pricing page for detailed information."
  },
  {
    question: "Which cities in Creek County do you serve?",
    answer: "We serve all cities and towns in Creek County including Sapulpa, Bristow, Kellyville, plus all unincorporated areas within the county boundaries."
  },
  {
    question: "Where do you file court documents in Creek County?",
    answer: "Court documents are filed at the Creek County Courthouse located at 222 E. Dewey St., Sapulpa, OK 74066. Phone: (918) 227-2525."
  },
  {
    question: "How long does service take in Creek County?",
    answer: "Standard service takes 3-5 business days anywhere in Creek County. Rush service is completed within 24 hours, and same-day emergency service is available for urgent situations."
  },
  {
    question: "Are you licensed to serve process throughout Creek County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with the Creek County Clerk. We maintain all required bonds and certifications for county-wide service."
  },
  {
    question: "Can you serve papers in rural areas of Creek County?",
    answer: "Yes, we serve legal documents in all areas of Creek County including rural and unincorporated areas outside city limits with the same professional standards and pricing."
  }
];

export default function CreekCountyProcessServer() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Creek County Process Server - Just Legal Solutions",
      "url": "https://justlegalsolutions.org/counties/creek-county",
      "telephone": "+1-405-923-0139",
      "areaServed": [
        {
          "@type": "City",
          "name": "Sapulpa",
          "addressRegion": "OK"
        },
        {
          "@type": "City", 
          "name": "Bristow",
          "addressRegion": "OK"
        },
        {
          "@type": "City",
          "name": "Drumright", 
          "addressRegion": "OK"
        },
        {
          "@type": "City",
          "name": "Kellyville",
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
        faqs={creekCountyFAQs}
        pageTitle="Creek County Process Server - FAQ"
        pageUrl="https://justlegalsolutions.org/counties/creek-county"
      />
      <EnhancedOrganizationSchema />
      <Navbar />
      
      <LocalBusinessSchema
        name="Just Legal Solutions - Creek County Process Server"
        address={{
          streetAddress: "County-wide Service",
          addressLocality: "Sapulpa",
          addressRegion: "Oklahoma",
          postalCode: "74000"
        }}
        phone="(539) 367-6832"
        description="Professional process server throughout Creek County, Oklahoma providing legal document service in all cities including Sapulpa, Bristow, Kellyville."
        serviceArea={["Creek County", "Oklahoma"]}
      />
      
      <ServiceSchema
        serviceName="Process Server Creek County"
        serviceDescription="Professional legal document service throughout Creek County, Oklahoma including all cities, towns, and unincorporated areas with same-day service available."
        serviceArea="Creek County, Oklahoma"
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
                Process Server <span className="text-yellow-400">Creek County, Oklahoma</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                County-Wide Legal Document Service • All Cities & Towns • Professional Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <DollarSign className="w-6 h-6" />
                  View Pricing & Service Options
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
                  Professional Legal Services Throughout Creek County
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>County Seat:</strong> Sapulpa<br/>
                    <strong>Established:</strong> 1907 (Oklahoma Statehood)<br/>
                    <strong>Major Cities:</strong> Sapulpa, Bristow, Kellyville
                  </p>
                  <p>
                    Creek County represents an important part of Oklahoma&apos;s legal landscape, serving diverse communities from the county seat of Sapulpa to rural areas throughout the county. Our process serving team provides comprehensive coverage throughout all incorporated cities and unincorporated areas.
                  </p>
                  <p>
                    We understand the unique characteristics of each community in Creek County, ensuring professional service regardless of location while maintaining consistent standards and competitive pricing throughout the county.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Creek County Service Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>County Seat:</span>
                    <span className="font-semibold">Sapulpa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cities Served:</span>
                    <span className="font-semibold">3 incorporated cities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courthouse:</span>
                    <span className="font-semibold">222 E. Dewey St.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Hours:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
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
              Cities & Towns We Serve in Creek County
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Sapulpa</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 20,544</p>
                <p className="text-gray-700 text-sm mb-4">Named for Chief Sapulpa, full-blood Lower Creek Indian who established trading post 1850 near Polecat and Rock creeks. A...</p>
                <Link 
                  href="/service-areas/sapulpa"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Bristow</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 4,222</p>
                <p className="text-gray-700 text-sm mb-4">Railroad town on St. Louis-Oklahoma City line, oil boom community...</p>
                <Link 
                  href="/service-areas/bristow"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Kellyville</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 1,150</p>
                <p className="text-gray-700 text-sm mb-4">Railroad town, agricultural community...</p>
                <Link 
                  href="/service-areas/kellyville"
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
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents in Creek County?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving throughout all cities and towns in Creek County • Licensed • Bonded • Insured
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
                Creek County Service Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional process serving throughout Creek County, Oklahoma - from Sapulpa to Bristow and all areas in between
              </p>
            </div>
            <GoogleMapsEmbed 
              countyName="Creek County"
              cityName="Sapulpa"
              state="Oklahoma"
              title="Creek County Process Server Coverage Area"
            />
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Just Legal Solutions in Creek County?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unmatched expertise and reliability for all your Creek County process serving needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">Licensed & Bonded</h3>
                </div>
                <p className="text-gray-700">
                  Fully licensed with Creek County Clerk, bonded and insured for your protection. All legal requirements met and exceeded.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-green-900">Same-Day Service</h3>
                </div>
                <p className="text-gray-700">
                  Emergency same-day service available throughout Creek County. Rush services completed within 24 hours guaranteed.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-purple-900">Local Knowledge</h3>
                </div>
                <p className="text-gray-700">
                  Deep familiarity with Creek County geography, from Sapulpa&apos;s neighborhoods to rural routes throughout the county.
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
                  Part of Oklahoma&apos;s largest process serving network. If we can&apos;t serve it in Creek County, our partners will.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-900">Track Record</h3>
                </div>
                <p className="text-gray-700">
                  Thousands of successful serves in Creek County with 99.2% success rate and zero court challenges to our affidavits.
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
              Frequently Asked Questions - Creek County Process Serving
            </h2>
            <div className="space-y-8">
              {creekCountyFAQs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Have More Questions? Contact Us
              </Link>
            </div>
          </div>
        </section>
</div>
      
      <Footer />
    </>
  );
}