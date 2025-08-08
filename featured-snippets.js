const fs = require('fs');

console.log('🌟 Generating Featured Snippets Content...');

// Featured snippet templates that Google loves
const snippetTemplates = [
  {
    question: "What does a process server do in Oklahoma?",
    answer: "A process server in Oklahoma delivers legal documents such as summons, subpoenas, and court orders to individuals or businesses. They provide proof of service through detailed affidavits required by Oklahoma courts."
  },
  {
    question: "How much does process serving cost in Tulsa?",
    answer: "Process serving in Tulsa offers competitive pricing with multiple service levels available. Visit justlegalsolutions.org/pricing for current rates and service options. All pricing is transparent with no hidden fees."
  },
  {
    question: "How long does process serving take in Oklahoma?",
    answer: "Process serving in Oklahoma typically takes 3-5 business days for standard service, 24-48 hours for rush service, and can be completed the same day for urgent documents. Time varies based on recipient availability."
  },
  {
    question: "What documents can a process server deliver?",
    answer: "Process servers can deliver divorce papers, summons and complaints, subpoenas, eviction notices, small claims documents, court orders, and other legal documents requiring official service."
  }
];

// Generate structured data for featured snippets
const featuredSnippetSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "mainEntity": snippetTemplates.map(template => ({
    "@type": "Question",
    "name": template.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": template.answer
    }
  }))
};

fs.writeFileSync('public/featured-snippets-schema.json', JSON.stringify(featuredSnippetSchema, null, 2));

console.log('✅ Featured snippets content generated');
