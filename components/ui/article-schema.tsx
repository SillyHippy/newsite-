import Script from 'next/script';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
  keywords?: string[];
}

export default function ArticleSchema({ 
  headline,
  description,
  author = "Just Legal Solutions",
  datePublished,
  dateModified,
  url,
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&auto=format",
  keywords = []
}: ArticleSchemaProps) {
  const currentDate = new Date().toISOString();
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://justlegalsolutions.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Just Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://justlegalsolutions.org/images/jls-logo.webp"
      }
    },
    "datePublished": datePublished || currentDate,
    "dateModified": dateModified || currentDate,
    "url": `https://justlegalsolutions.org${url}`,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 800,
      "height": 400
    },
    "keywords": keywords.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://justlegalsolutions.org${url}`
    },
    "isPartOf": {
      "@type": "Website",
      "name": "Just Legal Solutions",
      "url": "https://justlegalsolutions.org"
    }
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
