#!/usr/bin/env node

// GitHub Actions Usage Monitor
// Check your SEO automation efficiency

const https = require('https');

console.log('🔍 GitHub Actions Usage Monitor');
console.log('================================');

// Monitor your repository
const repoUrl = 'https://github.com/SillyHippy/BOLT-SITE';
console.log(`📊 Repository: ${repoUrl}`);
console.log(`⏰ Current Date: ${new Date().toLocaleDateString()}`);

// Calculate theoretical usage
const dailyMinutes = 8; // Average SEO automation runtime
const daysInMonth = 30;
const monthlyUsage = dailyMinutes * daysInMonth;
const freeLimit = 2000;
const usagePercentage = (monthlyUsage / freeLimit * 100).toFixed(1);

console.log('\n💰 Usage Estimation:');
console.log(`Daily Runtime: ~${dailyMinutes} minutes`);
console.log(`Monthly Usage: ~${monthlyUsage} minutes`);
console.log(`Free Limit: ${freeLimit} minutes`);
console.log(`Usage: ${usagePercentage}% of free tier`);

if (monthlyUsage < freeLimit) {
  console.log('✅ Status: WELL WITHIN FREE LIMITS');
} else {
  console.log('⚠️ Status: May exceed free tier');
}

console.log('\n🔗 Monitoring Links:');
console.log(`Actions Dashboard: ${repoUrl}/actions`);
console.log(`Billing Settings: https://github.com/settings/billing`);
console.log(`Usage Details: https://github.com/settings/billing/summary`);

console.log('\n🎯 Optimization Tips:');
console.log('- ✅ Daily scheduling (not hourly)');
console.log('- ✅ 15-minute timeout applied');
console.log('- ✅ Fast dependency installation');
console.log('- ✅ Path-filtered triggers');

console.log('\n📈 Cost Comparison:');
console.log('Manual SEO Services: $200-500/month');
console.log('GitHub Actions SEO: $0/month (free tier)');
console.log('💰 Savings: $200-500/month');

console.log('\n🚨 Alerts:');
if (usagePercentage > 75) {
  console.log('⚠️ Usage approaching 75% - consider optimization');
} else if (usagePercentage > 50) {
  console.log('📊 Usage moderate - monitor monthly');
} else {
  console.log('✅ Usage very low - no concerns');
}

console.log('\n🔄 Next Steps:');
console.log('1. Check actual usage in GitHub dashboard');
console.log('2. Monitor workflow run times');
console.log('3. Optimize if approaching limits');
console.log('4. Upgrade if needed ($4/month for 3,000 minutes)');

console.log('\n🎉 Your SEO automation is cost-effective and sustainable!');
