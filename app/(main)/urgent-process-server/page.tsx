import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Emergency Process Server Tulsa | Same-Day Legal Document Delivery | Just Legal Solutions',
  description: 'URGENT process serving in Tulsa? Get documents served TODAY! Licensed Oklahoma process servers with 2-hour emergency service. Call (539) 367-6832 for immediate service throughout Tulsa County.',
  keywords: ['urgent process server tulsa', 'same day process serving', 'emergency document delivery', 'fast process server oklahoma', 'tulsa county legal services', '2 hour process serving', 'emergency court papers', 'urgent subpoena service', 'rush legal documents tulsa'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Emergency Legal Services',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Emergency Process Server Tulsa | Same-Day Legal Document Delivery | Just Legal Solutions',
    description: 'URGENT process serving in Tulsa? Get documents served TODAY! Licensed Oklahoma process servers with 2-hour emergency service. Call (539) 367-6832 for immediate service.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/urgent-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/urgent-process-server-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency Process Server Tulsa - Same Day Service Available'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Process Server Tulsa | Same-Day Legal Document Delivery',
    description: 'URGENT process serving in Tulsa? Get documents served TODAY! Licensed Oklahoma process servers with 2-hour emergency service.',
    images: ['https://justlegalsolutions.org/images/urgent-process-server-og.jpg']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/urgent-process-server'
  }
};

const UrgentProcessServerPage = () => {
  return (
    <>
      <Navbar />
      {/* FIX: The main content now starts below the navbar */}
      <main className="min-h-screen bg-white">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white py-3 text-center">
          <div className="container mx-auto px-4">
            <p className="font-bold">
              URGENT PROCESS SERVING AVAILABLE 24/7 - CALL NOW: (539) 367-6832
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SAME-DAY Process Server Tulsa
            </h1>
            <p className="text-2xl text-red-600 mb-4 font-semibold">
              Need Documents Served TODAY? We&apos;re Ready!
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Licensed Oklahoma process servers serving Tulsa County with
              <span className="font-bold text-green-600"> 2-HOUR EMERGENCY SERVICE</span> when you need it most.
            </p>
          </div>
          {/* Urgency Section */}
          <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Court Deadline Tomorrow?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-600">We Handle URGENT Situations:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Last-minute court filings</li>
                  <li>Emergency restraining orders</li>
                  <li>Time-sensitive evictions</li>
                  <li>Divorce papers before hearings</li>
                  <li>Subpoenas for tomorrow&apos;s court</li>
                </ul>
              </div>
              {/* Pricing Button Instead of List */}
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">EMERGENCY PRICING</h3>
                <a
                  href="/pricing"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-bold text-lg mb-4"
                >
                  View Pricing
                </a>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>2-Hour Attempt:</span>
                    <span className="font-bold text-2xl text-green-700">$265</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Same-Day Rush:</span>
                    <span className="font-bold text-xl">$150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service Hours Updated to 24/7 */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Open:</span>
                <span>24/7 Emergency Service Available</span>
              </div>
            </div>
          </div>
          {/* Contact Info Updated */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Phone:</strong>
                <p className="text-gray-600">(539) 367-6832</p>
              </div>
              <div>
                <strong className="text-gray-900">Email:</strong>
                <p className="text-gray-600">info@justlegalsolutions.org</p>
              </div>
              <div>
                <strong className="text-gray-900">Coverage:</strong>
                <p className="text-gray-600">Tulsa County & Statewide Oklahoma</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default UrgentProcessServerPage;
