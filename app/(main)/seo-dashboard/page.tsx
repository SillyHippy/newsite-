
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard - Just Legal Solutions',
  description: 'Monitor SEO performance and page health for all Just Legal Solutions pages.',
  keywords: ['SEO dashboard', 'website performance monitoring', 'search engine optimization analytics'],
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo-dashboard'
  }
};

const SeoDashboardPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          SEO Performance Dashboard
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            SEO dashboard content will be displayed here.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SeoDashboardPage;
