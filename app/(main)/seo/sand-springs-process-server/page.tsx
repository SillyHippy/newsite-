import type { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// Corrected metadata for Sand Springs
export const metadata: Metadata = {
  title: 'Sand Springs Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Top-rated process server in Sand Springs, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa & Creek Counties.',
  keywords: 'process server sand springs, sand springs process server, legal document delivery sand springs, court papers sand springs, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/sand-springs-process-server'
  },
  openGraph: {
    title: 'Sand Springs, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Sand Springs. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/sand-springs-process-server',
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
    title: 'Sand Springs, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Sand Springs? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Corrected LegalService Schema for Sand Springs
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Sand Springs',
  description: 'Professional process server for Sand Springs and surrounding areas in Tulsa and Creek Counties.',
  url: 'https://justlegalsolutions.org/seo/sand-springs-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Sand Springs' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Creek County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// Data object for the page content, including FAQs
const sandSpringsData = {
    faqs: [
        {
            q: 'Do you offer same-day process serving in Sand Springs?',
            a: 'Yes, we offer same-day and rush process serving throughout Sand Springs and the Tulsa metro area. Contact us for urgent requests.'
        },
        {
            q: 'Are you licensed to serve court papers in Sand Springs?',
            a: 'Yes, all of our process servers are licensed and bonded in Oklahoma, and we serve all courts in Sand Springs and Tulsa County.'
        },
        {
            q: 'What legal documents do you serve in Sand Springs?',
            a: 'We serve subpoenas, summons, complaints, eviction notices, small claims, family law documents, and more for individuals, law firms, and businesses.'
        },
        {
            q: 'How do you handle difficult-to-serve individuals in the Sand Springs area?',
            a: 'We use advanced skip tracing, surveillance, and creative tactics to locate and serve evasive individuals while remaining fully compliant with Oklahoma law.'
        },
        {
            q: 'Do you serve businesses, schools, and government offices in Sand Springs?',
            a: 'Absolutely. We serve all types of locations, including businesses, schools, and public buildings, with professionalism and discretion.'
        },
        {
            q: 'How fast can you serve papers in Sand Springs?',
            a: 'Standard service is typically attempted within 24-48 hours and completed within 3-5 business days. Same-day and rush services are available for urgent matters.'
        }
    ]
};


export default function SandSpringsProcessServerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Sand Springs, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service for Sand Springs and the Tulsa Metro</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Sand Springs</h2>
              <p className="text-lg text-gray-700 mb-4">
                Sand Springs is a unique blend of historic neighborhoods and new developments along the Arkansas River. If you need a process server in Sand Springs or nearby <a href="/seo/broken-arrow-process-server" className="text-blue-700 underline">Broken Arrow</a> or <a href="/seo/owasso-process-server" className="text-blue-700 underline">Owasso</a>, our team is ready to help.
              </p>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Sand Springs Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>Sand Springs Municipal Court</strong><br />
                100 E Broadway St, Sand Springs, OK 74063<br />
                <a href="https://sandspringsok.org/169/Municipal-Court" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">All major civil cases for Sand Springs residents are filed at the Tulsa County Courthouse in downtown Tulsa.</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Prattville</li>
                  <li>Downtown Sand Springs</li>
                  <li>River West</li>
                  <li>Charles Page Blvd</li>
                  <li>Sand Springs North</li>
                  <li>Rural Sand Springs</li>
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Sand Springs</h3>
              <p className="text-gray-700 mb-4">Service of process in Sand Springs is governed by Oklahoma State Statutes. Our team ensures every serve is legally compliant and provides a notarized Affidavit of Service for the Tulsa County District Court.</p>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {sandSpringsData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact & Service Area Map</h3>
              <div className="mb-6">
                <iframe
                  title="Sand Springs Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-96.1086!3d36.1395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sSand%20Springs%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Sand Springs</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/owasso-process-server" className="underline">Owasso Process Server</a></li>
                <li><a href="/seo/glenpool-process-server" className="underline">Glenpool Process Server</a></li>
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
              </ul>
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

