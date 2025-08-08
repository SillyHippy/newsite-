const fs = require('fs');

const supremacyPages = [
  'platform-supremacy',
  'competitor-analysis', 
  'ai-optimization',
  'voice-search-domination',
  'oklahoma-coverage',
  'same-day-service',
  'emergency-process-server',
  'technology-advantage',
  'customer-supremacy',
  'pricing-transparency'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

supremacyPages.forEach(page => {
  sitemap += `
  <url>
    <loc>https://justlegalsolutions.org/${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
});

sitemap += `
</urlset>`;

fs.writeFileSync('public/supremacy-sitemap.xml', sitemap);
console.log('🗺️ Supremacy sitemap generated');
