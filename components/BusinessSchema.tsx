import React from 'react';

export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Just Legal Solutions",
    "description": "Professional process serving and legal document delivery throughout Tulsa County, Oklahoma. Over 50 years' combined team and partner experience. Same-day service available.",
    "slogan": "Over 50 Years' Combined Experience Serving Oklahoma's Legal Community",
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "founder": {
      "@type": "Person",
      "name": "Joseph Iannazzi",
      "jobTitle": "Founder & CEO",
      "description": "Leading a team and partner network with over 50 years' combined experience in Oklahoma legal document delivery and process serving."
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Joseph Iannazzi",
        "jobTitle": "Lead Process Server and Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th St",
      "addressLocality": "Glenpool",
      "addressRegion": "OK",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.9553",
      "longitude": "-95.9442"
    },
    "areaServed": [
      "Tulsa County",
      "Rogers County", 
      "Wagoner County",
      "Creek County",
      "Mayes County"
    ],
    "serviceType": [
      "Process Serving",
      "Legal Document Delivery",
      "Court Filing Services",
      "Courier Services",
      "Skip Tracing"
    ],
    "priceRange": "$30-$200",
    "openingHours": ["Mo-Su 00:00-24:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "24:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/just-legal-solutions",
      "https://www.manta.com/c/m1x7pgf/just-legal-solutions",
      "https://www.showmelocal.com/38832951-just-legal-solutions-glenpool",
      "https://www.crunchbase.com/organization/just-legal-solutions",
      "https://www.alignable.com/glenpool-ok/just-legal-solutions",
      "https://www.elocal.com/profile/just-legal-solutions-21951593",
      "https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805",
      "https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html",
      "https://clutch.co/profile/just-legal-solutions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "4",
      "description": "Combined reviews from Google, Yelp, Facebook, phone consultations, and direct client feedback"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Brian Murchison"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Just Legal Solutions takes care of business and fast. Not only were they affordable but extremely professional and quick to reply to all my concerns.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "url": "https://maps.app.goo.gl/HeSXxmptbY13RAgt7"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James McCoy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I don't normally write reviews, but I felt compelled to just to praise Just Legal Solutions. I cannot recommend them highly enough. I hired them after two other process servers were unable to serve an individual who was actively avoiding it. Just Legal Solutions got the job done with incredible speed and efficiency. On top of their effectiveness, their rates were more affordable than anyone else I contacted. If you need a persistent and reliable process server, especially for a difficult case, this is the company to hire.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "url": "https://maps.app.goo.gl/WfVpioLzGkDMWjvx9"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Richard Meffert"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Fast, professional, and reliable service! The team kept me informed every step of the way and handled my case with care and efficiency. Highly recommended for anyone needing process serving.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "url": "https://maps.app.goo.gl/KJT3RcMhH4neJJa87"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "i d"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I initially hired Just Legal Solutions for a Rush process serving job, and they were incredibly fast and professional. I was so impressed that I ended up using them for so much more. They've helped me with data entry, cleaned up my QuickBooks, and provided legal assistant support that has been invaluable. It's rare to find a company that can handle so many different tasks with such a high level of competence. Truly a one-stop shop. I can't recommend them enough!!",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "url": "https://maps.app.goo.gl/VS3mVpBjJC4Fax9a7"
      }
    ]
  };

  return (
    <>
      <script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
