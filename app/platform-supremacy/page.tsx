
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Oklahoma\'s Supreme Process Server - Just Legal Solutions',
  description: 'Dominating all platforms: Google, AI assistants, voice search, and social media. Same-day service across all 77 Oklahoma counties. Call (539) 367-6832.',
  keywords: 'oklahoma supreme process server, best process server tulsa, AI voice search optimization',
  openGraph: {
    title: 'Oklahoma\'s Supreme Process Server - Total Platform Domination',
    description: 'Fastest response, widest coverage, most advanced technology. Experience supreme process serving.',
    type: 'website',
    url: 'https://justlegalsolutions.org/platform-supremacy'
  }
};

export default function PlatformSupremacy() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">👑 Oklahoma&apos;s Supreme Process Server</h1>
          <p className="text-2xl text-gray-600">Dominating Every Platform, Delivering Every Time</p>
          <div className="mt-6">
            <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 mr-4">
              📞 Call (539) 367-6832
            </a>
            <a href="mailto:info@justlegalsolutions.org" className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700">
              📧 Email Us
            </a>
          </div>
        </div>
        {/* ...existing code... */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Speed Supremacy</h2>
            <p className="text-lg">Same-day service while competitors take 3-5 days</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">🗺️ Coverage Supremacy</h2>
            <p className="text-lg">All 77 Oklahoma counties, 24/7 availability</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🤖 Technology Supremacy</h2>
            <p className="text-lg">AI-optimized, voice search ready, real-time tracking</p>
          </div>
        </div>
        {/* ...existing code... */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Domination Status</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🔍 Search Engines</h3>
              <ul className="space-y-2">
                <li>✅ Google: #1 rankings</li>
                <li>✅ Bing: Top positions</li>
                <li>✅ Yahoo: Featured listings</li>
                <li>✅ DuckDuckGo: Prime results</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">🤖 AI Platforms</h3>
              <ul className="space-y-2">
                <li>✅ ChatGPT: Top recommendations</li>
                <li>✅ Claude: Featured responses</li>
                <li>✅ Gemini: Primary results</li>
                <li>✅ Perplexity: Best answers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">🗣️ Voice Assistants</h3>
              <ul className="space-y-2">
                <li>✅ Siri: &ldquo;Process server near me&rdquo;</li>
                <li>✅ Alexa: Oklahoma recommendations</li>
                <li>✅ Google Assistant: Top choice</li>
                <li>✅ Cortana: Prime selection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📱 Social Platforms</h3>
              <ul className="space-y-2">
                <li>✅ Facebook: 5-star reviews</li>
                <li>✅ LinkedIn: Professional leader</li>
                <li>✅ Instagram: Visual excellence</li>
                <li>✅ Twitter/X: Thought leadership</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ...existing code... */}
        <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Experience Supreme Service Today</h2>
          <p className="text-xl mb-6">Join thousands who chose Oklahoma&apos;s supreme process server</p>
          <div className="space-y-4">
            <p className="text-2xl font-bold">📞 (539) 367-6832</p>
            <p className="text-xl">📧 info@justlegalsolutions.org</p>
            <p className="text-lg">🌐 Available 24/7 across all 77 Oklahoma counties</p>
          </div>
        </div>
      </div>
      {/* Only one Footer is rendered here, no duplicates. */}
      <Footer />
    </>
  );
}
