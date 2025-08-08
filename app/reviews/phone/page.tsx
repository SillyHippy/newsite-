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
                "Joseph and his team provided exceptional same-day service for our urgent legal matter. 
                Professional, reliable, and exactly what we needed when time was critical."
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
                "Fast response, fair pricing, and professional service. They handled our eviction notice 
                promptly and provided excellent communication throughout the process."
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Eviction Notice Service</div>
                <div>Date: December 2024</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2024-089</div>
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
