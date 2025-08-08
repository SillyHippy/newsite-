
#!/usr/bin/env node

/**
 * Safe SEO Protocol - Natural Content Generation
 * Follows search engine guidelines to avoid spam filters
 */

const fs = require('fs');
const path = require('path');

console.log('🛡️ SAFE SEO PROTOCOL IMPLEMENTATION');
console.log('====================================');

// Safe automation guidelines
const SEO_GUIDELINES = {
  maxPagesPerMonth: 3, // Conservative approach
  minContentLength: 800, // Substantial content
  updateFrequency: 'weekly', // Not daily
  sitemapUpdateLimit: 'monthly', // Not hourly
  contentVariation: 80 // 80% unique content minimum
};

// Natural timing patterns (avoids bot-like behavior)
const NATURAL_TIMING = {
  businessHours: [9, 10, 11, 14, 15, 16], // When humans typically work
  weekdays: [1, 2, 3, 4, 5], // Monday to Friday
  spacing: 7, // Minimum 7 days between new pages
  randomDelay: [1, 3, 7] // 1-7 day random delays
};

// Quality content requirements
const QUALITY_STANDARDS = {
  minWords: 800,
  uniqueContent: 80, // Percentage
  humanReadability: true,
  localRelevance: true,
  valueAddition: true
};

class SafeSEOProtocol {
  constructor() {
    this.lastPageCreated = this.getLastPageDate();
    this.monthlyPageCount = this.getMonthlyPageCount();
  }

  // Check if it's safe to create new content
  canCreateContent() {
    const now = new Date();
    const daysSinceLastPage = this.daysSince(this.lastPageCreated);
    const isBusinessDay = NATURAL_TIMING.weekdays.includes(now.getDay());
    const isBusinessHour = NATURAL_TIMING.businessHours.includes(now.getHours());
    
    return {
      canCreate: daysSinceLastPage >= NATURAL_TIMING.spacing && 
                 this.monthlyPageCount < SEO_GUIDELINES.maxPagesPerMonth &&
                 isBusinessDay,
      reasons: {
        timingOk: daysSinceLastPage >= NATURAL_TIMING.spacing,
        monthlyLimitOk: this.monthlyPageCount < SEO_GUIDELINES.maxPagesPerMonth,
        businessDay: isBusinessDay,
        businessHour: isBusinessHour
      },
      nextAvailableDate: this.calculateNextAvailableDate()
    };
  }

  // Get last page creation date
  getLastPageDate() {
    const logPath = 'seo-safe-log.json';
    if (fs.existsSync(logPath)) {
      const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
      return new Date(log.lastPageCreated || '2024-01-01');
    }
    return new Date('2024-01-01');
  }

  // Get current month page count
  getMonthlyPageCount() {
    const logPath = 'seo-safe-log.json';
    if (fs.existsSync(logPath)) {
      const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
      const currentMonth = new Date().getMonth();
      return log.monthlyCount?.[currentMonth] || 0;
    }
    return 0;
  }

  // Calculate days since date
  daysSince(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Calculate next safe content creation date
  calculateNextAvailableDate() {
    const nextDate = new Date(this.lastPageCreated);
    nextDate.setDate(nextDate.getDate() + NATURAL_TIMING.spacing);
    
    // Ensure it's a business day
    while (!NATURAL_TIMING.weekdays.includes(nextDate.getDay())) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    
    return nextDate;
  }

  // Create high-quality, unique content
  createQualityContent(cityData) {
    const templates = this.getUniqueTemplates();
    const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    return this.generateUniqueContent(cityData, selectedTemplate);
  }

  // Get diverse content templates
  getUniqueTemplates() {
    return [
      {
        type: 'community-focused',
        emphasis: 'local businesses and residents',
        tone: 'community-oriented',
        keywords: 'local, community, neighborhood'
      },
      {
        type: 'professional-services',
        emphasis: 'legal professionals and law firms',
        tone: 'professional and authoritative',
        keywords: 'legal, professional, attorneys'
      },
      {
        type: 'emergency-services',
        emphasis: 'urgent and time-sensitive needs',
        tone: 'responsive and reliable',
        keywords: 'emergency, urgent, immediate'
      }
    ];
  }

  // Generate unique, valuable content
  generateUniqueContent(cityData, template) {
    const uniqueElements = {
      localLandmarks: this.getLocalLandmarks(cityData.name),
      businessDistricts: this.getBusinessDistricts(cityData.name),
      communityEvents: this.getCommunityEvents(cityData.name),
      localCourts: this.getLocalCourts(cityData.county),
      demographics: this.getDemographics(cityData.name)
    };

    return {
      title: `Professional Process Server ${cityData.name} | Trusted Legal Document Delivery`,
      content: this.buildUniquePageContent(cityData, template, uniqueElements),
      metadata: this.generateUniqueMetadata(cityData, template),
      schema: this.generateLocationSpecificSchema(cityData, uniqueElements)
    };
  }

  // Build substantial, unique content
  buildUniquePageContent(cityData, template, elements) {
    return `
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in ${cityData.name}, Oklahoma
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Serving the ${cityData.name} community with professional legal document delivery 
            since 2020. Our licensed process servers understand the unique needs of 
            ${elements.businessDistricts.join(', ')} and surrounding neighborhoods.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why ${cityData.name} Residents Choose Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Local Expertise</h3>
              <ul className="space-y-2 text-blue-700">
                <li>Familiar with ${elements.localLandmarks.join(', ')}</li>
                <li>Knowledge of ${elements.localCourts.join(' and ')}</li>
                <li>Understanding of local business hours and customs</li>
                <li>Established relationships throughout ${cityData.county}</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Professional Service</h3>
              <ul className="space-y-2 text-green-700">
                <li>Licensed and bonded in Oklahoma</li>
                <li>GPS tracking and photo documentation</li>
                <li>Professional affidavits of service</li>
                <li>Multiple attempt strategies</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Comprehensive Process Serving Throughout ${cityData.name}
          </h2>
          
          <p className="text-gray-700 mb-6">
            Our ${cityData.name} process servers handle all types of legal documents with 
            precision and professionalism. From routine civil papers to urgent court orders, 
            we ensure proper service according to Oklahoma state law and local court rules.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Documents We Serve in ${cityData.name}:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Civil summons and complaints</li>
                <li>• Divorce and family court papers</li>
                <li>• Eviction notices and landlord-tenant documents</li>
                <li>• Small claims court papers</li>
                <li>• Restraining orders and protective orders</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Subpoenas and witness summons</li>
                <li>• Business litigation documents</li>
                <li>• Debt collection papers</li>
                <li>• Garnishment notices</li>
                <li>• Court orders and judgments</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Service Areas Throughout ${cityData.county}
          </h2>
          
          <p className="text-gray-700 mb-6">
            While based in ${cityData.name}, our statewide Oklahoma license allows us to 
            serve documents anywhere in the state. We provide comprehensive coverage 
            throughout ${cityData.county} and beyond.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Contact ${cityData.name} Process Server
            </h3>
            <p className="text-blue-700 mb-4">
              Professional process serving throughout ${cityData.name} and ${cityData.county}. 
              Fast, reliable, and legally compliant document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-800">📞 (539) 367-6832</p>
                <p className="text-blue-700">📧 info@justlegalsolutions.org</p>
                <p className="text-blue-700">📍 Serving ${cityData.name}, ${cityData.county}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block">
                  View Our Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Update log with new page creation
  updateSafeLog(cityName) {
    const logPath = 'seo-safe-log.json';
    const now = new Date();
    const currentMonth = now.getMonth();
    
    let log = {};
    if (fs.existsSync(logPath)) {
      log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
    }
    
    log.lastPageCreated = now.toISOString();
    log.monthlyCount = log.monthlyCount || {};
    log.monthlyCount[currentMonth] = (log.monthlyCount[currentMonth] || 0) + 1;
    log.pagesCreated = log.pagesCreated || [];
    log.pagesCreated.push({
      city: cityName,
      date: now.toISOString(),
      type: 'natural_generation'
    });
    
    fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
  }

  // Helper methods for local data
  getLocalLandmarks(cityName) {
    const landmarks = {
      'Jenks': ['Jenks Riverwalk', 'Oklahoma Aquarium', 'Historic Downtown Jenks'],
      'Sand Springs': ['Keystone Ancient Forest', 'Sand Springs Cultural & Arts Center', 'Case Community Park'],
      'Owasso': ['Redbud Valley Nature Preserve', 'Owasso Sports Park', 'Historic Downtown Owasso'],
      'Claremore': ['Will Rogers Memorial Museum', 'Claremore Lake', 'Historic Downtown Claremore'],
      'Coweta': ['Coweta Community Center', 'Tiger Stadium', 'Downtown Business District'],
      'Catoosa': ['Hard Rock Hotel & Casino', 'Port of Catoosa', 'Cherokee Casino'],
      'Bartlesville': ['Price Tower Arts Center', 'Woolaroc Museum', 'Downtown Bartlesville'],
      'Muskogee': ['Honor Heights Park', 'Three Rivers Museum', 'Muskogee Civic Center']
    };
    return landmarks[cityName] || ['Local landmarks', 'Community centers', 'Business districts'];
  }

  getBusinessDistricts(cityName) {
    const districts = {
      'Jenks': ['Main Street corridor', 'Riverwalk area', 'Elm Street business district'],
      'Sand Springs': ['Main Street', 'Industrial district', 'Downtown core'],
      'Owasso': ['96th Street North corridor', 'Main Street', 'Downtown district'],
      'Claremore': ['Will Rogers Boulevard', 'Downtown square', 'Lynn Riggs Boulevard'],
      'Coweta': ['South Broadway', 'Downtown area', 'Cherokee Street'],
      'Catoosa': ['Cherokee Street', 'Highway 66 corridor', 'Port area'],
      'Bartlesville': ['Downtown district', 'Frank Phillips Boulevard', 'Price Road corridor'],
      'Muskogee': ['Downtown district', 'Shawnee Bypass', 'York Street corridor']
    };
    return districts[cityName] || ['Main Street', 'Downtown district', 'Business corridor'];
  }

  getCommunityEvents(cityName) {
    const events = {
      'Jenks': ['Riverwalk Crossing events', 'Christmas in the Park', 'Community festivals'],
      'Sand Springs': ['Herbal Affairs & Arts Festival', 'Community Day', 'Local celebrations'],
      'Owasso': ['Ram Roundup', 'Community events', 'Local festivals'],
      'Claremore': ['Will Rogers Days', 'BlueGrass & Chili Festival', 'Community gatherings'],
      'Coweta': ['Fall Festival', 'Community celebrations', 'Local events'],
      'Catoosa': ['Community Day', 'Local festivals', 'Seasonal celebrations'],
      'Bartlesville': ['OK Mozart Festival', 'Downtown events', 'Community celebrations'],
      'Muskogee': ['Azalea Festival', 'Renaissance Festival', 'Community events']
    };
    return events[cityName] || ['Community festivals', 'Local celebrations', 'Seasonal events'];
  }

  getLocalCourts(county) {
    const courts = {
      'Tulsa County': ['Tulsa County District Court', 'Tulsa Municipal Court'],
      'Rogers County': ['Rogers County District Court', 'Claremore Municipal Court'],
      'Wagoner County': ['Wagoner County District Court', 'Wagoner Municipal Court'],
      'Washington County': ['Washington County District Court', 'Bartlesville Municipal Court'],
      'Muskogee County': ['Muskogee County District Court', 'Muskogee Municipal Court']
    };
    return courts[county] || ['County District Court', 'Municipal Court'];
  }

  getDemographics(cityName) {
    // Simplified demographics for content variation
    return {
      type: 'growing community',
      character: 'family-friendly',
      economy: 'diverse local businesses'
    };
  }

  generateUniqueMetadata(cityData, template) {
    return {
      title: `${cityData.name} Process Server | Professional Legal Document Service`,
      description: `Professional process server in ${cityData.name}, ${cityData.county}. Licensed, bonded, and experienced in local legal document delivery. Call (539) 367-6832.`,
      keywords: [
        `${cityData.name.toLowerCase()} process server`,
        `legal document delivery ${cityData.name.toLowerCase()}`,
        `process serving ${cityData.county.toLowerCase()}`,
        `${cityData.name.toLowerCase()} legal services`
      ]
    };
  }

  generateLocationSpecificSchema(cityData, elements) {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Just Legal Solutions - ${cityData.name} Process Server`,
      "description": `Professional process serving and legal document delivery in ${cityData.name}, ${cityData.county}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityData.name,
        "addressRegion": "Oklahoma",
        "addressCountry": "US"
      },
      "telephone": "+15393676832",
      "email": "info@justlegalsolutions.org",
      "areaServed": {
        "@type": "City",
        "name": cityData.name,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": cityData.county
        }
      },
      "serviceType": "Process Serving"
    };
  }
}

// Main execution
function runSafeSEOProtocol() {
  const protocol = new SafeSEOProtocol();
  const canCreate = protocol.canCreateContent();
  
  console.log('🔍 Safe SEO Protocol Status:');
  console.log(`Can create content: ${canCreate.canCreate}`);
  console.log('Reasons:', canCreate.reasons);
  console.log(`Next available date: ${canCreate.nextAvailableDate.toDateString()}`);
  
  if (canCreate.canCreate) {
    console.log('✅ Safe to create new content following SEO best practices');
    return true;
  } else {
    console.log('⏳ Waiting for optimal timing to maintain natural patterns');
    return false;
  }
}

// Export for use in other scripts
module.exports = { SafeSEOProtocol, SEO_GUIDELINES, NATURAL_TIMING };

// Run if called directly
if (require.main === module) {
  runSafeSEOProtocol();
}
