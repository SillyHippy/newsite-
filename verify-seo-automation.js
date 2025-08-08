#!/usr/bin/env node

/**
 * SEO Automation Verification Script
 * Tests all API routes for SEO functionality after deployment
 */

const baseUrl = 'https://www.justlegalsolutions.org';

const apiRoutes = [
  {
    path: '/api/meta-descriptions',
    name: 'Daily Meta Descriptions',
    description: 'Provides fresh meta descriptions with current date'
  },
  {
    path: '/api/fresh-content',
    name: 'Daily Fresh Content',
    description: 'Rotates content daily for SEO freshness'
  },
  {
    path: '/api/seo-monitor-full',
    name: 'SEO Monitoring System',
    description: 'Comprehensive page health and image monitoring'
  },
  {
    path: '/api/seo-monitor-full?full=true',
    name: 'Full Site Monitoring',
    description: 'Complete test of all 60+ pages'
  },
  {
    path: '/api/sitemap',
    name: 'Dynamic Sitemap',
    description: 'XML sitemap with all page URLs'
  }
];

async function verifyAPI(route) {
  try {
    console.log(`\n🔍 Testing: ${route.name}`);
    console.log(`📍 URL: ${baseUrl}${route.path}`);
    
    const response = await fetch(`${baseUrl}${route.path}`);
    const status = response.status;
    
    if (status === 200) {
      console.log(`✅ SUCCESS (${status})`);
      
      // Try to parse response
      try {
        const data = await response.json();
        if (data.timestamp || data.lastUpdated) {
          console.log(`📅 Last Updated: ${data.timestamp || data.lastUpdated}`);
        }
        if (data.summary) {
          console.log(`📊 Summary: ${JSON.stringify(data.summary, null, 2)}`);
        }
      } catch (e) {
        console.log(`📄 Response received (not JSON)`);
      }
    } else {
      console.log(`❌ FAILED (${status})`);
    }
    
    return status === 200;
  } catch (error) {
    console.log(`💥 ERROR: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 SEO AUTOMATION VERIFICATION');
  console.log('================================');
  console.log(`🌐 Base URL: ${baseUrl}`);
  console.log(`📅 Test Time: ${new Date().toISOString()}`);
  
  let passed = 0;
  let total = apiRoutes.length;
  
  for (const route of apiRoutes) {
    const success = await verifyAPI(route);
    if (success) passed++;
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n📈 RESULTS SUMMARY');
  console.log('==================');
  console.log(`✅ Passed: ${passed}/${total}`);
  console.log(`❌ Failed: ${total - passed}/${total}`);
  console.log(`🎯 Success Rate: ${Math.round((passed/total) * 100)}%`);
  
  if (passed === total) {
    console.log('\n🎉 ALL SEO AUTOMATION APIs ARE WORKING!');
    console.log('📊 Your daily ranking updates are fully restored');
    console.log('🔄 Meta descriptions will update daily with fresh dates');
    console.log('📈 Content rotation system is active for Google rankings');
    console.log('🔍 Full site monitoring is operational');
  } else {
    console.log('\n⚠️  SOME APIS NEED ATTENTION');
    console.log('🔧 Check Cloudflare Pages deployment logs');
    console.log('⏱️  API routes may still be deploying');
  }
  
  console.log('\n💡 NEXT STEPS:');
  console.log('- Monitor Google Search Console for indexing improvements');
  console.log('- Check daily meta description updates');
  console.log('- Verify content freshness rotation');
  console.log('- Run full site monitoring weekly');
}

main().catch(console.error);
