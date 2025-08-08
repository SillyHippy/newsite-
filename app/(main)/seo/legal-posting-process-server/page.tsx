// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Legal Notice Posting Service',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'xpath': [
      '/html/body/div/main/div/section[1]/p',
      '/html/body/div/main/div/section[4]'
    ]
  },
  'url': 'https://justlegalsolutions.org/seo/legal-posting-process-server'
};
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Legal Notice Posting Service | Tulsa County, Oklahoma',
  description: 'Expert in legal notice posting for when personal service is not possible. We ensure full compliance with Oklahoma\'s posting and mailing requirements for evictions, foreclosures, and more.',
  keywords: 'legal notice posting tulsa, posting and mailing service, oklahoma rules of civil procedure, alternative service, process server tulsa',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/legal-posting-process-server'
  }
};

import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Legal Notice Posting Service',
  description: 'Professional legal notice posting service in Tulsa County, compliant with Oklahoma state law.',
  url: 'https://justlegalsolutions.org/seo/legal-posting-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Tulsa County' }],
  serviceType: ['Legal Notice Posting', 'Alternative Service of Process'],
};

const postingData = {
    intro: `When a person cannot be served personally, Oklahoma law provides an alternative method: service by posting. This is a critical legal step that, if done incorrectly, can jeopardize an entire case. We specialize in the correct execution of legal notice posting for evictions, property notices, and other court actions throughout Tulsa County. For broader legal support, our team is part of the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network, ensuring full coverage and compliance.`,
    process: {
        title: 'The Legal Requirements for Posting in Oklahoma',
        steps: [
            { name: 'Diligent Search', detail: 'Before posting is allowed, a diligent effort to locate and personally serve the individual must be made and documented. Our standard service attempts satisfy this requirement.' },
            { name: 'Court Approval', detail: 'In many cases, a judge must approve service by posting after being shown that personal service was not possible.' },
            { name: 'Conspicuous Posting', detail: 'The notice must be posted in a conspicuous (obvious) place on the property, typically the front door.' },
            { name: 'Mailing Requirement', detail: 'A copy of the notice must also be mailed to the individual\'s last known address via certified mail. We handle both the posting and the mailing to ensure full compliance.' },
            { name: 'Affidavit of Service', detail: 'We provide a detailed Affidavit of Service that documents the posting location, date, time, and includes photographic evidence, along with proof of mailing.' }
        ]
    },
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
            q: 'What is "posting and mailing" service?',
            a: 'It is a two-part alternative to personal service where a legal notice is physically posted on a property and a second copy is sent via certified mail. Both steps are required for the service to be legally valid in Oklahoma.'
        },
        {
            q: 'When is legal notice posting typically used?',
            a: 'It is most commonly used in eviction cases after attempts to personally serve the tenant have failed. It is also used for foreclosure notices, quiet title actions, and other cases involving property where a party cannot be found.'
        },
        {
            q: 'Why should I hire a professional for posting?',
            a: 'Improper posting can cause your case to be dismissed. A professional process server ensures that all legal requirements are met, provides photographic proof, and supplies a court-admissible Affidavit of Service, protecting your legal interests.'
        }
    ]
};

export default function LegalPostingProcessServer() {
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
        <div className="bg-indigo-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Legal Notice Posting Service</h1>
            <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">Ensuring Compliance with Oklahoma&apos;s Alternative Service Rules. If you need a process server for legal posting in Tulsa, we can help.</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">When Personal Service Isn&apos;t an Option</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: postingData.intro }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">{postingData.process.title}</h3>
              <div className="space-y-4">
                {postingData.process.steps.map((step, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg text-gray-900">{step.name}</h4>
                    <p className="text-gray-700">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {postingData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-indigo-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">Related Services & Internal Links</h3>
              <ul className="list-disc list-inside text-indigo-700">
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
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

