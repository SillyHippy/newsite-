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
                "As a practicing attorney, I've worked with many process servers. Just Legal Solutions 
                consistently delivers professional service with detailed documentation. Highly recommended."
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Legal Document Service</div>
                <div>Date: December 2024</div>
                <div>Collection Method: Email survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2024-156</div>
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
