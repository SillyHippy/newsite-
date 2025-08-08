#!/usr/bin/env node

/**
 * Local Testing Script for Just Legal Solutions
 * Run this before deploying to Cloudflare Pages
 * Tests all critical functionality and SEO endpoints
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';

// Critical pages to test
const criticalPages = [
  { path: '/', name: 'Homepage' },
  { path: '/services/', name: 'Services Page' },
  { path: '/pricing/', name: 'Pricing Page' },
  { path: '/card/calendar/', name: 'Calendar Booking' },
  { path: '/tulsa-process-server/', name: 'Main Process Server Page' },
  { path: '/process-server-tulsa/', name: 'Alt Process Server Page' },
  { path: '/courier-services-tulsa/', name: 'Courier Services Page' }
];

// SEO pages to test (sample)
const seoPages = [
  { path: '/seo/process-server-broken-arrow/', name: 'Broken Arrow SEO' },
  { path: '/seo/process-server-jenks/', name: 'Jenks SEO' },
  { path: '/seo/process-server-bixby/', name: 'Bixby SEO' },
  { path: '/seo/process-server-lawyers/', name: 'Lawyers Industry SEO' },
  { path: '/seo/debt-collection-process-server/', name: 'Debt Collection SEO' },
  { path: '/seo/same-day-process-serving-tulsa/', name: 'Same Day Service SEO' }
];

// API endpoints to test
const apiEndpoints = [
  { path: '/api/sitemap/', name: 'Dynamic Sitemap' },
  { path: '/api/seo-monitor/', name: 'SEO Monitor' },
  { path: '/api/robots/', name: 'Robots.txt' }
];

async function testUrl(url, name) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const req = http.get(url, (res) => {
      const responseTime = Date.now() - startTime;
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          name,
          url,
          status: res.statusCode,
          responseTime,
          contentLength: data.length,
          success: res.statusCode === 200,
          hasContent: data.length > 0
        });
      });
    });
    
    req.on('error', (error) => {
      resolve({
        name,
        url,
        status: 'ERROR',
        error: error.message,
        success: false
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        name,
        url,
        status: 'TIMEOUT',
        success: false
      });
    });
  });
}

async function runTests() {
  console.log('🚀 Starting Local Testing for Just Legal Solutions');
  console.log('=' .repeat(60));
  
  const results = {
    critical: [],
    seo: [],
    api: [],
    errors: []
  };
  
  // Test critical pages
  console.log('\n📄 Testing Critical Pages...');
  for (const page of criticalPages) {
    const result = await testUrl(`${BASE_URL}${page.path}`, page.name);
    results.critical.push(result);
    
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.name}: ${result.status} (${result.responseTime || 'N/A'}ms)`);
    
    if (!result.success) {
      results.errors.push(`CRITICAL: ${result.name} failed - ${result.status}`);
    }
  }
  
  // Test SEO pages
  console.log('\n🔍 Testing SEO Pages...');
  for (const page of seoPages) {
    const result = await testUrl(`${BASE_URL}${page.path}`, page.name);
    results.seo.push(result);
    
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.name}: ${result.status} (${result.responseTime || 'N/A'}ms)`);
    
    if (!result.success) {
      results.errors.push(`SEO: ${result.name} failed - ${result.status}`);
    }
  }
  
  // Test API endpoints
  console.log('\n🔧 Testing API Endpoints...');
  for (const endpoint of apiEndpoints) {
    const result = await testUrl(`${BASE_URL}${endpoint.path}`, endpoint.name);
    results.api.push(result);
    
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.name}: ${result.status} (${result.responseTime || 'N/A'}ms)`);
    
    if (!result.success) {
      results.errors.push(`API: ${result.name} failed - ${result.status}`);
    }
  }
  
  // Generate summary
  console.log('\n📊 Test Summary');
  console.log('=' .repeat(60));
  
  const totalTests = results.critical.length + results.seo.length + results.api.length;
  const passedTests = results.critical.filter(r => r.success).length + 
                     results.seo.filter(r => r.success).length + 
                     results.api.filter(r => r.success).length;
  
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedTests}`);
  console.log(`Failed: ${totalTests - passedTests}`);
  console.log(`Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors Found:');
    results.errors.forEach(error => console.log(`  - ${error}`));
  }
  
  // Deployment readiness check
  console.log('\n🚢 Deployment Readiness Check');
  console.log('=' .repeat(60));
  
  const criticalPassed = results.critical.every(r => r.success);
  const apiPassed = results.api.every(r => r.success);
  const seoMostlyWorking = results.seo.filter(r => r.success).length / results.seo.length >= 0.9;
  
  console.log(`Critical Pages: ${criticalPassed ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`API Endpoints: ${apiPassed ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`SEO Pages (90%+): ${seoMostlyWorking ? '✅ PASS' : '❌ FAIL'}`);
  
  const readyToDeploy = criticalPassed && apiPassed && seoMostlyWorking;
  
  console.log('\n' + '=' .repeat(60));
  if (readyToDeploy) {
    console.log('🎉 READY TO DEPLOY TO CLOUDFLARE PAGES! 🎉');
    console.log('All critical systems are functioning properly.');
  } else {
    console.log('⚠️  NOT READY FOR DEPLOYMENT');
    console.log('Please fix the errors above before deploying.');
  }
  console.log('=' .repeat(60));
  
  return readyToDeploy;
}

// Run the tests
runTests().catch(console.error);
