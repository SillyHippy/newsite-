
import React from 'react';
import Image from 'next/image';
import FAQSchema from '@/components/FAQSchema';
import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server | Fast & Reliable | Just Legal Solutions',
  description: 'Certified process server for Tulsa County, OK. We provide fast, reliable, and compliant legal document delivery for attorneys, law firms, and the public. Same-day service available.',
  keywords: 'process server tulsa county, tulsa county legal services, certified process server tulsa, reliable process serving',
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-tulsa'
  }
};

export default function ProcessServerTulsaPage() {
  const faqs = [
    {
      question: 'How fast can you serve legal documents in Tulsa County?',
      answer: 'We offer same-day, rush, and standard service. Most documents in Tulsa County are attempted within hours of your request.'
    },
    {
      question: 'Are your process servers licensed and insured?',
      answer: 'Yes, all our Tulsa County process servers are fully licensed, bonded, and insured for your protection.'
    },
    {
      question: 'What types of documents do you serve?',
      answer: 'We serve summons, subpoenas, divorce papers, eviction notices, small claims, restraining orders, and more.'
    },
    {
      question: 'Do you provide proof of service?',
      answer: 'Yes, you receive a digital, court-admissible Affidavit of Service immediately after completion.'
    },
    {
      question: 'Can you serve evasive or hard-to-find individuals?',
      answer: 'Absolutely. We use skip tracing and advanced techniques to locate and serve even evasive subjects.'
    },
    {
      question: 'What are your service areas?',
      answer: 'We serve all of Tulsa County, including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, and every Tulsa neighborhood.'
    }
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Tulsa County Hero Section with Images */}
      <section className="bg-white py-10 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Tulsa County’s Legal Heart</h2>
              <p className="text-lg text-gray-700 mb-4">Nestled along the Arkansas River, Tulsa County includes a patchwork of cities—Tulsa, Broken Arrow, Jenks, Bixby—each with a unique civic and legal culture shaped by growth since the railroad era. Landmark rulings and evolving family, real estate, and civil courts have made this district the judicial heart of eastern Oklahoma. We’ve navigated these neighborhoods for years, staying up to date with shifting court practices and the unique challenges of serving papers across diverse settings—from historic routes to modern suburbs.</p>
            </div>
            <div className="flex-1 flex flex-col gap-4 items-center">
              <Image src="/images/tulsa-county-courthouse.jpeg" width={400} height={250} alt="Tulsa County Courthouse - Trusted Process Server" className="rounded-lg shadow-lg" />
              <span className="text-xs text-gray-500 text-center">Tulsa County Courthouse – Fast, reliable legal document delivery</span>
              <Image src="/images/tulsadriller.png" width={320} height={320} alt="Golden Driller Tulsa landmark" className="rounded-full shadow-md" />
              <span className="text-xs text-gray-500 text-center">The Golden Driller – Iconic Tulsa landmark</span>
              <Image src="/images/Tulsa_skyline_aerial,_April_2023.jpg" width={400} height={220} alt="Tulsa skyline aerial view" className="rounded shadow" />
              <span className="text-xs text-gray-500 text-center">Tulsa Skyline – Serving all neighborhoods and suburbs</span>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers Stats Bar */}
      <section className="bg-blue-50 py-6 border-b">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <span className="block text-3xl font-bold text-blue-800">97%</span>
            <span className="block text-gray-700">First-attempt serve success</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-800">6,000+</span>
            <span className="block text-gray-700">Documents delivered countywide</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-800">Serving Tulsa</span>
            <span className="block text-gray-700">since 2018</span>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Community Involvement</h3>
          <p className="text-gray-700">We proudly support Tulsa’s legal community through pro bono work, local charity events, and partnerships with Tulsa schools and law groups.</p>
        </div>
      </section>


      {/* Service Highlights / Recent Activity */}
      <section className="bg-blue-50 py-8 border-b">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Recent Service Highlights</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Delivered court filings in Jenks this week</li>
            <li>Expedited eviction notice served in Midtown Tulsa</li>
            <li>Rush subpoena delivered to Broken Arrow business</li>
            <li>Family law documents filed at Tulsa County Courthouse</li>
          </ul>
        </div>
      </section>

      {/* Quick Law Resource Box with Courthouse Image */}
      <aside className="bg-gray-100 py-6 border-b">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h4 className="font-bold text-blue-800 mb-2">Tulsa District Court</h4>
            <p className="text-gray-700 mb-1">500 S Denver Ave, Tulsa, OK 74103</p>
            <a href="https://www.tulsacountydistrictcourt.org/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Visit Court Website</a>
            <p className="text-gray-700 mt-1">(918) 596-5000</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image src="/images/tulsa-courier-downtown.jpeg" width={350} height={220} alt="Downtown Tulsa legal courier and process server" className="rounded shadow" />
            <span className="text-xs text-gray-500 text-center mt-2">Downtown Tulsa – Legal courier and process serving experts</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-blue-800 mb-2">Oklahoma Process Service Statutes</h4>
            <a href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=438505" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">View Statutes</a>
          </div>
        </div>
      </aside>

      {/* Google Maps Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Serving All of Tulsa County</h2>
        <div className="flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.1129303917!2d-95.87809005!3d36.15244105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1753397857366!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Gold Standard in Tulsa Process Serving</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We combine speed, technology, and local expertise to offer unparalleled service.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="inline-block h-12 w-12 bg-yellow-100 rounded-full mb-2" />
              <h3 className="mt-4 text-xl font-semibold">Same-Day Service</h3>
              <p className="mt-2 text-gray-600">Urgent documents are our specialty. We guarantee same-day attempts for all rush orders in Tulsa County.</p>
            </div>
            <div className="text-center">
              <span className="inline-block h-12 w-12 bg-green-100 rounded-full mb-2" />
              <h3 className="mt-4 text-xl font-semibold">Licensed & Insured</h3>
              <p className="mt-2 text-gray-600">Our process servers are fully licensed and insured in Oklahoma for your complete peace of mind.</p>
            </div>
            <div className="text-center">
              <span className="inline-block h-12 w-12 bg-blue-100 rounded-full mb-2" />
              <h3 className="mt-4 text-xl font-semibold">Tulsa County Coverage</h3>
              <p className="mt-2 text-gray-600">We serve documents in Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and all surrounding areas.</p>
            </div>
            <div className="text-center">
              <span className="inline-block h-12 w-12 bg-purple-100 rounded-full mb-2" />
              <h3 className="mt-4 text-xl font-semibold">Digital Proof of Service</h3>
              <p className="mt-2 text-gray-600">Receive a legally compliant, digital affidavit of service as soon as the job is complete.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa County Frequently Asked Questions</h2>
          <FAQSchema />
          <ul className="space-y-6 mt-8">
            {faqs.map((faq, idx) => (
              <li key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Speakable Schema for Voice Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Tulsa County Process Server | Fast & Reliable | Just Legal Solutions',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'xpath': [
              '/html/head/title',
              '/html/body//h1',
              '/html/body//section[contains(@class, "faq")]//h3'
            ]
          },
          'url': 'https://justlegalsolutions.org/process-server-tulsa'
        })
      }} />
    </main>
  );
}
