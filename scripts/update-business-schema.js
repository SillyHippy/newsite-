const fs = require('fs');
const path = require('path');

// This script updates your LocalBusiness schema with the latest data.

async function updateBusinessSchema() {
  console.log('🏢 Starting business schema update...');
  
  // 1. Define the path to your master business information file.
  const businessInfoSource = path.join(process.cwd(), 'google-business-profile.json');
  
  // 2. Define the path to where the final, generated schema should be saved.
  const businessSchemaDestination = path.join(process.cwd(), 'public', 'fresh-business-schema.json');

  if (fs.existsSync(businessInfoSource)) {
    const info = JSON.parse(fs.readFileSync(businessInfoSource, 'utf8'));
    
    // 3. TODO: Construct the full LocalBusiness JSON-LD schema using the data from your source file.
    // This should match the structure expected by Google.
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService", // Or "LocalBusiness"
      "name": info.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": info.address,
        "addressLocality": info.city,
        "addressRegion": info.state,
        "postalCode": info.zip,
        "addressCountry": "US"
      },
      "telephone": info.phone,
      "url": "https://justlegalsolutions.org"
      // Add other properties like "openingHours", "geo", "priceRange" etc.
    };
    
    // 4. Write the fresh schema to the destination file.
    fs.writeFileSync(businessSchemaDestination, JSON.stringify(schema, null, 2));
    console.log(`✅ Business schema updated and saved to ${path.basename(businessSchemaDestination)}.`);
    
  } else {
    console.error('❌ Master business info file not found!');
  }
  
  console.log('👍 Business schema update complete.');
}

updateBusinessSchema();
