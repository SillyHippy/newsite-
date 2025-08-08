// Review Generator for SEO Schema
// Run this monthly to keep reviews fresh and current

const reviewTemplates = [
  {
    positiveAdjectives: ["Outstanding", "Excellent", "Professional", "Reliable", "Fast", "Efficient", "Top-notch", "Exceptional"],
    services: ["process serving", "document delivery", "court transfers", "skip tracing", "subpoena service", "courier services"],
    locations: ["Tulsa", "Broken Arrow", "Sapulpa", "Bixby", "Owasso", "Sand Springs", "Glenpool"],
    endings: ["Highly recommend!", "Worth every penny!", "Will use again!", "Five stars!", "Couldn't be happier!"]
  }
];

const firstNames = [
  "Sarah", "Michael", "Jennifer", "Robert", "Lisa", "James", "Amanda", "David", 
  "Carol", "Kevin", "Nancy", "Mark", "Patricia", "Thomas", "Linda", "Christopher",
  "Maria", "Daniel", "Susan", "Matthew", "Karen", "Anthony", "Betty", "Paul",
  "Helen", "Joshua", "Sandra", "Andrew", "Donna", "Kenneth", "Ruth", "Steven",
  "Lisa", "Brian", "Sharon", "Gary", "Michelle", "Edward", "Laura", "Ronald"
];

const lastNames = [
  "Johnson", "Davis", "Miller", "Thompson", "Rodriguez", "Wilson", "Brown", "Martinez",
  "Stevens", "White", "Garcia", "Anderson", "Moore", "Lee", "Taylor", "Jackson",
  "Harris", "Martin", "Clark", "Lewis", "Robinson", "Walker", "Hall", "Allen",
  "Young", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams",
  "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner"
];

const businessTypes = [
  "Law firm", "Attorney office", "Real estate company", "Insurance agency", 
  "Collection agency", "Property management", "Legal clinic", "Court reporter"
];

function generateReviewName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function generateReviewContent() {
  const templates = reviewTemplates[0];
  const adjective = templates.positiveAdjectives[Math.floor(Math.random() * templates.positiveAdjectives.length)];
  const service = templates.services[Math.floor(Math.random() * templates.services.length)];
  const location = templates.locations[Math.floor(Math.random() * templates.locations.length)];
  const ending = templates.endings[Math.floor(Math.random() * templates.endings.length)];
  
  const reviewTypes = [
    `${adjective} ${service} in ${location}! ${ending}`,
    `Used them for ${service} - ${adjective.toLowerCase()} service. ${ending}`,
    `${adjective} ${service} team. Quick response and professional handling. ${ending}`,
    `Needed ${service} in ${location}. ${adjective} results and great communication. ${ending}`,
    `${businessTypes[Math.floor(Math.random() * businessTypes.length)]} here - we use them for ${service}. Always ${adjective.toLowerCase()}. ${ending}`
  ];
  
  return reviewTypes[Math.floor(Math.random() * reviewTypes.length)];
}

function generateReviewDate() {
  const today = new Date();
  const daysBack = Math.floor(Math.random() * 90); // Random date within last 3 months
  const reviewDate = new Date(today);
  reviewDate.setDate(today.getDate() - daysBack);
  return reviewDate.toISOString().split('T')[0];
}

function generateReviews(count = 15) {
  const reviews = [];
  const usedNames = new Set();
  
  for (let i = 0; i < count; i++) {
    let name;
    do {
      name = generateReviewName();
    } while (usedNames.has(name));
    usedNames.add(name);
    
    // Mostly 5-star reviews with occasional 4-star for realism
    const rating = Math.random() > 0.1 ? 5 : 4;
    
    reviews.push({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rating,
        "bestRating": 5
      },
      "reviewBody": generateReviewContent(),
      "datePublished": generateReviewDate()
    });
  }
  
  // Sort by date (newest first)
  reviews.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
  
  return reviews;
}

// Calculate average rating
function calculateAverageRating(reviews) {
  const sum = reviews.reduce((acc, review) => acc + review.reviewRating.ratingValue, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

// Generate fresh reviews
function generateFreshReviewSchema() {
  const newReviews = generateReviews(20);
  const averageRating = calculateAverageRating(newReviews);
  
  return {
    reviewCount: newReviews.length,
    averageRating: averageRating,
    reviews: newReviews,
    generatedAt: new Date().toISOString()
  };
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateFreshReviewSchema,
    generateReviews,
    calculateAverageRating
  };
}

// CLI usage
if (require.main === module) {
  const freshData = generateFreshReviewSchema();
  console.log('Generated fresh review schema:');
  console.log(`Reviews: ${freshData.reviewCount}`);
  console.log(`Average Rating: ${freshData.averageRating}`);
  console.log('\nSample reviews:');
  freshData.reviews.slice(0, 3).forEach((review, index) => {
    console.log(`${index + 1}. ${review.author.name} (${review.reviewRating.ratingValue}⭐): "${review.reviewBody}"`);
  });
  
  // Output React component code
  console.log('\n// Copy this into your ReviewSchema component:');
  console.log(JSON.stringify(freshData.reviews, null, 2));
}
