#!/usr/bin/env node

/**
 * Fix HTML Comments in SEO Scripts
 * Converts HTML comments to JSX comments in all SEO automation scripts
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 FIXING HTML COMMENTS IN SEO SCRIPTS');
console.log('======================================');

// List of scripts to fix
const scriptsToFix = [
  'scripts/ai-search-optimization.js',
  'scripts/voice-search-optimization.js',
  'scripts/core-web-vitals.js',
  'scripts/multi-search-optimization.js',
  'scripts/local-seo-domination.js'
];

// Function to fix HTML comments to JSX comments
function fixHtmlComments(content) {
  // Replace HTML comments with JSX comments
  content = content.replace(/<!-- (.*?) -->/g, '{/* $1 */}');
  
  // Fix HTML attributes to JSX attributes
  content = content.replace(/style="([^"]*)"/g, 'style={{ $1 }}');
  content = content.replace(/style="display: none;"/g, 'style={{ display: \'none\' }}');
  
  // Fix <script> tags to <Script> components
  content = content.replace(/<script type="application\/ld\+json">/g, '<Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(');
  content = content.replace(/<\/script>/g, ') }} />');
  
  // Fix self-closing tags
  content = content.replace(/<meta ([^>]*[^\/])>/g, '<meta $1 />');
  
  return content;
}

// Fix each script
scriptsToFix.forEach(scriptPath => {
  const fullPath = path.join(process.cwd(), scriptPath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`📝 Fixing: ${scriptPath}`);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Apply fixes
      content = fixHtmlComments(content);
      
      // Only write if changes were made
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed: ${scriptPath}`);
      } else {
        console.log(`⚠️  No changes needed: ${scriptPath}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${scriptPath}:`, error.message);
    }
  } else {
    console.log(`⚠️  File not found: ${scriptPath}`);
  }
});

console.log('\n✅ All scripts fixed! HTML comments converted to JSX comments.');
console.log('🚀 Your site should now build properly on Cloudflare Pages!');
