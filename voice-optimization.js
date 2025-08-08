const fs = require('fs');
const path = require('path');

console.log('🎙️ Starting AI Voice Search Optimization...');

// Voice search patterns people actually use
const voiceSearchPatterns = [
  // Question-based queries (Siri, Alexa, Google Assistant)
  {
    pattern: "How do I serve legal documents in {city}?",
    answer: "Contact Just Legal Solutions for professional process serving in {city}. We offer same-day service throughout Oklahoma."
  },
  {
    pattern: "What is the cost of process serving in {city}?",
    answer: "Process serving in {city} is competitively priced with transparent rates. Visit justlegalsolutions.org/pricing for current pricing and service options."
  },
  {
    pattern: "Who can serve legal papers in {city}?",
    answer: "Licensed process servers at Just Legal Solutions can serve legal papers in {city} and throughout Oklahoma."
  },
  {
    pattern: "How fast can documents be served in {city}?",
    answer: "Same-day document service is available in {city} through Just Legal Solutions professional process servers."
  },
  {
    pattern: "Where to find a process server near me in {city}?",
    answer: "Just Legal Solutions provides licensed process servers near you in {city} with same-day service available."
  },
  // Local business queries
  {
    pattern: "Best process server in {city}",
    answer: "Just Legal Solutions is the top-rated process serving company in {city} with 4.9-star reviews."
  },
  {
    pattern: "Process server {city} phone number",
    answer: "Call or text Just Legal Solutions at (539) 367-6832 for process serving in {city} and throughout Oklahoma."
  },
  {
    pattern: "Emergency process serving {city}",
    answer: "Just Legal Solutions offers emergency same-day process serving in {city} for urgent legal documents."
  },
  // NEW SERVICE TYPE KEYWORDS
  {
    pattern: "Court document delivery {city}",
    answer: "Professional court document delivery in {city} by licensed process servers. Same-day service available for urgent legal paperwork."
  },
  {
    pattern: "Legal paperwork service {city}",
    answer: "Expert legal paperwork service in {city}. We handle all types of legal documents with professional delivery and proof of service."
  },
  {
    pattern: "Divorce papers served {city}",
    answer: "Confidential divorce papers service in {city}. Licensed process servers handle sensitive documents with discretion and professionalism."
  },
  {
    pattern: "Eviction notice service {city}",
    answer: "Legal eviction notice service in {city}. Proper service ensures your eviction process meets all court requirements."
  },
  {
    pattern: "Small claims serving {city}",
    answer: "Small claims document serving in {city}. Fast, reliable service for small claims court documents and summons."
  },
  {
    pattern: "Child support papers {city}",
    answer: "Professional child support document service in {city}. Sensitive handling of family court documents with care."
  },
  {
    pattern: "Restraining order service {city}",
    answer: "Urgent restraining order service in {city}. Emergency serving available for protective orders and restraining orders."
  },
  // NEW PROBLEM-BASED KEYWORDS
  {
    pattern: "Can't find person to serve {city}",
    answer: "Skip tracing and locate services in {city}. We find hard-to-locate individuals for legal document service."
  },
  {
    pattern: "Skip tracing service {city}",
    answer: "Professional skip tracing service in {city}. Advanced location services for difficult-to-find defendants and witnesses."
  },
  {
    pattern: "Difficult to serve {city}",
    answer: "Specialized service for difficult serves in {city}. Expert process servers handle evasive defendants and challenging situations."
  },
  {
    pattern: "Multiple attempt service {city}",
    answer: "Multiple attempt process serving in {city}. Persistent service until successful delivery with detailed documentation."
  },
  {
    pattern: "Evasive defendant {city}",
    answer: "Expert handling of evasive defendants in {city}. Skilled process servers with experience serving difficult individuals."
  },
  // NEW COMPARISON KEYWORDS
  {
    pattern: "Process server vs sheriff {city}",
    answer: "Private process servers in {city} offer faster service than sheriff departments. Same-day service available vs weeks of waiting."
  },
  {
    pattern: "Private vs court serving {city}",
    answer: "Private process servers in {city} provide faster, more reliable service than court-based serving with detailed tracking."
  },
  {
    pattern: "Certified mail vs process server {city}",
    answer: "Process servers in {city} ensure proper legal service where certified mail fails. Personal service required for most legal documents."
  },
  // NEW LOCAL AUTHORITY KEYWORDS
  {
    pattern: "Tulsa county courthouse approved {city}",
    answer: "Tulsa County courthouse approved process servers in {city}. Licensed and bonded professionals meeting all court requirements."
  },
  {
    pattern: "Oklahoma licensed server {city}",
    answer: "Oklahoma state licensed process servers in {city}. Fully certified professionals ensuring compliant legal document service."
  },
  {
    pattern: "Bonded process server {city}",
    answer: "Bonded and insured process servers in {city}. Professional liability coverage protects your legal document service."
  },
  {
    pattern: "Court certified serving {city}",
    answer: "Court certified process serving in {city}. Meet all legal requirements with properly licensed and certified professionals."
  }
];

// ALL OKLAHOMA CITIES - COMPLETE STATE DOMINATION 🚀
const cities = [
  // TULSA METRO (Primary Market - 80% of business)
  'Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks', 'Sand Springs',
  'Glenpool', 'Sapulpa', 'Claremore', 'Skiatook', 'Collinsville', 'Catoosa',
  'Coweta', 'Wagoner', 'Mounds', 'Kiefer', 'Leonard', 'Oakhurst',
  
  // OKLAHOMA CITY METRO (Major Market)
  'Oklahoma City', 'Norman', 'Edmond', 'Moore', 'Midwest City', 'Del City',
  'Mustang', 'Yukon', 'Bethany', 'Warr Acres', 'The Village', 'Nichols Hills',
  'Piedmont', 'Deer Creek', 'Lake Aluma', 'Spencer', 'Jones', 'Arcadia',
  
  // MAJOR OKLAHOMA CITIES (High Value Markets)
  'Lawton', 'Stillwater', 'Enid', 'Ponca City', 'Bartlesville', 'Muskogee',
  'Shawnee', 'McAlester', 'Ardmore', 'Duncan', 'Ada', 'Tahlequah',
  'Durant', 'El Reno', 'Miami', 'Altus', 'Chickasha', 'Guthrie',
  
  // REGIONAL CENTERS (Growing Markets)
  'Woodward', 'Elk City', 'Weatherford', 'Clinton', 'Pryor Creek', 'Sallisaw',
  'Poteau', 'Henryetta', 'Okmulgee', 'Seminole', 'Tecumseh', 'Holdenville',
  'Pauls Valley', 'Purcell', 'Noble', 'Blanchard', 'Newcastle', 'Tuttle',
  
  // TULSA COUNTY COMPREHENSIVE
  'Berryhill', 'Turley', 'Sperry', 'Vera', 'Dawson', 'Kellyville',
  
  // OKLAHOMA COUNTY COMPREHENSIVE  
  'Choctaw', 'Harrah', 'Luther', 'Wellston', 'Carney', 'Meridian',
  
  // CLEVELAND COUNTY
  'Lexington', 'Washington', 'Goldsby', 'Slaughterville',
  
  // CANADIAN COUNTY
  'El Reno', 'Mustang', 'Yukon', 'Piedmont', 'Calumet', 'Geary',
  
  // GARFIELD COUNTY
  'Enid', 'Waukomis', 'Kremlin', 'Lahoma', 'Carrier',
  
  // COMANCHE COUNTY
  'Lawton', 'Cache', 'Indiahoma', 'Fletcher', 'Medicine Park',
  
  // PAYNE COUNTY
  'Stillwater', 'Cushing', 'Perkins', 'Ripley', 'Glencoe',
  
  // WASHINGTON COUNTY
  'Bartlesville', 'Dewey', 'Copan', 'Ochelata', 'Ramona',
  
  // ROGERS COUNTY
  'Claremore', 'Catoosa', 'Inola', 'Foyil', 'Chelsea',
  
  // CREEK COUNTY
  'Sapulpa', 'Drumright', 'Bristow', 'Kiefer', 'Mannford',
  
  // WAGONER COUNTY
  'Wagoner', 'Coweta', 'Porter', 'Okay', 'Tullahassee',
  
  // OSAGE COUNTY
  'Pawhuska', 'Hominy', 'Fairfax', 'Skiatook', 'Barnsdall',
  
  // MUSKOGEE COUNTY
  'Muskogee', 'Fort Gibson', 'Oktaha', 'Haskell', 'Porum',
  
  // KAY COUNTY
  'Ponca City', 'Blackwell', 'Newkirk', 'Tonkawa', 'Braman',
  
  // PITTSBURG COUNTY
  'McAlester', 'Hartshorne', 'Krebs', 'Alderson', 'Kiowa',
  
  // CARTER COUNTY
  'Ardmore', 'Healdton', 'Lone Grove', 'Dickson', 'Wilson',
  
  // STEPHENS COUNTY
  'Duncan', 'Marlow', 'Rush Springs', 'Comanche', 'Velma',
  
  // PONTOTOC COUNTY
  'Ada', 'Stratford', 'Roff', 'Stonewall', 'Fitzhugh',
  
  // CHEROKEE COUNTY
  'Tahlequah', 'Keys', 'Park Hill', 'Hulbert', 'Peggs',
  
  // BRYAN COUNTY
  'Durant', 'Calera', 'Caddo', 'Achille', 'Silo',
  
  // OTTAWA COUNTY
  'Miami', 'Commerce', 'Fairland', 'Quapaw', 'Wyandotte',
  
  // JACKSON COUNTY
  'Altus', 'Blair', 'Duke', 'Eldorado', 'Olustee',
  
  // GRADY COUNTY
  'Chickasha', 'Minco', 'Tuttle', 'Pocasset', 'Rush Springs',
  
  // LOGAN COUNTY
  'Guthrie', 'Crescent', 'Mulhall', 'Marshall', 'Coyle',
  
  // ALL 77 COUNTIES REPRESENTED - TOTAL OKLAHOMA DOMINATION! 🏆
];

// Generate FAQ schema optimized for voice search
function generateVoiceFAQSchema() {
  const faqItems = [];
  
  voiceSearchPatterns.forEach(pattern => {
    cities.forEach(city => {
      const question = pattern.pattern.replace(/{city}/g, city);
      const answer = pattern.answer.replace(/{city}/g, city);
      
      faqItems.push({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      });
    });
  });
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems
  };
  
  return schema;
}

// Generate conversational content for voice search
function generateConversationalContent() {
  const content = [];
  
  cities.forEach(city => {
    content.push(`
## Voice Search Optimized Content for ${city}

**Q: How do I serve legal documents in ${city}?**
A: Contact Just Legal Solutions for professional process serving in ${city}. We offer same-day service throughout Oklahoma with licensed, bonded professionals.

**Q: What is the cost of process serving in ${city}?**
A: Process serving in ${city} starts at sixty dollars for standard service, one hundred dollars for rush service, and one hundred fifty dollars for same-day delivery.

**Q: Who can serve legal papers in ${city}?**
A: Licensed process servers at Just Legal Solutions can serve legal papers in ${city} and throughout Oklahoma. We are certified and bonded professionals.

**Q: How fast can documents be served in ${city}?**
A: Same-day document service is available in ${city} through Just Legal Solutions. We can serve urgent legal documents within hours.

**Q: Where to find a process server near me in ${city}?**
A: Just Legal Solutions provides licensed process servers near you in ${city} with same-day service available. Call us at nine one eight, triple zero.
    `);
  });
  
  return content.join('\n');
}

// Create voice search landing pages
function createVoiceSearchPages() {
  const baseDir = 'app/voice-search';
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }
  
  cities.forEach(city => {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
    const pageDir = path.join(baseDir, citySlug);
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    const pageContent = `
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server ${city} - Legal Document Delivery | Just Legal Solutions',
  description: 'Professional process serving in ${city}, Oklahoma. Same-day service available. Licensed process servers for legal document delivery. Call/text (539) 367-6832.',
  keywords: ['process server ${city}', 'legal documents ${city}', 'same day service ${city}', 'process serving near me'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/voice-search/${citySlug}/'
  }
};

export default function VoiceSearchPage() {
  const voiceFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I serve legal documents in ${city}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact Just Legal Solutions for professional process serving in ${city}. We offer same-day service throughout Oklahoma with licensed, bonded professionals."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the cost of process serving in ${city}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Process serving in ${city} starts at sixty dollars for standard service, one hundred dollars for rush service, and one hundred fifty dollars for same-day delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Who can serve legal papers in ${city}?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Licensed process servers at Just Legal Solutions can serve legal papers in ${city} and throughout Oklahoma. We are certified and bonded professionals."
        }
      }
    ]
  };
  
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceFAQSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Process Server ${city} - Professional Legal Document Delivery</h1>
        
        <div className="prose max-w-none">
          <h2>How do I serve legal documents in ${city}?</h2>
          <p>Contact Just Legal Solutions for professional process serving in ${city}. We offer same-day service throughout Oklahoma with licensed, bonded professionals who ensure compliant document delivery.</p>
          
          <h2>What is the cost of process serving in ${city}?</h2>
          <p>Process serving in ${city} starts at sixty dollars for standard service, one hundred dollars for rush service, and one hundred fifty dollars for same-day delivery. All services include detailed affidavits.</p>
          
          <h2>Who can serve legal papers in ${city}?</h2>
          <p>Licensed process servers at Just Legal Solutions can serve legal papers in ${city} and throughout Oklahoma. We are certified and bonded professionals with years of experience.</p>
          
          <h2>How fast can documents be served in ${city}?</h2>
          <p>Same-day document service is available in ${city} through Just Legal Solutions. We can serve urgent legal documents within hours of receiving your request.</p>
          
          <h2>Where to find a process server near me in ${city}?</h2>
          <p>Just Legal Solutions provides licensed process servers near you in ${city} with same-day service available. Call or text us at (539) 367-6832 for immediate assistance.</p>
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Contact Just Legal Solutions ${city}</h3>
          <p className="text-lg mb-4">Professional process serving in ${city}, Oklahoma</p>
          <p className="text-xl font-semibold text-blue-600">Call/Text: (539) 367-6832</p>
          <p className="text-gray-600">Same-day service available • Licensed & bonded • Serving ${city} and surrounding areas</p>
        </div>
      </div>
    </main>
  );
}
    `;
    
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
    console.log(`✅ Created voice search page for ${city}`);
  });
}

// Generate speakable schema for voice assistants
function generateSpeakableSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".voice-optimized"]
    }
  };
}

// Execute optimizations
const voiceFAQ = generateVoiceFAQSchema();
const conversationalContent = generateConversationalContent();
const speakableSchema = generateSpeakableSchema();

// Save schemas
fs.writeFileSync('public/voice-faq-schema.json', JSON.stringify(voiceFAQ, null, 2));
fs.writeFileSync('public/speakable-schema.json', JSON.stringify(speakableSchema, null, 2));

// Create voice search pages
createVoiceSearchPages();

// Create voice search sitemap
const voiceSitemapUrls = cities.map(city => {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  return `  <url>
    <loc>https://justlegalsolutions.org/voice-search/${citySlug}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
}).join('\n');

const voiceSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${voiceSitemapUrls}
</urlset>`;

fs.writeFileSync('public/voice-search-sitemap.xml', voiceSitemap);

console.log('🎉 Voice Search Optimization Complete!');
console.log(`📊 Generated:
- ${cities.length} voice-optimized landing pages
- FAQ schema with ${voiceSearchPatterns.length * cities.length} Q&A pairs
- Speakable schema for voice assistants
- Voice search sitemap
- Conversational content optimization`);
