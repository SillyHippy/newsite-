import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Additional locations to create pages for
const locations = [
  {
    name: 'Owasso',
    county: 'Tulsa County',
    zip: '74055',
    description: 'Owasso process server services with professional legal document delivery throughout northern Tulsa County.',
    population: '36,000',
    features: ['Suburban community', 'Growing business district', 'Family-friendly area'],
    keywords: ['Owasso process server', 'legal document service Owasso', 'process serving Owasso OK']
  },
  {
    name: 'Jenks',
    county: 'Tulsa County',
    zip: '74037',
    description: 'Professional process serving in Jenks with certified legal document delivery for all court requirements.',
    population: '25,000',
    features: ['Riverwalk entertainment district', 'Quality schools', 'Historic downtown'],
    keywords: ['Jenks process server', 'legal document delivery Jenks', 'process serving Jenks Oklahoma']
  },
  {
    name: 'Sand Springs',
    county: 'Tulsa County',
    zip: '74063',
    description: 'Sand Springs process server services with reliable legal document delivery and court compliance.',
    population: '20,000',
    features: ['Industrial hub', 'Arkansas River access', 'Manufacturing center'],
    keywords: ['Sand Springs process server', 'legal service Sand Springs', 'document delivery Sand Springs']
  },
  {
    name: 'Catoosa',
    county: 'Rogers County',
    zip: '74015',
    description: 'Catoosa process serving with professional legal document delivery throughout Rogers County.',
    population: '8,000',
    features: ['Port of Catoosa', 'Industrial growth', 'Transportation hub'],
    keywords: ['Catoosa process server', 'Rogers County process serving', 'legal documents Catoosa']
  },
  {
    name: 'Coweta',
    county: 'Wagoner County',
    zip: '74429',
    description: 'Professional process server services in Coweta with certified legal document delivery.',
    population: '10,000',
    features: ['Growing community', 'Family businesses', 'Rural atmosphere'],
    keywords: ['Coweta process server', 'Wagoner County legal service', 'process serving Coweta OK']
  },
  {
    name: 'Claremore',
    county: 'Rogers County',
    zip: '74017',
    description: 'Claremore process serving with experienced legal document delivery throughout Rogers County.',
    population: '19,000',
    features: ['Will Rogers birthplace', 'Historic downtown', 'Educational center'],
    keywords: ['Claremore process server', 'legal document service Claremore', 'Rogers County process serving']
  }
];

// Service-specific pages to create
const services = [
  {
    slug: 'skip-tracing-services-tulsa',
    title: 'Skip Tracing Services Tulsa | Professional Location Services',
    description: 'Professional skip tracing services in Tulsa for locating difficult-to-find individuals. Expert investigation and location services. Call (539) 367-6832.',
    keywords: ['skip tracing Tulsa', 'locate person Tulsa', 'investigation services Oklahoma', 'find defendant Tulsa'],
    content: {
      heading: 'Professional Skip Tracing Services in Tulsa',
      intro: 'When traditional service attempts fail, our professional skip tracing services help locate individuals throughout the Tulsa area.',
      services: [
        'Database searches and public records investigation',
        'Social media and digital footprint analysis',
        'Employment and asset location',
        'Address verification and current location updates',
        'Witness and defendant location services'
      ]
    }
  },
  {
    slug: 'court-document-filing-tulsa',
    title: 'Court Document Filing Services Tulsa | Legal Filing Assistance',
    description: 'Professional court document filing services in Tulsa. Expert assistance with legal paperwork filing and court procedures. Call (539) 367-6832.',
    keywords: ['court filing Tulsa', 'legal document filing', 'court paperwork Tulsa', 'legal filing services Oklahoma'],
    content: {
      heading: 'Court Document Filing Services in Tulsa',
      intro: 'Professional assistance with court document filing and legal paperwork management throughout Tulsa County.',
      services: [
        'Civil court document filing',
        'Family court paperwork assistance',
        'Small claims court filing',
        'Criminal court document submission',
        'Emergency filing services'
      ]
    }
  },
  {
    slug: 'rush-process-serving-tulsa',
    title: 'Rush Process Serving Tulsa | Emergency Legal Document Delivery',
    description: 'Rush and emergency process serving in Tulsa. Same-day and urgent legal document delivery services. Available 24/7. Call (539) 367-6832.',
    keywords: ['rush process serving Tulsa', 'emergency legal service', 'same day document delivery', 'urgent process server Tulsa'],
    content: {
      heading: 'Rush Process Serving Services in Tulsa',
      intro: 'When time is critical, our rush process serving ensures urgent legal documents are delivered quickly and professionally.',
      services: [
        'Same-day process serving (within 8 hours)',
        'Emergency service (within 2 hours)',
        '24/7 availability for urgent matters',
        'Weekend and holiday rush service',
        'Court deadline compliance assistance'
      ]
    }
  }
];

function createLocationPage(location: any) {
  const slug = `process-server-${location.name.toLowerCase().replace(/\s+/g, '-')}`;
  
  const content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${location.name} Process Server | Professional Legal Document Service',
  description: '${location.description} Fast, reliable service in ${location.county}. Call (539) 367-6832.',
  keywords: [${location.keywords.map((k: string) => `'${k}'`).join(', ')}],
  robots: 'index, follow'
};

export default function ${location.name.replace(/\s+/g, '')}ProcessServer() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ${location.name} Process Server | Professional Legal Document Service
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Professional Service</strong> | Updated: {lastUpdated} | ${location.county} Coverage
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            ${location.description} Our certified process servers provide reliable legal document 
            delivery throughout ${location.name} and surrounding ${location.county} areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ${location.name} Service Area
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Primary Coverage:</strong> ${location.name} (${location.zip})</li>
                <li><strong>County:</strong> ${location.county}</li>
                <li><strong>Population Served:</strong> ${location.population}+ residents</li>
                <li><strong>Service Radius:</strong> Complete ${location.county} coverage</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Area Highlights:</h3>
              <ul className="list-disc ml-6 text-gray-700">
                ${location.features.map((f: string) => `<li>${f}</li>`).join('\n                ')}
              </ul>
            </div>


          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              ${location.name} Process Serving Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc ml-6 text-blue-700 space-y-1">
                  <li>Divorce and family court papers</li>
                  <li>Civil lawsuit documents</li>
                  <li>Eviction notices</li>
                  <li>Small claims court papers</li>
                  <li>Restraining orders</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc ml-6 text-blue-700 space-y-1">
                  <li>Subpoenas and witness summons</li>
                  <li>Business litigation papers</li>
                  <li>Debt collection documents</li>
                  <li>Landlord-tenant notices</li>
                  <li>Court orders and judgments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why Choose Our ${location.name} Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Local Expertise:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-1">
                  <li>Familiar with ${location.name} neighborhoods</li>
                  <li>Knowledge of local court procedures</li>
                  <li>Established relationships in ${location.county}</li>
                  <li>Understanding of area business hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Professional Service:</h4>
                <ul className="list-disc ml-6 text-gray-600 space-y-1">
                  <li>GPS tracking and documentation</li>
                  <li>Professional affidavits of service</li>
                  <li>Multiple service attempts included</li>
                  <li>Real-time status updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact ${location.name} Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout ${location.name} and ${location.county}. 
              Fast, reliable, and legally compliant document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving ${location.name}, ${location.county}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return { slug, content };
}

function createServicePage(service: any) {
  const content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${service.title}',
  description: '${service.description}',
  keywords: [${service.keywords.map((k: string) => `'${k}'`).join(', ')}],
  robots: 'index, follow'
};

export default function ${service.slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join('')}() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ${service.content.heading}
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Professional Service</strong> | Updated: {lastUpdated} | Tulsa County Coverage
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            ${service.content.intro}
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Services Include:
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              ${service.content.services.map((s: string) => `<li>${s}</li>`).join('\n              ')}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Service Pricing Information
            </h3>
            <p className="text-blue-700 mb-4">
              For detailed pricing information on all our process serving and legal document delivery services, 
              please visit our comprehensive pricing page.
            </p>
            <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block font-semibold">
              View Pricing Details
            </a>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Us for ${service.content.heading}
            </h3>
            <p className="text-green-700 mb-4">
              Professional ${service.slug.replace(/-/g, ' ')} throughout Tulsa and surrounding areas.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return { slug: service.slug, content };
}

// Generate sitemap entries
function generateSitemapEntries() {
  const locationEntries = locations.map(loc => {
    const slug = `process-server-${loc.name.toLowerCase().replace(/\s+/g, '-')}`;
    return `  <url>
    <loc>\${baseUrl}/seo/${slug}/</loc>
    <lastmod>\${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  const serviceEntries = services.map(service => {
    return `  <url>
    <loc>\${baseUrl}/seo/${service.slug}/</loc>
    <lastmod>\${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  return { locationEntries, serviceEntries };
}

// Main execution
console.log('🚀 Generating additional SEO pages...');

// Create location pages
locations.forEach(location => {
  const { slug, content } = createLocationPage(location);
  const dir = join(process.cwd(), 'app', 'seo', slug);
  
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'page.tsx'), content);
    console.log(\`✅ Created location page: \${slug}\`);
  } catch (error) {
    console.error(\`❌ Error creating \${slug}:\`, error);
  }
});

// Create service pages
services.forEach(service => {
  const { slug, content } = createServicePage(service);
  const dir = join(process.cwd(), 'app', 'seo', slug);
  
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'page.tsx'), content);
    console.log(\`✅ Created service page: \${slug}\`);
  } catch (error) {
    console.error(\`❌ Error creating \${slug}:\`, error);
  }
});

// Generate sitemap update instructions
const { locationEntries, serviceEntries } = generateSitemapEntries();
console.log('\n📝 Add these entries to your sitemap:');
console.log('\nLocation entries:');
console.log(locationEntries);
console.log('\nService entries:');
console.log(serviceEntries);

console.log(\`\n🎉 Generated \${locations.length} location pages and \${services.length} service pages!\`);
console.log('📊 Total SEO pages created: ' + (locations.length + services.length));
