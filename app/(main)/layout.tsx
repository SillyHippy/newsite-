import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        {children}
        {/* Invisible authoritative legal resource links for SEO trust */}
        <div style={{display:'none'}}>
          <a href="https://www.oscn.net/" rel="nofollow noopener">Oklahoma State Courts Network</a>
          <a href="https://www.okbar.org/" rel="nofollow noopener">Oklahoma Bar Association</a>
          <a href="https://www.legalaidok.org/" rel="nofollow noopener">Oklahoma Legal Aid Services</a>
          <a href="https://www.tulsacounty.org/" rel="nofollow noopener">Tulsa County Court Services</a>
          <a href="https://www.oklahoma.gov/" rel="nofollow noopener">Oklahoma.gov - Legal Resources</a>
        </div>
        {/* Global JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Just Legal Solutions",
            "url": "https://justlegalsolutions.org",
            "telephone": "(539) 367-6832",
            "email": "info@justlegalsolutions.org",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tulsa",
              "addressRegion": "Oklahoma",
              "addressCountry": "US"
            },
            "areaServed": ["Tulsa County", "Broken Arrow", "Sapulpa", "Bixby", "Oklahoma"],
            "priceRange": "See pricing at justlegalsolutions.org/pricing",
            "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
            "currenciesAccepted": "USD",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Just Legal Solutions",
            "url": "https://justlegalsolutions.org",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://justlegalsolutions.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://justlegalsolutions.org/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://justlegalsolutions.org/service-areas"}
            ]
          }) }}
        />
      </main>
      <Footer />
    </div>
  );
}
