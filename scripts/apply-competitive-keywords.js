#!/usr/bin/env node

/**
 * Apply Competitive Keywords to All Pages
 * Updates existing pages with "cheapest", "fastest", "best" keywords and $30 pricing
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 APPLYING COMPETITIVE KEYWORDS TO ALL PAGES');
console.log('==============================================');

// Competitive keyword mappings
const competitiveUpdates = {
  // Price leadership terms
  'affordable': 'cheapest',
  'competitive rates': 'cheapest rates in Oklahoma',
  'budget-friendly': 'most affordable',
  'cost-effective': 'best value',
  
  // Speed leadership terms
  'quick': 'fastest',
  'rapid': 'fastest',
  'expedited': 'fastest',
  'timely': 'fastest',
  
  // Quality leadership terms
  'professional': 'best',
  'reliable': 'top-rated',
  'experienced': 'expert',
  'skilled': 'premier'
};

// Price updates
const priceUpdates = {
  'starting at $35': 'starting at just $30',
  'starting at $40': 'starting at just $30', 
  'starting at $45': 'starting at just $30',
  'starting at $50': 'starting at just $30',
  'from $35': 'from just $30',
  'from $40': 'from just $30',
  'from $45': 'from just $30',
  '$35-$150': '$30-$150',
  '$40-$150': '$30-$150',
  '$45-$150': '$30-$150'
};

// Competitive enhancement phrases
const competitiveEnhancements = {
  'process server': 'cheapest process server',
  'process serving': 'fastest process serving',
  'legal document delivery': 'best legal document delivery',
  'court document service': 'premier court document service',
  'same day service': 'fastest same day service',
  'emergency service': 'fastest emergency service',
  'professional service': 'best professional service'
};

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changes = 0;
    
    // Apply competitive keyword updates
    Object.entries(competitiveUpdates).forEach(([old, replacement]) => {
      const regex = new RegExp(old, 'gi');
      if (content.match(regex)) {
        content = content.replace(regex, replacement);
        changes++;
      }
    });
    
    // Apply price updates
    Object.entries(priceUpdates).forEach(([old, replacement]) => {
      const regex = new RegExp(old, 'gi');
      if (content.match(regex)) {
        content = content.replace(regex, replacement);
        changes++;
      }
    });
    
    // Apply competitive enhancements (but only once per file to avoid overdoing it)
    Object.entries(competitiveEnhancements).forEach(([old, replacement]) => {
      const regex = new RegExp(`\\b${old}\\b`, 'i');
      if (content.match(regex) && changes < 3) { // Limit enhancements
        content = content.replace(regex, replacement);
        changes++;
      }
    });
    
    // Write updated content if changes were made
    if (changes > 0) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated ${filePath} (${changes} competitive improvements)`);
      return changes;
    }
    
    return 0;
  } catch (error) {
    console.log(`❌ Error updating ${filePath}: ${error.message}`);
    return 0;
  }
}

function updateAllPages() {
  console.log('🎯 Scanning for pages to update...\n');
  
  const directories = [
    'app',
    'src', 
    'components',
    'pages',
    'public',
    'scripts'
  ];
  
  let totalFiles = 0;
  let updatedFiles = 0;
  let totalChanges = 0;
  
  directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      console.log(`📁 Updating files in ${dir}/`);
      
      const files = getAllFiles(dirPath, ['.tsx', '.ts', '.js', '.json', '.md']);
      
      files.forEach(file => {
        totalFiles++;
        const changes = updateFile(file);
        if (changes > 0) {
          updatedFiles++;
          totalChanges += changes;
        }
      });
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 COMPETITIVE KEYWORD UPDATE SUMMARY');
  console.log('='.repeat(50));
  console.log(`📄 Total files scanned: ${totalFiles}`);
  console.log(`✅ Files updated: ${updatedFiles}`);
  console.log(`🚀 Total competitive improvements: ${totalChanges}`);
  console.log(`💰 Price updates applied: All $30 starting rate`);
  console.log(`⚡ Speed keywords applied: "fastest" positioning`);
  console.log(`🏆 Quality keywords applied: "best" positioning`);
  console.log(`💎 Value keywords applied: "cheapest" positioning`);
}

function getAllFiles(dirPath, extensions) {
  let results = [];
  
  try {
    const list = fs.readdirSync(dirPath);
    
    list.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        // Skip node_modules, .git, and other system directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
          results = results.concat(getAllFiles(filePath, extensions));
        }
      } else {
        // Include files with specified extensions
        if (extensions.some(ext => file.endsWith(ext))) {
          results.push(filePath);
        }
      }
    });
  } catch (error) {
    console.log(`Warning: Could not read directory ${dirPath}`);
  }
  
  return results;
}

// Add specific meta description updates for key pages
function updateMetaDescriptions() {
  console.log('\n🎯 Updating meta descriptions for competitive advantage...');
  
  const metaUpdates = [
    {
      file: 'app/layout.tsx',
      search: /description:\s*["'][^"']*["']/,
      replace: 'description: "Oklahoma\'s cheapest, fastest & best process server. Professional legal document delivery starting at just $30. Licensed, bonded & insured. Same-day service available."'
    },
    {
      file: 'app/page.tsx', 
      search: /description:\s*["'][^"']*["']/,
      replace: 'description: "Cheapest process server in Oklahoma! Starting at just $30. Fastest delivery, best service, highest success rate. Licensed & bonded throughout Tulsa County."'
    }
  ];
  
  metaUpdates.forEach(update => {
    const filePath = path.join(process.cwd(), update.file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.match(update.search)) {
        content = content.replace(update.search, update.replace);
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated meta description in ${update.file}`);
      }
    }
  });
}

// Run the competitive keyword application
updateAllPages();
updateMetaDescriptions();

console.log('\n🎉 COMPETITIVE KEYWORD APPLICATION COMPLETE!');
console.log('✅ All pages now emphasize your competitive advantages:');
console.log('   💰 CHEAPEST rates in Oklahoma starting at $30');
console.log('   ⚡ FASTEST delivery and service');
console.log('   🏆 BEST quality and success rate');
console.log('   💎 BEST VALUE combination');
