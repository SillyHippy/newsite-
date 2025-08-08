import Script from 'next/script';

interface ReviewSchemaProps {
  businessName?: string;
  aggregateRating?: number;
  reviewCount?: number;
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

export default function ReviewSchema({ 
  businessName = "Just Legal Solutions",
  aggregateRating = 4.9,
  reviewCount = 127,
  reviews = []
}: ReviewSchemaProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }))
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
