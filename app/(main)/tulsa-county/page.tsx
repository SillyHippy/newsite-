import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server & Legal Document Services | Same-Day Delivery',
  description:
    'Professional process server services for every city and community in Tulsa County. Licensed, bonded, fast turnaround, with coverage in Tulsa, Broken Arrow, Bixby, Jenks, Sand Springs, and more.',
  keywords:
    'tulsa county process server, legal document delivery tulsa county, process server tulsa, process server broken arrow, process server bixby, process server jenks, process server sand springs, serve papers tulsa, subpoena service tulsa county',
  alternates: { canonical: 'https://justlegalsolutions.org/tulsa-county' },
  openGraph: {
    title: 'Tulsa County Process Server & Legal Document Services | Just Legal Solutions',
    description: 'Licensed, bonded, and fast process servers for every city and community in Tulsa County, Oklahoma.',
    url: 'https://justlegalsolutions.org/tulsa-county',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/tulsa-county-courthouse.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tulsa County Courthouse Process Server',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa County Process Server & Legal Document Services',
    description: 'Same-day process serving and legal document delivery for all Tulsa County cities and towns.',
    images: ['https://justlegalsolutions.org/images/tulsa-county-courthouse.jpeg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Tulsa County Process Server',
  description:
    'Professional process server and legal document delivery for every city and community in Tulsa County, Oklahoma.',
  url: 'https://justlegalsolutions.org/tulsa-county',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'City', name: 'Sand Springs' },
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'City', name: 'Collinsville' },
    { '@type': 'City', name: 'Glenpool' },
    { '@type': 'City', name: 'Skiatook' },
    { '@type': 'City', name: 'Sapulpa' },
    { '@type': 'Town', name: 'Sperry' },
    { '@type': 'Town', name: 'Liberty' },
    { '@type': 'Town', name: 'Lotsee' },
    { '@type': 'Town', name: 'Fair Oaks' },
    { '@type': 'Community', name: 'Oakhurst' },
    { '@type': 'Community', name: 'Turley' },
    { '@type': 'Community', name: 'Berryhill' },
    { '@type': 'Community', name: 'Mingo' },
    { '@type': 'Community', name: 'Leonard' },
    { '@type': 'Community', name: 'Garnett' },
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

const serviceAreas = [
  {
    name: 'Tulsa',
    paths: [
      { href: '/tulsa-process-server', label: 'Tulsa Process Server' },
      { href: '/process-server-tulsa', label: 'Tulsa County Court Service' },
      { href: '/seo/tulsa-process-server-comprehensive', label: 'Comprehensive Tulsa Legal Support' },
    ],
    note: 'County seat – business, law, and courthouse center',
  },
  {
    name: 'Broken Arrow',
    paths: [
      { href: '/seo/broken-arrow-process-server', label: 'Broken Arrow Process Server' },
      { href: '/seo/process-server-broken-arrow', label: 'Broken Arrow Rush & Special Cases' },
    ],
    note: 'Rapidly growing suburb – spans Tulsa & Wagoner County',
  },
  {
    name: 'Bixby',
    paths: [
      { href: '/seo/bixby-process-server', label: 'Bixby Process Server' },
    ],
    note: 'Suburban & rural community, Tulsa & Wagoner County',
  },
  {
    name: 'Jenks',
    paths: [
      { href: '/seo/jenks-process-server', label: 'Jenks Process Server' },
    ],
    note: 'Riverfront city – schools, businesses, neighborhoods',
  },
  {
    name: 'Sand Springs',
    paths: [
      { href: '/seo/sand-springs-process-server', label: 'Sand Springs Process Server' },
      { href: '/seo/process-server-sand-springs', label: 'Sand Springs Rush Service' },
    ],
    note: 'Historic western suburb – industry & neighborhoods',
  },
  {
    name: 'Owasso',
    paths: [
      { href: '/seo/owasso-process-server', label: 'Owasso Process Server' },
    ],
    note: 'Northern edge – families & commerce',
  },
  {
    name: 'Glenpool',
    paths: [
      { href: '/seo/glenpool-process-server', label: 'Glenpool Process Server' },
    ],
    note: 'Southwestern Tulsa County – oil heritage town',
  },
  // Display these as plain text, no links (no dedicated pages yet)
  { name: 'Collinsville', paths: [], note: 'Northern Tulsa County' },
  { name: 'Skiatook', paths: [], note: 'Small north Tulsa County section' },
  { name: 'Sapulpa', paths: [], note: 'Southwest, partly in Tulsa County' },
  { name: 'Sperry', paths: [], note: 'Northeastern Tulsa County' },
  { name: 'Liberty', paths: [], note: 'Eastern edge, partial' },
  { name: 'Lotsee', paths: [], note: 'Tiny western area' },
  { name: 'Fair Oaks', paths: [], note: 'Eastern edge, partial' },
  { name: 'Oakhurst', paths: [], note: 'Southern community/CDP' },
  { name: 'Turley', paths: [], note: 'North, unincorporated community' },
  { name: 'Berryhill', paths: [], note: 'Southwest unincorporated area' },
  { name: 'Mingo', paths: [], note: 'Community, northeast Tulsa' },
  { name: 'Leonard', paths: [], note: 'Community, southeast Tulsa County' },
  { name: 'Garnett', paths: [], note: 'Community, northern Tulsa County' },
];

const faqs = [
  {
    q: 'What areas of Tulsa County do you serve?',
    a: 'We serve every city, town, and neighborhood—from Tulsa to Glenpool, Jenks, Sand Springs, Broken Arrow, and every community in between.',
  },
  { q: 'Do you offer same-day process service in Tulsa County?', a: 'Yes, most locations in Tulsa County qualify for same-day or next-day priority delivery.' },
  { q: 'Are your process servers licensed for all city/county courts?', a: 'Absolutely. Our servers are licensed and bonded for every court in Tulsa County, and understand the unique procedures for each city’s judicial system.' },
  { q: 'Can you deliver to homes, businesses, or gated communities in Tulsa County?', a: 'Yes. We routinely serve papers in residential neighborhoods, office parks, schools, medical facilities, and secure gated communities.' },
  { q: 'What happens if the person to be served is not at home?', a: 'We use legal skip tracing and make diligent attempts at varying times to ensure the highest chance of successful service, and keep you informed throughout the process.' },
  { q: 'How fast can you serve in a smaller town like Sperry or Glenpool?', a: 'Service is typically attempted within 24-48 hours, with expedited options available in all Tulsa County towns.' },
  { q: 'What if the recipient lives in a part of a city that crosses county lines?', a: 'We verify jurisdiction and ensure the court receives correct, county-compliant affidavit of service, even if a city crosses into another county (e.g., Broken Arrow, Bixby, Sand Springs).' },
  { q: 'Do you serve eviction notices, subpoenas, and family law documents?', a: 'Yes, we serve all legal papers—evictions, civil and family documents, subpoenas, and more—across Tulsa County.' },
  { q: 'Do you serve legal documents after hours or on weekends in Tulsa County?', a: 'Yes, we offer after-hours and weekend service for urgent legal deliveries throughout Tulsa County. Contact us for availability and rush options.' },
  { q: 'What types of legal documents can you deliver in Tulsa County?', a: 'We deliver all types of legal documents, including subpoenas, summons, divorce papers, eviction notices, court filings, and more.' }
];

export default function TulsaCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white pb-12">
          <div className="container mx-auto px-4 pt-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Tulsa County Process Server & Legal Document Delivery</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
              Reliable process serving and legal document delivery. We bring fast, professional service to every city and town in Tulsa County.
            </p>
            <div className="flex justify-center mt-8">
              <Image src="/images/tulsa-county-courthouse.jpeg" width={600} height={350} alt="Tulsa County courthouse process server" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">
              Serving Tulsa, Broken Arrow, Bixby, Jenks, Sand Springs, Owasso, Glenpool, and all Tulsa County communities.
            </p>
            {/* Google Maps Embed for Tulsa County */}
            <div className="flex justify-center mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412235.1229762693!2d-96.2239487441333!3d36.13012920197728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b69324e23801f7%3A0x4296e34c3835c065!2sTulsa%20County%2C%20OK!5e0!3m2!1sen!2sus!4v1690222882674!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tulsa County, OK Map"
                className="rounded-lg shadow-lg w-full max-w-2xl"
              ></iframe>
            </div>
          </div>
        </section>

        {/* History/Value Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tulsa County: A Regional Hub</h2>
            <p className="text-lg text-gray-700">
              Tulsa County has long been a vital hub of legal, business, and community activity in Oklahoma. Founded in 1907, the region grew rapidly alongside Tulsa’s oil boom, developing a rich cultural heritage and a mosaic of neighborhoods ranging from historic downtown districts to thriving suburbs and pioneering communities. Our process serving and legal courier services are tailored to meet the unique demands of Tulsa County’s diverse landscape.
            </p>
          </div>
        </section>

        {/* Service Area Grid */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Cities & Towns We Serve in Tulsa County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
              {serviceAreas.map(area => (
                <div key={area.name} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-blue-900 font-semibold block text-lg">{area.name}</span>
                  {area.paths && area.paths.length > 0 ? (
                    <div className="flex flex-col gap-1 mt-1">
                      {area.paths.map((p) => (
                        <Link key={p.href} href={p.href} className="text-blue-700 underline text-sm font-semibold">
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600 mt-1">{area.note}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              Every Tulsa County community is covered—if you don’t see your area as a link above, contact us and we’ll help.
            </p>
          </div>
        </section>

        {/* [Insert other major sections here, such as services, stats, community, FAQs, CTAs, as needed. Make sure any internal links match this same natural language/link style.] */}

        {/* Community Connection Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Community Connection</h2>
            <p className="text-lg text-gray-700">
              We partner with Tulsa County law offices, participate in Chamber of Commerce events, and support local legal outreach. Our team is active in community events and dedicated to serving every neighborhood with professionalism and care.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50 border-t mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa County FAQs</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strong CTAs */}
        <section className="bg-blue-100 py-8 border-t text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Request a Tulsa County Process Server Today</h3>
          <p className="text-gray-800 mb-4">
            Contact us for fast, compliant legal delivery in ANY Tulsa County neighborhood.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Get a Free Quote
          </a>
        </section>

        {/* More Internal Links */}
        <section className="py-8 text-center">
          <h4 className="text-lg font-semibold mb-2">Explore More</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="text-blue-700 underline font-semibold">See Pricing</Link>
            <Link href="/contact" className="text-blue-700 underline font-semibold">Contact Us</Link>
            <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link>
          </div>
        </section>
      </div>
      <BusinessSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}
