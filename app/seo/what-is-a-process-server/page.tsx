import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import EnhancedFAQSchema from '@/components/ui/enhanced-faq-schema';
import EnhancedBreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/enhanced-breadcrumb-schema';
import ServiceSchema from '@/components/ui/service-schema';
import ReviewSchema from '@/components/ui/review-schema';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import PerformanceSchema from '@/components/ui/performance-schema';

// Enhanced metadata for maximum SEO impact
export const metadata: Metadata = {
  title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma | Just Legal Solutions',
  description: 'Professional process server in Tulsa, Oklahoma with 10+ years legal experience. Licensed & bonded. Same-day service available 24/7. Call (539) 367-6832 for reliable service of process throughout Oklahoma.',
  keywords: [
    'what is a process server',
    'process server Tulsa',
    'Oklahoma process server',
    'service of process Oklahoma',
    'due process',
    'legal document delivery',
    'court document service',
    'subpoena service Tulsa',
    'skip tracing Oklahoma',
    'certified process server',
    'affidavit of service',
    'hire process server Tulsa',
    'professional process server',
    'licensed process server Oklahoma'
  ],
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/what-is-a-process-server'
  },
  openGraph: {
    title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma',
    description: 'Professional process server in Tulsa, Oklahoma with 10+ years legal experience. Licensed & bonded. 24/7 emergency service available.',
    url: 'https://justlegalsolutions.org/seo/what-is-a-process-server',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/images/due-process-legal-concept.png',
      width: 1200,
      height: 630,
      alt: 'Due process legal concept - Professional process server in Oklahoma',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma',
    description: 'Professional process server in Tulsa, Oklahoma with 10+ years legal experience. Licensed & bonded. 24/7 emergency service available.',
    images: ['https://justlegalsolutions.org/images/due-process-legal-concept.png'],
  }
};

// Enhanced FAQ Schema for AI optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a process server and what do they do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A process server is a trained and licensed professional responsible for delivering legal documents to individuals involved in a court case. This act is known as 'service of process' and is essential for upholding due process rights in the legal system."
      }
    },
    {
      "@type": "Question",
      "name": "Is a process server required for all legal documents in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most court-filed documents that initiate a lawsuit or require a response, a licensed third-party process server is required to ensure service is legally valid and impartial."
      }
    },
    {
      "@type": "Question",
      "name": "How much does process serving cost in Tulsa, Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard service in the Tulsa metro starts around $60. Emergency and same-day service available. Costs depend on urgency, location, and complexity of service."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can process servers deliver documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day service for urgent documents. Most standard service requests are completed within 24-48 hours in the Tulsa metro area."
      }
    },
    {
      "@type": "Question",
      "name": "What if the person is actively avoiding service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional process servers use various legal methods, flexible timing, and skip tracing techniques to locate and serve difficult recipients. We provide detailed attempt reports and alternative service strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Do process servers provide proof of service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, process servers complete a sworn Affidavit of Service after delivery, providing legal proof with detailed time, date, location, and manner of service information required by Oklahoma courts."
      }
    },
    {
      "@type": "Question",
      "name": "What types of legal documents do process servers deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Process servers deliver summons and complaints, divorce papers, subpoenas, eviction notices, restraining orders, small claims documents, citations, and business litigation papers."
      }
    }
  ]
};

// LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Just Legal Solutions",
  "url": "https://justlegalsolutions.org",
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "description": "Professional process server in Tulsa, Oklahoma with 10+ years legal field experience. Licensed and bonded. 24/7 emergency service available throughout Oklahoma.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th PL",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Oklahoma"
    },
    {
      "@type": "City",
      "name": "Tulsa"
    },
    {
      "@type": "City", 
      "name": "Glenpool"
    },
    {
      "@type": "City",
      "name": "Broken Arrow"
    },
    {
      "@type": "City",
      "name": "Owasso"
    },
    {
      "@type": "City",
      "name": "Jenks"
    },
    {
      "@type": "City",
      "name": "Bixby"
    },
    {
      "@type": "City",
      "name": "Sand Springs"
    },
    {
      "@type": "City",
      "name": "Sapulpa"
    },
    {
      "@type": "City", 
      "name": "Bartlesville"
    },
    {
      "@type": "City",
      "name": "Muskogee"
    },
    {
      "@type": "City",
      "name": "Stillwater"
    },
    {
      "@type": "City",
      "name": "Claremore"
    },
    {
      "@type": "City",
      "name": "Oklahoma City"
    },
    {
      "@type": "City",
      "name": "Norman"
    },
    {
      "@type": "City",
      "name": "Lawton"
    },
    {
      "@type": "City",
      "name": "Enid"
    },
    {
      "@type": "City",
      "name": "Durant"
    },
    {
      "@type": "City",
      "name": "McAlester"
    },
    {
      "@type": "City",
      "name": "Pryor"
    },
    {
      "@type": "City",
      "name": "Okmulgee"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "serviceType": "Process Server",
  "priceRange": "$30-$150",
  "foundingDate": "2025-03",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Oklahoma Process Server Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Summons and Complaints Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Divorce Paper Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Subpoena Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skip Tracing Service"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50"
  }
};

// Enhanced Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server? Professional Legal Document Delivery in Oklahoma",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.png",
      "width": 600,
      "height": 200
    }
  },
  "datePublished": "2025-08-05",
  "dateModified": "2025-08-05",
  "description": "Comprehensive guide explaining what a process server is, their legal responsibilities in Oklahoma, and why they are critical for upholding due process in the legal system.",
  "image": {
    "@type": "ImageObject",
    "url": "https://justlegalsolutions.org/images/due-process-legal-concept.png",
    "width": 1200,
    "height": 630
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://justlegalsolutions.org/seo/what-is-a-process-server"
  },
  "wordCount": 2500,
  "articleSection": "Legal Services"
};

// Breadcrumb structure for better navigation
const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Resources', url: '/resources' },
  { name: 'What Is a Process Server', url: '/seo/what-is-a-process-server' }
];

// Enhanced Article Schema with more detail
const enhancedArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server and Why Are They Essential for Due Process?",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions", 
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.png",
      "width": 1200,
      "height": 630
    }
  },
  "datePublished": "2024-03-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "description": "A comprehensive guide to what a process server is, their legal responsibilities in Oklahoma, and why they are a critical part of the justice system.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://justlegalsolutions.org/seo/what-is-a-process-server"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://justlegalsolutions.org/images/due-process-legal-concept.png",
    "width": 1200,
    "height": 630
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".voice-optimized"],
    "xpath": [
      "/html/body/main/div/article/header/h1",
      "/html/body/main/div/article/section[1]/h2"
    ]
  }
};

export default function WhatIsAProcessServerPage() {
  return (
    <>
      {/* Enhanced Schema Suite */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="enhanced-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedArticleSchema) }}
      />
      
      <EnhancedBreadcrumbSchema items={breadcrumbItems} />
      <VoiceSearchOptimization
        primaryQuestions={[
          "What is a process server",
          "How much does a process server cost",
          "Do I need a process server",
          "How long does process serving take"
        ]}
        conversationalAnswers={[
          "A process server is a licensed professional who delivers legal documents to ensure due process",
          "Process serving costs vary by urgency and location, starting around $60 in Tulsa",
          "Yes, most legal proceedings require professional process service for validity",
          "Standard service takes 24-48 hours, same-day service available for urgent matters"
        ]}
        localIntent={true}
      />
      <PerformanceSchema
        pageName="What Is a Process Server Guide"
        pageUrl="/seo/what-is-a-process-server"
        loadTime={2.0}
        mobileOptimized={true}
      />

      <Navbar />
      
      <main className="min-h-screen bg-white text-gray-900 font-sans pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <VisualBreadcrumbs items={breadcrumbItems} />
          
          {/* Enhanced Hero Section with 24/7 Availability */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-xl mb-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="/images/jls-logo.png"
                alt="Just Legal Solutions professional header"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight voice-optimized">
                What Is a Process Server?<br />
                <span className="text-yellow-300">Professional Legal Document Delivery in Oklahoma</span>
              </h1>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xl mb-4 leading-relaxed voice-optimized">
                    Understanding the critical role process servers play in upholding due process and ensuring proper legal notification throughout Oklahoma.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold">✓ Licensed & Bonded</span>
                    <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-semibold text-black">✓ 10+ Years Experience</span>
                    <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold">✓ 24/7 Service</span>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 mb-4">
                    <h3 className="text-xl font-bold mb-2">Need Service Today?</h3>
                    <a href="tel:5393676832" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition inline-block mb-3 shadow-lg">
                      📞 Call (539) 367-6832
                    </a>
                    <p className="text-sm opacity-90">Available 24/7 • Emergency & weekend service</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="mailto:info@justlegalsolutions.org" className="text-sm underline hover:no-underline">📧 info@justlegalsolutions.org</a>
                      <a href="/contact" className="text-sm underline hover:no-underline">📝 Get Online Quote →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* Introduction with Due Process Visual */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <Image 
                  src="/images/due-process-legal-concept.png"
                  alt="Due process legal concept - Foundation of justice"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-lg mx-auto"
                  priority
                />
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8">
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  In the legal world, the term <strong>&ldquo;process server&rdquo;</strong> is fundamental to our justice system. But what exactly do they do, and why is their role so critical? This comprehensive guide breaks down the responsibilities of a <Link href="/process-server-tulsa" className="text-blue-600 hover:underline font-medium">process server in Tulsa</Link> and explains their vital importance in the <Link href="/counties/tulsa-county" className="text-blue-600 hover:underline font-medium">Oklahoma legal system</Link>.
                </p>
              </div>
            </section>

          {/* Professional Image */}
          <div className="text-center mb-8">
            <Image 
              src="/images/tulsa-process-server-delivering-documents.png"
              alt="Professional process server delivering legal documents in Tulsa, Oklahoma"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              priority
            />
          </div>

          {/* Why Choose Just Legal Solutions - Enhanced */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 voice-optimized">Why Choose Just Legal Solutions as Your Tulsa Process Server?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-green-800 mb-3">✓ 10+ Years Legal Field Experience</h3>
                <p className="text-gray-700">Extensive background in Oklahoma legal system ensures proper service every time.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-800 mb-3">✓ Licensed & Bonded in Oklahoma</h3>
                <p className="text-gray-700">Fully compliant with all Oklahoma state requirements and insured for your protection.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-purple-800 mb-3">✓ Same-Day Service Available</h3>
                <p className="text-gray-700">Urgent documents served within hours, standard service within 24-48 hours.</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg text-yellow-800 mb-3">✓ Statewide Oklahoma Coverage</h3>
                <p className="text-gray-700">Serving all 77 counties in Oklahoma with professional skip tracing services.</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center mb-8">
              <Image 
                src="/images/oklahoma-licensed-bonded-process-server-badges.png"
                alt="Licensed and bonded process server trust badges Oklahoma"
                width={800}
                height={200}
                className="mx-auto"
              />
            </div>

            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Call Now: (539) 367-6832
                </a>
                <a href="/contact" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition">
                  Get Online Quote
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-3">Emergency & after-hours service available</p>
            </div>
          </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">The Core Role: Upholding Due Process</h2>
              <p>
                A process server is a trained and licensed professional responsible for delivering legal documents to individuals involved in a court case. This act is known as **&ldquo;service of process.&rdquo;** Its primary purpose is to satisfy a cornerstone of the American legal system: **due process**. Due process ensures that all parties in a legal action are properly notified, giving them a fair opportunity to respond and present their case.
              </p>
              <p>Without proper service of process, a court case cannot legally proceed, and any judgments made could be invalidated.</p>
            </section>

            {/* Professional Process Server Workflow */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Professional Process Server Workflow</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/process-server-workflow-steps.png"
                  alt="Oklahoma process server workflow steps diagram"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <h3 className="font-bold text-lg text-blue-800">Document Receipt</h3>
                  </div>
                  <p className="text-gray-700">We receive and review legal documents, verify service requirements, and prepare for professional delivery according to Oklahoma law.</p>
                </div>
                
                <div className="bg-white border-l-4 border-green-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <h3 className="font-bold text-lg text-green-800">Locate Recipient</h3>
                  </div>
                  <p className="text-gray-700">Using professional investigation techniques and skip tracing when necessary to locate individuals throughout Oklahoma.</p>
                </div>
                
                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <h3 className="font-bold text-lg text-purple-800">Attempt Service</h3>
                  </div>
                  <p className="text-gray-700">Professional, respectful delivery attempts at appropriate times and locations following all legal requirements.</p>
                </div>
                
                <div className="bg-white border-l-4 border-red-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                    <h3 className="font-bold text-lg text-red-800">Complete Service</h3>
                  </div>
                  <p className="text-gray-700">Successful delivery of documents with proper identification and documentation of the service encounter.</p>
                </div>
                
                <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                    <h3 className="font-bold text-lg text-yellow-800">File Affidavit</h3>
                  </div>
                  <p className="text-gray-700">Complete sworn Affidavit of Service with detailed information required by Oklahoma courts for legal validity.</p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold mr-4">✓</div>
                    <h3 className="font-bold text-lg text-gray-800">Client Update</h3>
                  </div>
                  <p className="text-gray-700">Immediate notification to client with scanned affidavit and status report delivered within 2 hours of completion.</p>
                </div>
              </div>
            </section>

            {/* Service Area Map */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Oklahoma Service Area</h2>
              <div className="text-center mb-6">
                <Image 
                  src="/images/oklahoma-process-server-service-area-map.png"
                  alt="Oklahoma process server service area map covering Tulsa and surrounding counties"
                  width={800}
                  height={500}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 text-xl">🚀 Same-Day Service Area (50-Mile Radius)</h3>
                  <p className="text-gray-700 mb-3">Emergency and same-day service available within 50 miles of Tulsa/Glenpool metro area:</p>
                  <ul className="text-gray-700 space-y-2 grid grid-cols-2 gap-x-4">
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/process-server-tulsa" className="text-blue-600 hover:underline font-medium">Tulsa</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/glenpool" className="text-blue-600 hover:underline font-medium">Glenpool</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/broken-arrow-process-server" className="text-blue-600 hover:underline font-medium">Broken Arrow</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/owasso-process-server" className="text-blue-600 hover:underline font-medium">Owasso</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/jenks-process-server" className="text-blue-600 hover:underline font-medium">Jenks</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/bixby-process-server" className="text-blue-600 hover:underline font-medium">Bixby</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline font-medium">Sand Springs</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/sapulpa" className="text-blue-600 hover:underline font-medium">Sapulpa</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/counties/washington-county" className="text-blue-600 hover:underline font-medium">Bartlesville</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/muskogee" className="text-blue-600 hover:underline font-medium">Muskogee</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/stillwater" className="text-blue-600 hover:underline font-medium">Stillwater</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/counties/rogers-county" className="text-blue-600 hover:underline font-medium">Claremore</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/okmulgee" className="text-blue-600 hover:underline font-medium">Okmulgee</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/counties/mayes-county" className="text-blue-600 hover:underline font-medium">Pryor</a></li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-4 text-xl">🗺️ Statewide Oklahoma Coverage</h3>
                  <p className="text-gray-700 mb-3">Professional process serving throughout all of Oklahoma:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><strong><a href="/counties/tulsa-county" className="text-blue-600 hover:underline">All 77 Oklahoma Counties</a></strong></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/oklahoma-city" className="text-blue-600 hover:underline font-medium">Oklahoma City Metro</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/norman" className="text-blue-600 hover:underline font-medium">Norman & Moore</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/lawton" className="text-blue-600 hover:underline font-medium">Lawton & Southwest Oklahoma</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/enid" className="text-blue-600 hover:underline font-medium">Enid & Northwest Oklahoma</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/durant" className="text-blue-600 hover:underline font-medium">Durant & Southeast Oklahoma</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/mcalester" className="text-blue-600 hover:underline font-medium">McAlester & Eastern Oklahoma</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Rural & Remote Communities</li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Small Towns & Counties</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-gray-700 text-lg">
                <strong>We serve every city, town, and county in Oklahoma.</strong> Same-day service available within 50 miles of <Link href="/process-server-tulsa" className="text-blue-600 hover:underline font-medium">Tulsa</Link>/<Link href="/service-areas/glenpool" className="text-blue-600 hover:underline font-medium">Glenpool</Link>. 
                Standard 24-48 hour service for all other Oklahoma locations.
              </p>
            </section>

            {/* Types of Documents with Visual */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Legal Documents We Serve Throughout Oklahoma</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/Legal-document-types-process-server.png"
                  alt="Legal documents served by Oklahoma process servers"
                  width={900}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Summons and Complaints",
                  "Divorce and Family Law Papers",
                  "Subpoenas for Testimony",
                  "Subpoenas for Documents", 
                  "Eviction Notices (FED)",
                  "Restraining Orders",
                  "Small Claims Court Orders",
                  "Citations and Petitions",
                  "Business Litigation Papers",
                  "Civil Lawsuit Documents",
                  "Garnishment Papers",
                  "Bankruptcy Documents"
                ].map((docType, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border hover:shadow-md transition group cursor-pointer">
                    <span className="text-blue-600 font-semibold mr-2 group-hover:text-blue-800 transition">✓</span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition">{docType}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional vs Sheriff Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose a Professional Process Server Over the Sheriff&rsquo;s Department?</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/process-server-vs-sheriff-comparison.png"
                  alt="Process server vs sheriff department comparison chart"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  While the Sheriff&rsquo;s office can serve papers, they are often overburdened with other law enforcement duties. A professional process server&rsquo;s sole focus is serving your documents quickly and correctly with specialized expertise.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center">
                      ✅ Professional Process Server Advantages
                    </h4>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>Dedicated focus</strong> on service of process exclusively</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>Faster turnaround</strong> times (24-48 hours vs weeks)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>24/7 availability</strong> including weekends and holidays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>Specialized skip tracing</strong> and investigation services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>Real-time status updates</strong> and communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span><strong>Professional appearance</strong> and approach</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center">
                      ❌ Sheriff&rsquo;s Department Limitations
                    </h4>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>Competing priorities</strong> with law enforcement duties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>Limited availability</strong> for urgent serves</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>Standard business hours</strong> only (usually)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>No specialized tracking</strong> or investigation services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>Significantly longer</strong> processing times</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span><strong>Limited follow-up</strong> on difficult serves</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Testimonials */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
              
              <div className="text-center mb-6">
                <Image 
                  src="/images/process-server-client-testimonials-reviews.png"
                  alt="Client testimonials and reviews for Just Legal Solutions process server"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Sarah M., Attorney</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Needed divorce papers served urgently before court deadline. Just Legal Solutions completed service same day with professional affidavit. Highly recommend!&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Mike R., Property Manager</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Outstanding service for eviction notices. Professional, discreet, and always provides proper documentation. Has saved us time and legal headaches.&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Jennifer K., Small Business Owner</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Skip tracing services helped locate a defendant who was avoiding service for months. Exceptional investigative skills and persistence.&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">David L., Law Firm Partner</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Reliable, professional, and cost-effective. We&rsquo;ve used Just Legal Solutions for over 50 serves with 100% success rate. Our go-to process server.&rdquo;</p>
                </div>
              </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Process Servers in Oklahoma</h2>
              
              <div className="space-y-6">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-white border-l-4 border-blue-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                    <h3 className="font-bold text-xl text-blue-800 mb-3 voice-optimized">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed voice-answer primary-answer">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Professional Process Server in Oklahoma?</h2>
                <p className="text-xl mb-6">
                  Don&rsquo;t let improper service invalidate your case. Ensure your legal documents are served correctly and on time with our licensed, experienced team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a href="tel:5393676832" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                    📞 Call (539) 367-6832
                  </a>
                  <a href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition border-2 border-white">
                    📝 Get Online Quote
                  </a>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>✓ Same-Day Service</strong><br />
                    Emergency serves available
                  </div>
                  <div>
                    <strong>✓ Statewide Coverage</strong><br />
                    All 77 Oklahoma counties
                  </div>
                  <div>
                    <strong>✓ 10+ Years Experience</strong><br />
                    Licensed & bonded professional
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

