#!/usr/bin/env node

/**
 * Manual SEO Update Script
 * Run this locally to test SEO automation before GitHub Actions runs
 */

const fs = require('fs');
const path = require('path');

const today = new Date();
const currentDate = today.toLocaleDateString();
const isoDate = today.toISOString().split('T')[0];

console.log(`🚀 Starting manual SEO automation for ${currentDate}`);

// 1. Update sitemap with current date
const sitemapPath = 'public/sitemap.xml';
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${isoDate}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap updated with current date');
}

// 2. Update meta descriptions in all pages
function updateMetaDescriptions(dir) {
  const items = fs.readdirSync(dir);
  let updatedCount = 0;
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      updatedCount += updateMetaDescriptions(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = false;
      
      // Update meta descriptions with current date
      const newContent = content.replace(
        /(description:\s*['"`].*?Updated:?\s*)[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}(.*?['"`])/g,
        (match, prefix, suffix) => {
          updated = true;
          return `${prefix}${currentDate}${suffix}`;
        }
      );
      
      // Update "Last updated" text in content
      const finalContent = newContent.replace(
        /(Last updated:?\s*)[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g,
        (match, prefix) => {
          updated = true;
          return `${prefix}${currentDate}`;
        }
      );
      
      if (updated) {
        fs.writeFileSync(fullPath, finalContent);
        console.log(`✅ Updated: ${fullPath}`);
        updatedCount++;
      }
    }
  });
  
  return updatedCount;
}

// Update all app directory files
const updatedFiles = updateMetaDescriptions('app');

// 3. Daily content rotation
const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

const tips = [
  "Professional process servers ensure legal compliance and accurate documentation.",
  "Same-day service available for urgent legal documents throughout Tulsa County.",
  "Licensed professionals handle sensitive legal documents with complete confidentiality.",
  "GPS tracking and photo documentation ensure transparent service delivery.",
  "Certified process servers provide reliable court document delivery services.",
  "Rush service options available for time-sensitive legal proceedings.",
  "Experienced servers navigate complex legal requirements professionally."
];

const dailyTip = tips[dayOfYear % tips.length];

console.log(`🎉 SEO automation completed successfully!`);
console.log(`📊 Summary:
- Files updated: ${updatedFiles}
- Sitemap timestamp: ${isoDate}
- Meta description dates: ${currentDate}
- Daily tip (Day ${dayOfYear}): "${dailyTip}"
- Next automation: Tomorrow at 9 AM UTC
`);

console.log(`🚀 Ready to commit and deploy to trigger fresh SEO signals!`);
