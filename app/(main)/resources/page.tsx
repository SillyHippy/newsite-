
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Gavel, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions',
  description: 'Comprehensive legal resources, guides, and FAQs for Oklahoma process serving, court filing, and legal document delivery. Expert guidance for Tulsa County and statewide Oklahoma.',
  keywords: ['legal resources oklahoma', 'oklahoma process server guides', 'tulsa document delivery faqs', 'court papers info', 'legal guides tulsa', 'oklahoma civil procedure', 'tulsa county court rules', 'process server training oklahoma'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Legal Services',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions',
    description: 'Comprehensive legal resources, guides, and FAQs for Oklahoma process serving, court filing, and legal document delivery. Expert guidance for Tulsa County and statewide Oklahoma.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/resources',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/legal-resources-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Legal Resources and Process Serving Guides'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions',
    description: 'Comprehensive legal resources, guides, and FAQs for Oklahoma process serving, court filing, and legal document delivery.',
    images: ['https://justlegalsolutions.org/images/legal-resources-og.jpg']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources'
  }
};

const ResourcesPage = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Process Serving Guides",
      description: "Everything you need to know about legal document delivery.",
      articles: [
        { title: "What is a Process Server?", url: null, preview: "A complete guide to the role and responsibilities of a process server." },
        { title: "Oklahoma Rules of Civil Procedure", url: null, preview: "Understanding the state laws that govern service of process." },
        { title: "Serving an Evasive Defendant", url: null, preview: "Strategies and legal methods for serving hard-to-find individuals." }
      ]
    },
    {
      icon: Gavel,
      title: "Court Document Types",
      description: "Understanding different legal documents and their service requirements.",
      articles: [
        { title: "Serving Divorce Papers in Tulsa", url: null, preview: "The specific requirements for serving family law documents." },
        { title: "How to Serve an Eviction Notice", url: null, preview: "A step-by-step guide for landlords in Oklahoma." },
        { title: "The Power of a Subpoena", url: null, preview: "Ensuring witnesses and documents are legally compelled to appear." }
      ]
    },
    {
      icon: MapPin,
      title: "Service of Process by County",
      description: "Learn about specific rules and challenges in different Oklahoma counties.",
      articles: [
        { title: "Process Serving in Tulsa County", url: null, preview: "Navigating the busiest judicial district in Oklahoma." },
        { title: "Serving Documents in Oklahoma County", url: null, preview: "Key differences for serving in the OKC metro area." },
        { title: "Rural County Process Serving", url: null, preview: "Tips for successful service in less populated areas." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Legal Resources & Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your expert source for navigating the complexities of process serving in Oklahoma.</p>
        </div>

        <div className="space-y-16">
          {resourceCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 ml-12">{category.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-12">
                {category.articles.map((article) => (
                  <div key={article.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-xl mb-2 text-blue-800">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.preview}</p>
                    <span className="text-blue-600 font-semibold hover:underline">
                      {article.url ? <Link href={article.url}>Read More &rarr;</Link> : "Coming Soon"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      {/* Invisible authoritative legal resource links for SEO trust */}
      <div style={{display:'none'}}>
        <a href="https://www.oscn.net/" rel="nofollow noopener">Oklahoma State Courts Network</a>
        <a href="https://www.okbar.org/" rel="nofollow noopener">Oklahoma Bar Association</a>
        <a href="https://www.legalaidok.org/" rel="nofollow noopener">Oklahoma Legal Aid Services</a>
        <a href="https://www.tulsacounty.org/" rel="nofollow noopener">Tulsa County Court Services</a>
        <a href="https://www.oklahoma.gov/" rel="nofollow noopener">Oklahoma.gov - Legal Resources</a>
      </div>
      </div>
    </main>
  );
};

export default ResourcesPage;
