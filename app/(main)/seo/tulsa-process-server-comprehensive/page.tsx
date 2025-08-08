import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

import Image from 'next/image';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// SEO Metadata optimized for the comprehensive Tulsa County page
export const metadata: Metadata = {
  title: 'Comprehensive Process Server Tulsa County | Same Day Legal Document Delivery',
  description: 'Your comprehensive guide to process serving in Tulsa County. We offer same-day service for all legal documents, including court papers, subpoenas, and notices across Tulsa, Broken Arrow, and more. Licensed, bonded, and available 24/7.',
  keywords: 'process server tulsa county, tulsa process server, legal document delivery tulsa, court papers served tulsa, subpoena service tulsa county, process serving broken arrow, legal notice delivery oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive'
  },
  openGraph: {
    title: 'Comprehensive Process Server for all of Tulsa County',
    description: 'Same-day service for legal documents in Tulsa, Broken Arrow, Bixby, Jenks, and more.',
    url: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/jls-logo.png', // Logo for social sharing
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions Logo'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Process Server for all of Tulsa County',
    description: 'Same-day service for legal documents in Tulsa, Broken Arrow, Bixby, Jenks, and more.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Detailed JSON-LD Schema for Local Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Tulsa County',
  description: 'Professional process server serving all of Tulsa County with same-day legal document delivery. Licensed, bonded, and available 24/7.',
  url: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1539,
    longitude: -95.9928
  },
  areaServed: [
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'City', name: 'Sand Springs' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  serviceType: [
    'Process Serving',
    'Legal Document Delivery',
    'Court Paper Service',
    'Subpoena Service',
    'Legal Notice Delivery'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Tulsa County ---
const tulsaData = {
    history: `Known as the "Oil Capital of the World," Tulsa's history is rich with Art Deco architecture funded by the early 20th-century oil boom. This legacy creates a diverse urban landscape, from the historic downtown core to sprawling residential areas. Effective process serving here demands an understanding of both its business centers and its widespread suburban neighborhoods.`,
    courthouse: {
        name: 'Tulsa County Courthouse',
        address: '500 S Denver Ave, Tulsa, OK 74103',
        phone: '(918) 596-5000',
        website: 'https://www.tulsacountydistrictcourt.org/',
        note: 'This is the main courthouse for all civil and family law cases in Tulsa County, including for residents of surrounding suburbs.'
    },
    processServingLaw: `All service of process in Tulsa County is governed by Oklahoma State Statutes. This mandates that a licensed server must make diligent efforts to effect personal service. We are experts in these statutes and ensure every service is legally sound for the Tulsa County District Court.`,
    serviceAreas: [
        'Downtown Tulsa',
        'Midtown',
        'South Tulsa',
        'Brookside',
        'Cherry Street',
        'Blue Dome District',
        'Brady Arts District',
        'Maple Ridge'
    ],
    faqs: [
        {
            q: 'How do you handle service in secure downtown Tulsa office buildings?',
            a: 'Our servers are experienced in professionally navigating access protocols for high-security corporate offices and buildings in downtown Tulsa to ensure legal documents are served correctly and discreetly.'
        },
        {
            q: 'What is your success rate for serving evasive individuals in Tulsa?',
            a: 'We have a high success rate due to our persistence and local knowledge. We utilize multiple attempts at various times, including early mornings and late evenings, and offer skip tracing services to locate individuals anywhere in Tulsa County.'
        },
        {
            q: 'Can you file my documents at the Tulsa County Courthouse?',
            a: 'Yes. In addition to serving the documents, we offer court filing services. We can file your initial petition or the completed Affidavit of Service directly with the Tulsa County Court Clerk for your convenience.'
        },
        {
            q: 'How quickly can you serve papers in an emergency in Tulsa?',
            a: 'We offer emergency 2-hour rush service within the Tulsa metro area. When you have a critical deadline, we can prioritize your serve to ensure it gets completed immediately.'
        }
    ]
};

export default function TulsaProcessServerComprehensive() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Speakable Schema for Voice Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Comprehensive Process Server Tulsa County | Same Day Legal Document Delivery',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'xpath': [
              '/html/head/title',
              '/html/body//h1',
              '/html/body//section[contains(@class, "faq")]//h3'
            ]
          },
          'url': 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive'
        })
      }} />
      <div className="min-h-screen bg-gray-50">
        {/* Tulsa Image Banner */}
        <div className="relative bg-blue-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/Tulsa_11.jpg"
              alt="Tulsa downtown legal district"
              fill
              style={{ objectFit: 'cover', opacity: 0.35 }}
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Comprehensive Process Serving in Tulsa County</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">The definitive resource for professional, reliable, and swift legal document service in the greater Tulsa area.</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Serving All of Tulsa County</h2>
          <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.1129303917!2d-95.87809005!3d36.15244105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1753397857366!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Guide to Professional Service of Process in Tulsa</h2>
              <p className="text-lg text-gray-700 mb-4">
                {tulsaData.history}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As the heart of <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County</a>, our process serving team covers every city and neighborhood with local expertise. If you need a broader overview of the entire county, visit our <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> page for more details and resources.
              </p>
              <p className="text-lg text-gray-700">
                This page serves as a comprehensive overview of our capabilities, service areas, and unwavering commitment to excellence in the field of legal support services.
              </p>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Core Services Offered Across Tulsa County</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Summons and Complaints:</strong> The critical first step in any lawsuit, served promptly to establish jurisdiction.</li>
                <li><strong>Subpoenas:</strong> Legally compelling witnesses to testify or produce evidence, delivered with proof of service.</li>
                <li><strong>Family Law Documents:</strong> Handling sensitive papers like divorce petitions and child custody orders with care and discretion.</li>
                <li><strong>Eviction and Forcible Detainer:</strong> Serving notices to tenants in strict accordance with Oklahoma&apos;s landlord-tenant laws.</li>
                <li><strong>Garnishments and Writs:</strong> Executing court orders for asset seizure and wage garnishment.</li>
                <li><strong>Skip Tracing:</strong> Professional location services for hard-to-find individuals.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving Every Corner of Tulsa County</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {tulsaData.serviceAreas.map(city => (
                  <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-blue-900">{city}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Tulsa-Specific Frequently Asked Questions</h2>
              <div className="space-y-8">
                {tulsaData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
                {/* Additional FAQ for Ultimate Guide */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Where can I learn more about process serving laws and best practices in Oklahoma?</h3>
                  <p className="mt-2 text-gray-700">
                    For a deep dive into state-wide process serving requirements, tips, and legal updates, check out our <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 underline">Ultimate Guide to Process Serving in Oklahoma</a>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <BusinessSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}

