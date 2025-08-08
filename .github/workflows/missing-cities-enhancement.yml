const fs = require('fs');
const path = require('path');

// --- Data Sources ---

const cityData = [
    // Tulsa Metro
    { name: "Tulsa", lat: 36.1540, lon: -95.9928, county: "Tulsa" },
    { name: "Broken Arrow", lat: 36.0451, lon: -95.7897, county: "Tulsa" },
    { name: "Jenks", lat: 36.0234, lon: -95.9769, county: "Tulsa" },
    { name: "Bixby", lat: 35.9612, lon: -95.8817, county: "Tulsa" },
    { name: "Owasso", lat: 36.2912, lon: -95.8572, county: "Tulsa" },
    { name: "Sand Springs", lat: 36.1398, lon: -96.1094, county: "Tulsa" },
    { name: "Glenpool", lat: 35.9934, lon: -96.0089, county: "Tulsa" },
    { name: "Sapulpa", lat: 36.0023, lon: -96.1075, county: "Creek" },
    { name: "Catoosa", lat: 36.1884, lon: -95.7483, county: "Rogers" },
    { name: "Collinsville", lat: 36.3684, lon: -95.8369, county: "Tulsa" },
    { name: "Claremore", lat: 36.3131, lon: -95.6175, county: "Rogers" },
    { name: "Coweta", lat: 36.0526, lon: -95.6608, county: "Wagoner" },
    { name: "Skiatook", lat: 36.3401, lon: -96.0003, county: "Tulsa" },
    // OKC Metro
    { name: "Oklahoma City", lat: 35.4676, lon: -97.5164, county: "Oklahoma" },
    { name: "Edmond", lat: 35.6528, lon: -97.4781, county: "Oklahoma" },
    { name: "Norman", lat: 35.2226, lon: -97.4395, county: "Cleveland" },
    { name: "Moore", lat: 35.3395, lon: -97.4867, county: "Cleveland" },
    { name: "Midwest City", lat: 35.4623, lon: -97.3884, county: "Oklahoma" },
    { name: "Yukon", lat: 35.5037, lon: -97.7567, county: "Canadian" },
    { name: "Shawnee", lat: 35.3290, lon: -96.9245, county: "Pottawatomie" },
    // Other Major OK Cities
    { name: "Lawton", lat: 34.6087, lon: -98.3903, county: "Comanche" },
    { name: "Muskogee", lat: 35.7479, lon: -95.3697, county: "Muskogee" },
    { name: "Bartlesville", lat: 36.7476, lon: -95.9780, county: "Washington" },
    { name: "Pryor Creek", lat: 36.3079, lon: -95.3169, county: "Mayes" },
    { name: "Okmulgee", lat: 35.6226, lon: -95.9689, county: "Okmulgee" },
    { name: "Tahlequah", lat: 35.9154, lon: -94.9697, county: "Cherokee" },
    { name: "Stillwater", lat: 36.1156, lon: -97.0584, county: "Payne" },
    { name: "Wagoner", lat: 35.9576, lon: -95.3783, county: "Wagoner" },
    { name: "Ardmore", lat: 34.1737, lon: -97.1436, county: "Carter" },
    { name: "Ponca City", lat: 36.7061, lon: -97.0856, county: "Kay" },
];

const countyCourtData = {
    "Tulsa": { name: "Tulsa County Courthouse", address: "500 S Denver Ave, Tulsa, OK 74103", phone: "(918) 596-5000", website: "https://www.oscn.net/dockets/search.aspx?db=tulsa" },
    "Rogers": { name: "Rogers County Courthouse", address: "200 S Lynn Riggs Blvd, Claremore, OK 74017", phone: "(918) 923-4961", website: "https://www.oscn.net/dockets/search.aspx?db=rogers" },
    "Wagoner": { name: "Wagoner County Courthouse", address: "307 E Cherokee St, Wagoner, OK 74467", phone: "(918) 485-2146", website: "https://www.oscn.net/dockets/search.aspx?db=wagoner" },
    "Creek": { name: "Creek County Courthouse", address: "222 E Dewey Ave, Sapulpa, OK 74066", phone: "(918) 224-3529", website: "https://www.oscn.net/dockets/search.aspx?db=creek" },
    "Muskogee": { name: "Muskogee County Courthouse", address: "216 W Okmulgee Ave, Muskogee, OK 74401", phone: "(918) 682-7873", website: "https://www.oscn.net/dockets/search.aspx?db=muskogee" },
    "Washington": { name: "Washington County Courthouse", address: "420 S Johnstone Ave, Bartlesville, OK 74003", phone: "(918) 337-2870", website: "https://www.oscn.net/dockets/search.aspx?db=washington" },
    "Mayes": { name: "Mayes County Courthouse", address: "1 Court St, Pryor, OK 74361", phone: "(918) 825-2185", website: "https://www.oscn.net/dockets/search.aspx?db=mayes" },
    "Okmulgee": { name: "Okmulgee County Courthouse", address: "314 W 7th St, Okmulgee, OK 74447", phone: "(918) 756-3062", website: "https://www.oscn.net/dockets/search.aspx?db=okmulgee" },
    "Cherokee": { name: "Cherokee County Courthouse", address: "213 W Delaware St, Tahlequah, OK 74464", phone: "(918) 456-2271", website: "https://www.oscn.net/dockets/search.aspx?db=cherokee" },
    "Payne": { name: "Payne County Courthouse", address: "606 S Husband St, Stillwater, OK 74074", phone: "(405) 372-4774", website: "https://www.oscn.net/dockets/search.aspx?db=payne" },
    "Oklahoma": { name: "Oklahoma County Courthouse", address: "320 Robert S Kerr Ave, Oklahoma City, OK 73102", phone: "(405) 713-1705", website: "https://www.oscn.net/dockets/search.aspx?db=oklahoma" },
    "Cleveland": { name: "Cleveland County Courthouse", address: "200 S Peters Ave, Norman, OK 73069", phone: "(405) 321-6420", website: "https://www.oscn.net/dockets/search.aspx?db=cleveland" },
    "Canadian": { name: "Canadian County Courthouse", address: "301 N Choctaw Ave, El Reno, OK 73036", phone: "(405) 262-1070", website: "https://www.oscn.net/dockets/search.aspx?db=canadian" },
    "Pottawatomie": { name: "Pottawatomie County Courthouse", address: "331 N Broadway Ave, Shawnee, OK 74801", phone: "(405) 273-3654", website: "https://www.oscn.net/dockets/search.aspx?db=pottawatomie" },
    "Comanche": { name: "Comanche County Courthouse", address: "315 SW 5th St, Lawton, OK 73501", phone: "(580) 355-4017", website: "https://www.oscn.net/dockets/search.aspx?db=comanche" },
    "Carter": { name: "Carter County Courthouse", address: "20 1st Ave SW, Ardmore, OK 73401", phone: "(580) 223-5253", website: "https://www.oscn.net/dockets/search.aspx?db=carter" },
    "Kay": { name: "Kay County Courthouse", address: "201 S Main St, Newkirk, OK 74647", phone: "(580) 362-2571", website: "https://www.oscn.net/dockets/search.aspx?db=kay" },
};

const pagesDir = path.join(__dirname, '../app/(main)/seo');

/**
 * Gets a list of all existing page slugs by reading directory names.
 */
function getExistingPageSlugs() {
    if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
    }
    return fs.readdirSync(pagesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}

/**
 * Generates the high-quality SEO page content for a given city.
 */
function generateCityPage(city) {
    const pageSlug = `${city.name.toLowerCase().replace(/ /g, '-')}-process-server`;
    const cityPageDir = path.join(pagesDir, pageSlug);
    
    if (fs.existsSync(cityPageDir)) {
        return; // Skip if directory already exists
    }

    fs.mkdirSync(cityPageDir, { recursive: true });
    const pagePath = path.join(cityPageDir, 'page.tsx');

    const componentName = city.name.replace(/[^a-zA-Z0-9]/g, '') + 'ProcessServerPage';
    const mapEmbedUrl = `https://maps.google.com/maps?q=${city.name.replace(/ /g, '+')}+OK&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    const countyPageUrl = `/seo/${city.county.toLowerCase().replace(/ /g, '-')}-county-process-server`;

    const content = `
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from '@/components/JsonLd';

const countyCourtData = ${JSON.stringify(countyCourtData, null, 2)};

export const metadata: Metadata = {
  title: '${city.name} Process Server | Reliable Process Serving in ${city.name}, OK',
  description: 'Need a licensed process server in ${city.name}, OK? We offer fast, affordable, and reliable service of process for all legal documents in ${city.name} and ${city.county} County.',
  keywords: ['${city.name} process server', 'process server ${city.name}', 'process server in ${city.name}', '${city.name} ok processor', 'legal document delivery ${city.name}'],
};

export default function ${componentName}() {
  const courtInfo = countyCourtData['${city.county}'];
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of legal documents do you serve in ${city.name}, OK?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our experienced ${city.name} process servers handle all types of legal documents, including summons, complaints, subpoenas, eviction notices, and family court papers. We ensure every service is performed according to Oklahoma state law." }
      },
      {
        "@type": "Question",
        "name": "How quickly can you serve documents in ${city.name}?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer multiple service levels in ${city.name}, including standard (3-5 days), rush (24-48 hours), and same-day service for urgent matters. Our local process servers in ${city.name} are ready to meet your deadlines." }
      },
      {
        "@type": "Question",
        "name": "What areas in ${city.county} County do you cover?",
        "acceptedAnswer": { "@type": "Answer", "text": "We serve all of ${city.name} and the entirety of ${city.county} County. Whether the service is in a dense urban area or a rural location, our servers are equipped to handle it." }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Process Server in ${city.name}, OK</h1>
        <p className="text-xl text-muted-foreground mb-6">Serving ${city.name} and greater <Link href="${countyPageUrl}" className="underline">${city.county} County</Link>.</p>
        <div className="flex justify-center gap-4">
          <Button asChild><Link href="/pricing">View Pricing</Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our ${city.name} Process Server?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card><CardHeader><CardTitle>Local Expertise</CardTitle></CardHeader><CardContent><p>Our process servers have extensive knowledge of ${city.name}, ensuring prompt and successful service.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Speed and Efficiency</CardTitle></CardHeader><CardContent><p>We offer rush and same-day services in ${city.name} to meet your tight deadlines.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Proof of Service</CardTitle></CardHeader><CardContent><p>You will receive a notarized affidavit of service promptly after completion for your records and court filings.</p></CardContent></Card>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mb-12 items-start">
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{courtInfo ? courtInfo.name : \`${city.county} County Courthouse\`}</h3>
            {courtInfo ? (
                <>
                    <p>{courtInfo.address}</p>
                    <p>{courtInfo.phone}</p>
                    <Button asChild variant="link" className="px-0"><a href={courtInfo.website} target="_blank" rel="noopener noreferrer">Visit Court Website</a></Button>
                </>
            ) : <p>Courthouse information coming soon.</p>}
        </div>
        <div><iframe width="100%" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src="${mapEmbedUrl}"></iframe></div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions for ${city.name} Process Serving</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.mainEntity.map((faq, index) => (
            <AccordionItem value={\`item-\${index + 1}\`} key={index}>
              <AccordionTrigger>{faq.name}</AccordionTrigger>
              <AccordionContent>{faq.acceptedAnswer.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-6">Ready to have your legal documents served in ${city.name}? Contact us now for a free quote.</p>
          <Button asChild size="lg"><Link href="/contact">Contact a ${city.name} Process Server</Link></Button>
      </section>
    </div>
  );
}
`;
    fs.writeFileSync(pagePath, content.trim());
    console.log(`✅ Created city page for ${city.name}`);
}

/**
 * Generates a high-quality county hub page.
 */
function generateCountyPage(county, citiesInCounty) {
    const pageSlug = `${county.toLowerCase().replace(/ /g, '-')}-county-process-server`;
    const countyPageDir = path.join(pagesDir, pageSlug);

    if (fs.existsSync(countyPageDir)) {
        return; // Silently skip if it already exists.
    }
    
    fs.mkdirSync(countyPageDir, { recursive: true });
    const pagePath = path.join(countyPageDir, 'page.tsx');

    const componentName = county.replace(/[^a-zA-Z0-9]/g, '') + 'CountyProcessServerPage';
    
    const cityLinks = citiesInCounty.map(city => {
        const citySlug = `${city.name.toLowerCase().replace(/ /g, '-')}-process-server`;
        return `<li><Link href="/seo/${citySlug}" className="underline">${city.name}</Link></li>`;
    }).join('');

    const content = `
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const countyCourtData = ${JSON.stringify(countyCourtData, null, 2)};

export const metadata: Metadata = {
  title: '${county} County Process Server | Serving All of ${county} County, OK',
  description: 'Professional process server for all cities in ${county} County, OK. We provide reliable and fast service of process for attorneys, businesses, and individuals.',
  keywords: ['${county} county process server', 'process server ${county} county', 'oklahoma process server ${county} county'],
};

export default function ${componentName}() {
  const courtInfo = countyCourtData['${county}'];
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">${county} County Process Server</h1>
        <p className="text-xl text-muted-foreground mb-6">Your trusted partner for legal document delivery throughout ${county} County, Oklahoma.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Complete Coverage of ${county} County</h2>
          <p className="mb-4">We serve every city, town, and rural area within ${county} County. Our local process servers have the expertise to ensure your legal documents are served quickly and according to all legal requirements.</p>
          <Button asChild><Link href="/contact">Request Service in ${county} County</Link></Button>
        </div>
        <Card>
          <CardHeader><CardTitle>Cities We Serve in ${county} County</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
              ${cityLinks}
            </ul>
          </CardContent>
        </Card>
      </section>

      {courtInfo && (
        <section className="bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">{courtInfo.name}</h3>
          <p>{courtInfo.address}</p>
          <p>{courtInfo.phone}</p>
          <Button asChild variant="link"><a href={courtInfo.website} target="_blank" rel="noopener noreferrer">Visit Court Website</a></Button>
        </section>
      )}
    </div>
  );
}
`;
    fs.writeFileSync(pagePath, content.trim());
    console.log(`✅ Created county hub page for ${county} County`);
}

/**
 * Main function to run the script.
 */
function main() {
    const existingPageSlugs = getExistingPageSlugs();
    const citiesByCounty = {};

    cityData.forEach(city => {
        if (!citiesByCounty[city.county]) {
            citiesByCounty[city.county] = [];
        }
        citiesByCounty[city.county].push(city);
    });

    let newPagesCreated = 0;
    const pagesToCreate = [];

    // Determine which county pages are missing
    for (const county in citiesByCounty) {
        const countySlug = `${county.toLowerCase().replace(/ /g, '-')}-county-process-server`;
        if (!existingPageSlugs.includes(countySlug)) {
            pagesToCreate.push({ type: 'county', county, cities: citiesByCounty[county] });
        }
    }

    // Determine which city pages are missing
    cityData.forEach(city => {
        const citySlug = `${city.name.toLowerCase().replace(/ /g, '-')}-process-server`;
        if (!existingPageSlugs.includes(citySlug)) {
            pagesToCreate.push({ type: 'city', city });
        }
    });

    if (pagesToCreate.length === 0) {
        console.log("🎉 All city and county pages are already generated. No new pages to create.");
        return;
    }

    // Limit the number of pages created in a single run
    const batch = pagesToCreate.slice(0, 2); // Create 2 pages per run

    batch.forEach(item => {
        if (item.type === 'county') {
            generateCountyPage(item.county, item.cities);
        } else {
            generateCityPage(item.city);
        }
        newPagesCreated++;
    });

    console.log(`🚀 Finished generating ${newPagesCreated} new pages.`);
}

main();
