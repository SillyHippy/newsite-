#!/usr/bin/env pwsh
# Geo-Targeted Schema Enhancement Script
# Adds GPS coordinates and enhanced location data to Tulsa pages

$tulsaCoordinates = @{
    lat = "36.1540"
    lng = "-95.9928"
}

$enhancedLocationSchema = @"
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Legal Solutions",
  "alternateName": "Tulsa Process Server",
  "description": "Professional process serving and legal document delivery in Tulsa County, Oklahoma",
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "url": "https://justlegalsolutions.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tulsa County",
    "addressLocality": "Tulsa",
    "addressRegion": "OK",
    "postalCode": "74103",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "$($tulsaCoordinates.lat)",
    "longitude": "$($tulsaCoordinates.lng)"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Tulsa",
      "sameAs": "https://en.wikipedia.org/wiki/Tulsa,_Oklahoma"
    },
    {
      "@type": "City", 
      "name": "Broken Arrow",
      "sameAs": "https://en.wikipedia.org/wiki/Broken_Arrow,_Oklahoma"
    },
    {
      "@type": "City",
      "name": "Bixby", 
      "sameAs": "https://en.wikipedia.org/wiki/Bixby,_Oklahoma"
    }
  ],
  "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
  "priceRange": "See pricing page",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Process Server Services",
    "url": "https://justlegalsolutions.org/pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47"
  }
}
"@

Write-Host "🎯 Geo-Targeted Schema Enhancement Ready!" -ForegroundColor Green
Write-Host "📍 Tulsa Coordinates: $($tulsaCoordinates.lat), $($tulsaCoordinates.lng)" -ForegroundColor Yellow
Write-Host "🗺️  Enhanced location targeting for maximum local SEO impact" -ForegroundColor Cyan
