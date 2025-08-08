import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Weekend Emergency Process Server - Just Legal Solutions',
  description: 'Urgent weekend process serving available in Tulsa and all Oklahoma counties. Call now for immediate legal document delivery.',
  keywords: 'weekend emergency, process server, tulsa, oklahoma, just legal solutions',
};

export default function WeekendEmergency() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-red-700">Weekend Emergency Process Server</h1>
        <p className="text-lg text-gray-700 mb-8">
          Need urgent process serving on the weekend? Just Legal Solutions offers 24/7 emergency legal document delivery in Tulsa and all Oklahoma counties. Call now for immediate assistance.
        </p>
        <a href="tel:5393676832" className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700">
          📞 Call (539) 367-6832
        </a>
      </main>
      <Footer />
    </>
  );
}
