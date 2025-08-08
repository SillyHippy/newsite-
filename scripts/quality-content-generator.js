
#!/usr/bin/env node

/**
 * Quality Content Generator - Manual Use Only
 * Creates high-quality, unique content following SEO best practices
 * Run manually when you want to add a new city page
 */

const fs = require('fs');
const path = require('path');
const { SafeSEOProtocol } = require('./safe-seo-protocol.js');

// High-quality city data with real research
const QUALITY_CITIES = [
  {
    name: 'Jenks',
    county: 'Tulsa County',
    zip: '74037',
    population: '25,000',
    uniqueFeatures: [
      'Home to the Oklahoma Aquarium',
      'Famous Riverwalk Crossing entertainment district',
      'Historic antique shopping destination',
      'Annual events at Redbud Valley Nature Preserve'
    ],
    businessDistricts: [
      'Riverwalk Crossing',
      'Main Street Historic District',
      'Elm Creek development'
    ],
    demographics: 'Family-oriented community with strong school system',
    economy: 'Tourism, retail, and residential services'
  },
  {
    name: 'Sand Springs',
    county: 'Tulsa County', 
    zip: '74063',
    population: '20,000',
    uniqueFeatures: [
      'Keystone Ancient Forest preserve',
      'Sand Springs Railway Museum',
      'Case Community Park complex',
      'Historic downtown revitalization'
    ],
    businessDistricts: [
      'Main Street corridor',
      'Industrial park area',
      'Downtown business district'
    ],
    demographics: 'Working-class community with industrial heritage',
    economy: 'Manufacturing, logistics, and local services'
  }
  // Add more cities as needed
];

class QualityContentGenerator {
  constructor() {
    this.protocol = new SafeSEOProtocol();
  }

  // Generate one high-quality page manually
  generateQualityPage(cityName) {
    const cityData = QUALITY_CITIES.find(city => city.name === cityName);
    if (!cityData) {
      console.log(`❌ City data not found for ${cityName}`);
      return false;
    }

    // Check if it's safe to create content
    const canCreate = this.protocol.canCreateContent();
    if (!canCreate.canCreate) {
      console.log('⏳ Not recommended to create content right now');
      console.log('Reasons:', canCreate.reasons);
      console.log(`Next safe date: ${canCreate.nextAvailableDate.toDateString()}`);
      return false;
    }

    // Generate high-quality content
    const content = this.createSubstantialContent(cityData);
    
    // Create page file
    const slug = `process-server-${cityData.name.toLowerCase().replace(/\s+/g, '-')}`;
    const dirPath = path.join('app', 'seo', slug);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const filePath = path.join(dirPath, 'page.tsx');
    fs.writeFileSync(filePath, this.createPageComponent(cityData, content));
    
    // Update safe log
    this.protocol.updateSafeLog(cityData.name);
    
    console.log(`✅ Created high-quality page for ${cityData.name}`);
    console.log(`📍 Location: ${filePath}`);
    console.log(`📊 Content length: ${content.length} characters`);
    console.log(`🎯 Following safe SEO practices`);
    
    return true;
  }

  // Create substantial, unique content
  createSubstantialContent(cityData) {
    return `Professional process server services in ${cityData.name}, ${cityData.county}, serving a community of ${cityData.population} residents. Our licensed process servers bring years of experience to this ${cityData.demographics} area.

${cityData.name} is unique in the Tulsa metro area for its ${cityData.uniqueFeatures.join(', ')}. This local knowledge helps our process servers navigate the community effectively and serve documents with discretion and professionalism.

Our ${cityData.name} process serving covers all major areas including ${cityData.businessDistricts.join(', ')}. We understand the local business environment centered around ${cityData.economy} and adjust our service approach accordingly.

What sets us apart in ${cityData.name}:
- Deep understanding of local neighborhoods and business districts
- Familiarity with ${cityData.county} court procedures and requirements  
- Professional relationships with local law enforcement and court personnel
- Flexible scheduling that works with ${cityData.name}'s community rhythms
- Specialized knowledge of serving papers in both residential and business areas

Our ${cityData.name} team handles all types of legal document service including civil summons, family court papers, eviction notices, small claims documents, subpoenas, and business litigation papers. We ensure every service attempt follows Oklahoma state law and ${cityData.county} local rules.

The ${cityData.economy} economy in ${cityData.name} requires process servers who understand both business and residential service needs. Our team is experienced in serving papers at both traditional businesses and the unique venues that make ${cityData.name} special.

For residents and businesses in ${cityData.name}, we offer same-day service, standard delivery options, and emergency service when time-sensitive legal matters require immediate attention. Our statewide Oklahoma license means we can handle any service requirements that extend beyond ${cityData.county}.

Choose Just Legal Solutions for ${cityData.name} process serving because we combine professional legal document delivery with genuine local knowledge and community respect.`;
  }

  // Create React page component
  createPageComponent(cityData, content) {
    return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${cityData.name} Process Server | Professional Legal Document Delivery',
  description: 'Licensed process server in ${cityData.name}, ${cityData.county}. Professional legal document delivery with local expertise. Serving ${cityData.population} residents and businesses.',
  keywords: ['${cityData.name.toLowerCase()} process server', 'legal document delivery ${cityData.name.toLowerCase()}', '${cityData.county.toLowerCase()} process serving'],
  robots: 'index, follow'
};

export default function ${cityData.name.replace(/\s+/g, '')}ProcessServerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server in ${cityData.name}, Oklahoma
        </h1>
        
        <div className="prose max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Serving ${cityData.name} with Professional Excellence
            </h2>
            <p className="text-blue-700">
              Licensed process server for ${cityData.name} and ${cityData.county} • Population: ${cityData.population}
            </p>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            ${content.split('\n\n').map(paragraph => 
              `<p>${paragraph.trim()}</p>`
            ).join('\n            ')}
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact ${cityData.name} Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout ${cityData.name} and ${cityData.county}. 
              Licensed, bonded, and experienced in local legal requirements.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a 
                  href="/pricing" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block"
                >
                  View Our Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  }
}

// CLI interface
if (require.main === module) {
  const generator = new QualityContentGenerator();
  const cityName = process.argv[2];
  
  if (!cityName) {
    console.log(`
🎯 Quality Content Generator - Manual Use

Usage: node scripts/quality-content-generator.js [city-name]

Available cities:
${QUALITY_CITIES.map(city => `- ${city.name}`).join('\n')}

Example: node scripts/quality-content-generator.js Jenks
    `);
    process.exit(1);
  }
  
  generator.generateQualityPage(cityName);
}

module.exports = { QualityContentGenerator, QUALITY_CITIES };
