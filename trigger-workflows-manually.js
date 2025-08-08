#!/usr/bin/env node

/**
 * Manual GitHub Workflow Trigger
 * Manually triggers all 5 new SEO workflows on GitHub
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 MANUAL GITHUB WORKFLOW TRIGGER');
console.log('==================================');
console.log('Manually triggering all 5 new SEO workflows...\n');

// The 5 new workflows to trigger
const workflows = [
  {
    name: '🤖 AI Search Engine Optimization',
    file: 'ai-search-optimization.yml',
    description: 'ChatGPT, Claude, Perplexity optimization'
  },
  {
    name: '🎙️ Voice Search Domination',
    file: 'voice-search-domination.yml',
    description: 'Alexa, Google Assistant, Siri, Cortana'
  },
  {
    name: '⚡ Core Web Vitals Monitoring',
    file: 'core-web-vitals.yml',
    description: 'Performance optimization and monitoring'
  },
  {
    name: '🌐 Multi-Search Engine Domination',
    file: 'multi-search-optimization.yml',
    description: 'Google, Bing, DuckDuckGo, Brave, Yandex'
  },
  {
    name: '📍 Local SEO Domination',
    file: 'local-seo-domination.yml',
    description: 'Google My Business, Local Citations'
  }
];

// Function to trigger workflow
function triggerWorkflow(workflow) {
  console.log(`\n🔄 Triggering: ${workflow.name}`);
  console.log(`📄 File: .github/workflows/${workflow.file}`);
  console.log(`📝 Description: ${workflow.description}`);
  
  try {
    // Create a small change to trigger the workflow
    const triggerFile = `public/workflow-triggers/${workflow.file.replace('.yml', '')}-trigger.txt`;
    const timestamp = new Date().toISOString();
    
    // Ensure directory exists
    const triggerDir = 'public/workflow-triggers';
    if (!fs.existsSync(triggerDir)) {
      fs.mkdirSync(triggerDir, { recursive: true });
    }
    
    // Create trigger file
    fs.writeFileSync(triggerFile, `Workflow triggered: ${timestamp}\nWorkflow: ${workflow.name}\nDescription: ${workflow.description}\n`);
    
    console.log(`✅ Trigger file created: ${triggerFile}`);
    
    // Add, commit, and push to trigger workflow
    execSync(`git add "${triggerFile}"`, { stdio: 'inherit' });
    execSync(`git commit -m "🚀 Trigger ${workflow.name} - ${timestamp}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('✅ Pushed to GitHub - Workflow should start automatically');
    
    return true;
  } catch (error) {
    console.error(`❌ Error triggering ${workflow.name}:`, error.message);
    return false;
  }
}

// Main execution
async function triggerAllWorkflows() {
  console.log('🎯 Starting manual workflow triggers...\n');
  
  let successful = 0;
  let total = workflows.length;
  
  for (let i = 0; i < workflows.length; i++) {
    const workflow = workflows[i];
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`TRIGGERING ${i + 1}/${total}: ${workflow.name}`);
    console.log('='.repeat(60));
    
    if (triggerWorkflow(workflow)) {
      successful++;
      console.log(`✅ SUCCESS: ${workflow.name} triggered`);
    } else {
      console.log(`❌ FAILED: ${workflow.name} not triggered`);
    }
    
    // Wait 5 seconds between triggers to avoid rate limiting
    if (i < workflows.length - 1) {
      console.log('\n⏳ Waiting 5 seconds before next trigger...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  
  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 TRIGGER SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully triggered: ${successful}/${total} workflows`);
  console.log(`🎯 Success rate: ${Math.round((successful / total) * 100)}%`);
  
  console.log('\n🔍 NEXT STEPS:');
  console.log('1. Check GitHub Actions: https://github.com/SillyHippy/BOLT-SITE/actions');
  console.log('2. Look for the 5 new workflows running');
  console.log('3. Monitor for any failures or authentication issues');
  console.log('4. Watch for automated SEO improvements!');
  
  console.log('\n🎉 All new SEO workflows have been manually triggered!');
  console.log('Your advanced SEO domination system is now actively running on GitHub!');
}

// Run the triggers
triggerAllWorkflows().catch(console.error);
