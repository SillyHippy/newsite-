const fs = require('fs');
const path = require('path');

// Update sitemap with new city pages
const updateSitemap = () => {
  const statusFile = path.join(process.cwd(), 'deployment-status.json');
  const sitemapFile = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(statusFile)) {
    console.log('No deployment status found');
    return;
  }

  const status = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
  
  // Read current sitemap
  let sitemap = fs.readFileSync(sitemapFile, 'utf8');
  
  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Add new city pages to sitemap
  status.deployed.forEach(city => {
    const cityUrl = `  <url>
    <loc>https://justlegalsolutions.org/seo/${city.slug}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    
    // Check if URL already exists in sitemap
    if (!sitemap.includes(city.slug)) {
      sitemap = sitemap.replace('</urlset>', cityUrl + '\n</urlset>');
      console.log(`✅ Added ${city.name} to sitemap`);
    }
  });

  // Write updated sitemap
  fs.writeFileSync(sitemapFile, sitemap);
  console.log(`🗺️ Sitemap updated with ${status.deployed.length} city pages`);
};

updateSitemap();
