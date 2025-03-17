"use client";

import React from 'react';
import Image from 'next/image';

export default function CardPage() {
  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-[15px] p-6 max-w-[420px] w-full shadow-lg" itemScope itemType="https://schema.org/Person">
        {/* Top Profile Section */}
        <div className="flex items-center mb-4">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden">
            <Image
              src="/favicon1.svg"
              alt="Just Legal Solutions Logo"
              width={90}
              height={90}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <h2 className="text-[26px] font-bold text-white -mb-1" itemProp="worksFor">Just Legal Solutions</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="pl-1 mb-3">
          <h1 className="text-[28px] text-white mb-3" itemProp="name">Joseph Iannazzi</h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm" itemProp="jobTitle">
              Process Server
            </span>
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
              Legal Support
            </span>
          </div>
        </div>

        {/* Button Section */}
        <div className="space-y-3 mt-6">
          {/* Contact Details Button */}
          <a href="/contact-details.vcf" download className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[65px] h-[65px]">
              <Image
                src="/landingpage/icons/contact.svg"
                alt="Contact"
                width={65}
                height={65}
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Download my contact details</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Email Button */}
          <a href="mailto:Info@JustLegalSolutions.org" itemProp="email" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[60px] h-[60px]">
              <Image
                src="/landingpage/icons/mail.svg"
                alt="Email"
                width={60}
                height={60}
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Email</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Phone Button */}
          <a href="tel:+15393676832" itemProp="telephone" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[56px] h-[66px]">
              <Image
                src="/landingpage/icons/phone.svg"
                alt="Phone"
                width={56}
                height={66}
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Call</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Calendar Button */}
          <a href="/card/calendar" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[62px] h-[62px]">
              <Image
                src="/landingpage/icons/calendar-reminder-icon.svg"
                alt="Calendar"
                width={62}
                height={62}
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Add a Reminder</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Website Button */}
          <a href="https://justlegalsolutions.org" itemProp="url" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[65px] h-[65px]">
              <Image
                src="/landingpage/icons/website1.svg"
                alt="Website"
                width={65}
                height={65}
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Website</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}