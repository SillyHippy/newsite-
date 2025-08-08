import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';


// --- High-Quality, Unique Local Content for Bixby, OK ---

// SEO Metadata optimized for the Bixby page
export const metadata: Metadata = {
  title: 'Bixby Process Server | Same-Day Service in Tulsa & Wagoner County',
  description: 'Professional process server in Bixby, Oklahoma. We offer same-day service for all legal documents, including court papers, subpoenas, and notices. Licensed, bonded, and available 24/7 for Bixby and surrounding areas.',
  keywords: 'process server bixby, bixby process server, legal document delivery bixby, court papers bixby, subpoena service bixby oklahoma, wagoner county process server',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/bixby-process-server'
  },
  openGraph: {
    title: 'Bixby, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Bixby. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/bixby-process-server',
    siteName: 'Just Legal Solutions',
  }
};
// Detailed JSON-LD Schema for Bixby Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Bixby',
  description: 'Professional process server for Bixby and surrounding areas in Tulsa and Wagoner counties.',
  url: 'https://justlegalsolutions.org/seo/bixby-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Wagoner County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Bixby, OK ---
const bixbyData = {
    history: `Known as "The Garden Spot of Oklahoma," Bixby was founded in 1899 and has a deep history rooted in agriculture along the fertile Arkansas River valley. Today, it is one of the fastest-growing suburbs of Tulsa, known for its excellent schools and family-oriented communities. This rapid growth means a mix of established rural properties and new, large-scale residential developments, requiring a process server with versatile local knowledge. As part of Tulsa County, our Bixby team collaborates with the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network to ensure seamless legal support across the region.`,
    courthouse: {
        name: 'Bixby Municipal Court (City Hall)',
        address: '116 W Needles Ave, Bixby, OK 74008',
        phone: '(918) 366-4430',
        website: 'https://www.bixbyok.gov/170/Municipal-Court',
        note: 'Bixby spans both Tulsa and Wagoner counties. We are licensed to serve and file documents in both county courthouses as required for your specific case.'
    },
    processServingLaw: `Service of process in Bixby must comply with Oklahoma State Statutes. As Bixby is located in both Tulsa and Wagoner counties, it is crucial to file the Affidavit of Service with the correct county court. We verify jurisdiction and ensure all legal paperwork is handled correctly for both counties.`,
    serviceAreas: [
        'Downtown Bixby',
        'White Hawk',
        'The Estates at Stonebrooke',
        'Bixby North',
        'South Bixby (near the river)',
        'Leonard',
        'County Line Road areas',
        'Rural Bixby addresses'
    ],
    faqs: [
        {
            q: 'Where can I learn more about process serving laws and best practices in Oklahoma?',
            a: (
                <>
                  For a comprehensive overview of process serving requirements, legal tips, and updates across the state, visit our{' '}
                  <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 underline">Ultimate Guide to Process Serving in Oklahoma</a>.
                </>
            )
        },
        {
            q: 'My case is in Wagoner County but the person is in Bixby. Can you handle that?',
            a: 'Yes. We are fully licensed to serve in both Tulsa and Wagoner counties. We regularly handle cross-county serves for Bixby residents and ensure the Affidavit of Service is filed correctly with the appropriate court.'
        },
        {
            q: 'How do you serve documents in newer, gated communities in Bixby like White Hawk?',
            a: 'Our process servers are experienced with the protocols of gated communities. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner.'
        },
        {
            q: 'Do you serve in the rural parts of Bixby?',
            a: 'Absolutely. We cover all of Bixby, including rural routes and properties that may be difficult to locate. Our servers are equipped to handle service in less-developed areas.'
        },
        {
            q: 'What is the turnaround time for standard service in Bixby?',
            a: 'Standard service in Bixby is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
        }
    ]
};

const BixbyProcessServer = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Bixby, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service in Tulsa & Wagoner Counties</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted Process Server in Bixby, OK</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: bixbyData.history }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Bixby Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>{bixbyData.courthouse.name}</strong><br />
                {bixbyData.courthouse.address}<br />
                <a href={bixbyData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">{bixbyData.courthouse.note}</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {bixbyData.serviceAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Bixby</h3>
              <p className="text-gray-700 mb-4">{bixbyData.processServingLaw}</p>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {bixbyData.faqs.map((faq, index) => (
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
                  title="Bixby Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-95.8831!3d35.9420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sBixby%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Bixby</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/jenks-process-server" className="underline">Jenks Process Server</a></li>
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

export default BixbyProcessServer;

