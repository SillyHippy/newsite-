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
                "Emergency weekend service when we needed it most. Joseph personally handled our urgent 
                situation and delivered exactly as promised. Outstanding service!"
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
                "We use Just Legal Solutions for all our property management needs. Consistent, reliable 
                service with competitive pricing. They've never let us down."
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
