// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Glenpool Process Server',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'xpath': [
      '/html/body/div/main/div/section[1]/p',
      '/html/body/div/main/div/section[4]'
    ]
  },
  'url': 'https://justlegalsolutions.org/seo/glenpool-process-server'
};

const glenpoolData = {
    history: `Glenpool is famously known as "The Town that Made Tulsa Famous" after the discovery of the Glenn Pool Oil Reserve in 1905, one of the largest oil fields in world history. This discovery transformed the entire region. Today, Glenpool is a growing community with a mix of historic sites and modern development, requiring a process server who understands its unique layout. As part of Tulsa County, our Glenpool team collaborates with the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network to ensure seamless legal support across the region.`,
    courthouse: {
        name: 'Glenpool Municipal Court (City Hall)',
        address: '1220 W 141st St, Glenpool, OK 74033',
        phone: '(918) 322-5442',
        website: 'https://glenpoolonline.com/163/Municipal-Court',
        note: 'All major civil cases for Glenpool residents are filed at the Tulsa County Courthouse in downtown Tulsa.'
    },
    processServingLaw: `Service of process in Glenpool falls under the jurisdiction of Tulsa County and is governed by Oklahoma State Statutes. This requires that service be made by a licensed, disinterested party. We ensure every serve is legally compliant and provide a notarized Affidavit of Service for the Tulsa County District Court.`,
    serviceAreas: [
        'Downtown Glenpool',
        'Black Gold Park area',
        'Glenpool South',
        'Liberty Park',
        'Highway 75 corridor',
        'Rural Glenpool addresses'
    ],
    faqs: [
        {
            q: 'What is your experience with Glenpool Municipal Court cases?',
            a: 'We have extensive experience serving documents for Glenpool residents and businesses, and are familiar with the requirements of the Glenpool Municipal Court and Tulsa County District Court.'
        }
    ]
};
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Glenpool Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Top-rated process server in Glenpool, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa County.',
  keywords: 'process server glenpool, glenpool process server, legal document delivery glenpool, court papers glenpool, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/glenpool-process-server'
  },
  openGraph: {
    title: 'Glenpool, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Glenpool. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/glenpool-process-server',
    siteName: 'Just Legal Solutions'
  }
};



const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Glenpool',
  description: 'Professional process server for Glenpool and surrounding areas in Tulsa County.',
  url: 'https://justlegalsolutions.org/seo/glenpool-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Glenpool' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

export default function GlenpoolProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Glenpool, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service in the Heart of Tulsa County</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Glenpool</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: glenpoolData.history + ' If you need a process server in Glenpool or nearby communities like <a href="/seo/broken-arrow-process-server" class="text-blue-700 underline">Broken Arrow</a> or <a href="/seo/jenks-process-server" class="text-blue-700 underline">Jenks</a>, our team is ready to help.' }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Glenpool Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>{glenpoolData.courthouse.name}</strong><br />
                {glenpoolData.courthouse.address}<br />
                <a href={glenpoolData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">{glenpoolData.courthouse.note}</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {glenpoolData.serviceAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Glenpool</h3>
              <p className="text-gray-700 mb-4">{glenpoolData.processServingLaw}</p>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {glenpoolData.faqs.map((faq, index) => (
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
                  title="Glenpool Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-96.0086!3d35.9445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sGlenpool%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Glenpool</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/jenks-process-server" className="underline">Jenks Process Server</a></li>
                <li><a href="/seo/owasso-process-server" className="underline">Owasso Process Server</a></li>
                <li><a href="/seo/sand-springs-process-server" className="underline">Sand Springs Process Server</a></li>
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      {/* Schema components removed if not used directly in the page */}
    </>
  );
}

