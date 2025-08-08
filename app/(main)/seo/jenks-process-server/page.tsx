import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

// SEO Metadata optimized for the Jenks page
export const metadata: Metadata = {
  title: 'Jenks Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Top-rated process server in Jenks, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa County.',
  keywords: 'process server jenks, jenks process server, legal document delivery jenks, court papers jenks, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/jenks-process-server'
  },
  openGraph: {
    title: 'Jenks, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Jenks. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/jenks-process-server',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/jls-logo.png',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions Logo'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenks, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Jenks? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// Detailed JSON-LD Schema for Jenks Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Jenks',
  description: 'Professional process server for Jenks and surrounding areas in Tulsa County.',
  url: 'https://justlegalsolutions.org/seo/jenks-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Jenks, OK ---
const jenksData = {
    history: `Once known as the "Antique Capital of Oklahoma," Jenks was founded in 1905 and developed alongside the Arkansas River. It has transformed from a small railroad town into a vibrant suburban community, famed for the Oklahoma Aquarium and its historic, walkable downtown. This unique blend of history and modern growth makes local knowledge crucial for effective process serving. As part of Tulsa County, our Jenks team works closely with the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network to ensure seamless legal support across the region.`,
    courthouse: {
        name: 'Jenks City Hall / Municipal Court',
        address: '211 N Elm St, Jenks, OK 74037',
        phone: '(918) 299-5883',
        website: 'https://www.jenks.com/214/Municipal-Court',
        note: 'All major civil cases for Jenks residents are filed at the Tulsa County Courthouse in downtown Tulsa.'
    },
    processServingLaw: `Service of process in Jenks is governed by the Oklahoma Rules of Civil Procedure. This requires that service be made by a licensed, disinterested party over 18. We strictly adhere to these rules, ensuring that every service is legally defensible and properly documented with a notarized Affidavit of Service.`,
    serviceAreas: [
        'Downtown Jenks (Main Street)',
        'River District (near Oklahoma Aquarium)',
        'Elwood Crossing',
        'Southern Lakes',
        'South Tulsa ( bordering Jenks)',
        'Glenpool (neighboring city)',
        'Woodland South',
        'The Reserve at Stonebrooke',
    ],
    faqs: [
        {
            q: 'What are your service hours in Jenks, OK?',
            a: 'Our process servers operate 7 days a week, including early mornings and late evenings, to maximize the chances of successful service in residential areas like Southern Lakes and commercial districts.'
        },
        {
            q: 'Can you serve papers at the Oklahoma Aquarium or other public venues?',
            a: 'Yes, we have experience serving documents at public venues in Jenks, including the Oklahoma Aquarium, Riverwalk Crossing, and other event spaces. We always act professionally and discreetly.'
        },
        {
            q: 'Do you file Affidavits of Service with the Tulsa County Courthouse for Jenks cases?',
            a: 'Yes. After service is completed, we can file the notarized Affidavit of Service directly with the Tulsa County Court Clerk for your convenience.'
        },
        {
            q: 'How do you handle service in gated communities or apartment complexes in Jenks?',
            a: 'Our servers are familiar with the access protocols for Jenks apartment complexes and gated communities. We use legal and professional methods to gain access and effectuate service.'
        }
    ]
};

export default function JenksProcessServer() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Jenks, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service in Tulsa County</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted Process Server in Jenks, OK</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: jenksData.history }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Jenks Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>{jenksData.courthouse.name}</strong><br />
                {jenksData.courthouse.address}<br />
                <a href={jenksData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">{jenksData.courthouse.note}</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {jenksData.serviceAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Jenks</h3>
              <p className="text-gray-700 mb-4">{jenksData.processServingLaw}</p>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {jenksData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
                {/* Ultimate Guide FAQ */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Where can I learn more about process serving laws and best practices in Oklahoma?</h3>
                  <p className="mt-2 text-gray-700">
                    For a comprehensive overview of process serving requirements, legal tips, and updates across the state, visit our{' '}
                    <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 underline">Ultimate Guide to Process Serving in Oklahoma</a>.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact & Service Area Map</h3>
              <div className="mb-6">
                <iframe
                  title="Jenks Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-95.9731!3d36.0220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sJenks%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Jenks</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/bixby-process-server" className="underline">Bixby Process Server</a></li>
                <li><a href="/seo/glenpool-process-server" className="underline">Glenpool Process Server</a></li>
                <li><a href="/seo/owasso-process-server" className="underline">Owasso Process Server</a></li>
                <li><a href="/seo/sand-springs-process-server" className="underline">Sand Springs Process Server</a></li>
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

