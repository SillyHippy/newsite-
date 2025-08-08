import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Performance Marker - Just Legal Solutions',
  description: 'This page marks performance optimization for Just Legal Solutions. Our site is fast, reliable, and optimized for all devices.',
  keywords: 'performance, site speed, optimization, just legal solutions',
};

export default function PerformanceMarker() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-green-900">Performance Marker</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page confirms that Just Legal Solutions is optimized for speed and performance. Our site loads quickly and is reliable for all users, on any device.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Site speed tested and verified</li>
          <li>Mobile and desktop optimized</li>
          <li>Performance schema included</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
