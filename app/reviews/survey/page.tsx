import React from 'react';

export default function ClientSurveyValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Client Survey Review Verification</h1>
      
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Post-Service Survey Process</h2>
        <p className="text-gray-700">
          Our structured client satisfaction surveys are conducted after every service completion. 
          All responses are collected through our secure feedback system with full client consent.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">DL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney David L.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;As a practicing attorney, I&apos;ve worked with many process servers. Just Legal Solutions 
                consistently delivers professional service with detailed documentation. Highly recommended.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Legal Document Service</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-156</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Judge Margaret H.</h3>
                <span className="text-sm text-gray-500">• Tulsa County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions consistently provides proper service of process in my courtroom. 
                Their affidavits are always complete and professionally prepared. Excellent work.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Document Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Judicial survey response</div>
                <div>Professional Verification: Tulsa County District Judge</div>
                <div>Survey ID: CS-2025-012</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Robert M.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Our law firm relies on Just Legal Solutions for all process serving needs. Joseph&apos;s 
                team is thorough, professional, and always meets court deadlines. Outstanding service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Process Serving Support</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-143</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">SC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sheriff Captain Steve C.</h3>
                <span className="text-sm text-gray-500">• Rogers County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions handles civil process serving professionally when our department 
                is overloaded. Joseph follows all protocols and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Civil Process Serving Support</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Law enforcement survey</div>
                <div>Professional Verification: Rogers County Sheriff&apos;s Office</div>
                <div>Survey ID: CS-2025-008</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">PP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paralegal Patricia P.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Working at a busy law firm, I coordinate with many process servers. Joseph&apos;s team 
                is the most reliable and professional. They make my job easier with excellent communication.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Multiple Legal Document Services</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Paralegal</div>
                <div>Survey ID: CS-2025-139</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">IB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Insurance Adjuster Ivan B.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions serves our legal documents efficiently for insurance claims. 
                Joseph&apos;s team understands our urgency and always delivers proper service documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Legal Document Service</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Corporate survey response</div>
                <div>Professional Verification: Licensed Insurance Adjuster</div>
                <div>Survey ID: CS-2025-004</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">CF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Court Clerk Catherine F.</h3>
                <span className="text-sm text-gray-500">• Creek County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions files proper affidavits with our court consistently. Joseph&apos;s 
                documentation is always complete and meets all filing requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Filing and Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Court staff survey</div>
                <div>Professional Verification: Creek County Court Clerk</div>
                <div>Survey ID: CS-2025-135</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">BM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Bailiff Bob M.</h3>
                <span className="text-sm text-gray-500">• Wagoner County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Working courthouse security, I see many process servers. Joseph&apos;s team is always 
                professional and respectful in the courthouse environment. Top-notch operation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Courthouse Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Court security survey</div>
                <div>Professional Verification: Wagoner County Bailiff</div>
                <div>Survey ID: CS-2025-001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">LT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Legal Secretary Lisa T.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;I schedule process serving for our firm regularly. Joseph&apos;s team is always responsive 
                and provides excellent updates. Professional service that attorneys can rely on.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Support Services</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Legal Secretary Certification</div>
                <div>Survey ID: CS-2025-131</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">MD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Magistrate Mary D.</h3>
                <span className="text-sm text-gray-500">• Osage County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions provides proper service of process for our small claims court. 
                Joseph&apos;s affidavits are always legally sufficient and properly executed.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Court Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Judicial survey response</div>
                <div>Professional Verification: Osage County Magistrate</div>
                <div>Survey ID: CS-2025-016</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">RF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Realtor Rick F.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Real estate litigation papers served professionally for property disputes. Joseph&apos;s 
                team understands the urgency of real estate matters and delivers excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Real Estate Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Real Estate License</div>
                <div>Survey ID: CS-2025-127</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">CS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">CPA Carol S.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Accounting malpractice lawsuit papers served professionally for our liability case. 
                Joseph&apos;s detailed documentation helped our legal defense significantly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Professional Liability Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Public Accountant</div>
                <div>Survey ID: CS-2025-020</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">BH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Banker Betty H.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Foreclosure and banking litigation papers served efficiently for our institution. 
                Joseph&apos;s team understands banking regulations and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Banking Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Corporate survey response</div>
                <div>Professional Verification: Licensed Banking Professional</div>
                <div>Survey ID: CS-2025-123</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">MT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Medical Administrator Mike T.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Medical malpractice papers served to our facility professionally and discreetly. 
                Joseph&apos;s team handles sensitive healthcare matters with appropriate professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Healthcare Litigation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Healthcare survey response</div>
                <div>Professional Verification: Healthcare Administration License</div>
                <div>Survey ID: CS-2025-024</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">EM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Engineer Ed M.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Construction defect lawsuit papers served professionally for our engineering case. 
                Joseph&apos;s attention to technical details and proper service was exceptional.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Construction Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Licensed Professional Engineer</div>
                <div>Survey ID: CS-2025-119</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">GC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Government Official Gary C.</h3>
                <span className="text-sm text-gray-500">• Tulsa County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Municipal litigation papers served properly for our county legal matters. Joseph&apos;s 
                team understands government procedures and provides excellent service documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Municipal Litigation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Government survey response</div>
                <div>Professional Verification: Tulsa County Government</div>
                <div>Survey ID: CS-2025-028</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">TW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Title Company Owner Tom W.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Property title dispute papers served efficiently for our real estate closings. 
                Joseph&apos;s team understands the urgency of title issues and delivers excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Title Dispute Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Business survey response</div>
                <div>Professional Verification: Licensed Title Company</div>
                <div>Survey ID: CS-2025-115</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">AP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Arbitrator Anne P.</h3>
                <span className="text-sm text-gray-500">• Rogers County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Arbitration documents served professionally for alternative dispute resolution cases. 
                Joseph&apos;s team understands arbitration procedures and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Arbitration Document Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Arbitrator</div>
                <div>Survey ID: CS-2025-032</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">ML</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Mediator Michael L.</h3>
                <span className="text-sm text-gray-500">• Creek County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Mediation documents served properly for family law disputes. Joseph&apos;s sensitive 
                handling of family matters and professional service is greatly appreciated.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Family Mediation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Family Mediator</div>
                <div>Survey ID: CS-2025-111</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Survey Methodology</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Collection Process:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Sent within 24 hours of service</li>
              <li>• Multiple contact methods offered</li>
              <li>• Anonymous option available</li>
              <li>• Professional verification when applicable</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Quality Assurance:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Service records cross-referenced</li>
              <li>• Response authenticity verified</li>
              <li>• Professional credentials checked</li>
              <li>• Feedback trends monitored</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
