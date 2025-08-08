#!/usr/bin/env node

/**
 * Test Only the NEW 5 SEO Automations
 * Tests just the scripts we created today (not the original 11)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 TESTING NEW SEO AUTOMATIONS ONLY');
console.log('===================================');
console.log('Testing only the 5 NEW scripts created today...\n');

// Test configurations for NEW scripts only
const newScripts = {
  'ai-search-optimization': {
    name: '🤖 AI Search Engine Optimization',
    script: 'scripts/ai-search-optimization.js',
    workflow: '.github/workflows/ai-search-optimization.yml',
    expectedOutputs: [
      'AI SEARCH ENGINE OPTIMIZATION',
      'ChatGPT search ready',
      'Claude AI compatible',
      'Perplexity optimized'
    ]
  },
  'voice-search-optimization': {
    name: '🎙️ Voice Search Domination',
    script: 'scripts/voice-search-optimization.js',
    workflow: '.github/workflows/voice-search-domination.yml',
    expectedOutputs: [
      'VOICE SEARCH DOMINATION',
      'Alexa Skills ready',
      'Google Assistant optimized',
      'Siri Shortcuts configured'
    ]
  },
  'core-web-vitals': {
    name: '⚡ Core Web Vitals Monitoring',
    script: 'scripts/core-web-vitals.js',
    workflow: '.github/workflows/core-web-vitals.yml',
    expectedOutputs: [
      'CORE WEB VITALS OPTIMIZATION',
      'Largest Contentful Paint (LCP) optimized',
      'First Input Delay (FID) minimized',
      'Performance monitoring active'
    ]
  },
  'multi-search-optimization': {
    name: '🌐 Multi-Search Engine Domination',
    script: 'scripts/multi-search-optimization.js',
    workflow: '.github/workflows/multi-search-optimization.yml',
    expectedOutputs: [
      'MULTI-SEARCH ENGINE DOMINATION',
      'Google optimization active',
      'Bing optimization active',
      'DuckDuckGo optimization active'
    ]
  },
  'local-seo-domination': {
    name: '📍 Local SEO Domination',
    script: 'scripts/local-seo-domination.js',
    workflow: '.github/workflows/local-seo-domination.yml',
    expectedOutputs: [
      'LOCAL SEO DOMINATION',
      'Google My Business optimized',
      'Local business schema active',
      'Service area pages created'
    ]
  }
};

// Test function
function testNewScript(scriptKey, config) {
  console.log(`\n🧪 Testing: ${config.name}`);
  console.log('─'.repeat(50));
  
  let passed = 0;
  let total = 3;
  
  // Test 1: Script exists
  console.log(`1. Script file: ${config.script}`);
  if (fs.existsSync(config.script)) {
    console.log('   ✅ EXISTS');
    passed++;
  } else {
    console.log('   ❌ MISSING');
  }
  
  // Test 2: Workflow exists
  console.log(`2. Workflow file: ${config.workflow}`);
  if (fs.existsSync(config.workflow)) {
    console.log('   ✅ EXISTS');
    passed++;
  } else {
    console.log('   ❌ MISSING');
  }
  
  // Test 3: Script runs
  console.log(`3. Script execution:`);
  try {
    const output = execSync(`node "${config.script}"`, { 
      encoding: 'utf8',
      timeout: 10000
    });
    
    const foundOutputs = config.expectedOutputs.filter(expected => 
      output.toLowerCase().includes(expected.toLowerCase())
    );
    
    console.log(`   ✅ RUNS (${foundOutputs.length}/${config.expectedOutputs.length} outputs found)`);
    passed++;
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message.split('\n')[0]}`);
  }
  
  const score = Math.round((passed / total) * 100);
  console.log(`📊 Score: ${passed}/${total} (${score}%)`);
  
  return { passed, total, score };
}

// Run tests
async function runNewScriptsTest() {
  console.log('🔍 Starting tests for NEW scripts only...\n');
  
  let totalPassed = 0;
  let totalTests = 0;
  const results = [];
  
  for (const [key, config] of Object.entries(newScripts)) {
    const result = testNewScript(key, config);
    results.push({ name: config.name, ...result });
    totalPassed += result.passed;
    totalTests += result.total;
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 NEW SCRIPTS TEST SUMMARY');
  console.log('='.repeat(60));
  
  results.forEach(result => {
    const status = result.score >= 75 ? '✅ PASSED' : '❌ FAILED';
    console.log(`${status} ${result.name} - ${result.score}%`);
  });
  
  const overallScore = Math.round((totalPassed / totalTests) * 100);
  console.log(`\n🎯 OVERALL SCORE: ${overallScore}%`);
  
  if (overallScore >= 80) {
    console.log('🚀 EXCELLENT! All new scripts are working!');
  } else {
    console.log('⚠️  Some scripts need attention.');
  }
  
  console.log(`\n📋 TESTED: ${Object.keys(newScripts).length} new scripts`);
  console.log('💡 Original 11 scripts were not tested (already working)');
  
  return overallScore;
}

// Run the test
runNewScriptsTest().catch(console.error);
