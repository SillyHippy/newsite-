
"use client";

import { useState } from "react";

export function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSubmissionStatus("idle"); // Reset status when toggling form
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        {/* Experience Trust Badge */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 font-bold rounded-lg px-6 py-3 shadow-md border border-blue-200">
            🏆 50+ Years' Combined Experience • Oklahoma's Trusted Legal Document Experts
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-2">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>
        <p className="text-blue-700 font-medium mb-6">
          For Courier Services or other business solutions, please call or text for urgent matters. For non-time-sensitive inquiries, feel free to email.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={toggleForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showForm ? "Close Form" : "Serve Request Form"}
          </button>
          <a
            href="https://g.page/r/Cb81H1j9UTYxEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Leave a Google Review
          </a>
        </div>

        {showForm && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            {submissionStatus === 'success' ? (
                <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-700">Your service request has been submitted successfully.</p>
                </div>
            ) : submissionStatus === 'error' ? (
                <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Something Went Wrong</h3>
                    <p className="text-gray-700">We couldn&apos;t submit your form. Please try again later or email us directly.</p>
                </div>
            ) : (
            <>
              <h3 className="text-2xl font-bold mb-4 text-center">Process Service E-Z Intake Information</h3>
              <form
                action="https://formsubmit.co/info@justlegalsolutions.org"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Hidden Fields */}
                <input type="hidden" name="_subject" value="New Service Request from Website Form" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700">Is Personal Service required instead of a designee or sub service? <span className="text-xs font-normal text-gray-500">(Select all that apply)</span></label>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-center"><input id="personal-service-opt" name="service_type_personal" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="personal-service-opt" className="ml-2 block text-sm text-gray-900">Personal Service</label></div>
                    <div className="flex items-center"><input id="sub-service-opt" name="service_type_sub" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="sub-service-opt" className="ml-2 block text-sm text-gray-900">Sub Service at a Residence Allowed</label></div>
                    <div className="flex items-center"><input id="designee-service-opt" name="service_type_designee" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="designee-service-opt" className="ml-2 block text-sm text-gray-900">Authorized Designee</label></div>
                  </div>
                </div>

                <hr/>
              
                {/* New Service Type Section */}
                <div>
                  <label className="block text-sm font-bold text-gray-700">Service Type</label>
                  <div className="mt-2 space-y-4">
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-standard" name="service_type" type="radio" value="Standard - $60" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-standard" className="font-medium text-gray-900">Standard Service - $60</label><p className="text-gray-500">Ideal for routine document delivery. First Service Attempt Within 5 Business Days (usually sooner)</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-rush" name="service_type" type="radio" value="Rush - $100" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-rush" className="font-medium text-gray-900">Rush Service - $100</label><p className="text-gray-500">For urgent demands that need immediate attention. A JLS Agent Will Attempt Service Within 72 Hours or Sooner based on availability</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-same-day" name="service_type" type="radio" value="Same Day - $150" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-same-day" className="font-medium text-gray-900">Same Day Service - $150</label><p className="text-gray-500">For urgent time-critical matters. A JLS Agent Will Attempt Service Within 24 Hours or Sooner based on availability</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-other" name="service_type" type="radio" value="Other" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm flex-grow"><label htmlFor="service-other" className="font-medium text-gray-900">Other</label><input type="text" name="service_type_other_details" placeholder="Please specify" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div></div>
                  </div>
                </div>

                {/* Your Information Section */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Your Information</h3>
                <div>
                  <label htmlFor="firm-name" className="block text-sm font-bold text-gray-700">Your Firm or Company Name (Your Name if Pro Se) <span className="text-red-500">*</span></label>
                  <input type="text" id="firm-name" name="firm_or_company_name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700">Your Address</label>
                   <input type="text" name="your_address_street" placeholder="Street Address" className="mt-1 mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input type="text" name="your_address_city" placeholder="City" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                      <input type="text" name="your_address_state" placeholder="State/Region/Province" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                      <input type="text" name="your_address_zip" placeholder="Postal / Zip Code" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label htmlFor="phone" className="block text-sm font-bold text-gray-700">Your Phone Number <span className="text-red-500">*</span></label><input type="tel" id="phone" name="your_phone_number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="email" className="block text-sm font-bold text-gray-700">Your Email Address <span className="text-red-500">*</span></label><input type="email" id="email" name="your_email_address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                </div>
                
                {/* Case Information Section */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Case Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label htmlFor="case-number" className="block text-sm font-bold text-gray-700">Case Number <span className="text-red-500">*</span></label><input type="text" id="case-number" name="case_number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="deadline" className="block text-sm font-bold text-gray-700">Deadline for Service</label><input type="date" id="deadline" name="service_deadline" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-date" className="block text-sm font-bold text-gray-700">Court Date (if any)</label><input type="date" id="court-date" name="court_date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-state" className="block text-sm font-bold text-gray-700">Originating Court - State <span className="text-red-500">*</span></label><input type="text" id="court-state" name="originating_court_state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-county" className="block text-sm font-bold text-gray-700">County</label><input type="text" id="court-county" name="county" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-type" className="block text-sm font-bold text-gray-700">Type of Court <span className="text-xs font-normal text-gray-500">(e.g. Circuit, District, Superior)</span></label><input type="text" id="court-type" name="type_of_court" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                </div>
                <div>
                  <label htmlFor="serving-for" className="block text-sm font-bold text-gray-700">We Are Serving This FOR/On Behalf of Plaintiff or Defendant</label>
                  <select id="serving-for" name="serving_for_plaintiff_or_defendant" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="">-Select-</option><option value="Plaintiff/Petitioner">Plaintiff/Petitioner</option><option value="Defendant/Respondent">Defendant/Respondent</option><option value="Other">Other</option>
                  </select>
                </div>
                <div><label htmlFor="plaintiff" className="block text-sm font-bold text-gray-700">Plaintiff/ Petitioner <span className="text-red-500">*</span></label><input type="text" id="plaintiff" name="plaintiff_petitioner" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="defendant" className="block text-sm font-bold text-gray-700">Defendant/ Respondent <span className="text-red-500">*</span></label><input type="text" id="defendant" name="defendant_respondent" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>

                {/* Service Details Section */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Service Details</h3>
                <div>
                    <label htmlFor="docs-to-be-served" className="block text-sm font-bold text-gray-700">List Documents to Be Served <span className="bg-yellow-200 px-1 rounded">As To Be Listed on Affidavit</span> <span className="text-xs font-normal text-gray-500">(separated by semi-colons)</span> <span className="text-red-500">*</span></label>
                    <textarea id="docs-to-be-served" name="documents_to_be_served" rows={4} required placeholder="e.g., Summons; Complaint; Notice of Hearing" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                    <p className="mt-1 text-xs text-gray-500">This information will be copied and pasted for the affidavit. Please list it accordingly.</p>
                </div>
                <div><label htmlFor="servee-name" className="block text-sm font-bold text-gray-700">Name of Individual or Business to Be Served <span className="text-red-500">*</span></label><input type="text" id="servee-name" name="name_of_servee" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="agent-name" className="block text-sm font-bold text-gray-700">If Serving a Business, Agent to Be Served/Title</label><input type="text" id="agent-name" name="agent_to_be_served" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Type of Address</label>
                  <div className="mt-2 flex items-center gap-6">
                    <div className="flex items-center"><input id="addr-home" name="addr_type_home" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-home" className="ml-2 block text-sm text-gray-900">Home</label></div>
                    <div className="flex items-center"><input id="addr-biz" name="addr_type_biz" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-biz" className="ml-2 block text-sm text-gray-900">Business</label></div>
                    <div className="flex items-center"><input id="addr-other" name="addr_type_other" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-other" className="ml-2 block text-sm text-gray-900">Other</label></div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Service Address <span className="text-red-500">*</span></label>
                  <input type="text" name="service_address_street" placeholder="Street Address" required className="mt-1 mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                  <input type="text" name="service_address_line2" placeholder="Address Line 2 (Apt, Suite, etc.)" className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" name="service_address_city" placeholder="City" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="text" name="service_address_state" placeholder="State/Region/Province" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="text" name="service_address_zip" placeholder="Postal / Zip Code" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="instructions" className="block text-sm font-bold text-gray-700">Service Instructions and/or Notes? <span className="text-xs font-normal text-gray-500">(If any. Do not attach special instructions. Enter them here.)</span></label>
                  <textarea id="instructions" name="service_instructions" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Will the servee be cooperative to be served if we were to contact them in advance of service?</label>
                  <div className="mt-2 flex items-center gap-6">
                      <div className="flex items-center"><input id="cooperative-yes" name="is_servee_cooperative" type="radio" value="Yes" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-yes" className="ml-2 block text-sm text-gray-900">Yes</label></div>
                      <div className="flex items-center"><input id="cooperative-no" name="is_servee_cooperative" type="radio" value="No" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-no" className="ml-2 block text-sm text-gray-900">No</label></div>
                      <div className="flex items-center"><input id="cooperative-unknown" name="is_servee_cooperative" type="radio" value="Unknown" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-unknown" className="ml-2 block text-sm text-gray-900">Unknown</label></div>
                  </div>
                </div>

                {/* Submit Documents Section */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Submit Documents</h3>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 text-center p-4 rounded-md">
                    Please email all documents to:<br/>
                    <a href="mailto:info@justlegalsolutions.org" className="font-bold underline">info@justlegalsolutions.org</a>
                </div>

                <button 
                  type="submit" 
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-400"
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Your Job'}
                </button>
              </form>
            </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Email Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{" "}
              <a
                href="mailto:info@justlegalsolutions.org"
                className="text-blue-600 hover:text-blue-800"
              >
                info@justlegalsolutions.org
              </a>
              . We respond promptly to all inquiries.
            </p>
          </div>

          {/* Call Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Call or Text Us</h3>
            <p className="text-gray-600">
              Contact us anytime Call or Text at{" "}
              <a
                href="tel:5393676832"
                className="text-blue-600 hover:text-blue-800"
              >
                (539) 367-6832
              </a>
              . We&apos;re here and ready to assist you with all your needs.
            </p>
          </div>

          {/* Payments Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Payments</h3>
            <p className="text-gray-600">
              At this time, we accept{" "}
              <a
                href="https://buy.stripe.com/3cs17SbHS6h95nGaEE"
                className="text-blue-600 hover:text-blue-800"
              >
                electronic payments
              </a>
              , cash, checks, or money orders. Payments should be made payable
              to Joseph Iannazzi and mailed to: 564 E 138th Pl, Glenpool, OK
              74033. Past-due invoices are subject to our{' '}
              <a href="/pricing#policies" className="text-blue-600 hover:text-blue-800 underline">
                Payment & Late Fee Policy
              </a>.
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Sitemap Link - left side */}
            <div className="order-1 md:order-1 w-full md:w-auto text-center md:text-left">
              <a
                href="/sitemap"
                className="text-blue-600 hover:text-blue-800 underline font-semibold text-sm"
              >
                Sitemap
              </a>
            </div>
            {/* Disclaimer - center */}
            <p className="text-center text-sm text-gray-500 order-2 md:order-2 w-full md:w-auto">
              Disclaimer: Just Legal Solutions is not a law firm. For legal questions, please consult a licensed attorney.
            </p>
            {/* Social Media Links - right side */}
            <div className="flex space-x-4 order-3 md:order-3">
              <a
                href="https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/justlegalsolutionsok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://g.co/kgs/vMgnxex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Google My Business"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/just-legal-solutions-glenpool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Yelp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 8.5h-4v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4v-4c0-.276.224-.5.5-.5s.5.224.5.5v4h4c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export for compatibility
export default Footer;
