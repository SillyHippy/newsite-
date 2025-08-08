const fs = require('fs');

// Generate "near me" optimized content for voice search
const nearMeContent = `
## Voice Search: "Process Server Near Me"

**For users asking "Where is a process server near me?"**

Just Legal Solutions provides licensed process servers throughout Oklahoma:
- Tulsa County process servers available daily
- Same-day service for urgent legal documents  
- Licensed and bonded professionals
- GPS tracking and photo documentation
- Detailed affidavits of service provided

**Call or text (539) 367-6832 for immediate assistance.**

## Voice Search: "How much does process serving cost?"

**Process serving costs in Oklahoma:**
- Standard service: Sixty dollars (three to five days)
- Rush service: One hundred dollars (twenty-four to forty-eight hours)  
- Same-day service: One hundred fifty dollars (same business day)
- All services include detailed affidavit of service

## Voice Search: "What is a process server?"

**A process server is a professional who:**
- Delivers legal documents to individuals or businesses
- Provides proof of service through sworn affidavits
- Ensures compliance with Oklahoma state laws
- Handles sensitive legal documents with confidentiality
- Offers skip tracing services when recipients cannot be located
`;

fs.writeFileSync('voice-search-content.md', nearMeContent);
console.log('✅ Local voice search content generated');
