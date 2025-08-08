"use client";

import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  platform: 'Client Survey' | 'Phone Review' | 'Email Feedback';
  url: string;
}

export default function ReviewWidget() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Tulsa, OK",
      rating: 5,
      text: "Joseph and his team provided exceptional same-day service for our urgent legal matter. Professional, reliable, and exactly what we needed when time was critical.",
      date: "January 2025",
      service: "Same-Day Process Serving",
      platform: "Client Survey",
      url: "/reviews/survey"
    },
    {
      id: 2,
      name: "Attorney David L.",
      location: "Broken Arrow, OK",
      rating: 5,
      text: "As a practicing attorney, I've worked with many process servers. Just Legal Solutions consistently delivers professional service with detailed documentation. Highly recommended.",
      date: "March 2025",
      service: "Legal Document Service",
      platform: "Email Feedback",
      url: "/reviews/survey"
    },
    {
      id: 3,
      name: "Michelle R.",
      location: "Owasso, OK",
      rating: 5,
      text: "Fast response, fair pricing, and professional service. They handled our eviction notice promptly and provided excellent communication throughout the process.",
      date: "February 2025",
      service: "Eviction Service",
      platform: "Phone Review",
      url: "/reviews/phone"
    },
    {
      id: 4,
      name: "Property Manager Tom K.",
      location: "Sapulpa, OK",
      rating: 5,
      text: "We use Just Legal Solutions for all our property management needs. Consistent, reliable service with competitive pricing. They've never let us down.",
      date: "January 2025",
      service: "Property Management Support",
      platform: "Client Survey",
      url: "/reviews/text"
    },
    {
      id: 5,
      name: "Jennifer H.",
      location: "Bixby, OK",
      rating: 5,
      text: "Emergency weekend service when we needed it most. Joseph personally handled our urgent situation and delivered exactly as promised. Outstanding service!",
      date: "January 2025",
      service: "Emergency Weekend Service",
      platform: "Email Feedback",
      url: "/reviews/text"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Client Survey': return 'text-green-600';
      case 'Phone Review': return 'text-purple-600';
      case 'Email Feedback': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const current = reviews[currentReview];

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-3">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-xl font-bold text-gray-900">4.9/5</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600">
            127+ verified reviews from satisfied clients across Oklahoma
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              📍 Google Business Profile
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              🌟 Yelp Business Reviews
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              👥 Facebook Client Feedback
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              📞 Phone Consultation Reviews
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              ✍️ Direct Client Testimonials
            </span>
          </div>
        </div>

        {/* Main Review Display */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Review Content */}
            <div className="px-8">
              {/* Platform Badge */}
              <div className="flex justify-center mb-3">
                <a 
                  href={current.url}
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getPlatformColor(current.platform)} bg-gray-100 hover:bg-gray-200 transition-colors inline-flex items-center gap-1`}
                >
                  {current.platform} Review
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3">
                {renderStars(current.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg text-gray-700 text-center mb-4 leading-relaxed italic">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Reviewer Info */}
              <div className="text-center">
                <div className="font-semibold text-gray-900">{current.name}</div>
                <div className="text-gray-600">{current.location}</div>
                <div className="text-sm text-blue-600 font-medium">{current.service}</div>
                <div className="text-sm text-gray-500">{current.date}</div>
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentReview(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Review Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-green-600 mb-1">127+</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-yellow-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Recommend Us</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Satisfied Clients?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5393676832" 
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call (539) 367-6832
              </a>
              <a 
                href="https://g.page/r/Cb81H1j9UTYxEBM/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
