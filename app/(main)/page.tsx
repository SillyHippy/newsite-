import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Truck, FileText, Building2, Clock } from "lucide-react";
import { Metadata } from 'next';
import BusinessSchema from '../../components/BusinessSchema';
import FAQSchema from '../../components/FAQSchema';
import ServiceSchema from '../../components/ServiceSchema';
import ReviewAggregateSchema from '../../components/ReviewAggregateSchema';
import SocialProof from '@/components/SocialProof';
import OwnerBio from '@/components/ui/owner-bio';
import ReviewWidget from '@/components/ui/review-widget';

export const metadata: Metadata = {
  title: {
    absolute: 'Professional Process Server Tulsa County - Just Legal Solutions Oklahoma'
  },
  description: 'Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience. Same-day, rush & standard service options starting at $60.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]" aria-label="Hero section">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Professional legal services office with modern workspace and legal documents"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            quality={85}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          {/* SEO-optimized H1 - Hidden from users, visible to search engines */}
          <h1 className="sr-only">Professional Process Server Tulsa County Oklahoma</h1>
          
          {/* Visual heading - What users see */}
          <div className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Efficient Process Serving & Courier Solutions</div>
          
          {/* SEO-optimized description - Hidden from users, visible to search engines */}
          <p className="sr-only">
            At Just Legal Solutions, we provide expert legal document delivery services throughout Tulsa County, Broken Arrow, and Sapulpa. From routine legal papers to urgent same-day process serving, we deliver professional results at competitive rates.
          </p>
          
          {/* Visual description - What users see */}
          <p className="text-lg md:text-xl max-w-3xl drop-shadow-md mb-8">
            At Just Legal Solutions, we offer comprehensive process serving, courier, &amp; other business services tailored to your needs. Whether it&apos;s routine, rush, or same-day service, we ensure statewide Oklahoma coverage at reasonable rates.
          </p>
          
          {/* Trust Badge - 50+ Years Experience */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 font-semibold rounded-lg px-6 py-3 shadow-lg text-lg md:text-xl border border-blue-200" aria-label="Combined legal experience of team and partners">
              ⭐ Over 50 Years&apos; Combined Experience Serving Oklahoma&apos;s Legal Community
            </div>
            <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              Our certified team and professional partners deliver trusted, court-compliant process serving solutions backed by decades of expertise.
            </p>
          </div>
          
          {/* SEO-ONLY Content - Hidden from users but visible to search engines */}
          <div className="sr-only">
            {/* Enhanced SEO content for better rankings */}
            <h2>Professional Process Serving and Courier Services in Tulsa County, Oklahoma</h2>
            <p>Just Legal Solutions provides comprehensive process serving and courier services throughout Tulsa County, including Tulsa, Broken Arrow, Sapulpa, Glenpool, Wagoner County, and Creek County. Our experienced team delivers professional legal document delivery services with same-day, rush, and standard service options to meet all your business needs.</p>
            
            <h3>Process Serving Services in Tulsa County</h3>
            <p>Our certified process servers handle all types of legal document delivery including divorce papers, summons delivery, subpoena service, eviction notices, and court document transfers. We serve documents throughout Oklahoma with reliable, professional service that ensures proper legal compliance and timely delivery.</p>
            
            <h3>Legal Document Types We Serve</h3>
            <p>Our process servers handle divorce papers, summons, subpoenas, eviction notices, court documents, business papers, contracts, legal notifications, and other legal documents requiring professional service. We ensure proper service of process in compliance with Oklahoma state laws and court requirements.</p>
            
            <h3>Business Solutions and Court Services</h3>
            <p>Just Legal Solutions provides business solutions for law firms, attorneys, courts, and businesses requiring regular document delivery services. Our court-run transfers, electronic filing assistance, and skip tracing services support the legal community throughout Oklahoma with reliable, professional results.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white py-16 md:py-24" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Service 1 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <Image
                  src="/images/secure-delivery.webp"
                  alt="Professional courier delivering legal documents securely"
                  fill
                  className="object-cover object-position-upper-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Secure Document Delivery</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Our secure document delivery ensures your documents arrive safely and on time, handled with professional confidentiality.
              </p>
            </div>
            {/* Service 2 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <Image
                  src="/images/court-transfer.webp"
                  alt="Court document transfer service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Court-Run Transfers</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We specialize in court-run document transfers, ensuring your critical files reach their destination without delay.
              </p>
            </div>
            {/* Service 3 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <Image
                  src="/images/skip-trace.webp"
                  alt="Professional skip tracing and investigation services for locating individuals in Oklahoma"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Skip Tracing Services</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Professional skip tracing services to locate individuals throughout Oklahoma when traditional methods fail.
              </p>
            </div>
            {/* Service 4 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-shadow duration-300">
                <Image
                  src="/images/same-day.webp"
                  alt="Same-day process serving and urgent document delivery services"
                  fill
                  className="object-cover object-position-same-day"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get your time-sensitive documents delivered quickly with our reliable same-day process serving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Courier Services */}
      <section id="courier-services" className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/courier-bg.webp"
            alt="Legal office environment"
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-16">Dedicated Courier Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                 <Clock className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-300">When time is critical, our same-day courier service ensures your documents reach their destination quickly.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <FileText className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p className="text-gray-300">Our secure handling procedures ensure your sensitive materials are protected throughout the delivery process.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <Building2 className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Electronic Filing Assistance</h3>
              <p className="text-gray-300">Let our experienced staff handle your electronic court filings efficiently and accurately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - SEO Content Section - Hidden from users, visible to search engines */}
      <section className="sr-only" aria-label="Service areas and details">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Process Serving Solutions Throughout Oklahoma</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Just Legal Solutions provides professional process serving and courier services across Tulsa County and throughout Oklahoma. Our experienced team ensures timely, accurate, and compliant document delivery for law firms, businesses, and individuals starting at $60 for standard service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Serving Services</h3>
              <p className="text-gray-600 mb-4">
                Our certified process servers handle all types of legal document service including summons, subpoenas, divorce papers, eviction notices, and court orders. We provide detailed affidavits of service and maintain strict compliance with Oklahoma state laws.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Divorce document service</li>
                <li>• Summons and complaints</li>
                <li>• Subpoena delivery</li>
                <li>• Eviction notices</li>
                <li>• Small claims service</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Courier Solutions</h3>
              <p className="text-gray-600 mb-4">
                Professional courier services for urgent document delivery, court filings, and business-to-business transfers. Our secure handling ensures confidential materials reach their destination safely and on time.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Same-day delivery available</li>
                <li>• Secure chain of custody</li>
                <li>• Electronic filing assistance</li>
                <li>• Business document transfer</li>
                <li>• Time-sensitive deliveries</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coverage Areas</h3>
              <p className="text-gray-600 mb-4">
                Serving Tulsa County, Broken Arrow, Sapulpa, and surrounding areas with reliable process serving and courier services. We also provide statewide Oklahoma coverage for urgent legal document delivery needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Tulsa County (primary)</li>
                <li>• Broken Arrow</li>
                <li>• Sapulpa</li>
                <li>• Wagoner County</li>
                <li>• Creek County</li>
                <li>• Statewide Oklahoma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Additional Content - Hidden from users, visible to search engines */}
      <section className="sr-only">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Just Legal Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Legal Document Delivery You Can Trust</h3>
              <p className="text-gray-600 mb-6">
                With years of experience serving the Tulsa County legal community, Just Legal Solutions has built a reputation for reliable, professional process serving and courier services. Our team understands the critical importance of timely document delivery in legal proceedings.
              </p>
              <p className="text-gray-600 mb-6">
                We maintain detailed records, provide comprehensive affidavits of service, and ensure full compliance with Oklahoma state regulations. Whether you need routine document service or urgent same-day delivery, our professional team delivers results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified process servers</h4>
                    <p className="text-gray-600 text-sm">Licensed and bonded professionals ensuring legal compliance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Turnaround Times</h4>
                    <p className="text-gray-600 text-sm">Same-day, rush, and standard service options available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Transparent rates with no hidden fees or surprises</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sr-only">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Standard Service</span>
                  <span className="text-2xl font-bold text-blue-600">$60</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Rush Service</span>
                  <span className="text-2xl font-bold text-blue-600">$100</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Same-Day Service</span>
                  <span className="text-2xl font-bold text-blue-600">$150</span>
                </div>
              </div>
                <p className="text-sm text-gray-600 mt-6">
                  All services include detailed affidavit of service and professional handling. Additional fees may apply for multiple attempts or difficult serves.
                </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Owner Bio Section */}
      <OwnerBio />
      
      {/* Customer Reviews Section */}
      <ReviewWidget />
      
      {/* SEO Schema Markup for Maximum Rankings */}
      <BusinessSchema />
      <FAQSchema />
      <ServiceSchema />
      <ReviewAggregateSchema />
      {/* Invisible authoritative legal resource links for SEO trust */}
      <div style={{display:'none'}}>
        <a href="https://www.oscn.net/" rel="nofollow noopener">Oklahoma State Courts Network</a>
        <a href="https://www.okbar.org/" rel="nofollow noopener">Oklahoma Bar Association</a>
        <a href="https://www.legalaidok.org/" rel="nofollow noopener">Oklahoma Legal Aid Services</a>
        <a href="https://www.tulsacounty.org/" rel="nofollow noopener">Tulsa County Court Services</a>
        <a href="https://www.oklahoma.gov/" rel="nofollow noopener">Oklahoma.gov - Legal Resources</a>
      </div>
    </main>
  );
}
