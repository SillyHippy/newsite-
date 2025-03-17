import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Pricing & Packages',
  description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.',
  openGraph: {
    title: 'Service Pricing & Packages | Just Legal Solutions',
    description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.'
  }
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Partner Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">JLS Wants to Partner with You:</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            If you find that you do not see exactly what you&apos;re looking for in our service offerings, if your specific situation is particularly complex or unique, or if you feel that our prices might not be competitive enough for your needs, please do not hesitate to reach out, instead of seeking alternatives elsewhere. Simply contact us directly, and we&apos;ll work together closely to understand your requirements and develop tailored solutions to meet your process serving needs effectively.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Service Packages</h2>
          <p className="text-center text-gray-600 mb-12">
            Explore our competitive pricing plans tailored for your legal needs. 75 Dollars per Service, 30 Miles Included, 70 Cents per Mile Over
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Standard Service</h3>
              <p className="text-3xl font-bold mb-4">$75</p>
              <p className="text-gray-600 mb-4">Ideal for routine document delivery.</p>
              <p className="text-sm text-gray-500">
                First Service Attempt Within 7 Business Days (usually sooner)
              </p>
            </div>

            {/* Rush Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Rush Service</h3>
              <p className="text-3xl font-bold mb-4">$125</p>
              <p className="text-gray-600 mb-4">For urgent demands that need immediate attention.</p>
              <p className="text-sm text-gray-500">
                A JLS Agent Will Attempt Service Within 72 Hours
              </p>
            </div>

            {/* Same Day Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Same Day Service</h3>
              <p className="text-3xl font-bold mb-4">$200</p>
              <p className="text-gray-600 mb-4">For urgent time-critical matters.</p>
              <p className="text-sm text-gray-500">
                A JLS Agent Will Attempt Service Within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Additional and Optional Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">SAME-DAY/RUSH:</h3>
              <p className="text-gray-600">This specific service, which requires prompt action, requires an additional fee. This charge is strictly applied when you or your client requests that the respondent be served on the same day we receive your court documents or, alternatively, within a specific timeframe of 24 hours (in circumstances where a Special Service is required, we will proceed to serve the respondent within a reasonable period).</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">30 MILES INCLUDED:</h3>
              <p className="text-gray-600">As part of our service fee, the first 30 miles of travel are included. If travel beyond this 30-mile range becomes necessary, it will be charged at the rate of $0.70 per mile for the excess distance.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">$75 PER SERVICE:</h3>
              <p className="text-gray-600">The foundational fee for a single service starts at $75. This fee covers not only the effective service of documents in a timely manner but also includes the processing and filing of the original Return of Service Affidavit directly to you if you wish to handle the filing yourself. We will file the Return of Service Affidavit with the court for an additional fee of $40.00 plus the court&apos;s filing fee. We fully appreciate that you may have multiple addresses pertaining to a single respondent. In such cases, if those addresses are located within a close proximity (specifically within a 20-mile radius), we will attempt service at both addresses on the same day under the same service fee of $75.00.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">PRINTING OF DOCUMENTS:</h3>
              <p className="text-gray-600">Should you choose to email us your documents that need serving, we offer to print the first 10 pages at no charge. Any pages exceeding this limit will incur a fee of $0.20 per page.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">SET TIME OF SERVICE:</h3>
              <p className="text-gray-600">If you require that the service occurs at a predetermined specific time and date, this request can be treated similarly to a RUSH and may incur an additional fee. This extra charge will be implemented only if you or your client specifically mandate that the respondent MUST be served at that designated date and time. If no specific time is requested, we will execute the service within a reasonable period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Service Policy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Non-Service Policy</h2>
          <p className="text-gray-600">
            While we strive to ensure the completion of our tasks swiftly and effectively, yet there may be instances when serving a respondent proves to be impossible for various reasons beyond our control. These reasons may include incorrect addresses provided to us, the respondent having moved, or instances in which the individual is actively evading service for various reasons, to name just a few. It is important to note that if we dedicate our time and efforts to serving a respondent, but ultimately are unsuccessful, we will still charge the flat fee of $75.00 for the service attempt. We pride ourselves on our high success rates, but we feel it is important to clearly communicate this potential issue to you in advance.
          </p>
        </div>
      </section>
    </main>
  );
}