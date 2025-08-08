
#!/usr/bin/env node

/**
 * Enhanced City Automation Script - SEO Safe
 * Manages new city pages, schema validation, and sitemap updates
 * Works with existing /seo/ folder structure to avoid duplicates
 */

const fs = require('fs');
const path = require('path');

// Target cities for implementation (excluding those that already exist)
const existingCities = [
  'jenks', 'bixby', 'broken-arrow', 'sand-springs', 'owasso', 'glenpool', 'tulsa'
];

const newCities = [
  {
    name: 'Claremore',
    slug: 'claremore-process-server',
    county: 'Rogers County',
    population: '19000',
    specialties: ['Rogers County Seat', 'Will Rogers Heritage', 'Rural Areas'],
    keywords: ['Claremore process server', 'Rogers County legal documents', 'rural Oklahoma process serving']
  },
  {
    name: 'Coweta',
    slug: 'coweta-process-server',
    county: 'Wagoner County', 
    population: '10000',
    specialties: ['Wagoner County Service', 'Growing Community', 'Family Businesses'],
    keywords: ['Coweta process server', 'Wagoner County legal service', 'small town process serving']
  },
  {
    name: 'Catoosa',
    slug: 'catoosa-process-server',
    county: 'Rogers/Wagoner County',
    population: '8000',
    specialties: ['Port of Catoosa', 'Transportation Hub', 'Industrial Growth'],
    keywords: ['Catoosa process server', 'port area legal service', 'transportation legal documents']
  },
  {
    name: 'Bartlesville',
    slug: 'bartlesville-process-server',
    county: 'Washington County',
    population: '36000',
    specialties: ['Oil Industry Hub', 'Corporate Headquarters', 'Historic Downtown'],
    keywords: ['Bartlesville process server', 'Washington County legal service', 'corporate legal documents']
  }
];

console.log('🚀 Enhanced City Automation Starting...');

// Check if city page already exists in /seo/ folder
function checkExistingCoverage(citySlug) {
  const seoPath = `app/(main)/seo/${citySlug}/page.tsx`;
  return fs.existsSync(seoPath);
}

// Generate unique FAQ questions for each city
function generateCityFAQs(city) {
  const baseQuestions = [
    `How quickly can you serve papers in ${city.name}?`,
    `What makes ${city.name} process serving unique?`,
    `Do you cover all of ${city.county} from ${city.name}?`,
    `Can you handle emergency service in ${city.name}?`,
    `What's your success rate for ${city.name} process serving?`
  ];

  const baseAnswers = [
    `We typically complete process serving in ${city.name} within 1-3 business days, with same-day service available for urgent documents throughout ${city.county}.`,
    `Our ${city.name} process servers understand the local community dynamics and ${city.specialties.join(', ')}, ensuring effective service delivery.`,
    `Yes, we provide comprehensive coverage of ${city.county} with ${city.name} as a key service area, reaching all residential and business locations.`,
    `Emergency process serving in ${city.name} is available with 2-4 hour service for critical legal deadlines throughout ${city.county}.`,
    `We maintain a 95%+ success rate for process serving in ${city.name} through local knowledge, multiple service attempts, and professional follow-through.`
  ];

  return { questions: baseQuestions, answers: baseAnswers };
}

// Validate schema markup across all pages
function validateSchemaMarkup() {
  console.log('🔍 Validating Schema Markup...');
  
  const schemaFiles = [
    'components/ui/enhanced-breadcrumb-schema.tsx',
    'components/ui/enhanced-faq-schema.tsx', 
    'components/ui/enhanced-service-schema.tsx',
    'components/BusinessSchema.tsx'
  ];

  let validationResults = [];

  schemaFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for required schema elements
      const hasLocalBusiness = content.includes('@type": "LocalBusiness"') || content.includes("@type': 'LocalBusiness'");
      const hasService = content.includes('@type": "Service"') || content.includes("@type': 'Service'");
      const hasFAQ = content.includes('@type": "FAQPage"') || content.includes("@type': 'FAQPage'");
      
      validationResults.push({
        file,
        hasLocalBusiness,
        hasService, 
        hasFAQ,
        valid: hasLocalBusiness || hasService || hasFAQ
      });
    }
  });

  console.log('✅ Schema Validation Results:', validationResults);
  return validationResults;
}

// Update sitemap with new city pages
function updateSitemap() {
  console.log('🗺️ Updating Sitemap...');
  
  const sitemapEntries = newCities
    .filter(city => !checkExistingCoverage(city.slug))
    .map(city => {
      return {
        url: `https://justlegalsolutions.org/seo/${city.slug}/`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.8'
      };
    });

  // Log sitemap entries for manual addition
  console.log('📝 New Sitemap Entries Needed:');
  sitemapEntries.forEach(entry => {
    console.log(`  - ${entry.url} (Priority: ${entry.priority})`);
  });

  return sitemapEntries;
}

// Generate performance monitoring config
function generatePerformanceConfig() {
  console.log('📊 Generating Performance Monitoring Config...');
  
  const config = {
    monitoring: {
      enabled: true,
      interval: 'weekly', // Safe interval
      metrics: [
        'Core Web Vitals',
        'Page Load Speed',
        'Mobile Usability',
        'Schema Validation',
        'Internal Link Health'
      ]
    },
    cityPages: newCities
      .filter(city => !checkExistingCoverage(city.slug))
      .map(city => ({
        name: city.name,
        url: `/seo/${city.slug}/`,
        keywords: city.keywords,
        specialFocus: city.specialties
      })),
    alerts: {
      performanceThreshold: 3000, // 3 second load time
      schemaErrors: true,
      brokenLinks: true,
      mobileIssues: true
    }
  };

  console.log('⚙️ Performance Config Generated:', JSON.stringify(config, null, 2));
  return config;
}

// Main execution - SEO safe implementation
async function runEnhancedAutomation() {
  try {
    console.log('🎯 Starting SEO-Safe City Automation...');
    
    // Step 1: Check for existing pages to avoid duplicates
    console.log('🔍 Checking for existing city pages...');
    const missingCities = newCities.filter(city => !checkExistingCoverage(city.slug));
    const existingCount = newCities.length - missingCities.length;
    
    console.log(`📊 City Coverage Analysis:`);
    console.log(`   Existing pages: ${existingCount}`);
    console.log(`   Missing pages: ${missingCities.length}`);
    
    if (missingCities.length === 0) {
      console.log('✅ All target cities already have pages - no duplicates created');
      return;
    }
    
    // Step 2: Validate existing schema
    const schemaValidation = validateSchemaMarkup();
    
    // Step 3: Update sitemap planning (only for missing cities)
    const sitemapUpdates = updateSitemap();
    
    // Step 4: Generate performance config
    const performanceConfig = generatePerformanceConfig();
    
    // Step 5: Generate FAQ content for missing cities only
    console.log('❓ Generating City-Specific FAQ Content...');
    missingCities.forEach(city => {
      const faqs = generateCityFAQs(city);
      console.log(`✅ FAQ Generated for ${city.name}:`, faqs.questions.length, 'questions');
    });

    // Summary Report
    console.log('\n🎉 SEO-Safe City Automation Complete!');
    console.log('📋 Summary Report:');
    console.log(`  - Cities Needing Pages: ${missingCities.length}`);
    console.log(`  - Existing Cities Preserved: ${existingCount}`);
    console.log(`  - Schema Files Validated: ${schemaValidation.length}`);
    console.log(`  - Sitemap Entries Planned: ${sitemapUpdates.length}`);
    console.log(`  - Performance Monitoring: Configured`);
    
    console.log('\n🚀 Next Steps (SEO Safe):');
    console.log('  1. Create remaining city pages (no duplicates)');
    console.log('  2. Add routing for new city pages only');
    console.log('  3. Update navigation with new cities');
    console.log('  4. Submit sitemap updates for new pages only');
    console.log('  5. Monitor performance without affecting existing rankings');

  } catch (error) {
    console.error('❌ SEO-Safe Automation Error:', error);
    process.exit(1);
  }
}

// Export for use in other scripts
module.exports = {
  newCities,
  existingCities,
  generateCityFAQs,
  validateSchemaMarkup,
  updateSitemap,
  generatePerformanceConfig,
  checkExistingCoverage
};

// Execute if run directly
if (require.main === module) {
  runEnhancedAutomation();
}
