import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

export default function TulsaProcessServerPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can your Broken Arrow process server or Tulsa process server deliver legal documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard delivery for a Tulsa process server is typically within 3-5 business days. However, we understand some legal matters are time-sensitive. We offer rush and same-day service for urgent deliveries in both Tulsa and Broken Arrow. Our process servers in Tulsa are committed to providing the fastest and most reliable service possible. If you need an urgent Process Server for Tulsa County, contact us immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a licensed and bonded process server in Tulsa County and Broken Arrow, OK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. All of our process servers are fully licensed and bonded as required by the state of Oklahoma. We are an authorized Tulsa County process server and also serve the entire Broken Arrow, OK area. You can trust our professional team to handle your legal documents with the utmost care and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What areas and neighborhoods do your Tulsa and Broken Arrow process servers cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process servers cover all of Tulsa County and the city of Broken Arrow extensively. This includes downtown Tulsa, Midtown, South Tulsa, Brookside, Cherry Street, and all major residential and business areas. In Broken Arrow, our process servers broken arrow team covers areas like the Rose District, South Broken Arrow, and all surrounding neighborhoods. If you need a process server in Broken Arrow OK or anywhere in the Tulsa metro, we have you covered."
        }
      },
      {
        "@type": "Question",
        "name": "What legal documents can you deliver as a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading Broken Arrow process server, we are experienced in serving all types of legal documents. This includes summons, complaints, subpoenas, writs, eviction notices, and family court documents like divorce papers and child support petitions. Our Broken Arrow Process Server team ensures that every document is served correctly according to Oklahoma law."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle urgent or after-hours jobs in Broken Arrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in handling difficult, urgent, and after-hours service requests. Our Broken Arrow, OK process server team is available 24/7 to meet your needs. We understand that some serves require persistence and flexibility, and our process servers in Broken Arrow are trained to handle these situations professionally and effectively."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Process Server for Broken Arrow or Tulsa process server cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is competitive and transparent. The cost for a Process Server for Broken Arrow or a Tulsa process server depends on the type of service (standard, rush, same-day) and the location of the serve. Please visit our pricing page or contact us for a specific quote. We offer affordable rates for reliable service."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get proof of service from a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After successfully serving the documents, our Broken Arrow process servers will provide you with a notarized Affidavit of Service. This legal document serves as your proof that the papers were delivered in accordance with state law. A copy of the affidavit will be emailed to you for your records at no charge. We can also file the affidavit with the court for an additional fee."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from a Broken Arrow Process Server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you hire a Broken Arrow Process Server from our team, you can expect professionalism, diligence, and excellent communication. We will keep you updated throughout the entire process, from the initial attempt to the final proof of service. Our goal is to make the process of serving legal documents as smooth and stress-free as possible for our clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer skip tracing services for hard-to-find individuals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we do. If you are having trouble locating an individual for service, our experienced team can provide skip tracing services. We use advanced databases and investigative techniques to locate individuals quickly and accurately, ensuring your legal documents can be served. This is a crucial service offered by our Process Server for Tulsa County."
        }
      }
    ]
  };

  const images = [
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-process-server.jpg",
      alt: "A professional Tulsa process server delivering documents with the Tulsa skyline in the background.",
      fileName: "tulsa-process-server-delivering-documents.jpg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/Broken-Arrow-Municipal-Court.jpeg",
      alt: "The Broken Arrow Municipal Courthouse, a common location for a Broken Arrow process server.",
      fileName: "Broken-Arrow-Municipal-Court.jpeg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-courthouse.jpeg",
      alt: "The Tulsa County Courthouse where our Tulsa County process servers frequently file documents.",
      fileName: "tulsa-county-courthouse-process-server.jpeg"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/process-server-tulsa.webp",
        alt: "Process server in Tulsa reviewing legal documents before service.",
        fileName: "process-server-tulsa-reviewing-documents.webp"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-process-server.png",
        alt: "A graphic representing a Tulsa County process server and legal document delivery.",
        fileName: "tulsa-county-process-server-graphic.png"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/Tulsa_skyline_aerial%2C_April_2023.jpg",
        alt: "Aerial view of the Tulsa skyline, an area served by our process servers.",
        fileName: "tulsa-skyline-area-served-by-process-server-in-tulsa.jpg"
    }
  ];

  const neighborhoods = [
    "Downtown Tulsa", "Brookside", "Cherry Street", "Kendall-Whittier", "Maple Ridge", "Riverside", "Midtown", "East Tulsa", "South Tulsa", "North Tulsa", "West Tulsa", "Brady Arts District", "Greenwood", "Pearl District", "Utica Square", "Gilcrease", "Owen Park", "Swan Lake", "Sunnyside", "Red Fork", "Turley", "Carbondale", "Garden City", "Sunset Terrace", "Patrick Henry", "White City", "Yorktown", "Braden Park", "Lortondale", "Florence Park", "Highland Park", "Ranch Acres", "Woodland Acres", "Forest Park", "Sheridan Hills", "Park Plaza", "Southmoor", "Rolling Hills", "Country Club Heights", "Fairmont", "Parkview", "Briarwood", "Southgate", "Union", "Jenks", "Bixby", "Owasso", "Broken Arrow", "Sand Springs"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={faqData} />

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tulsa Process Server & Broken Arrow Process Server</h1>
        <p className="text-xl text-muted-foreground mb-6">Your trusted partner for fast, accurate, and professional legal document delivery from a licensed process server in Tulsa County.</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/pricing">View Pricing & Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Gold Standard Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">The Gold Standard for a Process Server in Tulsa</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Same-Day Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Urgent documents are our specialty. We guarantee same-day attempts for all rush orders in Tulsa.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Licensed & Insured</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our process servers are fully licensed and insured in Oklahoma for your complete peace of mind.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tulsa County Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We serve documents in Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and all surrounding areas.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Proof of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Receive a legally compliant, digital affidavit of service as soon as the job is complete.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Tulsa's Legal Legacy */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Tulsa’s Legal Legacy & Your Local Tulsa County Process Server</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="mb-4">Tulsa’s legal legacy runs deep—a city that evolved from a bustling 20th-century oil hub into Oklahoma’s second-largest legal and business center. The historic downtown is home to the Tulsa County Courthouse and iconic Art Deco skyscrapers, reflecting a century of change.</p>
                <p>For generations, efficient legal document delivery has kept Tulsa’s courts, firms, and residents connected and protected. Our deep roots in this vibrant city enable us to serve legal documents with true local expertise for every Tulsa neighborhood, from Brookside to Greenwood.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-4xl font-bold text-primary">97%</p>
                    <p>First-attempt serve success</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">6,000+</p>
                    <p>Documents delivered countywide</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">2018</p>
                    <p>Serving Tulsa Since</p>
                </div>
            </div>
        </div>
      </section>

      <Carousel className="w-full max-w-4xl mx-auto mb-12">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Neighborhoods Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Areas Served by our Tulsa & Broken Arrow Process Servers</h2>
        <div className="flex flex-wrap justify-center gap-2">
            {neighborhoods.map(n => (
                <span key={n} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{n}</span>
            ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Process Server in Tulsa & Broken Arrow OK: FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.mainEntity.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.name}</AccordionTrigger>
              <AccordionContent>{faq.acceptedAnswer.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Tulsa Process Servers</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;Just Legal Solutions served my divorce papers in Tulsa the same day I called. Professional, fast, and discreet!&quot;</p>
                    <p className="text-right font-bold mt-4">- Sarah M.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;They handled a difficult serve for my law firm and provided perfect documentation. Highly recommended for Tulsa legal work.&quot;</p>
                    <p className="text-right font-bold mt-4">- Attorney John D.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;I needed an eviction notice served urgently. The team at Just Legal Solutions got it done within hours.&quot;</p>
                    <p className="text-right font-bold mt-4">- Mike R.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Legal Info & Links */}
      <section className="grid md:grid-cols-2 gap-8 mb-12 text-center">
          <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Tulsa District Court</h3>
              <p>500 S Denver Ave, Tulsa, OK 74103</p>
              <p>(918) 596-5000</p>
              <Button asChild variant="link">
                <a href="https://www.oscn.net/dockets/search.aspx?db=tulsa" target="_blank" rel="noopener noreferrer">Visit Court Website</a>
              </Button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Oklahoma Process Service Statutes</h3>
               <Button asChild variant="link">
                <a href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=430303" target="_blank" rel="noopener noreferrer">View Statutes</a>
              </Button>
          </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
          <p className="mb-6">Our team is ready to help. Contact us for any inquiries or to get started with our services.</p>
          <Link href="/contact" className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
      </section>

    </div>
  );
}
