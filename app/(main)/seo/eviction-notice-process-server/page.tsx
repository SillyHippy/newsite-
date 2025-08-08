// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Eviction Notice Process Server',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'xpath': [
      '/html/body/div/main/div/section[1]/p',
      '/html/body/div/main/div/section[4]'
    ]
  },
  'url': 'https://justlegalsolutions.org/seo/eviction-notice-process-server'
};
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// SEO Metadata optimized for the Eviction Notice page
export const metadata: Metadata = {
  title: 'Eviction Notice Process Server Tulsa County | Same-Day Service',
  description: 'Expert process server for eviction notices in Tulsa County. We ensure fast, legally compliant delivery of Notice to Quit and all landlord-tenant documents. 24/7 service for property managers.',
  keywords: 'eviction notice process server tulsa, eviction service tulsa county, notice to quit tulsa, landlord tenant legal documents, property management process server oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/eviction-notice-process-server'
  },
  openGraph: {
    title: 'Tulsa County Eviction Notice Process Server | Just Legal Solutions',
    description: 'Fast, reliable delivery of eviction notices for landlords and property managers in Tulsa County.',
    url: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
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
    title: 'Tulsa County Eviction Notice Process Server | Just Legal Solutions',
    description: 'Fast, reliable delivery of eviction notices for landlords and property managers in Tulsa County.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Detailed JSON-LD Schema for Eviction Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Eviction Notice Process Server Tulsa',
  description: 'Specialized process serving for eviction notices and landlord-tenant documents in Tulsa County.',
  url: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  serviceType: [
    'Eviction Notice Service',
    'Landlord-Tenant Document Delivery',
    'Notice to Quit Service'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Content for Eviction Services ---
const evictionData = {
    intro: `The eviction process is legally sensitive and time-critical. Improper service of an eviction notice can lead to costly delays, dismissals, and financial losses for landlords and property managers. As Tulsa County's trusted eviction process server, we specialize in the correct, legal, and prompt delivery of all landlord-tenant documents, ensuring your case can proceed with a solid legal foundation. For broader legal support, our team is part of the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network, ensuring full coverage and compliance.`,
    oklahomaProcess: {
        title: 'The Oklahoma Eviction Process: A Step-by-Step Overview',
        steps: [
            { name: 'Step 1: The Written Notice', detail: 'The process begins with serving the tenant a written notice, such as a 5-Day Notice to Pay or Quit for non-payment of rent, or a 15-Day Notice for lease violations. Proper service of this notice is mandatory.' },
            { name: 'Step 2: Filing the Forcible Entry & Detainer', detail: 'If the tenant does not comply, the landlord can file a Forcible Entry and Detainer action (an eviction lawsuit) with the Tulsa County Courthouse.' },
            { name: 'Step 3: Serving the Summons', detail: 'A court summons must then be professionally served to the tenant, officially notifying them of the court date. This is a critical step where our professional service is essential.' },
            { name: 'Step 4: Court Hearing and Judgment', detail: 'The case is heard by a judge. If the landlord wins, a judgment for possession is granted.' },
            { name: 'Step 5: Writ of Execution', detail: 'If the tenant still does not vacate, a Writ of Execution is issued, allowing law enforcement to forcibly remove the tenant. We can assist in serving any associated notices.' }
        ]
    },
    serviceAreas: [
        'Tulsa', 'Broken Arrow', 'Bixby', 'Jenks', 'Owasso', 'Sand Springs', 'Glenpool', 'Sapulpa'
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
            q: 'Why can\'t I just tape the eviction notice to the door?',
            a: 'While "posting" is a method of service, it has strict legal requirements in Oklahoma, often requiring a follow-up mailing. Improper posting can invalidate your notice. Professional personal service provides a much stronger legal standing with a notarized Affidavit of Service as proof.'
        },
        {
            q: 'How quickly can you serve a 5-Day Notice to Quit in Tulsa?',
            a: 'We offer same-day and 24-hour rush service for all time-sensitive eviction notices. We understand that every day counts, and we prioritize these serves to help you start the legal clock as soon as possible.'
        },
        {
            q: 'Do you work with large apartment complexes and property management companies?',
            a: 'Yes. We specialize in providing bulk-rate and ongoing services for property managers and apartment complexes throughout Tulsa County. We can handle all your eviction and tenant-related service needs efficiently.'
        },
        {
            q: 'What happens if the tenant has already abandoned the property?',
            a: 'If a tenant has clearly abandoned the property, the legal requirements for service may change. Our servers can document the condition of the property (e.g., empty, utilities off) to support your case for abandonment, in addition to performing the required legal service.'
        }
    ]
};

export default function EvictionNoticeProcessServer() {
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
        <div className="bg-red-800 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Eviction Notice Process Server for Tulsa County</h1>
            <p className="mt-4 text-xl text-red-100 max-w-3xl mx-auto">Ensuring Landlords &amp; Property Managers Meet Oklahoma&apos;s Strict Legal Service Requirements.</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Critical Importance of Proper Eviction Service</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: evictionData.intro }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">{evictionData.oklahomaProcess.title}</h3>
              <div className="space-y-4">
                {evictionData.oklahomaProcess.steps.map((step, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg text-gray-900">{step.name}</h4>
                    <p className="text-gray-700">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Tulsa County</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {evictionData.serviceAreas.map(city => (
                  <div key={city} className="bg-red-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-red-900">{city}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Eviction Service FAQ for Tulsa Landlords</h2>
              <div className="space-y-8">
                {evictionData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-red-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Related Services & Internal Links</h3>
              <ul className="list-disc list-inside text-red-700">
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/glenpool-process-server" className="underline">Glenpool Process Server</a></li>
                <li><a href="/seo/owasso-process-server" className="underline">Owasso Process Server</a></li>
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

