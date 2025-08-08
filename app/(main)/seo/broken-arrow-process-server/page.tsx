import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from "next/image";
import Link from "next/link";
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// SEO Metadata optimized for the Broken Arrow page
export const metadata: Metadata = {
  title: 'Broken Arrow Process Server | Process Server Broken Arrow, OK | Same-Day Service',
  description: 'Trusted Broken Arrow process server with years of local experience. Professional process server Broken Arrow residents rely on for same-day legal document service in Tulsa & Wagoner Counties.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, court papers broken arrow, subpoena service broken arrow oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/broken-arrow-process-server'
  },
  openGraph: {
    title: 'Broken Arrow Process Server | Process Server Broken Arrow, OK | Just Legal Solutions',
    description: 'Local Broken Arrow process server with years of experience. Reliable and fast process serving in Broken Arrow. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
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
    title: 'Broken Arrow Process Server | Process Server Broken Arrow, OK | Same-Day & Rush Service',
    description: 'Need a Broken Arrow process server? Local process server Broken Arrow residents trust for professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Detailed JSON-LD Schema for Broken Arrow Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Broken Arrow',
  description: 'Professional process server for Broken Arrow and surrounding areas in Tulsa and Wagoner counties.',
  url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Wagoner County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you handle service in large, gated communities in Broken Arrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our process servers are experienced with the protocols of gated communities like Forest Ridge. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner.'
      }
    },
    {
      '@type': 'Question',
      name: 'The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is your turnaround time for standard service in Broken Arrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you serve papers to someone at their job in Broken Arrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can I learn more about process serving laws and best practices in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a comprehensive overview of process serving requirements, legal tips, and updates across the state, visit our Ultimate Guide to Process Serving in Oklahoma.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day or rush service options in Broken Arrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide same-day and emergency rush service for urgent legal matters throughout Broken Arrow and surrounding areas.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you handle legal document delivery during holidays or inclement weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We monitor weather and holiday schedules closely and communicate with clients to ensure timely, secure delivery, even in challenging conditions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you serve documents at workplaces or commercial locations in Broken Arrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We regularly serve legal documents at offices, businesses, and commercial properties throughout Broken Arrow, always with professionalism and discretion.'
      }
    }
  ]
};

// --- High-Quality, Unique Local Content for Broken Arrow, OK ---
const brokenArrowData = {
    // Removed duplicate history property below, keep only the version with Tulsa County link
    history: `Broken Arrow's name originates from a Muscogee (Creek) community who settled in the area after the Trail of Tears. Founded as a city in 1902, it has grown from a small agricultural community into Oklahoma's fourth-largest city. Its vibrant Rose District and sprawling residential neighborhoods create a diverse service area that requires local expertise. As a major part of Tulsa County, our Broken Arrow team works closely with the <a href="/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network to ensure seamless service across the region.`,
    courthouse: {
        name: 'Broken Arrow Municipal Court (Justice Center)',
        address: '2304 S 1st Pl, Broken Arrow, OK 74012',
        phone: '(918) 451-8558',
        website: 'https://www.brokenarrowok.gov/government/municipal-court',
        note: 'Broken Arrow is primarily in Tulsa County, with a portion in Wagoner County. All major civil cases are handled at the respective county courthouses.'
    },
    processServingLaw: `Service of process in Broken Arrow must comply with Oklahoma State Statutes. This means a licensed server must make diligent efforts to effect personal service. We are experts in these statutes and ensure every service is legally sound for both Tulsa and Wagoner County District Courts.`,
    serviceAreas: [
        'Rose District',
        'Downtown Broken Arrow',
        'South Broken Arrow',
        'Battle Creek',
        'Forest Ridge',
        'Indian Springs',
        'Aspen Creek',
        'Iron Horse Ranch'
    ],
    faqs: [
        {
            q: 'How do you handle service in large, gated communities in Broken Arrow?',
            a: 'Our process servers are experienced with the protocols of gated communities like Forest Ridge. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner.'
        },
        {
            q: 'The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?',
            a: 'Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court.'
        },
        {
            q: 'What is your turnaround time for standard service in Broken Arrow?',
            a: 'Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
        },
        {
            q: 'Can you serve papers to someone at their job in Broken Arrow?',
            a: 'Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow.'
        }
    ]
};

export default function BrokenArrowProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      {/* Navbar and Footer are handled by the main layout */}
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero with Local Image */}
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Broken Arrow, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Expert Legal Document Delivery in Tulsa & Wagoner Counties</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/broken-arrow-rose-district.jpg" width={600} height={350} alt="Professional Broken Arrow process server serving legal documents in Rose District Oklahoma" className="rounded-lg shadow-lg" />
            </div>
            {/* Google Maps Embed for Broken Arrow */}
            <div className="flex justify-center mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413067.7377439724!2d-96.05453081268737!3d36.01805403442873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6623d6eab4e11%3A0x2825ab3846a6265c!2sBroken%20Arrow%2C%20OK!5e0!3m2!1sen!2sus!4v1753398960144!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Broken Arrow, OK Map"
                className="rounded-lg shadow-lg w-full max-w-2xl"
              ></iframe>
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving the Rose District and all of Broken Arrow with professional process serving</p>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* About Broken Arrow / Local Expertise */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Broken Arrow</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: brokenArrowData.history }} />
              <div className="flex justify-center mt-4">
                <Image src="/images/Broken-Arrow-Municipal-Court.jpeg" width={400} height={166} alt="Broken Arrow Municipal Court building where process server delivers legal documents" className="rounded shadow" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">Broken Arrow Municipal Court – Trusted destination for legal document delivery</p>
            </section>

            {/* Community Connection */}
            <section className="bg-blue-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Community Connection</h3>
              <p className="text-gray-700 mb-2">Just Legal Solutions officially opened in Broken Arrow in 2025, building on legal experience since 2020. We partner with local attorneys, participate in Chamber of Commerce events, and support Broken Arrow&apos;s legal and civic community.</p>
              <p className="text-gray-700">Our team understands the unique needs of Broken Arrow&apos;s neighborhoods and businesses, providing fast, compliant service across Tulsa and Wagoner counties.</p>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us as Your Broken Arrow Process Server?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Years of Local Experience</h3>
                      <p className="text-gray-600">Over 5 years serving Broken Arrow with deep knowledge of local courts, neighborhoods, and legal requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Same-Day & Rush Service Options</h3>
                      <p className="text-gray-600">Emergency and same-day Broken Arrow process server service available when time is critical.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Fully Licensed for Tulsa & Wagoner Counties</h3>
                      <p className="text-gray-600">Licensed and bonded to serve throughout both counties where Broken Arrow is located.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Real Customer Satisfaction</h3>
                      <p className="text-gray-600">Proven track record of successful serves and satisfied clients throughout Broken Arrow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Testimonials */}
            <section className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Broken Arrow Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div itemScope itemType="https://schema.org/Review">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                      <meta itemProp="ratingValue" content="5" />
                    </div>
                    <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                      &ldquo;Excellent Broken Arrow process server service! They handled our urgent legal documents with professionalism and completed service within the same day. Their knowledge of the local Broken Arrow area was invaluable.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Jennifer L.</span>
                      </span> - Broken Arrow Law Firm
                    </div>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Review">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                      <meta itemProp="ratingValue" content="5" />
                    </div>
                    <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                      &ldquo;As a Broken Arrow business owner, I needed reliable process serving for employment matters. Their Broken Arrow process server team understood our needs and delivered exceptional service with complete discretion.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Robert K.</span>
                      </span> - Broken Arrow Business Owner
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Area Details & Featured Neighborhood */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Broken Arrow and Beyond</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                {brokenArrowData.serviceAreas.map(city => (
                  <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-blue-900">{city}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Image src="/images/Building_in_Broken_Arrow_Oklahoma.jpg" width={400} height={250} alt="Downtown Broken Arrow Oklahoma buildings where process server provides professional legal document delivery" className="rounded shadow" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">Downtown Broken Arrow – Professional Broken Arrow process serving throughout the city</p>
            </section>

            {/* Local CTAs */}
            <section className="bg-white py-6 border-b mb-12 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Need a licensed Broken Arrow process server?</h3>
              <p className="text-gray-800 mb-2">Contact us for same-day legal document service or call for a quote! Our Broken Arrow process server team is ready to help.</p>
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Get Started</a>
            </section>

            {/* FAQs with Local Focus */}
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {brokenArrowData.faqs.map((faq, index) => (
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
                {/* Additional Local FAQs */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Do you offer same-day or rush service options in Broken Arrow?</h3>
                  <p className="mt-2 text-gray-700">Yes, we provide same-day and emergency rush service for urgent legal matters throughout Broken Arrow and surrounding areas.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">How do you handle legal document delivery during holidays or inclement weather?</h3>
                  <p className="mt-2 text-gray-700">We monitor weather and holiday schedules closely and communicate with clients to ensure timely, secure delivery, even in challenging conditions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Can you serve documents at workplaces or commercial locations in Broken Arrow?</h3>
                  <p className="mt-2 text-gray-700">Absolutely. We regularly serve legal documents at offices, businesses, and commercial properties throughout Broken Arrow, always with professionalism and discretion.</p>
                </div>
              </div>
            </section>

            {/* Engagement CTA */}
            <section className="bg-blue-100 py-8 border-t text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Have more Broken Arrow legal questions?</h3>
              <p className="text-gray-800 mb-4">Suggest an FAQ or <a href="#contact" className="underline text-blue-700 font-semibold">contact our experts today</a>!</p>
            </section>

            {/* Internal Links for SEO */}
            <section className="py-8 text-center">
              <h4 className="text-lg font-semibold mb-4">Need service in other areas?</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tulsa-process-server" className="text-blue-700 underline font-semibold">Tulsa Process Server</Link>
                <Link href="https://justlegalsolutions.org/tulsa-county" className="text-blue-700 underline font-semibold">Sapulpa Process Server</Link>
                <Link href="/seo/glenpool-process-server" className="text-blue-700 underline font-semibold">Glenpool Process Server</Link>
                <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link>
                <Link href="/pricing" className="text-blue-700 underline font-semibold">See Pricing</Link>
                <Link href="#contact" className="text-blue-700 underline font-semibold">Contact Us</Link>
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
