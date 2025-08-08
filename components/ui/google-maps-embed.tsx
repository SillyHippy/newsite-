'use client';

interface GoogleMapsEmbedProps {
  countyName: string;
  cityName?: string;
  state?: string;
  title?: string;
}

export default function GoogleMapsEmbed({ 
  countyName, 
  cityName, 
  state = "Oklahoma",
  title 
}: GoogleMapsEmbedProps) {
  // Create search query - if cityName provided, use it, otherwise use county seat
  const searchQuery = cityName 
    ? `${cityName}, ${countyName}, ${state}`
    : `${countyName}, ${state}`;
  
  // URL encode the search query
  const encodedQuery = encodeURIComponent(searchQuery);
  
  // Google Maps iframe URL (no API key required)
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&hl=en&z=11&output=embed`;

  const mapTitle = title || `Map of ${countyName} - Process Server Service Area`;

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-blue-50 border-b">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {mapTitle}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Professional process serving throughout this area
          </p>
        </div>
        <div className="relative h-80">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapTitle}
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
}
