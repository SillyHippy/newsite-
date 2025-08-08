import Link from 'next/link';

interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export function RelatedServices({ 
  currentService, 
  currentLocation 
}: { 
  currentService?: string;
  currentLocation?: string;
}) {
  // Generate related service links based on current page
  const getRelatedLinks = (): RelatedLink[] => {
    const links: RelatedLink[] = [];
    
    // Always include main services
    links.push({
      href: '/pricing',
      title: 'View Our Pricing',
      description: 'Transparent rates for all process serving needs'
    });
    
    if (currentLocation && currentLocation !== 'tulsa') {
      links.push({
        href: '/process-server-tulsa',
        title: `Process Server Tulsa`,
        description: 'Main Tulsa County process serving services'
      });
    }
    
    // Add service-specific links
    if (!currentService?.includes('same-day')) {
      links.push({
        href: '/same-day-process-serving-tulsa',
        title: 'Same-Day Process Serving',
        description: 'Emergency document delivery within 24 hours'
      });
    }
    
    if (!currentService?.includes('subpoena')) {
      links.push({
        href: '/subpoena-service',
        title: 'Subpoena Service',
        description: 'Professional subpoena delivery and witness service'
      });
    }
    
    // Add FAQ if not on FAQ page
    if (currentService !== 'faq') {
      links.push({
        href: '/process-serving-faq',
        title: 'Process Serving FAQ',
        description: 'Common questions about process serving in Oklahoma'
      });
    }
    
    return links.slice(0, 4); // Limit to 4 links
  };

  const relatedLinks = getRelatedLinks();

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Related Services
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedLinks.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <h4 className="font-semibold text-blue-600 mb-1">
              {link.title}
            </h4>
            <p className="text-sm text-gray-600">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
