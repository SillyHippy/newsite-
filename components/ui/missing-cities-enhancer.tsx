
import EnhancedLocationFAQ from './enhanced-location-faq';
import AIOptimizedContentSchema from './ai-optimized-content-schema';
import VoiceSearchOptimization from './voice-search-optimization';

interface MissingCityPageProps {
  city: string;
  county: string;
  zipCode: string;
  population: string;
  keyFeatures: string[];
  targetKeywords: string[];
}

export default function MissingCityPage({
  city,
  county,
  zipCode,
  population,
  keyFeatures,
  targetKeywords
}: MissingCityPageProps) {
  const voiceQuestions = [
    `Who is the best process server in ${city} Oklahoma?`,
    `Where can I find 24 hour legal document delivery in ${city}?`,
    `How do I serve papers in ${city} Oklahoma quickly?`,
    `What process server covers ${city} and ${county}?`
  ];

  const voiceAnswers = [
    `Just Legal Solutions is the leading process server in ${city}, Oklahoma, with statewide licensing and 24/7 availability.`,
    `Just Legal Solutions provides 24-hour legal document delivery in ${city} with same-day and emergency service options.`,
    `Contact Just Legal Solutions at (539) 367-6832 for fast process serving in ${city} with same-day delivery available.`,
    `Just Legal Solutions covers ${city}, ${county}, and all of Oklahoma with comprehensive process serving services.`
  ];

  return (
    <div className="min-h-screen bg-white">
      <AIOptimizedContentSchema
        pageName={`${city} Process Server Services`}
        primaryKeywords={targetKeywords}
        semanticKeywords={[
          `legal document delivery ${city}`,
          `court papers ${city}`,
          `process serving ${county}`,
          `24 hour service ${city}`
        ]}
        topicalAuthority="Oklahoma Licensed Process Server with Statewide Coverage"
      />
      
      <VoiceSearchOptimization
        primaryQuestions={voiceQuestions}
        conversationalAnswers={voiceAnswers}
        localIntent={true}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 voice-optimized">
            {city} Process Server | Professional Legal Document Delivery
          </h1>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-lg text-green-800 voice-answer">
              <strong>Licensed Professional Service</strong> | Serving {city}, {county} | 
              Updated: {new Date().toLocaleDateString()} | 24/7 Availability
            </p>
          </div>
        </header>

        <section className="prose max-w-none mb-8">
          <p className="text-lg mb-6 primary-answer">
            Professional process serving in {city}, Oklahoma with certified legal document 
            delivery throughout {county}. Our statewide licensing allows us to serve 
            documents anywhere in Oklahoma, with specialized expertise in the {city} area.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {city} Service Details
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Primary Coverage:</strong> {city} ({zipCode})</li>
                <li><strong>County:</strong> {county}</li>
                <li><strong>Population Served:</strong> {population}+ residents</li>
                <li><strong>Service Radius:</strong> Complete {county} coverage</li>
                <li><strong>Emergency Service:</strong> Available 24/7</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Area Highlights:</h3>
              <ul className="list-disc ml-6 text-gray-700">
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Why Choose Our {city} Process Servers
              </h2>
              <ul className="list-disc ml-6 text-blue-700 space-y-2">
                <li>Statewide Oklahoma licensing advantage</li>
                <li>24/7 emergency service availability</li>
                <li>GPS tracking and digital documentation</li>
                <li>Professional affidavits of service</li>
                <li>Multi-service capabilities (skip tracing, courier)</li>
                <li>Local knowledge of {city} and {county}</li>
                <li>Same-day and rush service options</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Complete Process Serving Services in {city}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Legal Documents:</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Divorce and family court papers</li>
                <li>Civil lawsuit documents</li>
                <li>Small claims court papers</li>
                <li>Restraining orders and protective orders</li>
                <li>Eviction notices and landlord-tenant papers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Additional Services:</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Subpoenas and witness summons</li>
                <li>Court filing and document retrieval</li>
                <li>Skip tracing and investigation</li>
                <li>Courier and delivery services</li>
                <li>Executive assistant services</li>
              </ul>
            </div>
          </div>
        </section>

        <EnhancedLocationFAQ city={city} county={county} isNewLocation={true} />

        <section className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Contact {city} Process Server
          </h2>
          <p className="text-green-700 mb-6">
            Professional process serving throughout {city} and {county}. 
            Licensed statewide in Oklahoma with 24/7 emergency availability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">📞 (539) 367-6832</h3>
              <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              <p className="text-green-700">📍 Serving {city}, {county}, Oklahoma</p>
              <p className="text-green-700">🕒 24/7 Emergency Service Available</p>
            </div>
            <div className="text-center md:text-right">
              <a 
                href="/pricing" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg inline-block font-semibold mb-3 transition-colors"
              >
                View Pricing & Get Quote
              </a>
              <div>
                <a 
                  href="/services" 
                  className="text-green-600 hover:text-green-700 underline font-medium"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
