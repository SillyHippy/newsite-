import Script from 'next/script';

interface EnhancedBreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export default function EnhancedBreadcrumbSchema({ items }: EnhancedBreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": `https://justlegalsolutions.org${item.url}`,
        "url": `https://justlegalsolutions.org${item.url}`,
        "name": item.name
      }
    }))
  };

  return (
    <Script
      id="enhanced-breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Visual breadcrumb component for better UX
export function VisualBreadcrumbs({ items }: EnhancedBreadcrumbSchemaProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium">{item.name}</span>
            ) : (
              <a 
                href={item.url} 
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
