import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Book, Users, Briefcase, Award, Scale, Map, Video, User } from 'lucide-react';
import MinimalSocialProof from '@/components/MinimalSocialProof';

export const metadata: Metadata = {
  title: 'Ultimate Guide to Process Serving in Oklahoma | Laws, Procedures & Best Practices',
  description: 'Complete 2025 guide to Oklahoma process serving laws, procedures, and requirements. Expert insights on legal document delivery, affidavits of service, and compliance with Oklahoma statutes.',
  keywords: [
    'oklahoma process serving guide',
    'oklahoma process server laws', 
    'legal document delivery oklahoma',
    'oklahoma civil procedure',
    'process serving requirements oklahoma',
    'affidavit of service oklahoma',
    'oklahoma legal statutes process serving',
    'how to serve legal papers oklahoma',
    'oklahoma court document delivery',
    'process server regulations oklahoma',
    'legal service procedures oklahoma',
    'oklahoma summons service guide'
  ],
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Legal Education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ultimate Guide to Process Serving in Oklahoma | Complete Legal Resource',
    description: 'Comprehensive 2025 guide to Oklahoma process serving laws, procedures, and best practices. Expert legal insights and professional guidance.',
    url: 'https://justlegalsolutions.org/ultimate-guide-process-serving-oklahoma',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://www.okbar.org/wp-content/uploads/2019/02/Fotolia_173531621_Subscription_Monthly_M-gavel-books.jpg',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Legal Guide - Process Serving Laws and Procedures',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Guide to Process Serving in Oklahoma',
    description: 'Complete guide to Oklahoma process serving laws, procedures, and best practices for 2025.',
    images: ['https://www.okbar.org/wp-content/uploads/2019/02/Fotolia_173531621_Subscription_Monthly_M-gavel-books.jpg'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/ultimate-guide-process-serving-oklahoma'
  },
  other: {
    'article:published_time': '2024-01-01',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Just Legal Solutions',
    'article:section': 'Legal Guides',
    'article:tag': 'oklahoma process serving, legal procedures, civil process'
  }
};

// We are keeping the FAQ data directly in this file for simplicity and reliability
const pageFaqs = [
  {
    "question": "Do I have to accept papers from a process server in Oklahoma?",
    "answer": "While you can refuse to physically take the papers, it does not stop the legal process. The server can note your refusal and may be permitted to leave the documents nearby, and the service is still considered valid."
  },
  {
    "question": "What is an Affidavit of Service and why is it important?",
    "answer": "An Affidavit of Service is a notarized document signed by the process server that proves the legal documents were delivered. It details the date, time, location, and manner of service. This document is filed with the court and serves as your official proof that the other party was notified."
  },
  {
    "question": "What is the fastest way to get legal documents served?",
    "answer": "Most professional process servers offer &apos;Rush&apos; or &apos;Same-Day&apos; service for an additional fee. This prioritizes your case to ensure the quickest possible delivery, often within a few hours."
  },
  {
    "question": "How much does it cost to hire a process server?",
    "answer": "Pricing varies based on location, type of service, and attempts required. For a detailed breakdown, please see our centralized <a href=&apos;/pricing&apos;>Pricing Page</a>."
  }
];

export default function UltimateGuidePage() {
  const pageTitle = "The Ultimate Guide to Process Serving in Oklahoma";

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
        <Image
          src="https://www.okbar.org/wp-content/uploads/2019/02/Fotolia_173531621_Subscription_Monthly_M-gavel-books.jpg"
          alt="Oklahoma Bar Association Gavel and Books - Legal Guide"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{pageTitle}</h1>
        </div>
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Welcome to the most comprehensive resource for understanding process serving in Oklahoma. Whether you&apos;re an attorney, a business, or an individual navigating the legal system, this guide covers everything you need to know about the laws, procedures, and best practices for legal document delivery in the Sooner State.
        </p>

        <MinimalSocialProof />
        
        <Card className="mb-8">
          <CardHeader><CardTitle>What is a Process Server?</CardTitle></CardHeader>
          <CardContent><p>A process server is a licensed professional responsible for delivering legal documents to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant&apos;s officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.</p></CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Scale className="mr-2 h-6 w-6" />Key Oklahoma Statutes for Process Serving</CardTitle></CardHeader>
          <CardContent>
            <p>Oklahoma&apos;s rules for civil procedure directly govern the service of process. Understanding these statutes is critical for ensuring service is valid. Here are the most important ones:</p>
            <ul className="list-disc pl-5 my-4">
                <li>
                  <strong><a href="https://law.justia.com/codes/oklahoma/2022/title-12/section-2004/" target="_blank" rel="noopener noreferrer">Title 12, § 2004 - Process</a>:</strong> This is the core statute, detailing who can be served and how (personal delivery, leaving at dwelling, etc.).
                </li>
                <li>
                  <strong><a href="https://law.justia.com/codes/oklahoma/2014/title-12/section-158.1/" target="_blank" rel="noopener noreferrer">Title 12, § 158.1 - Licensing of Private Process Servers</a>:</strong> This statute mandates that all private process servers must be licensed by the district court.
                </li>
                <li>
                  <strong>Fines and Penalties:</strong> Impersonating an officer of the court or failing to comply with statutes can lead to fines up to $1,000 and the invalidation of the service.
                </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Briefcase className="mr-2 h-6 w-6" />Types of Documents We Serve</CardTitle></CardHeader>
          <CardContent>
            <p>Our expertise covers all forms of legal document delivery, including:</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Summons and Complaints</strong></li>
                <li><strong>Subpoenas</strong></li>
                <li><strong><a href="/seo/eviction-notice-process-server">Eviction Notices</a></strong></li>
                <li><strong>Court Filings</strong></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Award className="mr-2 h-6 w-6" />Expert Insights From Our Blog</CardTitle></CardHeader>
          <CardContent>
            <p>For a deeper dive into specific topics, read our expert articles on Medium:</p>
            <ul className="list-disc pl-5 my-4">
                <li>
                  <strong><a href="https://medium.com/@justlegalsolutionsok/why-you-need-a-professional-process-server-in-oklahoma-fast-reliable-service-from-just-legal-195dc334cc8e" target="_blank" rel="noopener noreferrer">Why You Need a Professional Process Server in Oklahoma</a></strong>
                </li>
                <li>
                  <strong><a href="https://medium.com/@justlegalsolutionsok/my-doctor-or-theirs-the-workers-comp-choice-that-defined-my-life-after-injury-b3f1a53b4e9b" target="_blank" rel="noopener noreferrer">My Doctor or Theirs? The Workers’ Comp Choice That Defined My Life</a></strong>
                </li>
            </ul>
          </CardContent>
        </Card>
       
        {/* --- Service Area Map --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center"><Map className="mr-2 h-6 w-6" />Our Primary Service Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412235.1229762693!2d-96.2239487441333!3d36.13012920197728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b69324e23801f7%3A0x4296e34c3835c065!2sTulsa%20County%2C%20OK!5e0!3m2!1sen!2sus!4v1690222882674!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pageFaqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="font-semibold">{faq.question}</p>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
