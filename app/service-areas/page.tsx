import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Search, Star, CheckCircle, Shield, Building2 } from 'lucide-react';
import LocalBusinessSchema from '@/components/ui/local-business-schema';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Service Areas Oklahoma | Statewide Coverage | Just Legal Solutions',
  description: 'Professional process server serving statewide throughout Oklahoma. Complete coverage of all 77 counties with same-day service available. Licensed, bonded, and insured statewide.',
  keywords: 'process server Oklahoma, statewide process serving, Oklahoma process serving, legal document service Oklahoma, court papers Oklahoma counties, skip tracing Oklahoma',
  openGraph: {
    title: 'Process Server Service Areas Oklahoma | Statewide Coverage | Just Legal Solutions',
    description: 'Professional process server serving statewide throughout all of Oklahoma. Complete county coverage with same-day service available.',
    url: 'https://justlegalsolutions.org/service-areas',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Service Areas Oklahoma | Statewide Coverage',
    description: 'Professional process server serving statewide throughout all of Oklahoma.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
];

const counties = [
  {
    name: "Tulsa County",
    seat: "Tulsa",
    cities: ["Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs", "Glenpool", "Collinsville"],
    link: "/counties/tulsa-county",
    description: "Oil Capital county with 669,279 residents, Art Deco courthouse, energy industry hub"
  },
  {
    name: "Creek County", 
    seat: "Sapulpa",
    cities: ["Sapulpa", "Bristow", "Kellyville", "Kiefer", "Mounds", "Mannford", "Taft"],
    link: "/counties/creek-county",
    description: "Oil boom heritage county, Frankoma Pottery, Route 66 history"
  },
  {
    name: "Rogers County",
    seat: "Claremore", 
    cities: ["Claremore", "Catoosa", "Verdigris", "Oologah", "Inola", "Foyil", "Chelsea", "Talala"],
    link: "/counties/rogers-county",
    description: "Will Rogers heritage, Route 66 corridor, inland port at Catoosa"
  },
  {
    name: "Wagoner County",
    seat: "Wagoner",
    cities: ["Wagoner", "Coweta", "Porter", "Redbird", "Haskell"],
    link: "/counties/wagoner-county", 
    description: "Railroad crossroads heritage, agricultural and government center"
  },
  {
    name: "Washington County",
    seat: "Bartlesville",
    cities: ["Bartlesville", "Dewey", "Copan", "Ramona", "Ochelata", "Vera", "Wann", "Lenapah"],
    link: "/counties/washington-county",
    description: "First commercial oil well, Phillips Petroleum headquarters, Frank Lloyd Wright architecture"
  },
  {
    name: "Mayes County", 
    seat: "Pryor",
    cities: ["Pryor", "Chouteau", "Locust Grove", "Salina", "Spavinaw", "Adair"],
    link: "/counties/mayes-county",
    description: "Manufacturing center, Lewis and Clark expedition heritage"
  },
  {
    name: "Osage County",
    seat: "Pawhuska",
    cities: ["Pawhuska", "Skiatook", "Hominy", "Fairfax"],
    link: "/counties/osage-county",
    description: "Osage Nation heritage, oil lease history, Pioneer Woman Museum"
  },
  {
    name: "Nowata County",
    seat: "Nowata", 
    cities: ["Nowata", "Delaware", "Wann", "Lenapah"],
    link: "/counties/nowata-county",
    description: "Cherokee heritage, agricultural community"
  },
  {
    name: "Okmulgee County",
    seat: "Okmulgee",
    cities: ["Okmulgee", "Beggs", "Henryetta", "Taft"],
    link: "/counties/okmulgee-county",
    description: "Creek Nation capital, historic downtown, government center"
  }
];

const majorCities = [
  { name: "Tulsa", county: "Tulsa", population: "413,066", link: "/service-areas/tulsa" },
  { name: "Broken Arrow", county: "Tulsa", population: "113,540", link: "/service-areas/broken-arrow" },
  { name: "Bartlesville", county: "Washington", population: "36,495", link: "/service-areas/bartlesville" },
  { name: "Owasso", county: "Tulsa", population: "36,926", link: "/service-areas/owasso" },
  { name: "Bixby", county: "Tulsa", population: "27,315", link: "/service-areas/bixby" },
  { name: "Jenks", county: "Tulsa", population: "25,949", link: "/service-areas/jenks" },
  { name: "Sapulpa", county: "Creek", population: "20,544", link: "/service-areas/sapulpa" },
  { name: "Sand Springs", county: "Tulsa", population: "19,912", link: "/service-areas/sand-springs" },
  { name: "Claremore", county: "Rogers", population: "18,766", link: "/service-areas/claremore" },
  { name: "Glenpool", county: "Tulsa", population: "14,683", link: "/service-areas/glenpool" },
  { name: "Okmulgee", county: "Okmulgee", population: "11,768", link: "/service-areas/okmulgee" },
  { name: "Coweta", county: "Wagoner", population: "9,943", link: "/service-areas/coweta" },
  { name: "Pryor", county: "Mayes", population: "9,539", link: "/service-areas/pryor" },
  { name: "Wagoner", county: "Wagoner", population: "9,090", link: "/service-areas/wagoner" },
  { name: "Skiatook", county: "Osage", population: "8,036", link: "/service-areas/skiatook" },
  { name: "Catoosa", county: "Rogers", population: "7,930", link: "/service-areas/catoosa" },
  { name: "Collinsville", county: "Tulsa", population: "7,140", link: "/service-areas/collinsville" }
];

export default function ServiceAreasHub() {
  return (
    <>
      <Navbar />
      
      <LocalBusinessSchema
        name="Just Legal Solutions - Oklahoma Process Server"
        address={{
          streetAddress: "Statewide Service",
          addressLocality: "Oklahoma",
          addressRegion: "Oklahoma", 
          postalCode: "74101"
        }}
        phone="(539) 367-6832"
        description="Professional process server serving statewide throughout all of Oklahoma including all 77 counties with same-day service available."
        serviceArea={["Oklahoma", "Statewide"]}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Oklahoma Process Server <span className="text-yellow-400">Service Areas</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Statewide Coverage • All 77 Counties • 500+ Cities • Same-Day Service Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg font-semibold">
                  <MapPin className="w-5 h-5" />
                  All 77 Counties Covered
                </div>
                <div className="flex items-center gap-2 bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                  <Clock className="w-5 h-5" />
                  Same-Day Available
                </div>
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

        {/* Service Coverage Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Oklahoma Statewide Legal Document Service Coverage
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Professional process serving throughout the entire state of Oklahoma, covering all 77 counties and 500+ cities and towns. From Oklahoma City and Tulsa to the smallest rural communities, we provide comprehensive legal document service with the same professional standards and competitive pricing statewide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Statewide Coverage</h3>
                <p className="text-gray-700">Complete Oklahoma coverage including all 77 counties, urban centers, suburban communities, and rural areas throughout the entire state.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-gray-700">Licensed, bonded, and insured statewide service with 95% success rate and same professional standards in every Oklahoma location.</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Service Speed</h3>
                <p className="text-gray-700">Standard, rush, and same-day service available throughout entire state with consistent professional standards statewide. <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">View pricing options →</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Primary Coverage Areas (Plus All 77 Oklahoma Counties)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {counties.map((county, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-1">{county.name}</h3>
                      <p className="text-sm text-gray-600">County Seat: {county.seat}</p>
                    </div>
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{county.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Major Cities:</p>
                    <div className="text-xs text-gray-600">
                      {county.cities.slice(0, 4).join(", ")}
                      {county.cities.length > 4 && ` + ${county.cities.length - 4} more`}
                    </div>
                  </div>
                  <Link 
                    href={county.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View County Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Cities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major Cities & Towns We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {majorCities.map((city, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{city.name}</h3>
                    <span className="text-xs text-gray-500">{city.county} Co.</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Pop: {city.population}</p>
                  <Link 
                    href={city.link}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    City Details →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Plus dozens of smaller communities, rural areas, and unincorporated locations throughout all 77 Oklahoma counties.
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Just Legal Solutions Across Oklahoma?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Licensed Statewide</h3>
                <p className="text-gray-600">Properly licensed, bonded, and insured in all counties we serve with all required registrations current.</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Local Knowledge</h3>
                <p className="text-gray-600">Deep understanding of each county&apos;s courthouse procedures, local customs, and geographic characteristics.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Consistent Quality</h3>
                <p className="text-gray-600">Same high standards and professional service whether serving in downtown Tulsa or rural Nowata County.</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Consistent professional rates throughout entire state. <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">View our pricing structure →</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Your Area */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Find Your Service Area
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Not sure if we serve your location? We provide statewide coverage throughout all of Oklahoma including urban, suburban, and rural areas across all 77 counties.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas We Serve Include:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Metropolitan Areas:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Greater Tulsa Metro</li>
                    <li>• Broken Arrow Area</li>
                    <li>• Bartlesville Region</li>
                    <li>• Claremore Area</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rural & Small Town Areas:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• All incorporated cities</li>
                    <li>• Unincorporated areas</li>
                    <li>• Rural residential areas</li>
                    <li>• Agricultural communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents Anywhere in Oklahoma?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving statewide throughout Oklahoma • All 77 counties • Same-day service available
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
                <Search className="w-6 h-6" />
                Get Quote
              </Link>
            </div>
            <div className="mt-8 text-blue-200">
              <p>Licensed • Bonded • Insured • Professional Service Guaranteed</p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
