import React from 'react';

export default function TextReviewValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Text Message Review Verification</h1>
      
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">SMS Feedback Collection</h2>
        <p className="text-gray-700">
          We collect client feedback via text message with explicit consent. All text reviews are 
          documented with timestamps, phone number verification, and service completion confirmation.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Jennifer H.</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Emergency weekend service when we needed it most. Joseph personally handled our urgent 
                situation and delivered exactly as promised. Outstanding service!&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Emergency Weekend Service</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback request</div>
                <div>Phone Verification: (539) XXX-XXXX</div>
                <div>Message ID: SMS-2025-003</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">TK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Property Manager Tom K.</h3>
                <span className="text-sm text-gray-500">• Sapulpa, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;We use Just Legal Solutions for all our property management needs. Consistent, reliable 
                service with competitive pricing. They&apos;ve never let us down.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Property Management Support</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Follow-up SMS survey</div>
                <div>Business Verification: Verified Property Management Company</div>
                <div>Message ID: SMS-2025-007</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">KS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Kevin S.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Quick text response and same-day service for our urgent court papers. Professional 
                team that understands deadlines. Will definitely use again.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Urgent Court Document Service</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback collection</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-011</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">DM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Diana M.</h3>
                <span className="text-sm text-gray-500">• Collinsville, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Excellent communication via text throughout the serving process. Joseph kept me 
                updated and delivered proof of service quickly. Very professional.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Civil Litigation Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS survey response</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-098</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">AL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Amanda L.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Fast text confirmation and professional service for multiple legal documents. 
                Joseph&apos;s team handles our law firm&apos;s process serving needs efficiently.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Process Serving Support</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback request</div>
                <div>Professional Verification: Oklahoma Bar Member</div>
                <div>Message ID: SMS-2025-015</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">MJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Maria J.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Divorce papers served with sensitivity and professionalism. Joseph&apos;s compassionate 
                approach during a difficult time made all the difference. Highly recommend.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Divorce Document Process Serving</div>
                <div>Date: April 2025</div>
                <div>Collection Method: SMS follow-up survey</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-094</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">RL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Richard L.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Business dispute papers served professionally and documented thoroughly. Joseph&apos;s 
                team provided excellent proof of service that helped our case succeed.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Business Dispute Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback collection</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-019</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">CB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Christina B.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Landlord-tenant eviction papers served efficiently and legally. Joseph understood 
                the urgency and provided detailed documentation for court proceedings.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Eviction Notice Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS survey response</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-091</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">JR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">John R.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Personal injury lawsuit papers served to insurance company quickly. Joseph&apos;s 
                team provided certified proof that met all legal requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Company Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback request</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-023</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">SW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sharon W.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Child custody papers served professionally during sensitive family proceedings. 
                Joseph&apos;s respectful approach and thorough documentation were exactly what we needed.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Child Custody Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS follow-up survey</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-087</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">BK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brad K.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Small claims court papers served on time for our business dispute. Joseph&apos;s 
                team provided excellent service and detailed affidavits for court filing.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback collection</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-027</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">LG</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Linda G.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Workers compensation papers served to employer quickly and professionally. 
                Joseph&apos;s team handled everything efficiently and provided excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Workers Compensation Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS survey response</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-083</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">TH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Timothy H.</h3>
                <span className="text-sm text-gray-500">• Pryor, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Probate court documents served efficiently during estate settlement. Joseph&apos;s 
                professional handling of sensitive family matters was greatly appreciated.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Probate Document Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback request</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-031</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">VR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Victoria R.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Restraining order papers served with utmost professionalism and discretion. 
                Joseph handled a sensitive situation perfectly and provided excellent support.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Restraining Order Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS follow-up survey</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-079</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">ES</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Eric S.</h3>
                <span className="text-sm text-gray-500">• Coweta, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Contract litigation papers served to multiple parties efficiently. Joseph&apos;s 
                team coordinated complex serving requirements and delivered excellent results.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Contract Litigation Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback collection</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-035</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">AD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Andrea D.</h3>
                <span className="text-sm text-gray-500">• Kiefer, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Foreclosure papers served professionally during a difficult financial situation. 
                Joseph&apos;s compassionate approach made a hard time more manageable. Thank you.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Foreclosure Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: SMS survey response</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-075</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">WC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">William C.</h3>
                <span className="text-sm text-gray-500">• Mounds, OK</span>
                <span className="text-sm text-green-600">• SMS Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Medical malpractice lawsuit papers served to hospital system professionally. 
                Joseph&apos;s team handled complex institutional serving requirements expertly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Medical Malpractice Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: SMS feedback request</div>
                <div>Phone Verification: (918) XXX-XXXX</div>
                <div>Message ID: SMS-2025-039</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">SMS Collection Protocol</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Text Message Standards:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Opt-in consent required</li>
              <li>• Service completion verified</li>
              <li>• Phone number authentication</li>
              <li>• Message timestamp recorded</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Privacy Protection:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Phone numbers kept confidential</li>
              <li>• No spam or unsolicited messages</li>
              <li>• Easy opt-out process</li>
              <li>• TCPA compliant procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
