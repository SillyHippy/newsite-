#!/usr/bin/env node

// Auto-generates SEO location pages for Tulsa area cities
const fs = require('fs');
const path = require('path');

const locations = [
  { city: 'Owasso', county: 'Tulsa County', zip: '74055' },
  { city: 'Jenks', county: 'Tulsa County', zip: '74037' },
  { city: 'Sand Springs', county: 'Tulsa County', zip: '74063' },
  { city: 'Sapulpa', county: 'Creek County', zip: '74066' },
  { city: 'Catoosa', county: 'Rogers County', zip: '74015' },
  { city: 'Coweta', county: 'Wagoner County', zip: '74429' },
  { city: 'Claremore', county: 'Rogers County', zip: '74017' }
];

const seoDir = path.join(__dirname, 'app', 'seo');

// Ensure SEO directory exists
if (!fs.existsSync(seoDir)) {
  fs.mkdirSync(seoDir, { recursive: true });
}

locations.forEach(location => {
  const slug = `process-server-${location.city.toLowerCase().replace(' ', '-')}`;
  const pageDir = path.join(seoDir, slug);
  
  // Create directory
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  const pageContent = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server ${location.city} | Professional Document Delivery | Just Legal Solutions',
  description: 'Certified process server in ${location.city}, ${location.county}. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in ${location.zip}.',
  keywords: ['process server ${location.city}', '${location.city} process serving', 'legal document delivery ${location.city}', 'court documents ${location.county}', '${location.zip} process server'],
  robots: 'index, follow'
};

export default function ProcessServer${location.city.replace(' ', '')}() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in ${location.city}, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> ${location.city}, ${location.county}
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Certified Legal Document Delivery in ${location.county}
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions provides professional process serving in ${location.city}, Oklahoma (${location.zip}). 
            Our certified process servers are licensed, bonded, and experienced in serving legal documents 
            throughout ${location.county} with speed and precision.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our ${location.city} Process Serving Services</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Same-day process serving in ${location.city}</li>
            <li>Court document delivery throughout ${location.zip} area</li>
            <li>Legal courier services for law firms</li>
            <li>Rush delivery for time-sensitive documents</li>
            <li>GPS tracking and photo documentation</li>
            <li>Professional service affidavits</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Our ${location.city} Process Servers
            </h3>
            <p className="text-green-700 mb-3">
              Professional document service in ${location.city}. Call for immediate assistance!
            </p>
            <p className="text-2xl font-bold text-green-800">
              📞 (539) 367-6832
            </p>
            <p className="text-green-700 mt-2">
              📧 info@justlegalsolutions.org
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>SEO Note:</strong> This page automatically updates daily to maintain freshness for search engines. 
              Our process serving services in ${location.city} are available 7 days a week with flexible scheduling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  const filePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(filePath, pageContent);
  console.log(`✅ Created: ${slug}/page.tsx`);
});

console.log(`\\n🚀 Generated ${locations.length} SEO location pages!`);
console.log('📈 These pages will automatically update daily for SEO freshness.');
console.log('🎯 Each page targets specific location + service keywords.');
