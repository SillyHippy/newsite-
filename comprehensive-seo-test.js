#!/usr/bin/env node

/**
 * COMPREHENSIVE SEO Testing - ALL 60+ Pages
 * Use this for initial deployment verification and complete SEO audit
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';

async function runFullSEOTest() {
  console.log('🚀 COMPREHENSIVE SEO TEST - ALL 60+ PAGES');
  console.log('=' .repeat(70));
  console.log('⚠️  This may take several minutes to complete...\n');
  
  console.log('📡 Calling comprehensive SEO monitor...');
  
  const startTime = Date.now();
  
  try {
    const response = await fetch(`${BASE_URL}/api/seo-monitor-full/?local=true&full=true`);
    const data = await response.json();
    
    const endTime = Date.now();
    const totalTime = Math.round((endTime - startTime) / 1000);
    
    console.log(`✅ Test completed in ${totalTime} seconds\n`);
    
    // Display summary
    console.log('📊 COMPREHENSIVE RESULTS SUMMARY');
    console.log('=' .repeat(70));
    console.log(`Total Pages Tested: ${data.summary.totalPagesChecked}`);
    console.log(`Working Pages: ${data.summary.workingPages}`);
    console.log(`Failed Pages: ${data.summary.failedPages}`);
    console.log(`Health Score: ${data.summary.healthScore}%`);
    console.log(`Image Health Score: ${data.summary.imageHealthScore}%`);
    console.log(`Overall Status: ${data.summary.status}`);
    console.log(`Monitoring Mode: ${data.summary.monitoringMode}`);
    
    // Show errors if any
    if (data.errors && data.errors.length > 0) {
      console.log('\n❌ ISSUES FOUND:');
      data.errors.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    } else {
      console.log('\n✅ NO ISSUES FOUND - ALL PAGES PERFECT!');
    }
    
    // Page type breakdown
    console.log('\n📈 PAGE TYPE BREAKDOWN:');
    const criticalPages = data.pageResults.filter(p => p.critical);
    const seoPages = data.pageResults.filter(p => !p.critical);
    
    console.log(`Critical Business Pages: ${criticalPages.filter(p => p.ok).length}/${criticalPages.length} working`);
    console.log(`SEO Location/Industry Pages: ${seoPages.filter(p => p.ok).length}/${seoPages.length} working`);
    
    // Image status
    const pagesWithImages = data.pageResults.filter(p => p.imageStatus);
    const workingImages = pagesWithImages.filter(p => p.imageStatus && p.imageStatus.working !== false);
    console.log(`Pages with Images: ${workingImages.length}/${pagesWithImages.length} working`);
    
    // Deployment readiness
    console.log('\n🚢 DEPLOYMENT READINESS CHECK');
    console.log('=' .repeat(70));
    
    const criticalAllWorking = criticalPages.every(p => p.ok);
    const overallHealthy = data.summary.healthScore >= 95;
    const imageHealthy = data.summary.imageHealthScore >= 90;
    const noMajorErrors = data.summary.criticalErrors === 0;
    
    console.log(`Critical Pages: ${criticalAllWorking ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall Health (95%+): ${overallHealthy ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Image Health (90%+): ${imageHealthy ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`No Critical Errors: ${noMajorErrors ? '✅ PASS' : '❌ FAIL'}`);
    
    const deploymentReady = criticalAllWorking && overallHealthy && imageHealthy && noMajorErrors;
    
    console.log('\n' + '=' .repeat(70));
    if (deploymentReady) {
      console.log('🎉 READY FOR CLOUDFLARE PAGES DEPLOYMENT! 🎉');
      console.log('Your complete SEO empire of 60+ pages is fully functional!');
      console.log('\n🌟 SEO Benefits Ready:');
      console.log('• Complete Tulsa metro area coverage');
      console.log('• Industry-specific targeting'); 
      console.log('• Professional images on all major pages');
      console.log('• Dynamic sitemap with all 60+ pages');
      console.log('• Automated monitoring and health checking');
    } else {
      console.log('⚠️  ISSUES NEED ATTENTION BEFORE DEPLOYMENT');
      console.log('Please review and fix the errors above.');
    }
    console.log('=' .repeat(70));
    
    return deploymentReady;
    
  } catch (error) {
    console.error('❌ Failed to run comprehensive test:', error.message);
    return false;
  }
}

// Run the comprehensive test
runFullSEOTest().catch(console.error);
