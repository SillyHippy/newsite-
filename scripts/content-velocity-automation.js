#!/usr/bin/env node

/**
 * Content Velocity Automation
 * Generates daily blog posts and content targeting long-tail keywords
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 CONTENT VELOCITY AUTOMATION');
console.log('===============================');

// Content templates and topics
const contentTemplates = [
  {
    type: 'howto',
    title: 'How to {ACTION} in {LOCATION}',
    structure: ['introduction', 'steps', 'tips', 'conclusion'],
    keywords: ['how to', 'guide', 'step by step']
  },
  {
    type: 'informational',
    title: 'Everything You Need to Know About {TOPIC}',
    structure: ['overview', 'details', 'benefits', 'faq'],
    keywords: ['what is', 'complete guide', 'everything about']
  },
  {
    type: 'local',
    title: '{SERVICE} in {CITY}, {STATE}',
    structure: ['local-intro', 'service-details', 'local-benefits', 'contact'],
    keywords: ['local', 'near me', 'in city']
  },
  {
    type: 'comparison',
    title: '{OPTION1} vs {OPTION2}: Which is Better?',
    structure: ['comparison-intro', 'pros-cons', 'recommendation', 'conclusion'],
    keywords: ['vs', 'versus', 'comparison', 'which is better']
  }
];

// Topic database
const topicDatabase = {
  services: [
    'Process Serving',
    'Legal Document Delivery',
    'Court Paper Service',
    'Subpoena Delivery',
    'Summons Service',
    'Divorce Papers Service',
    'Eviction Notice Delivery',
    'Small Claims Service',
    'Bankruptcy Papers Service',
    'Restraining Order Service'
  ],
  actions: [
    'Serve Legal Papers',
    'File Court Documents',
    'Deliver Subpoenas',
    'Handle Divorce Papers',
    'Process Eviction Notices',
    'Serve Summons',
    'Deliver Legal Documents',
    'Handle Small Claims',
    'Process Bankruptcy Papers',
    'Serve Restraining Orders'
  ],
  locations: [
    'Tulsa, Oklahoma',
    'Broken Arrow, Oklahoma',
    'Sapulpa, Oklahoma',
    'Bixby, Oklahoma',
    'Owasso, Oklahoma',
    'Sand Springs, Oklahoma',
    'Jenks, Oklahoma',
    'Glenpool, Oklahoma',
    'Collinsville, Oklahoma',
    'Skiatook, Oklahoma'
  ],
  questions: [
    'What is the cost of process serving?',
    'How long does process serving take?',
    'What happens if someone refuses service?',
    'Can you serve papers on weekends?',
    'What is proof of service?',
    'How do you serve someone who is avoiding service?',
    'What documents require process serving?',
    'Is process serving required for all legal cases?',
    'What makes a valid service of process?',
    'How do you serve papers to a business?'
  ]
};

// Enhanced long-tail keywords with competitive modifiers
const longTailKeywords = [
  // Emergency + Competitive
  'cheapest emergency process server tulsa oklahoma',
  'fastest emergency legal document delivery tulsa',
  'best emergency process serving tulsa county',
  'same day legal document delivery tulsa cheapest',
  'weekend process serving tulsa county fastest',
  
  // Location + Competitive
  'cheapest professional process server broken arrow',
  'fastest court document delivery sapulpa oklahoma',
  'best process serving owasso tulsa county',
  'affordable legal papers served tulsa rush',
  'budget eviction notice delivery bixby oklahoma',
  
  // Service Type + Competitive
  'cheapest divorce papers service tulsa county',
  'fastest restraining order service tulsa oklahoma',
  'best small claims process server owasso',
  'affordable bankruptcy papers delivery sand springs',
  'budget summons service jenks oklahoma',
  'cheapest subpoena delivery glenpool tulsa',
  
  // Technology + Competitive
  'fastest gps tracked process serving tulsa',
  'best technology process server broken arrow',
  'cheapest online process serving tulsa county',
  'fastest digital proof process server oklahoma',
  
  // Professional + Competitive
  'cheapest licensed process server tulsa oklahoma',
  'fastest bonded process server broken arrow',
  'best insured legal document delivery tulsa',
  'affordable experienced process server owasso oklahoma',
  'budget certified process serving tulsa county',
  
  // Speed Variations
  'immediate process server tulsa oklahoma',
  'instant legal document delivery broken arrow',
  'rapid process serving sapulpa oklahoma',
  'quick court document service bixby',
  'urgent process server sand springs tulsa',
  
  // Value Propositions  
  'cheapest process serving cost tulsa county',
  'best value process server tulsa oklahoma',
  'affordable legal document delivery rates',
  'budget friendly process serving broken arrow',
  'lowest price process server sapulpa oklahoma'
];

// Content sections database
const contentSections = {
  introduction: [
    'Legal document delivery is a crucial part of the judicial process in {LOCATION}.',
    'When you need professional {SERVICE} in {LOCATION}, timing and reliability matter.',
    'Understanding the {TOPIC} process can save you time and ensure legal compliance.',
    'If you\'re facing {SITUATION} in {LOCATION}, proper legal procedure is essential.'
  ],
  steps: [
    'Contact a licensed process server in {LOCATION}',
    'Provide all necessary documentation and recipient information',
    'Choose your service timeline: same-day, rush, or standard',
    'Receive proof of service documentation upon completion',
    'File the affidavit of service with the appropriate court'
  ],
  tips: [
    'Always use a licensed and bonded process server',
    'Provide accurate address information for faster service',
    'Consider same-day service for urgent legal matters',
    'Keep copies of all documents for your records',
    'Verify service requirements with your attorney'
  ],
  benefits: [
    'Professional and discrete service',
    'Legal compliance and proper documentation',
    'Fast and reliable delivery',
    'Licensed, bonded, and insured protection',
    'Experienced handling of difficult serves'
  ],
  faq: [
    {
      question: 'How much does {SERVICE} cost in {LOCATION}?',
      answer: 'Costs vary based on service type and urgency. Contact Just Legal Solutions at (539) 367-6832 for accurate pricing.'
    },
    {
      question: 'How long does {SERVICE} take?',
      answer: 'We offer same-day, rush (48-hour), and standard (5-7 day) service options to meet your timeline needs.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide {SERVICE} throughout Tulsa County and surrounding areas including all major cities.'
    }
  ]
};

// Generate blog post content
function generateBlogPost(template, topic) {
  const today = new Date();
  const dateString = today.toISOString().split('T')[0];
  
  // Select random elements
  const service = topicDatabase.services[Math.floor(Math.random() * topicDatabase.services.length)];
  const action = topicDatabase.actions[Math.floor(Math.random() * topicDatabase.actions.length)];
  const location = topicDatabase.locations[Math.floor(Math.random() * topicDatabase.locations.length)];
  const keyword = longTailKeywords[Math.floor(Math.random() * longTailKeywords.length)];
  
  // Generate title
  let title = template.title
    .replace('{SERVICE}', service)
    .replace('{ACTION}', action)
    .replace('{LOCATION}', location.split(',')[0])
    .replace('{TOPIC}', topic || service)
    .replace('{CITY}', location.split(',')[0])
    .replace('{STATE}', location.split(',')[1]?.trim() || 'Oklahoma');
  
  // Generate content sections
  const content = {
    title: title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    date: dateString,
    template: template.type,
    targetKeyword: keyword,
    sections: {}
  };
  
  template.structure.forEach(section => {
    content.sections[section] = generateSectionContent(section, {
      service,
      action,
      location,
      topic: topic || service,
      keyword
    });
  });
  
  return content;
}

// Generate section content
function generateSectionContent(sectionType, variables) {
  const { service, action, location, topic, keyword } = variables;
  
  switch (sectionType) {
    case 'introduction':
      const intro = contentSections.introduction[Math.floor(Math.random() * contentSections.introduction.length)];
      return intro
        .replace('{SERVICE}', service)
        .replace('{LOCATION}', location)
        .replace('{TOPIC}', topic)
        .replace('{SITUATION}', `legal matters requiring ${service.toLowerCase()}`);
    
    case 'steps':
      return contentSections.steps.map(step => 
        step.replace('{LOCATION}', location)
      );
    
    case 'tips':
      return contentSections.tips;
    
    case 'benefits':
      return contentSections.benefits;
    
    case 'faq':
      return contentSections.faq.map(faq => ({
        question: faq.question.replace('{SERVICE}', service).replace('{LOCATION}', location),
        answer: faq.answer.replace('{SERVICE}', service).replace('{LOCATION}', location)
      }));
    
    case 'overview':
      return `${service} in ${location} requires professional handling and attention to detail. Our experienced team ensures that all legal documents are delivered according to Oklahoma state law and court requirements.`;
    
    case 'details':
      return `The ${service.toLowerCase()} process involves several important steps. From initial contact to final proof of service, we handle every aspect professionally and efficiently. Our licensed process servers understand the legal requirements and ensure proper service every time.`;
    
    case 'local-intro':
      return `Residents and businesses in ${location} trust Just Legal Solutions for reliable ${service.toLowerCase()}. Our local expertise and understanding of the area ensure fast and effective service delivery.`;
    
    case 'service-details':
      return `Our ${service.toLowerCase()} includes: document review, recipient location, professional service attempt, detailed reporting, and notarized proof of service. We handle everything from simple summons to complex legal notifications.`;
    
    case 'local-benefits':
      return `Choosing a local ${service.toLowerCase()} provider in ${location} offers several advantages: familiarity with local courts, knowledge of the area, faster response times, and understanding of local legal requirements.`;
    
    case 'contact':
      return `For professional ${service.toLowerCase()} in ${location}, contact Just Legal Solutions at (539) 367-6832. We offer same-day, rush, and standard service options to meet your needs.`;
    
    case 'comparison-intro':
      return `When choosing ${service.toLowerCase()} options, it's important to understand the differences and benefits of each approach.`;
    
    case 'pros-cons':
      return {
        option1: {
          pros: ['Professional service', 'Legal compliance', 'Reliable delivery'],
          cons: ['Higher cost than DIY', 'Requires scheduling']
        },
        option2: {
          pros: ['Lower initial cost', 'Direct control'],
          cons: ['Legal risks', 'Time consuming', 'No guarantee of proper service']
        }
      };
    
    case 'recommendation':
      return `For ${service.toLowerCase()} in ${location}, we recommend using a professional service to ensure legal compliance and proper documentation.`;
    
    case 'conclusion':
      return `${service} is a critical component of the legal process. Whether you need same-day emergency service or standard delivery, professional handling ensures your legal matters proceed smoothly and efficiently.`;
    
    default:
      return `Professional ${service.toLowerCase()} in ${location} requires expertise and attention to detail. Contact Just Legal Solutions for reliable service.`;
  }
}

// Generate markdown blog post
function generateMarkdownPost(content) {
  const { title, slug, date, targetKeyword, sections } = content;
  
  let markdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
category: "Legal Services"
tags: ["Process Serving", "Legal Documents", "Tulsa County", "Oklahoma"]
targetKeyword: "${targetKeyword}"
description: "${title} - Professional legal document delivery services in Tulsa County, Oklahoma. Licensed, bonded, and insured process servers."
---

# ${title}

`;

  // Add introduction
  if (sections.introduction) {
    markdown += `## Introduction\n\n${sections.introduction}\n\n`;
  }
  
  if (sections['local-intro']) {
    markdown += `${sections['local-intro']}\n\n`;
  }
  
  if (sections.overview) {
    markdown += `## Overview\n\n${sections.overview}\n\n`;
  }

  // Add steps section
  if (sections.steps) {
    markdown += `## Process Steps\n\n`;
    sections.steps.forEach((step, index) => {
      markdown += `${index + 1}. ${step}\n`;
    });
    markdown += '\n';
  }

  // Add details
  if (sections.details) {
    markdown += `## Detailed Information\n\n${sections.details}\n\n`;
  }
  
  if (sections['service-details']) {
    markdown += `## Service Details\n\n${sections['service-details']}\n\n`;
  }

  // Add benefits
  if (sections.benefits) {
    markdown += `## Benefits\n\n`;
    sections.benefits.forEach(benefit => {
      markdown += `- ${benefit}\n`;
    });
    markdown += '\n';
  }
  
  if (sections['local-benefits']) {
    markdown += `## Local Advantages\n\n${sections['local-benefits']}\n\n`;
  }

  // Add tips
  if (sections.tips) {
    markdown += `## Important Tips\n\n`;
    sections.tips.forEach(tip => {
      markdown += `- ${tip}\n`;
    });
    markdown += '\n';
  }

  // Add comparison
  if (sections['comparison-intro']) {
    markdown += `## Comparison\n\n${sections['comparison-intro']}\n\n`;
  }
  
  if (sections['pros-cons']) {
    markdown += `### Professional Service\n**Pros:**\n`;
    sections['pros-cons'].option1.pros.forEach(pro => {
      markdown += `- ${pro}\n`;
    });
    markdown += `\n**Cons:**\n`;
    sections['pros-cons'].option1.cons.forEach(con => {
      markdown += `- ${con}\n`;
    });
    markdown += '\n';
  }

  // Add FAQ
  if (sections.faq) {
    markdown += `## Frequently Asked Questions\n\n`;
    sections.faq.forEach(faq => {
      markdown += `### ${faq.question}\n\n${faq.answer}\n\n`;
    });
  }

  // Add conclusion
  if (sections.conclusion) {
    markdown += `## Conclusion\n\n${sections.conclusion}\n\n`;
  }
  
  if (sections.contact) {
    markdown += `## Contact Information\n\n${sections.contact}\n\n`;
  }
  
  if (sections.recommendation) {
    markdown += `## Our Recommendation\n\n${sections.recommendation}\n\n`;
  }

  // Add call to action
  markdown += `## Ready to Get Started?\n\nFor professional process serving in Tulsa County, Oklahoma, contact Just Legal Solutions today:\n\n- **Phone:** (539) 367-6832\n- **Website:** [justlegalsolutions.org](https://justlegalsolutions.org)\n- **Services:** Same-day, rush, and standard process serving\n- **Coverage:** All of Tulsa County and surrounding areas\n\n*Licensed • Bonded • Insured • Professional*`;

  return markdown;
}

// Save blog post
function saveBlogPost(content, markdown) {
  const blogDir = path.join(process.cwd(), 'blog-posts');
  
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  
  // Save markdown file
  const filename = `${content.date}-${content.slug}.md`;
  const filepath = path.join(blogDir, filename);
  fs.writeFileSync(filepath, markdown);
  
  // Save metadata
  const metaFilename = `${content.date}-${content.slug}-meta.json`;
  const metaFilepath = path.join(blogDir, metaFilename);
  fs.writeFileSync(metaFilepath, JSON.stringify(content, null, 2));
  
  console.log(`📝 Blog post saved: ${filename}`);
  console.log(`📊 Metadata saved: ${metaFilename}`);
  
  return filepath;
}

// Generate content calendar
function generateContentCalendar(days = 30) {
  const calendar = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const template = contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
    const topic = topicDatabase.services[Math.floor(Math.random() * topicDatabase.services.length)];
    const keyword = longTailKeywords[Math.floor(Math.random() * longTailKeywords.length)];
    
    calendar.push({
      date: date.toISOString().split('T')[0],
      template: template.type,
      topic,
      keyword,
      title: template.title.replace('{SERVICE}', topic)
    });
  }
  
  return calendar;
}

// Main execution
async function runContentVelocityAutomation() {
  console.log('🚀 Starting content velocity automation...');
  
  // Generate today's blog post
  const todaysTemplate = contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
  const todaysTopic = topicDatabase.services[Math.floor(Math.random() * topicDatabase.services.length)];
  
  const blogContent = generateBlogPost(todaysTemplate, todaysTopic);
  const markdown = generateMarkdownPost(blogContent);
  const filepath = saveBlogPost(blogContent, markdown);
  
  // Generate content calendar
  const calendar = generateContentCalendar(30);
  const calendarPath = path.join(process.cwd(), 'blog-posts', 'content-calendar.json');
  fs.writeFileSync(calendarPath, JSON.stringify(calendar, null, 2));
  
  console.log('\n🚀 CONTENT VELOCITY AUTOMATION COMPLETE');
  console.log('========================================');
  console.log(`📝 Blog post created: ${blogContent.title}`);
  console.log(`🎯 Target keyword: ${blogContent.targetKeyword}`);
  console.log(`📅 Content calendar generated: 30 days`);
  console.log(`📊 Template used: ${blogContent.template}`);
  console.log(`💾 Saved to: ${filepath}`);
  console.log(`📋 Calendar saved to: ${calendarPath}`);
  
  return true;
}

// Run the automation
runContentVelocityAutomation().catch(console.error);
