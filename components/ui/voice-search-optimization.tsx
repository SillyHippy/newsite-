import Script from 'next/script';

interface VoiceSearchOptimizationProps {
  primaryQuestions: string[];
  conversationalAnswers: string[];
  localIntent?: boolean;
}

export default function VoiceSearchOptimization({ 
  primaryQuestions,
  conversationalAnswers,
  localIntent = true 
}: VoiceSearchOptimizationProps) {
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".voice-optimized", "h1", "h2", ".primary-answer"],
      "xpath": [
        "//*[@class='voice-optimized']",
        "//h1",
        "//h2"
      ]
    },
    "mainEntity": primaryQuestions.map((question, index) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": conversationalAnswers[index] || "Contact Just Legal Solutions for expert assistance.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ".voice-answer"
        },
        "author": {
          "@type": "Organization",
          "name": "Just Legal Solutions",
          "address": localIntent ? {
            "@type": "PostalAddress",
            "addressLocality": "Tulsa",
            "addressRegion": "Oklahoma",
            "addressCountry": "US"
          } : undefined
        }
      },
      "answerCount": 1,
      "upvoteCount": 127,
      "dateCreated": new Date().toISOString()
    })),
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://justlegalsolutions.org/search?q={voice_query}",
        "actionPlatform": [
          "http://schema.org/VoiceApplication",
          "http://schema.org/MobileApplication"
        ]
      },
      "query-input": "required name=voice_query"
    }
  };

  return (
    <Script
      id="voice-search-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceSearchSchema) }}
    />
  );
}
