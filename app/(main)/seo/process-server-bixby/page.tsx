import { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Process Server in Bixby - Just Legal Solutions',
  description: 'Need a reliable process server in Bixby, Oklahoma? Just Legal Solutions offers fast, professional, and compliant legal document delivery services. Contact us for same-day and rush service.',
};

export default function ProcessServerBixbyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Process Server in Bixby, Oklahoma</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Fast, Reliable, and Professional Legal Document Delivery Services for Bixby (ZIP: 74008).
          </p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block font-bold text-lg hover:bg-blue-700 transition-colors">
            Call for a Quote: (539) 367-6832
          </a>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Services in Bixby</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Summons and Complaints:</strong> Ensuring proper legal notification for court cases.</li>
              <li><strong>Subpoena Delivery:</strong> Timely delivery for witnesses and legal evidence.</li>
              <li><strong>Eviction Notices:</strong> Handling sensitive landlord-tenant notifications with professionalism.</li>
              <li><strong>Divorce Papers:</strong> Discreet and reliable service for family law matters.</li>
              <li><strong>Small Claims Documents:</strong> Cost-effective service for all small claims court papers.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us in Bixby?</h3>
            <p className="mb-4">
              Our process servers are experts in the local geography of Bixby and maintain full compliance with all Oklahoma state laws. We provide a sworn Affidavit of Service with every successful serve, giving you the court-admissible proof you need.
            </p>
            <p><strong>We guarantee professional handling of your sensitive legal documents.</strong></p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does service take in Bixby?</AccordionTrigger>
              <AccordionContent>
                Standard service in Bixby is typically completed within 3-5 business days. We also offer Rush (72 hours) and Same-Day service for urgent matters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are your rates for serving in Bixby?</AccordionTrigger>
              <AccordionContent>
                Our rates are competitive and transparent. Please visit our pricing page or call us directly for a quote for service in the Bixby area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if the person is difficult to find?</AccordionTrigger>
              <AccordionContent>
                We offer skip tracing services to locate individuals who are hard to find. Our experienced team uses advanced techniques to ensure your documents are served.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
