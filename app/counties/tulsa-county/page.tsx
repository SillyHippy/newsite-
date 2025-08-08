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
  title: 'Process Server Tulsa County OK | Licensed Professional Service | Just Legal Solutions',
  description: 'Licensed process server throughout Tulsa County, Oklahoma. Serving Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Collinsville. Same-day service available.',
  keywords: 'process server Tulsa County, legal document service Tulsa County, court papers Oklahoma, Tulsa County courthouse, process serving Broken Arrow Owasso Bixby, skip tracing Tulsa County, licensed process server Oklahoma, process server near me Tulsa, Tulsa County process serving, legal papers delivery Tulsa, subpoena service Tulsa County, divorce papers service Tulsa, eviction notice service Oklahoma, civil litigation support Tulsa, process server 74101 74103 74104 74105 74106 74107, legal document delivery Broken Arrow, court filing Tulsa County courthouse, professional process server Oklahoma',
  openGraph: {
    title: 'Process Server Tulsa County OK | Just Legal Solutions',
    description: 'Licensed process server throughout Tulsa County, Oklahoma. Professional legal document service in all cities and towns.',
    url: 'https://justlegalsolutions.org/counties/tulsa-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Tulsa County OK',
    description: 'Licensed process server throughout Tulsa County, Oklahoma. Professional service in all cities.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/tulsa-county',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Counties', url: '/counties' },
  { name: 'Tulsa County', url: '/counties/tulsa-county' },
];

const tulsaCountyFAQs = [
  {
    question: "How much does a process server cost in Tulsa County?",
    answer: "We offer competitive rates for Tulsa County process serving with standard, rush, and same-day emergency service available throughout all cities including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville. Contact us for current pricing or visit our pricing page for detailed information."
  },
  {
    question: "Which cities in Tulsa County do you serve?",
    answer: "We serve all cities and towns in Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville, plus all unincorporated areas within the county boundaries."
  },
  {
    question: "Where do you file court documents in Tulsa County?",
    answer: "Court documents are filed at the Tulsa County Courthouse located at 500 S. Denver Ave., Tulsa, OK 74103. We also handle municipal court filings in individual cities as needed."
  },
  {
    question: "How long does service take in Tulsa County?",
    answer: "Standard service takes 3-5 business days anywhere in Tulsa County. Rush service is completed within 24 hours, and same-day emergency service is available for urgent situations."
  },
  {
    question: "Are you licensed to serve process throughout Tulsa County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with the Tulsa County Clerk. We maintain all required bonds and certifications for county-wide service."
  },
  {
    question: "Can you serve papers in rural areas of Tulsa County?",
    answer: "Yes, we serve legal documents in all areas of Tulsa County including rural and unincorporated areas outside city limits with the same professional standards and pricing."
  },
  {
    question: "What types of legal documents do you serve in Tulsa County?",
    answer: "We serve all types of legal documents including civil litigation, family law papers, real estate documents, business litigation, criminal subpoenas, and probate papers throughout Tulsa County."
  },
  {
    question: "Do you provide skip tracing services in Tulsa County?",
    answer: "Yes, we provide professional skip tracing services throughout Tulsa County to locate hard-to-find defendants, witnesses, and parties using advanced databases and local knowledge."
  }
];

const tulsaCountyCities = [
  {
    name: "Tulsa",
    population: "413,066",
    description: "County seat and Oklahoma's second-largest city, Oil Capital of the World",
    link: "/service-areas/tulsa"
  },
  {
    name: "Broken Arrow",
    population: "113,540",
    description: "Fastest growing suburb with excellent schools and family communities",
    link: "/service-areas/broken-arrow"
  },
  {
    name: "Owasso",
    population: "36,926",
    description: "Growing suburban community with strong residential neighborhoods",
    link: "/service-areas/owasso"
  },
  {
    name: "Bixby",
    population: "27,315",
    description: "Charming downtown with Arkansas River access and growing families",
    link: "/service-areas/bixby"
  },
  {
    name: "Jenks",
    population: "25,949",
    description: "Antique Capital of Oklahoma with tourism and education focus",
    link: "/service-areas/jenks"
  },
  {
    name: "Sand Springs",
    population: "19,912",
    description: "Manufacturing community with glass production and industrial heritage",
    link: "/service-areas/sand-springs"
  },
  {
    name: "Glenpool",
    population: "14,683",
    description: "Oil heritage community, site of Glenn Pool discovery that started Oklahoma oil boom",
    link: "/service-areas/glenpool"
  },
  {
    name: "Collinsville",
    population: "7,140",
    description: "Rural character community with agricultural and small manufacturing base",
    link: "/service-areas/collinsville"
  }
];

export default function TulsaCountyProcessServer() {
  return (
    <>
      <Navbar />
      
      <EnhancedOrganizationSchema countyName="Tulsa County" />
      <EnhancedFAQPageSchema 
        faqs={tulsaCountyFAQs} 
        pageTitle="Tulsa County Process Server FAQs"
        pageUrl="https://justlegalsolutions.org/counties/tulsa-county" 
      />
      
      <LocalBusinessSchema
        name="Just Legal Solutions - Tulsa County Process Server"
        address={{
          streetAddress: "County-wide Service",
          addressLocality: "Tulsa County",
          addressRegion: "Oklahoma",
          postalCode: "74101"
        }}
        phone="(539) 367-6832"
        description="Professional process server throughout Tulsa County, Oklahoma providing legal document service in all cities including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville."
        serviceArea={["Tulsa County", "Oklahoma"]}
      />
      
      <ServiceSchema
        serviceName="Process Server Tulsa County"
        serviceDescription="Professional legal document service throughout Tulsa County, Oklahoma including all cities, towns, and unincorporated areas with same-day service available."
        serviceArea="Tulsa County, Oklahoma"
        priceRange="$$"
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
                Process Server <span className="text-yellow-400">Tulsa County, Oklahoma</span>
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

        {/* Tulsa County Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Oklahoma&apos;s Premier County for Legal Services
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Established:</strong> November 16, 1907 (Oklahoma Statehood)<br/>
                    <strong>County Seat:</strong> Tulsa<br/>
                    <strong>Population:</strong> 669,279 (2020 Census)<br/>
                    <strong>Area:</strong> 587 square miles
                  </p>
                  <p>
                    Tulsa County stands as Oklahoma&apos;s most populous and economically significant county, serving as the heart of the state&apos;s energy industry and second-largest metropolitan area. From the Oil Capital of the World in Tulsa to the fastest-growing suburbs like Broken Arrow and Owasso, our county encompasses diverse communities with sophisticated legal needs.
                  </p>
                  <p>
                    Our process serving team provides comprehensive coverage throughout all of Tulsa County&apos;s incorporated cities and unincorporated areas. We understand the unique characteristics of each community, from urban Tulsa&apos;s complex business district to the suburban neighborhoods of Bixby and Jenks, ensuring professional service regardless of location.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Tulsa County Statistics</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Total Cities:</span>
                    <span className="font-semibold">8 incorporated cities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Largest City:</span>
                    <span className="font-semibold">Tulsa (413,066)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Economic Base:</span>
                    <span className="font-semibold">Energy, Aerospace, Healthcare</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courthouse:</span>
                    <span className="font-semibold">Historic Art Deco (1937)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal Districts:</span>
                    <span className="font-semibold">District, Municipal, Federal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Area:</span>
                    <span className="font-semibold">587 square miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Tulsa County Service Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional process serving throughout all of Tulsa County including urban, suburban, and rural areas. 
                Click on the map to explore our complete service coverage.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                cityName="Tulsa"
                title="Tulsa County Process Server Service Area"
              />
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                <strong>Complete Coverage:</strong> Tulsa • Broken Arrow • Owasso • Bixby • Jenks • Sand Springs • Glenpool • Collinsville
              </p>
            </div>
          </div>
        </section>

        {/* Cities in Tulsa County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cities & Towns We Serve in Tulsa County
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tulsaCountyCities.map((city, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{city.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Population: {city.population}</p>
                  <p className="text-gray-700 text-sm mb-4">{city.description}</p>
                  <Link 
                    href={city.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courthouse Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  Tulsa County Courthouse
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Address:</strong> 500 S. Denver Ave., Tulsa, OK 74103
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Phone:</strong> (918) 596-5000
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Jurisdiction:</strong> All civil, criminal, family, and probate matters in Tulsa County
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Historical Significance</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Built:</strong> 1937 during the Great Depression<br/>
                    <strong>Architect:</strong> Solomon Layton<br/>
                    <strong>Style:</strong> Art Deco/Art Moderne<br/>
                    <strong>Recognition:</strong> National Register of Historic Places (1992)
                  </p>
                  <p>
                    The magnificent Tulsa County Courthouse stands as one of the finest examples of Art Deco architecture in Oklahoma. Built with PWA funds during the Great Depression at a cost of $1.5 million, this 11-floor limestone building replaced the original 1906 courthouse and represents the prosperity of Tulsa&apos;s oil boom era.
                  </p>
                  <p>
                    Our process servers are intimately familiar with all courthouse procedures, filing requirements, and the various departments within this historic building. We ensure efficient service and proper documentation for all court-related matters throughout Tulsa County.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Process Serving Throughout Tulsa County
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Licensed, bonded, and insured process servers covering all cities in Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville. Same-day service available.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-colors shadow-lg"
              >
                <DollarSign className="w-7 h-7" />
                View Complete Pricing & Service Options
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Transparent pricing • No hidden fees • Same professional standards county-wide
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Just Legal Solutions for Tulsa County?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Bonded</h3>
                <p className="text-gray-600">Fully licensed with Tulsa County Clerk, $2,000 bond, and comprehensive insurance coverage.</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">County-Wide Coverage</h3>
                <p className="text-gray-600">Complete coverage of all 8 cities and unincorporated areas throughout Tulsa County&apos;s 587 square miles.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">95% Success Rate</h3>
                <p className="text-gray-600">Highest success rate in Tulsa County with professional skip tracing and persistent service attempts.</p>
              </div>
              <div className="text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Courthouse Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Tulsa County Courthouse procedures and all municipal court systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Tulsa County Attorneys Choose Just Legal Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike other process servers in Tulsa County, we combine technology, local expertise, and professional standards to deliver superior results.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Competitive Edge</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time GPS Tracking</h4>
                      <p className="text-gray-600">Unlike traditional process servers, we provide real-time location updates and progress tracking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">24/7 Emergency Service</h4>
                      <p className="text-gray-600">When other companies are closed, we&apos;re available for urgent legal matters around the clock.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Advanced Skip Tracing</h4>
                      <p className="text-gray-600">Professional investigators with access to databases other process servers don&apos;t have.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Local Courthouse Knowledge</h4>
                      <p className="text-gray-600">Deep relationships with Tulsa County Clerk staff and understanding of local court procedures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Process Server Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Same-Day Service</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">GPS Tracking</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">24/7 Availability</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Digital Affidavits</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-gray-400">△ Some</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">County-Wide Coverage</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-gray-400">△ Limited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents in Tulsa County?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving throughout all cities and towns in Tulsa County • Licensed • Bonded • Insured
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
            <div className="mt-8 text-blue-200">
              <p>County-wide service including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Collinsville</p>
            </div>
          </div>
        </section>

        {/* Related Counties */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Other Counties We Serve Near Tulsa County
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <Link href="/counties/creek-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Creek County
              </Link>
              <Link href="/counties/rogers-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Rogers County
              </Link>
              <Link href="/counties/wagoner-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Wagoner County
              </Link>
              <Link href="/counties/washington-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Washington County
              </Link>
              <Link href="/counties/mayes-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Mayes County
              </Link>
              <Link href="/counties/osage-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Osage County
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions - Tulsa County Process Serving
            </h2>
            <div className="space-y-8">
              {tulsaCountyFAQs.map((faq, index) => (
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
