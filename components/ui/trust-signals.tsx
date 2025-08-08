import React from 'react';
import { Shield, Award, Clock, Users, MapPin, Star, CheckCircle, Phone } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 font-bold rounded-lg px-6 py-3 shadow-md text-xl border border-green-200 mb-6">
            🏆 50+ Years&apos; Combined Experience in Oklahoma Legal Services
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Oklahoma Trusts Just Legal Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Licensed, bonded, and trusted by hundreds of clients across Oklahoma. 
            Our team and professional partners bring decades of expertise to your legal document delivery needs.
          </p>
        </div>

        {/* Main Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Licensed & Bonded */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-900 mb-2">Licensed & Bonded</h3>
            <p className="text-blue-700 text-sm">
              State-certified process servers with full liability coverage protecting your service
            </p>
          </div>

          {/* 4.9 Star Rating */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
            </div>
            <h3 className="text-lg font-bold text-yellow-900 mb-2">4.9/5 Rating</h3>
            <p className="text-yellow-700 text-sm">
              127+ verified reviews from satisfied clients across Oklahoma
            </p>
          </div>

          {/* 24/7 Availability */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-green-900 mb-2">24/7 Emergency</h3>
            <p className="text-green-700 text-sm">
              Same-day and emergency service available when you need it most
            </p>
          </div>

          {/* Statewide Coverage */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-purple-900 mb-2">Statewide Coverage</h3>
            <p className="text-purple-700 text-sm">
              Professional service in all 77 Oklahoma counties
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2,800+</div>
              <div className="text-blue-100">Documents Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">890+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15min</div>
              <div className="text-blue-100">Avg Response</div>
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              Professional Credentials & Experience
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">50+ Years&apos; Combined Team & Partner Experience</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Oklahoma State Licensed Process Server</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Bonded & Insured ($1M Coverage)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Better Business Bureau Member</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Oklahoma Bar Association Affiliated</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              Client Testimonials
            </h3>
            <div className="space-y-4">
              <blockquote className="text-gray-700 italic">
                &ldquo;The experience shows. Fast, professional, and reliable. Joseph and his team delivered exactly when promised.&rdquo;
              </blockquote>
              <div className="text-sm text-gray-600">- Attorney, Tulsa County Law Firm</div>
              
              <blockquote className="text-gray-700 italic">
                &ldquo;You can tell they know what they&apos;re doing. Decades of experience in action. Same-day service that actually worked.&rdquo;
              </blockquote>
              <div className="text-sm text-gray-600">- Property Manager, Broken Arrow</div>
              
              <blockquote className="text-gray-700 italic">
                &ldquo;Their team&apos;s experience in Oklahoma courts is evident. Professional service from start to finish.&rdquo;
              </blockquote>
              <div className="text-sm text-gray-600">- Law Office, Sapulpa</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Professional Service?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Join hundreds of satisfied clients who trust us with their legal document delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5393676832" 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (539) 367-6832
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
