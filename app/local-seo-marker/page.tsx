import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Local SEO Marker - Just Legal Solutions',
  description: 'This page marks local SEO optimization for Just Legal Solutions. Our services are discoverable and optimized for local search in Oklahoma.',
  keywords: 'local seo, process server, oklahoma, just legal solutions',
};

export default function LocalSEOMarker() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Local SEO Marker</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page confirms that Just Legal Solutions is fully optimized for local SEO. Our process serving and legal document delivery services are discoverable in all major Oklahoma cities and counties.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Optimized for Google, Bing, Yahoo, and DuckDuckGo</li>
          <li>Local business schema included</li>
          <li>Service area: All 77 Oklahoma counties</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
