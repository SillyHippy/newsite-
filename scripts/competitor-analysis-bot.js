#!/usr/bin/env node

/**
 * Competitor Analysis Bot
 * Monitors competitor rankings, keywords, and SEO strategies
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🔍 COMPETITOR ANALYSIS BOT');
console.log('==========================');

// Competitor targets
const competitors = [
  {
    name: 'TulsaProcessServers.com',
    url: 'https://tulsaprocessservers.com',
    keywords: ['process server tulsa', 'legal document delivery', 'tulsa county process serving']
  },
  {
    name: 'OklahomaProcessServing.com',
    url: 'https://oklahomaprocessserving.com',
    keywords: ['oklahoma process server', 'legal papers served', 'court document delivery']
  },
  {
    name: 'LegalProcessServers.net',
    url: 'https://legalprocessservers.net',
    keywords: ['professional process server', 'legal document service', 'process serving company']
  },
  {
    name: 'ProcessServerDirectory.com',
    url: 'https://processserverdirectory.com',
    keywords: ['find process server', 'hire process server', 'local process serving']
  },
  {
    name: 'ServeNow.com',
    url: 'https://servenow.com',
    keywords: ['same day process serving', 'emergency process server', 'rush legal service']
  }
];

// Target keywords to monitor
const targetKeywords = [
  'process server tulsa',
  'tulsa process server',
  'legal document delivery tulsa',
  'process serving tulsa county',
  'tulsa county process server',
  'same day process serving tulsa',
  'emergency process server tulsa',
  'professional process server oklahoma',
  'court document delivery tulsa',
  'legal papers served tulsa',
  'process serving company tulsa',
  'hire process server tulsa',
  'find process server tulsa',
  'rush process serving tulsa',
  'legal service tulsa oklahoma'
];

// SEO factors to analyze
const seoFactors = {
  titleTag: { weight: 0.25, description: 'Title tag optimization' },
  metaDescription: { weight: 0.15, description: 'Meta description quality' },
  h1Tag: { weight: 0.20, description: 'H1 tag optimization' },
  keywords: { weight: 0.20, description: 'Keyword density and placement' },
  contentLength: { weight: 0.10, description: 'Content length and quality' },
  schema: { weight: 0.10, description: 'Schema markup implementation' }
};

// Analyze competitor webpage
async function analyzeCompetitorPage(competitor) {
  return new Promise((resolve) => {
    const urlObj = new URL(competitor.url);
    
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const analysis = analyzePageContent(data, competitor);
        resolve(analysis);
      });
    });

    req.on('error', (error) => {
      console.log(`❌ Error analyzing ${competitor.name}:`, error.message);
      resolve({
        name: competitor.name,
        url: competitor.url,
        error: error.message,
        score: 0
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        name: competitor.name,
        url: competitor.url,
        error: 'Timeout',
        score: 0
      });
    });

    req.end();
  });
}

// Analyze page content for SEO factors
function analyzePageContent(html, competitor) {
  const analysis = {
    name: competitor.name,
    url: competitor.url,
    timestamp: new Date().toISOString(),
    factors: {},
    score: 0,
    recommendations: []
  };

  // Title tag analysis
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1];
    const titleScore = analyzeTitleTag(title, competitor.keywords);
    analysis.factors.titleTag = {
      content: title,
      score: titleScore,
      length: title.length
    };
  }

  // Meta description analysis
  const metaMatch = html.match(/<meta[^>]*name=['"]*description['"]*[^>]*content=['"]*([^'"]*)['"]*[^>]*>/i);
  if (metaMatch) {
    const metaDesc = metaMatch[1];
    const metaScore = analyzeMetaDescription(metaDesc, competitor.keywords);
    analysis.factors.metaDescription = {
      content: metaDesc,
      score: metaScore,
      length: metaDesc.length
    };
  }

  // H1 tag analysis
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match) {
    const h1 = h1Match[1];
    const h1Score = analyzeH1Tag(h1, competitor.keywords);
    analysis.factors.h1Tag = {
      content: h1,
      score: h1Score
    };
  }

  // Keyword analysis
  const keywordScore = analyzeKeywords(html, competitor.keywords);
  analysis.factors.keywords = {
    score: keywordScore,
    density: calculateKeywordDensity(html, competitor.keywords)
  };

  // Content length analysis
  const textContent = html.replace(/<[^>]*>/g, '').trim();
  const contentScore = analyzeContentLength(textContent);
  analysis.factors.contentLength = {
    score: contentScore,
    wordCount: textContent.split(/\s+/).length
  };

  // Schema markup analysis
  const schemaScore = analyzeSchemaMarkup(html);
  analysis.factors.schema = {
    score: schemaScore,
    hasSchema: html.includes('application/ld+json') || html.includes('schema.org')
  };

  // Calculate overall score
  analysis.score = calculateOverallScore(analysis.factors);

  // Generate recommendations
  analysis.recommendations = generateRecommendations(analysis.factors);

  return analysis;
}

// Analyze title tag
function analyzeTitleTag(title, keywords) {
  let score = 0;
  const titleLower = title.toLowerCase();
  
  // Check for primary keywords
  keywords.forEach(keyword => {
    if (titleLower.includes(keyword.toLowerCase())) {
      score += 20;
    }
  });
  
  // Length optimization
  if (title.length >= 30 && title.length <= 60) {
    score += 20;
  }
  
  // Location mentioned
  if (titleLower.includes('tulsa') || titleLower.includes('oklahoma')) {
    score += 10;
  }
  
  return Math.min(score, 100);
}

// Analyze meta description
function analyzeMetaDescription(metaDesc, keywords) {
  let score = 0;
  const metaLower = metaDesc.toLowerCase();
  
  // Check for keywords
  keywords.forEach(keyword => {
    if (metaLower.includes(keyword.toLowerCase())) {
      score += 15;
    }
  });
  
  // Length optimization
  if (metaDesc.length >= 120 && metaDesc.length <= 160) {
    score += 20;
  }
  
  // Call to action
  if (metaLower.includes('call') || metaLower.includes('contact') || metaLower.includes('get')) {
    score += 15;
  }
  
  return Math.min(score, 100);
}

// Analyze H1 tag
function analyzeH1Tag(h1, keywords) {
  let score = 0;
  const h1Lower = h1.toLowerCase();
  
  // Check for keywords
  keywords.forEach(keyword => {
    if (h1Lower.includes(keyword.toLowerCase())) {
      score += 30;
    }
  });
  
  // Length optimization
  if (h1.length >= 20 && h1.length <= 70) {
    score += 20;
  }
  
  return Math.min(score, 100);
}

// Analyze keywords
function analyzeKeywords(html, keywords) {
  let score = 0;
  const textContent = html.replace(/<[^>]*>/g, '').toLowerCase();
  
  keywords.forEach(keyword => {
    const keywordLower = keyword.toLowerCase();
    const matches = (textContent.match(new RegExp(keywordLower, 'g')) || []).length;
    
    if (matches > 0) {
      score += Math.min(matches * 5, 25);
    }
  });
  
  return Math.min(score, 100);
}

// Calculate keyword density
function calculateKeywordDensity(html, keywords) {
  const textContent = html.replace(/<[^>]*>/g, '').toLowerCase();
  const totalWords = textContent.split(/\s+/).length;
  const densities = {};
  
  keywords.forEach(keyword => {
    const keywordLower = keyword.toLowerCase();
    const matches = (textContent.match(new RegExp(keywordLower, 'g')) || []).length;
    densities[keyword] = ((matches / totalWords) * 100).toFixed(2);
  });
  
  return densities;
}

// Analyze content length
function analyzeContentLength(textContent) {
  const wordCount = textContent.split(/\s+/).length;
  
  if (wordCount >= 300 && wordCount <= 2000) {
    return 100;
  } else if (wordCount >= 200) {
    return 70;
  } else if (wordCount >= 100) {
    return 40;
  } else {
    return 10;
  }
}

// Analyze schema markup
function analyzeSchemaMarkup(html) {
  let score = 0;
  
  if (html.includes('application/ld+json')) {
    score += 50;
  }
  
  if (html.includes('schema.org')) {
    score += 30;
  }
  
  if (html.includes('LocalBusiness')) {
    score += 20;
  }
  
  return Math.min(score, 100);
}

// Calculate overall score
function calculateOverallScore(factors) {
  let totalScore = 0;
  
  Object.keys(seoFactors).forEach(factor => {
    if (factors[factor]) {
      totalScore += factors[factor].score * seoFactors[factor].weight;
    }
  });
  
  return Math.round(totalScore);
}

// Generate recommendations
function generateRecommendations(factors) {
  const recommendations = [];
  
  if (factors.titleTag && factors.titleTag.score < 80) {
    recommendations.push('Optimize title tag with primary keywords');
  }
  
  if (factors.metaDescription && factors.metaDescription.score < 70) {
    recommendations.push('Improve meta description with call-to-action');
  }
  
  if (factors.h1Tag && factors.h1Tag.score < 70) {
    recommendations.push('Optimize H1 tag with location and service keywords');
  }
  
  if (factors.keywords && factors.keywords.score < 60) {
    recommendations.push('Increase keyword density and placement');
  }
  
  if (factors.contentLength && factors.contentLength.score < 80) {
    recommendations.push('Expand content length to 300-2000 words');
  }
  
  if (factors.schema && factors.schema.score < 50) {
    recommendations.push('Implement structured data and schema markup');
  }
  
  return recommendations;
}

// Generate competitive analysis report
function generateCompetitiveReport(analyses) {
  const report = {
    timestamp: new Date().toISOString(),
    competitorCount: analyses.length,
    averageScore: 0,
    topCompetitor: null,
    weakestCompetitor: null,
    opportunities: [],
    threats: []
  };
  
  // Calculate averages and find top/weak competitors
  const validAnalyses = analyses.filter(a => !a.error);
  if (validAnalyses.length > 0) {
    report.averageScore = Math.round(
      validAnalyses.reduce((sum, a) => sum + a.score, 0) / validAnalyses.length
    );
    
    report.topCompetitor = validAnalyses.reduce((top, current) => 
      current.score > top.score ? current : top
    );
    
    report.weakestCompetitor = validAnalyses.reduce((weak, current) => 
      current.score < weak.score ? current : weak
    );
  }
  
  // Identify opportunities and threats
  validAnalyses.forEach(analysis => {
    if (analysis.score < 60) {
      report.opportunities.push(`${analysis.name} has weak SEO (${analysis.score}/100)`);
    } else if (analysis.score > 80) {
      report.threats.push(`${analysis.name} has strong SEO (${analysis.score}/100)`);
    }
  });
  
  return report;
}

// Save analysis results
function saveAnalysisResults(analyses, report) {
  const resultsDir = path.join(process.cwd(), 'seo-analysis');
  
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }
  
  // Save detailed analyses
  const timestamp = new Date().toISOString().split('T')[0];
  const analysesPath = path.join(resultsDir, `competitor-analysis-${timestamp}.json`);
  fs.writeFileSync(analysesPath, JSON.stringify(analyses, null, 2));
  
  // Save summary report
  const reportPath = path.join(resultsDir, `competitive-report-${timestamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`📊 Analysis saved to ${analysesPath}`);
  console.log(`📋 Report saved to ${reportPath}`);
}

// Main execution
async function runCompetitorAnalysis() {
  console.log('🚀 Starting competitor analysis...');
  
  const analyses = [];
  
  // Analyze each competitor
  for (const competitor of competitors) {
    console.log(`🔍 Analyzing ${competitor.name}...`);
    const analysis = await analyzeCompetitorPage(competitor);
    analyses.push(analysis);
    
    // Add delay between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Generate competitive report
  const report = generateCompetitiveReport(analyses);
  
  // Save results
  saveAnalysisResults(analyses, report);
  
  console.log('\n🔍 COMPETITOR ANALYSIS COMPLETE');
  console.log('================================');
  console.log(`📊 Competitors analyzed: ${analyses.length}`);
  console.log(`📈 Average competitor score: ${report.averageScore}/100`);
  console.log(`🏆 Top competitor: ${report.topCompetitor?.name} (${report.topCompetitor?.score}/100)`);
  console.log(`📉 Weakest competitor: ${report.weakestCompetitor?.name} (${report.weakestCompetitor?.score}/100)`);
  console.log(`🎯 Opportunities found: ${report.opportunities.length}`);
  console.log(`⚠️  Threats identified: ${report.threats.length}`);
  
  return true;
}

// Run the analysis
runCompetitorAnalysis().catch(console.error);
