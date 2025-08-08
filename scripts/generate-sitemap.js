#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory to scan for static pages (Next.js export output or public)
const OUT_DIR = path.join(process.cwd(), 'out');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const DOMAIN = 'https://justlegalsolutions.org';

// Recursively get all .html files in a directory
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

// Convert file path to URL
function filePathToUrl(filePath, baseDir) {
  let rel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return DOMAIN + '/';
  if (rel.endsWith('/index.html')) rel = rel.replace(/\/index\.html$/, '/');
  else rel = rel.replace(/\.html$/, '');
  return DOMAIN + '/' + rel;
}

// Main sitemap generation
function generateSitemap() {
  const baseDir = fs.existsSync(OUT_DIR) ? OUT_DIR : PUBLIC_DIR;
  const files = getHtmlFiles(baseDir);
  const today = new Date().toISOString().split('T')[0];
  
  // Additional URLs to ensure they're included (all service areas with Google Maps)
  const additionalUrls = [
    // Service Areas (all 20 with Google Maps)
    '/service-areas',
    '/service-areas/tulsa',
    '/service-areas/broken-arrow',
    '/service-areas/owasso',
    '/service-areas/bixby',
    '/service-areas/jenks',
    '/service-areas/sand-springs',
    '/service-areas/glenpool',
    '/service-areas/collinsville',
    '/service-areas/skiatook',
    '/service-areas/claremore',
    '/service-areas/catoosa',
    '/service-areas/bartlesville',
    '/service-areas/sapulpa',
    '/service-areas/kellyville',
    '/service-areas/bristow',
    '/service-areas/wagoner',
    '/service-areas/coweta',
    '/service-areas/pawhuska',
    '/service-areas/pryor',
    
    // County Pages
    '/counties/tulsa-county',
    '/counties/rogers-county',
    '/counties/washington-county',
    '/counties/creek-county',
    '/counties/wagoner-county',
    '/counties/osage-county',
    '/counties/mayes-county',
    
    // Main Pages
    '/',
    '/contact',
    '/pricing',
    '/services',
    '/resources',
    '/payments',
    '/faq',
    '/why-choose-us',
    
    // Process Server Pages
    '/tulsa-process-server',
    '/process-server-tulsa',
    '/tulsa-county',
    '/urgent-process-server',
    '/weekend-emergency',
    '/courier-services-tulsa',
    '/ultimate-guide-process-serving-oklahoma',
    
    // SEO Pages
    '/seo/bixby-process-server',
    '/seo/broken-arrow-process-server',
    '/seo/eviction-notice-process-server',
    '/seo/glenpool-process-server',
    '/seo/jenks-process-server',
    '/seo/legal-posting-process-server',
    '/seo/owasso-process-server',
    '/seo/process-server-bixby',
    '/seo/process-server-broken-arrow',
    '/seo/sand-springs-process-server',
    '/seo/tulsa-process-server-comprehensive',
    '/seo/what-is-a-process-server',
    
    // Sitemap
    '/sitemap'
  ];
  
  // Get URLs from existing files
  const fileUrls = files.map(f => filePathToUrl(f, baseDir));
  
  // Combine and deduplicate URLs
  const allUrls = [...new Set([...fileUrls, ...additionalUrls.map(url => DOMAIN + url)])];
  
  const urlEntries = allUrls.map(url => {
    // Set priority based on URL importance
    let priority = '0.8';
    let changefreq = 'monthly';
    
    if (url === DOMAIN + '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (url.includes('/service-areas/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (url.includes('/counties/')) {
      priority = '0.85';
      changefreq = 'monthly';
    } else if (url.includes('/pricing') || url.includes('/contact')) {
      priority = '0.9';
      changefreq = 'weekly';
    }
    
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;
  
  // Always write to public for local dev
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  // Also write to out/ for deploys if it exists
  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap);
  }
  console.log(`🗺️ Sitemap generated with ${urlEntries.length} URLs.`);
}

generateSitemap();
