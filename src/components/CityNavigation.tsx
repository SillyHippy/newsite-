
import React from 'react';
import Link from 'next/link';

interface CityNavigationProps {
  currentCity?: string;
  className?: string;
}

export default function CityNavigation({ currentCity, className = "" }: CityNavigationProps) {
  const cities = [
    { name: 'Tulsa', slug: 'tulsa-process-server-comprehensive', county: 'Tulsa County' },
    { name: 'Broken Arrow', slug: 'broken-arrow-process-server', county: 'Tulsa County' },
    { name: 'Bixby', slug: 'bixby-process-server', county: 'Tulsa County' },
    { name: 'Jenks', slug: 'jenks-process-server', county: 'Tulsa County' },
    { name: 'Sand Springs', slug: 'sand-springs-process-server', county: 'Tulsa County' },
    { name: 'Owasso', slug: 'owasso-process-server', county: 'Tulsa/Rogers County' },
    { name: 'Glenpool', slug: 'glenpool-process-server', county: 'Tulsa County' }
  ];

  const upcomingCities = [
    { name: 'Claremore', slug: 'claremore-process-server', county: 'Rogers County' },
    { name: 'Coweta', slug: 'coweta-process-server', county: 'Wagoner County' },
    { name: 'Catoosa', slug: 'catoosa-process-server', county: 'Rogers/Wagoner County' },
    { name: 'Bartlesville', slug: 'bartlesville-process-server', county: 'Washington County' }
  ];

  return (
    <nav className={`city-navigation ${className}`}>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-blue-900">Service Areas</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Current Coverage</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link 
                    href={`/seo/${city.slug}`}
                    className={`text-blue-600 hover:text-blue-800 hover:underline block ${
                      currentCity === city.slug ? 'font-semibold text-blue-800' : ''
                    }`}
                  >
                    {city.name} Process Server
                    <span className="text-sm text-gray-500 ml-2">({city.county})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-gray-800">Expanding Coverage</h4>
            <ul className="space-y-2">
              {upcomingCities.map((city) => (
                <li key={city.slug} className="text-gray-600">
                  {city.name} Process Server 
                  <span className="text-sm text-gray-500 ml-2">({city.county})</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded ml-2">
                    Coming Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Statewide Coverage:</strong> We serve all of Oklahoma with same-day service available.
            <Link href="/pricing" className="text-green-700 hover:text-green-900 underline ml-1">
              View pricing for your area →
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
}
