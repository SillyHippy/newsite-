"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-12">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{' '}
              <a
                href="mailto:info@JustLegalSolutions.org"
                className="text-blue-600 hover:text-blue-800"
              >
                info@JustLegalSolutions.org
              </a>
              . We respond promptly to all inquiries.
            </p>
          </div>

          {/* Call Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-600">
              Contact us anytime Call or Text at{' '}
              <a href="tel:539-367-6832" className="text-blue-600 hover:text-blue-800">
                539-367-6832
              </a>
              . We&apos;re here and ready to assist you with all your needs.
            </p>
          </div>

          {/* Payments Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Payments</h3>
            <p className="text-gray-600">
              At this time, we accept{' '}
              <a
                href="https://buy.stripe.com/3cs17SbHS6h95nGaEE"
                className="text-blue-600 hover:text-blue-800"
              >
                electronic payments
              </a>
              , cash, checks, or money orders. Payments should be made payable to Joseph Iannazzi and mailed to: 564 E 138th Pl, Glenpool, OK 74033. Please ensure that payment is made in full within 10 days of the invoice date.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}