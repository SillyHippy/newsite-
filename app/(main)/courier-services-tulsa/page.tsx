
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Courier Services Tulsa County | Legal Document Delivery',
  description: 'Expert courier services in Tulsa County, Oklahoma. Same-day legal document delivery, court filings, and secure business document transport throughout Oklahoma.',
  keywords: 'courier services Tulsa, legal document delivery, court filing services, same-day courier Oklahoma, secure document transport',
  alternates: {
    canonical: 'https://justlegalsolutions.org/courier-services-tulsa'
  }
};

export default function CourierServicesTulsaPage() {
  const faqs = [
    {
      question: 'How fast can you deliver legal documents in Tulsa?',
      answer: 'We offer same-day and on-demand courier service throughout Tulsa County. Most deliveries are completed within hours.'
    },
    {
      question: 'Do you provide secure delivery for sensitive legal materials?',
      answer: 'Yes, all deliveries are handled by professional, uniformed couriers with secure, point-to-point transport.'
    },
    {
      question: 'Can you file documents at the Tulsa County Courthouse?',
      answer: 'Absolutely. We offer courthouse filing and document stamping as part of our courier services.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve all of Tulsa County, including Broken Arrow, Bixby, Jenks, Owasso, and Sand Springs.'
    },
    {
      question: 'How do I schedule a rush courier delivery?',
      answer: 'Call us or use our online form to request a rush or after-hours delivery. We are available 24/7 for urgent needs.'
    }
  ];

  return (
    <>
      {/* Speakable Schema for Voice Search, SEO, AI */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Professional Courier Services Tulsa County | Legal Document Delivery',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'xpath': [
              '/html/head/title',
              '/html/body//h1',
              '/html/body//section[contains(@class, "faq")]//h3',
              '/html/body//section[contains(@class, "service-area")]//a',
              '/html/body//section[contains(@class, "narrative")]//a'
            ]
          },
          'url': 'https://justlegalsolutions.org/courier-services-tulsa',
          'keywords': [
            'tulsa county courier',
            'legal document delivery tulsa',
            'process server tulsa',
            'courier services bixby',
            'courier services jenks',
            'courier services sand springs',
            'courier services owasso',
            'ai courier tulsa',
            'voice search courier tulsa',
            'same day courier tulsa',
            'rush legal courier tulsa',
            'tulsa county legal courier',
            'serve papers tulsa',
            'subpoena delivery tulsa county'
          ]
        })
      }} />
        {/* Service Coverage Narrative Section */}
        <section className="bg-white py-10 border-b narrative">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Serving All of Tulsa County with Trusted Courier Solutions</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our courier and legal document delivery services are trusted by law firms, businesses, and individuals across every city and community in Tulsa County. Whether you need urgent delivery in <Link href="/tulsa-process-server" className="text-blue-700 underline font-semibold">Tulsa</Link>, secure transport in <Link href="/seo/broken-arrow-process-server" className="text-blue-700 underline font-semibold">Broken Arrow</Link>, or fast service in <Link href="/seo/bixby-process-server" className="text-blue-700 underline font-semibold">Bixby</Link>, <Link href="/seo/jenks-process-server" className="text-blue-700 underline font-semibold">Jenks</Link>, <Link href="/seo/sand-springs-process-server" className="text-blue-700 underline font-semibold">Sand Springs</Link>, or <Link href="/seo/owasso-process-server" className="text-blue-700 underline font-semibold">Owasso</Link>, we have you covered.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We understand the unique needs of each Tulsa County city, from the business corridors of Tulsa to the residential neighborhoods of Broken Arrow and the growing suburbs. Our <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link> page details our same-day, secure courier options for every legal and business need.
            </p>
            <p className="text-lg text-gray-700">
              By combining local expertise, advanced tracking, and AI-powered logistics, we ensure your documents are delivered quickly, securely, and with full compliance—no matter where in Tulsa County you need service.
            </p>
          </div>
        </section>
      <main className="min-h-screen pt-12 bg-white">
        {/* Hero Section with Local Image */}
        <section className="bg-blue-900 text-white pb-12">
          <div className="container mx-auto px-4 pt-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Tulsa County Courier Services</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Same-day legal document delivery, court filings, and secure business transport across Tulsa County and all major cities.</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/tulsa-courier-downtown.jpeg" width={600} height={350} alt="Tulsa County courier downtown legal delivery" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs & more</p>
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

        {/* Unique Tulsa Courier History Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tulsa’s Courier Tradition</h2>
            <p className="text-lg text-gray-700">From the early “Oil Capital” days to the modern business corridor, Tulsa has always depended on reliable movement of documents. Law firms, medical offices, and corporate clients across Tulsa County trust local couriers to keep business flowing smoothly. Our service continues this tradition—adapting to changes in Tulsa’s bustling economy, embracing new neighborhoods, and delivering with security and speed to every sector, from downtown courthouses to lakeside offices.</p>
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
              <span className="block text-gray-700">since 2020</span>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Service Areas in Tulsa County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4 service-area">
              {[
                { name: 'Tulsa', href: '/tulsa-process-server' },
                { name: 'Broken Arrow', href: '/seo/broken-arrow-process-server' },
                { name: 'Bixby', href: '/seo/bixby-process-server' },
                { name: 'Jenks', href: '/seo/jenks-process-server' },
                { name: 'Sand Springs', href: '/seo/sand-springs-process-server' },
                { name: 'Owasso', href: '/seo/owasso-process-server' },
                { name: 'Glenpool', href: '/seo/glenpool-process-server' },
                { name: 'Collinsville' },
                { name: 'Skiatook' },
                { name: 'Sapulpa' },
                { name: 'Sperry' },
                { name: 'Liberty' },
                { name: 'Lotsee' },
                { name: 'Fair Oaks' },
                { name: 'Oakhurst' },
                { name: 'Turley' },
                { name: 'Berryhill' },
                { name: 'Mingo' },
                { name: 'Leonard' },
                { name: 'Garnett' },
                { name: 'Lake' }
              ].map(city => (
                <div key={city.name} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {city.href ? (
                    <Link href={city.href} className="text-blue-900 font-semibold underline block text-lg">{city.name}</Link>
                  ) : (
                    <span className="text-blue-900 font-semibold block text-lg opacity-60">{city.name}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">We serve every city, town, and community in Tulsa County—no job too big or small.</p>
          </div>
        </section>

        {/* Local CTAs */}
        <section className="bg-white py-6 border-b mb-12 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Need a reliable courier in Tulsa County?</h3>
          <p className="text-gray-800 mb-2">Contact us for same-day legal document delivery or call for a quote!</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Get Started</a>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 border-t mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa Courier Service FAQs</h2>
          <ul className="space-y-6 mt-8">
            {faqs.map((faq, idx) => (
              <li key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
