#!/usr/bin/env node

/**
 * Advanced SEO Automation Test Suite
 * Tests all new SEO automations to ensure they're working correctly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 ADVANCED SEO AUTOMATION TEST SUITE');
console.log('=====================================');
console.log('Testing 6 new SEO automations...\n');

// Test configurations
const testConfigs = {
  'ai-search-optimization': {
    name: '🤖 AI Search Engine Optimization',
    script: 'scripts/ai-search-optimization.js',
    workflow: '.github/workflows/ai-search-optimization.yml',
    schedule: 'Every 2 hours',
    expectedOutputs: [
      'AI SEARCH ENGINE OPTIMIZATION',
      'ChatGPT search ready',
      'Claude AI compatible',
      'Perplexity optimized',
      'Voice search enhanced'
    ]
  },
  'voice-search-optimization': {
    name: '🎙️ Voice Search Domination',
    script: 'scripts/voice-search-optimization.js',
    workflow: '.github/workflows/voice-search-domination.yml',
    schedule: 'Every 4 hours',
    expectedOutputs: [
      'VOICE SEARCH DOMINATION',
      'Alexa Skills ready',
      'Google Assistant optimized',
      'Siri Shortcuts configured',
      'Natural language patterns active'
    ]
  },
  'core-web-vitals': {
    name: '⚡ Core Web Vitals Monitoring',
    script: 'scripts/core-web-vitals.js',
    workflow: '.github/workflows/core-web-vitals.yml',
    schedule: 'Every 6 hours',
    expectedOutputs: [
      'CORE WEB VITALS OPTIMIZATION',
      'Largest Contentful Paint (LCP) optimized',
      'First Input Delay (FID) minimized',
      'Cumulative Layout Shift (CLS) prevented',
      'Performance monitoring active'
    ]
  },
  'multi-search-optimization': {
    name: '🌐 Multi-Search Engine Domination',
    script: 'scripts/multi-search-optimization.js',
    workflow: '.github/workflows/multi-search-optimization.yml',
    schedule: 'Every 8 hours',
    expectedOutputs: [
      'MULTI-SEARCH ENGINE DOMINATION',
      'Google optimization active',
      'Bing optimization active',
      'DuckDuckGo optimization active',
      'Brave Search optimization active'
    ]
  },
  'local-seo-domination': {
    name: '📍 Local SEO Domination',
    script: 'scripts/local-seo-domination.js',
    workflow: '.github/workflows/local-seo-domination.yml',
    schedule: 'Every 12 hours',
    expectedOutputs: [
      'LOCAL SEO DOMINATION',
      'Google My Business optimized',
      'Local business schema active',
      'Service area pages created',
      'Geo-targeting enhanced'
    ]
  }
};

// Test results tracking
const testResults = {
  passed: [],
  failed: [],
  warnings: []
};

// Utility functions
function checkFileExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.existsSync(fullPath);
}

function runScript(scriptPath) {
  try {
    const fullPath = path.join(process.cwd(), scriptPath);
    const output = execSync(`node "${fullPath}"`, { 
      encoding: 'utf8',
      timeout: 30000 // 30 second timeout
    });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || '' };
  }
}

function testWorkflowFile(workflowPath) {
  if (!checkFileExists(workflowPath)) {
    return { valid: false, reason: 'Workflow file not found' };
  }
  
  try {
    const content = fs.readFileSync(path.join(process.cwd(), workflowPath), 'utf8');
    
    // Check for required workflow elements
    const requiredElements = ['name:', 'on:', 'jobs:', 'steps:', 'GITHUB_TOKEN'];
    const missing = requiredElements.filter(element => !content.includes(element));
    
    if (missing.length > 0) {
      return { valid: false, reason: `Missing elements: ${missing.join(', ')}` };
    }
    
    // Check for proper scheduling
    if (!content.includes('schedule:') && !content.includes('workflow_dispatch:')) {
      return { valid: false, reason: 'No schedule or manual trigger defined' };
    }
    
    return { valid: true };
  } catch (error) {
    return { valid: false, reason: error.message };
  }
}

function validateOutputs(output, expectedOutputs) {
  const found = expectedOutputs.filter(expected => 
    output.toLowerCase().includes(expected.toLowerCase())
  );
  
  return {
    foundCount: found.length,
    totalCount: expectedOutputs.length,
    found: found,
    missing: expectedOutputs.filter(expected => 
      !output.toLowerCase().includes(expected.toLowerCase())
    )
  };
}

// Main test function
async function runAutomationTests() {
  console.log('🔍 Starting automation tests...\n');
  
  for (const [key, config] of Object.entries(testConfigs)) {
    console.log(`\n📋 Testing: ${config.name}`);
    console.log(`Schedule: ${config.schedule}`);
    console.log('─'.repeat(50));
    
    let testsPassed = 0;
    let totalTests = 0;
    
    // Test 1: Check if script file exists
    totalTests++;
    console.log(`1. Checking script file: ${config.script}`);
    if (checkFileExists(config.script)) {
      console.log('   ✅ Script file exists');
      testsPassed++;
    } else {
      console.log('   ❌ Script file missing');
      testResults.failed.push(`${config.name}: Script file missing`);
    }
    
    // Test 2: Check if workflow file exists and is valid
    totalTests++;
    console.log(`2. Validating workflow: ${config.workflow}`);
    const workflowTest = testWorkflowFile(config.workflow);
    if (workflowTest.valid) {
      console.log('   ✅ Workflow file valid');
      testsPassed++;
    } else {
      console.log(`   ❌ Workflow invalid: ${workflowTest.reason}`);
      testResults.failed.push(`${config.name}: Workflow invalid - ${workflowTest.reason}`);
    }
    
    // Test 3: Run the script and validate output
    totalTests++;
    console.log(`3. Running script and validating output...`);
    const scriptResult = runScript(config.script);
    
    if (scriptResult.success) {
      const outputValidation = validateOutputs(scriptResult.output, config.expectedOutputs);
      
      if (outputValidation.foundCount === outputValidation.totalCount) {
        console.log('   ✅ Script executed successfully with expected output');
        testsPassed++;
      } else {
        console.log(`   ⚠️  Script executed but missing some expected outputs`);
        console.log(`   Found: ${outputValidation.foundCount}/${outputValidation.totalCount}`);
        if (outputValidation.missing.length > 0) {
          console.log(`   Missing: ${outputValidation.missing.join(', ')}`);
        }
        testResults.warnings.push(`${config.name}: Missing outputs - ${outputValidation.missing.join(', ')}`);
        testsPassed += 0.5; // Partial credit
      }
    } else {
      console.log(`   ❌ Script execution failed: ${scriptResult.error}`);
      testResults.failed.push(`${config.name}: Script execution failed - ${scriptResult.error}`);
    }
    
    // Test 4: Check for generated files/components
    totalTests++;
    console.log(`4. Checking for generated components...`);
    const possibleComponents = [
      `components/${key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, '')}Optimization.tsx`,
      `components/${key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, '')}Monitor.tsx`,
      `components/VoiceSearchOptimization.tsx`,
      `components/PerformanceMonitor.tsx`
    ];
    
    let componentFound = false;
    for (const component of possibleComponents) {
      if (checkFileExists(component)) {
        console.log(`   ✅ Component found: ${component}`);
        componentFound = true;
        break;
      }
    }
    
    if (!componentFound) {
      console.log('   ⚠️  No components generated (may be normal for some automations)');
      testResults.warnings.push(`${config.name}: No components generated`);
    } else {
      testsPassed++;
    }
    
    // Calculate test score
    const score = Math.round((testsPassed / totalTests) * 100);
    console.log(`\n📊 Test Score: ${testsPassed}/${totalTests} (${score}%)`);
    
    if (score >= 75) {
      console.log('🎉 PASSED');
      testResults.passed.push(config.name);
    } else {
      console.log('❌ FAILED');
      testResults.failed.push(`${config.name}: Low test score (${score}%)`);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 ADVANCED SEO AUTOMATION TEST SUMMARY');
  console.log('='.repeat(60));
  
  console.log(`\n✅ PASSED (${testResults.passed.length}):`);
  testResults.passed.forEach(test => console.log(`   • ${test}`));
  
  if (testResults.warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${testResults.warnings.length}):`);
    testResults.warnings.forEach(warning => console.log(`   • ${warning}`));
  }
  
  if (testResults.failed.length > 0) {
    console.log(`\n❌ FAILED (${testResults.failed.length}):`);
    testResults.failed.forEach(failure => console.log(`   • ${failure}`));
  }
  
  // Overall result
  const overallScore = Math.round((testResults.passed.length / Object.keys(testConfigs).length) * 100);
  console.log(`\n🎯 OVERALL SUCCESS RATE: ${overallScore}%`);
  
  if (overallScore >= 80) {
    console.log('🚀 EXCELLENT! Your advanced SEO automations are ready for deployment!');
  } else if (overallScore >= 60) {
    console.log('👍 GOOD! Most automations are working. Review warnings and failures.');
  } else {
    console.log('⚠️  NEEDS ATTENTION! Several automations need fixes before deployment.');
  }
  
  // Next steps
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Review any failed tests and fix issues');
  console.log('2. Test individual workflows in GitHub Actions');
  console.log('3. Monitor automation execution logs');
  console.log('4. Verify SEO improvements in search results');
  
  console.log('\n🔄 TO RE-RUN THIS TEST:');
  console.log('   node scripts/test-advanced-seo-automations.js');
  
  return {
    passed: testResults.passed.length,
    failed: testResults.failed.length,
    warnings: testResults.warnings.length,
    total: Object.keys(testConfigs).length,
    score: overallScore
  };
}

// Run the tests
runAutomationTests().catch(error => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});
