
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import ReviewSchema from '@/components/ui/review-schema';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

export const metadata = {
  title: 'Business Solutions & Executive Support Services | Just Legal Solutions',
  description: 'Cheapest & Fastest Professional executive assistant services including event coordination, HR & payroll, travel management, customer service, and data entry solutions in Oklahoma. Starting at $15/hr.',
  keywords: ['executive assistant oklahoma', 'event planning tulsa', 'HR payroll services', 'travel management', 'customer service oklahoma', 'data entry services', 'business solutions oklahoma', 'administrative support tulsa'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Business Services',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://justlegalsolutions.org/services'
  },
  openGraph: {
    title: 'Business Solutions & Executive Support Services | Just Legal Solutions',
    description: 'Cheapest & Fastest Professional executive assistant services including event coordination, HR & payroll, travel management, customer service, and data entry solutions in Oklahoma. Starting at $15/hr.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/services',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/business-services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Business Solutions & Executive Support Services in Oklahoma',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Solutions & Executive Support Services | Just Legal Solutions',
    description: 'Cheapest & Fastest Professional executive assistant services including event coordination, HR & payroll, travel management, customer service, and data entry solutions in Oklahoma.',
    images: ['https://justlegalsolutions.org/images/business-services-og.jpg'],
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Executive Support',
      description: 'Cheapest & Fastest Professional administrative assistance for executives, helping manage schedules, communications, and day-to-day operations.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Event Coordination',
      description: 'End-to-end event planning and management services for corporate events, team building, and special occasions.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'HR & Payroll',
      description: 'Comprehensive human resources support including recruitment, employee management, and payroll processing.',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Travel Management',
      description: 'Business travel planning, booking, and expense management to optimize your corporate travel experience.',
      image: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'General Customer Service',
      description: 'Reliable customer service solutions to manage inquiries and support your clients effectively via various channels.',
      image: 'https://images.unsplash.com/photo-1590599605877-29fa62b1f143?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services to manage your information seamlessly across various platforms.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <Script id="services-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Executive Support",
                "description": "Cheapest & Fastest Professional administrative assistance for executives, helping manage schedules, communications, and day-to-day operations."
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Event Coordination",
                "description": "End-to-end event planning and management services for corporate events, team building, and special occasions."
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "HR & Payroll",
                "description": "Comprehensive human resources support including recruitment, employee management, and payroll processing."
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Travel Management",
                "description": "Business travel planning, booking, and expense management to optimize your corporate travel experience."
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "General Customer Service",
                "description": "Reliable customer service solutions to manage inquiries and support your clients effectively via various channels."
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Data Entry",
                "description": "Accurate and efficient data entry services to manage your information seamlessly across various platforms."
              }
            ]
          }
        `}
      </Script>

      <main>
        {/* Hero Section - Tagline Updated */}
        <section className="relative w-full h-[80vh] flex items-center justify-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558478551-1a378f63328e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Solutions</h1>
            {/* --- Updated Tagline Below --- */}
            <p className="text-xl md:text-2xl mb-4">Full-range support: From data entry & customer service to HR, payroll, and complete operational assistance.</p>
            <p className="font-medium text-lg mb-4">10+ years supporting C-suite executives with precision & discretion.</p>
            <p className="text-yellow-300 font-semibold mb-8">Prices starting at $15/hr — custom quotes available</p>
            <Link
              href="/resume.pdf"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              Download Resume
            </Link>
          </div>
          
          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* Pricing Banner */}
        <div className="text-center py-6 bg-gray-50 text-gray-700 font-medium">
          Prices starting at $15/hr — custom quotes available
        </div>

        {/* Why Work With Me Section */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Me?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">•</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Strategic calendar & travel management</h3>
                <p className="text-gray-600">Optimizing executive time and ensuring seamless travel experiences.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">•</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">HR systems & payroll implementation</h3>
                <p className="text-gray-600">Setting up efficient systems for human resources and payment processing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">•</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">End-to-end event planning</h3>
                <p className="text-gray-600">Comprehensive event coordination from concept to execution.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">•</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Confidential communications & discretion</h3>
                <p className="text-gray-600">Handling sensitive information with the highest level of professionalism.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Support Philosophy */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">My Executive Support Philosophy</h2>
            <p className="text-gray-700 leading-relaxed">
              I believe that true partnership is built on anticipation, discretion, and proactive communication. By immersing myself in your priorities—whether it&apos;s complex calendar orchestration, confidential project management, or last-minute travel pivots—I deliver the seamless support every C-suite leader deserves.
            </p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span>Anticipate needs before they arise</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span>Maintain strict confidentiality</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span>Communicate clearly & proactively</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span>Adapt quickly to changing priorities</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cheapest & Fastest Professional Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      {/* Invisible Review Schema for SEO */}
      <ReviewSchema 
        businessName="Just Legal Solutions - Business Services"
        aggregateRating={4.9}
        reviewCount={142}
        reviews={[
          {
            author: "Executive Client",
            rating: 5,
            text: "Outstanding executive assistant services! Cheapest & Fastest Professional, reliable, and always one step ahead. Highly recommend for business support.",
            date: "2024-12-08"
          },
          {
            author: "Business Owner",
            rating: 5,
            text: "Excellent data entry and administrative support. They handle everything with precision and professionalism.",
            date: "2024-11-22"
          },
          {
            author: "Corporate Client",
            rating: 5,
            text: "Top-notch business solutions. Great attention to detail and exceptional customer service throughout.",
            date: "2024-11-10"
          }
        ]}
      />
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="Business Solutions & Executive Services"
        faqs={[
          {
            question: "What types of business support services do you offer?",
            answer: "We provide comprehensive business solutions including executive assistant services, event coordination, HR & payroll support, travel management, customer service, and professional data entry solutions throughout Oklahoma."
          },
          {
            question: "How do your executive assistant services work?",
            answer: "Our executive assistant services are tailored to your specific business needs. We handle calendar management, correspondence, travel arrangements, meeting coordination, and administrative tasks to streamline your operations."
          },
          {
            question: "Do you handle confidential business information securely?",
            answer: "Absolutely. We maintain strict confidentiality protocols and security measures for all client information. Our team is experienced in handling sensitive business data with complete discretion and professionalism."
          },
          {
            question: "Can you provide ongoing support or just one-time projects?",
            answer: "We offer both ongoing partnership arrangements and one-time project support. Whether you need regular administrative assistance or help with specific business initiatives, we can accommodate your requirements."
          },
          {
            question: "What geographic areas do you serve for business services?",
            answer: "We primarily serve the Tulsa metropolitan area and surrounding Oklahoma regions. For certain services, we can provide remote support statewide and coordinate with local partners as needed."
          }
        ]}
      />
      
      <EnhancedServiceSchema 
        serviceName="Business Solutions & Executive Support"
        serviceDescription="Comprehensive executive assistant and business support services in Oklahoma including event coordination, HR support, and administrative solutions"
        serviceArea="Oklahoma (Tulsa Metropolitan Area, Remote Support Available)"
        serviceType="Executive Assistant Services"
        additionalServices={["Event Planning", "HR & Payroll Support", "Travel Management", "Data Entry"]}
      />
      
      <PerformanceSchema 
        pageName="Business Solutions & Executive Services - Oklahoma"
        pageUrl="/services"
        loadTime={2.2}
        mobileOptimized={true}
      />
    </>
  );
}
