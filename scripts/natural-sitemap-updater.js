
#!/usr/bin/env node

/**
 * Natural Sitemap Updater - SEO Safe
 * Updates sitemap only when genuine content changes occur
 */

const fs = require('fs');
const { SafeSEOProtocol } = require('./safe-seo-protocol.js');

class NaturalSitemapUpdater {
  constructor() {
    this.sitemapPath = 'public/sitemap.xml';
    this.lastUpdatePath = 'sitemap-natural-log.json';
    this.protocol = new SafeSEOProtocol();
  }

  // Check if sitemap update is warranted
  shouldUpdateSitemap() {
    const lastUpdate = this.getLastUpdate();
    const daysSinceUpdate = this.daysSince(lastUpdate);
    const hasNewContent = this.hasGenuineContentChanges();
    
    // Only update if there's genuine new content AND it's been at least a week
    return hasNewContent && daysSinceUpdate >= 7;
  }

  // Check for genuine content changes
  hasGenuineContentChanges() {
    const contentLog = 'seo-safe-log.json';
    if (!fs.existsSync(contentLog)) return false;
    
    const log = JSON.parse(fs.readFileSync(contentLog, 'utf8'));
    const lastSitemapUpdate = this.getLastUpdate();
    
    // Check if any pages were created since last sitemap update
    const newPages = log.pagesCreated?.filter(page => 
      new Date(page.date) > lastSitemapUpdate
    ) || [];
    
    return newPages.length > 0;
  }

  // Get last sitemap update date
  getLastUpdate() {
    if (fs.existsSync(this.lastUpdatePath)) {
      const log = JSON.parse(fs.readFileSync(this.lastUpdatePath, 'utf8'));
      return new Date(log.lastUpdate || '2024-01-01');
    }
    return new Date('2024-01-01');
  }

  // Calculate days since date
  daysSince(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Update sitemap with new content only
  updateSitemapNaturally() {
    if (!this.shouldUpdateSitemap()) {
      console.log('⏳ No sitemap update needed - maintaining natural patterns');
      return false;
    }

    console.log('🗺️ Updating sitemap with genuine new content...');
    
    // Get list of new pages since last update
    const newPages = this.getNewPagesSinceLastUpdate();
    
    if (newPages.length === 0) {
      console.log('ℹ️ No new pages to add to sitemap');
      return false;
    }

    // Read current sitemap
    let sitemap = fs.readFileSync(this.sitemapPath, 'utf8');
    
    // Add new pages with proper timestamps
    const currentDate = new Date().toISOString().split('T')[0];
    
    newPages.forEach(page => {
      const newUrl = `  <url>
    <loc>https://justlegalsolutions.org/seo/process-server-${page.city.toLowerCase().replace(/\s+/g, '-')}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      
      sitemap = sitemap.replace('</urlset>', newUrl + '\n</urlset>');
    });

    // Write updated sitemap
    fs.writeFileSync(this.sitemapPath, sitemap);
    
    // Update log
    this.updateLog(newPages);
    
    console.log(`✅ Added ${newPages.length} new pages to sitemap naturally`);
    return true;
  }

  // Get new pages since last sitemap update
  getNewPagesSinceLastUpdate() {
    const contentLog = 'seo-safe-log.json';
    if (!fs.existsSync(contentLog)) return [];
    
    const log = JSON.parse(fs.readFileSync(contentLog, 'utf8'));
    const lastUpdate = this.getLastUpdate();
    
    return log.pagesCreated?.filter(page => 
      new Date(page.date) > lastUpdate
    ) || [];
  }

  // Update sitemap log
  updateLog(newPages) {
    const log = {
      lastUpdate: new Date().toISOString(),
      pagesAdded: newPages,
      updateReason: 'genuine_content_addition'
    };
    
    fs.writeFileSync(this.lastUpdatePath, JSON.stringify(log, null, 2));
  }
}

// Main execution
function runNaturalSitemapUpdate() {
  const updater = new NaturalSitemapUpdater();
  return updater.updateSitemapNaturally();
}

// Export for use in other scripts
module.exports = { NaturalSitemapUpdater };

// Run if called directly
if (require.main === module) {
  runNaturalSitemapUpdate();
}
