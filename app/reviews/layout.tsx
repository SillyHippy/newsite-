import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
