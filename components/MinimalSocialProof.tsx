import React from 'react';

// Lightweight social proof that won't change your existing design
export default function MinimalSocialProof() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-800">2,847 Documents Served</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600 ml-1">4.9/5 Rating</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-green-600">Same-Day Available</div>
          <div className="text-xs text-gray-500">3 servers ready in your area</div>
        </div>
      </div>
    </div>
  );
}
