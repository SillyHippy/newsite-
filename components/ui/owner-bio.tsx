import React from 'react';
import { User, Award, Clock, Heart } from 'lucide-react';

export default function OwnerBio() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Experience Trust Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-100 text-yellow-800 font-bold rounded-lg px-6 py-3 shadow-md text-xl border border-yellow-200 mb-6">
            🏆 Trusted by Oklahoma's Legal Community for Over 50 Years
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our certified team and professional partners bring decades of combined experience in process serving, 
            legal document delivery, and court filing services across all 77 Oklahoma counties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Meet Joseph Iannazzi</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Founder & CEO</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                <p className="text-blue-800 font-semibold">
                  🎯 Leading a team and partner network with 50+ years' combined experience in Oklahoma legal document delivery, 
                  court filings, and process service across Tulsa County and beyond.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                After a debilitating injury led to a five-year ordeal with a slow workers' compensation system, 
                Joseph discovered firsthand how delays in the legal process can devastate lives. This personal 
                experience became the driving force behind Just Legal Solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "What should have been a one-year recovery took five years of my life away," said Joseph. 
                "I learned that in the legal world, delays have profound human consequences. I started this 
                company to ensure no one else has their life put on hold because the system is too slow, 
                too opaque, or too indifferent."
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">24/7 Service</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Licensed & Bonded</div>
                  <div className="text-sm text-gray-600">State Certified</div>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-red-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Client-Focused</div>
                  <div className="text-sm text-gray-600">Personal Mission</div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700 italic">
                "My experience taught me that you have to be your own biggest advocate. Now, my company can be 
                that advocate for others. We handle the frustrating, time-consuming tasks so our clients can 
                focus on what matters most: their cases and their lives."
              </p>
            </div>
          </div>

          {/* Professional Image Placeholder & Stats */}
          <div className="space-y-6">
            {/* Professional Photo Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Joseph Iannazzi</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <div className="text-sm text-gray-500">
                NSU Alumnus • Disability-Owned Business
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-yellow-600">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-purple-600">77</div>
                <div className="text-sm text-gray-600">Counties Served</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <h4 className="text-lg font-bold mb-2">Ready to Experience the Difference?</h4>
              <p className="text-blue-100 mb-4">
                Let our personal mission become your advantage
              </p>
              <a 
                href="tel:5393676832" 
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Call (539) 367-6832
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
