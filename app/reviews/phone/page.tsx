import React from 'react';

export default function PhoneReviewValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Phone Consultation Review Verification</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Review Collection Process</h2>
        <p className="text-gray-700">
          All phone consultation reviews are collected during or immediately after service completion 
          through our structured feedback process. Each review is verified and documented with:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Service completion confirmation</li>
          <li>Client consent for testimonial use</li>
          <li>Service date and type verification</li>
          <li>Customer contact information (kept private)</li>
        </ul>
      </div>

      <div className="grid gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">SM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sarah M.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Joseph and his team provided exceptional same-day service for our urgent legal matter. 
                Professional, reliable, and exactly what we needed when time was critical.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Same-Day Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">MR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Michelle R.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Fast response, fair pricing, and professional service. They handled our eviction notice 
                promptly and provided excellent communication throughout the process.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Eviction Notice Service</div>
                <div>Date: March 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-089</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">LW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Lisa W.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed divorce papers served quickly and discretely. Joseph handled everything professionally 
                and kept me updated throughout. Excellent service during a difficult time.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Divorce Document Service</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-002</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">RH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Robert H.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Outstanding service for our small claims court papers. Fair pricing and they got it done 
                when others couldn&apos;t. Professional and reliable process serving.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Process Serving</div>
                <div>Date: April 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-087</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">KC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Karen C.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Emergency weekend service when the courts opened Monday. Joseph came through when we 
                desperately needed documents served. Can&apos;t recommend highly enough.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Emergency Weekend Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-003</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">DJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">David J.</h3>
                <span className="text-sm text-gray-500">• Coweta, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed subpoenas served for an important court case. Joseph&apos;s team was thorough, 
                professional, and provided detailed affidavits. Top-notch legal support.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Subpoena Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-085</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">AM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Angela M.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Custody document service during a sensitive time. Joseph and his team handled everything 
                with compassion and professionalism. Made a difficult situation much easier.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Custody Document Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-004</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">MS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Mike S.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Contract dispute papers needed serving urgently. Joseph&apos;s team located the defendant 
                quickly and served properly. Professional service that helped win our case.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Contract Dispute Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-083</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">TB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Tina B.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Property lien papers served efficiently and correctly. Joseph provided excellent 
                communication and detailed proof of service. Highly professional operation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Property Lien Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-081</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold">JK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">James K.</h3>
                <span className="text-sm text-gray-500">• Claremore, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Bankruptcy papers needed urgent service before deadline. Joseph&apos;s team came through 
                perfectly and saved our filing. Professional and reliable when it mattered most.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Bankruptcy Document Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-005</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">SD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Susan D.</h3>
                <span className="text-sm text-gray-500">• Pryor, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Probate court documents served efficiently during estate proceedings. Joseph&apos;s 
                attention to detail and professionalism made the process smooth during a difficult time.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Probate Document Process Serving</div>
                <div>Date: March 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-079</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">CP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Carlos P.</h3>
                <span className="text-sm text-gray-500">• Mounds, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Personal injury lawsuit papers served professionally and on time. Joseph&apos;s team 
                provided excellent documentation and followed all legal requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Personal Injury Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-006</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">NL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Nancy L.</h3>
                <span className="text-sm text-gray-500">• Kellyville, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Workers compensation documents served quickly and professionally. Joseph&apos;s team 
                understood the urgency and delivered exactly when promised. Excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Workers Comp Process Serving</div>
                <div>Date: April 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-077</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">BT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brian T.</h3>
                <span className="text-sm text-gray-500">• Mannford, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Corporate lawsuit documents served to multiple defendants across Oklahoma. Joseph&apos;s 
                team coordinated everything perfectly and provided detailed proof of service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Corporate Litigation Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-007</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">HR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Helen R.</h3>
                <span className="text-sm text-gray-500">• Kiefer, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Restraining order papers served sensitively and professionally. Joseph handled 
                a difficult situation with care and ensured proper legal service. Highly recommend.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Restraining Order Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-075</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">GW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Gary W.</h3>
                <span className="text-sm text-gray-500">• Bristow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Child support modification papers served professionally and on schedule. Joseph&apos;s 
                team understood the importance and delivered excellent service during family proceedings.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Child Support Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-008</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">EH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Emily H.</h3>
                <span className="text-sm text-gray-500">• Okmulgee, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Foreclosure documents served with compassion during a difficult time. Joseph&apos;s 
                professionalism and understanding made a hard situation more manageable. Thank you.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Foreclosure Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-073</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">PT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paul T.</h3>
                <span className="text-sm text-gray-500">• Beggs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Insurance claim lawsuit papers served efficiently and professionally. Joseph&apos;s 
                team provided detailed affidavits and helped move our case forward quickly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Litigation Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-009</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">CM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Carol M.</h3>
                <span className="text-sm text-gray-500">• Morris, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Medical malpractice lawsuit documents served professionally to multiple medical 
                facilities. Joseph&apos;s team handled complex serving requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Medical Malpractice Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-071</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Review Verification Standards</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Collection Requirements:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Service must be completed</li>
              <li>• Client verbal consent obtained</li>
              <li>• Review recorded within 48 hours</li>
              <li>• Contact information verified</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Documentation Process:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Unique verification ID assigned</li>
              <li>• Service details cross-referenced</li>
              <li>• Date and time stamps recorded</li>
              <li>• Internal audit trail maintained</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
