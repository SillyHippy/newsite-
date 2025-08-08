import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Why Choose Us - Just Legal Solutions',
  description: 'Discover why Just Legal Solutions is Oklahoma’s most trusted process server. Fast, reliable, and professional service every time.',
  keywords: 'why choose us, best process server, oklahoma, just legal solutions',
};

export default function WhyChooseUs() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Why Choose Just Legal Solutions?</h1>
        <p className="text-lg text-gray-700 mb-8">
          We’re Oklahoma’s most trusted process serving company. Our team delivers fast, reliable, and professional service every time, with transparent pricing and expert support.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Licensed and bonded professionals</li>
          <li>24/7 emergency service available</li>
          <li>Statewide coverage in Oklahoma</li>
          <li>Transparent pricing and expert support</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
