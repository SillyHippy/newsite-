
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Professional Process Server Directory & Business Verification | Just Legal Solutions',
  description: 'Verify Just Legal Solutions\' professional credentials and business listings. Trusted Oklahoma process server with established online presence across major business directories and legal platforms.',
  keywords: 'process server verification oklahoma, just legal solutions directory, business verification tulsa, professional process server credentials, oklahoma legal services verification',
  robots: {
    index: false, // This is a utility page, not for search indexing
    follow: true,  // But allow following links
    noarchive: true
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/backlinks'
  }
};

// Internal site URLs from sitemap.xml
const internalUrls = [
  '/',
  '/404',
  '/ai-business-info',
  '/backlinks',
  '/card',
  '/card/calendar',
  '/competitor-analysis',
  '/courier-services-tulsa',
  '/future-ai-ready',
  '/local-legal-events',
  '/local-seo-marker',
  '/multi-search-marker',
  '/payments',
  '/performance-marker',
  '/platform-supremacy',
  '/pricing',
  '/process-server-tulsa',
  '/resources',
  '/security-policy',
  '/seo/bixby-process-server',
  '/seo/broken-arrow-process-server',
  '/seo/eviction-notice-process-server',
  '/seo/glenpool-process-server',
  '/seo/jenks-process-server',
  '/seo/legal-posting-process-server',
  '/seo/owasso-process-server',
  '/seo/process-server-sand-springs',
  '/seo/sand-springs-process-server',
  '/seo/tulsa-process-server-comprehensive',
  '/seo-dashboard',
  '/services',
  '/sitemap',
  '/tulsa-process-server',
  '/urgent-process-server',
  '/voice-friendly',
  '/voice-search-marker',
  '/weekend-emergency',
  '/why-choose-us',
];

const backlinkUrls = [
  // Original Links
  'https://www.manta.com/c/m1x7pgf/just-legal-solutions',
  'https://www.showmelocal.com/38832951-just-legal-solutions-glenpool',
  'https://www.crunchbase.com/organization/just-legal-solutions',
  // Additional Links Found
  'https://www.alignable.com/glenpool-ok/just-legal-solutions',
  'https://www.elocal.com/profile/just-legal-solutions-21951593',
  'https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805',
  'https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html',
  'https://clutch.co/profile/just-legal-solutions'
];

export default function BacklinksPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Backlink Indexing & Internal Links Page</h1>
        <p className="text-lg text-gray-700 mb-8">This page is for search engine crawlers to discover our backlinks and for users to verify our online presence. It also provides internal links to every page on our site for SEO and navigation.</p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Internal Links</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          {internalUrls.map((url, index) => (
            <li key={url}>
              <a href={url} className="text-blue-600 hover:underline">{url}</a>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Backlinks</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          {backlinkUrls.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{url}</a>
            </li>
          ))}
        </ul>
      </main>
      
    </>
  );
}
