
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Just Legal Solutions Over Competitors | Oklahoma Process Server',
  description: 'A clear comparison of Just Legal Solutions vs. other Oklahoma process servers. See why our guaranteed same-day service, 24/7 availability, and transparent pricing make us the #1 choice.',
  keywords: 'oklahoma process server comparison, best process server tulsa, competitive process server rates, just legal solutions vs competitors',
};

const CompetitorAnalysisPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Just Legal Solutions Advantage</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how our commitment to speed, coverage, and transparency sets us apart from other Oklahoma process servers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Just Legal Solutions Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Just Legal Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Same-Day Service Guaranteed</h3>
                    <p className="text-gray-600">Urgent documents are served today, not next week. We guarantee same-day attempts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">24/7 Emergency Availability</h3>
                    <p className="text-gray-600">Legal emergencies don&apos;t wait for business hours, and neither do we. Available anytime.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">All 77 Oklahoma Counties</h3>
                    <p className="text-gray-600">Complete statewide coverage. No matter where your documents need to go, we get them there.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Transparent, Flat-Rate Pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprise charges. You know the full cost upfront.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Competitors Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Typical Competitors</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">3-5 Business Day Delays</h3>
                    <p className="text-gray-600">Standard service can leave your critical documents waiting for nearly a week.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">9-to-5 Business Hours Only</h3>
                    <p className="text-gray-600">If your emergency happens after hours, you&apos;re out of luck until the next day.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Limited Metro-Only Coverage</h3>
                    <p className="text-gray-600">Many servers only cover the immediate Tulsa area, leaving rural counties unserved.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Complex & Hidden Fees</h3>
                    <p className="text-gray-600">Mileage, printing, and administrative fees can double the initial quote.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Choose the Better Option?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Stop waiting and wondering. Get the reliable, professional service your legal matter deserves.</p>
            <a href="/pricing" className="bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
              View Our Services & Pricing
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CompetitorAnalysisPage;
