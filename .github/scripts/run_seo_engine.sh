#!/bin/bash
set -e

page_created="false"
# Test locations for SEO engine
locations=(
  "broken-arrow,74012" "bixby,74008" "jenks,74037" "owasso,74055"
  "sand-springs,74063" "sapulpa,74066" "glenpool,74033" "catoosa,74015"
  "collinsville,74021" "skiatook,74070" "coweta,74429" "claremore,74017"
  "bartlesville,74003" "nowata,74048" "vinita,74301" "pryor-creek,74361"
  "tahlequah,74464" "muskogee,74401" "wagoner,74467" "stilwell,74960"
  "sallisaw,74955" "okmulgee,74447" "henryetta,74437" "eufaula,74432"
  "mcalester,74501" "durant,74701" "ada,74820" "ardmore,73401"
  "stillwater,74074" "ponca-city,74601" "cushing,74023" "bristow,74010"
  "drumright,74030" "perry,73077" "oklahoma-city,73102" "edmond,73013"
  "norman,73069" "moore,73160" "midwest-city,73110" "del-city,73115"
  "yukon,73099" "mustang,73064" "choctaw,73020" "guthrie,73044"
  "enid,73701" "woodward,73801" "lawton,73501" "duncan,73533"
  "chickasha,73018" "weatherford,73096" "elk-city,73644" "guymon,73942"
)

for item in "${locations[@]}"; do
  IFS=',' read -r location zip <<< "$item"
  city_name=$(echo "$location" | sed 's/-/ /g' | sed -e "s/\b\(.\)/\u\1/g")
  file_path="app/(main)/seo/process-server-$location/page.tsx"

  if [ -f "$file_path" ]; then
    echo "✅ SKIPPING: Page for $city_name already exists."
  else
    echo "🚀 CREATING: New page for $city_name."
    mkdir -p "$(dirname "$file_path")"
    
    # Create Enhanced Page Content
    cat > "$file_path" <<EOF
import { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Process Server in $city_name - Just Legal Solutions',
  description: 'Need a reliable process server in $city_name, Oklahoma? Just Legal Solutions offers fast, professional, and compliant legal document delivery services. Contact us for same-day and rush service.',
};

export default function ProcessServer${city_name// /}Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Process Server in $city_name, Oklahoma</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Fast, Reliable, and Professional Legal Document Delivery Services for $city_name (ZIP: $zip).
          </p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block font-bold text-lg hover:bg-blue-700 transition-colors">
            Call for a Quote: (539) 367-6832
          </a>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Services in $city_name</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Summons and Complaints:</strong> Ensuring proper legal notification for court cases.</li>
              <li><strong>Subpoena Delivery:</strong> Timely delivery for witnesses and legal evidence.</li>
              <li><strong>Eviction Notices:</strong> Handling sensitive landlord-tenant notifications with professionalism.</li>
              <li><strong>Divorce Papers:</strong> Discreet and reliable service for family law matters.</li>
              <li><strong>Small Claims Documents:</strong> Cost-effective service for all small claims court papers.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us in $city_name?</h3>
            <p className="mb-4">
              Our process servers are experts in the local geography of $city_name and maintain full compliance with all Oklahoma state laws. We provide a sworn Affidavit of Service with every successful serve, giving you the court-admissible proof you need.
            </p>
            <p><strong>We guarantee professional handling of your sensitive legal documents.</strong></p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does service take in $city_name?</AccordionTrigger>
              <AccordionContent>
                Standard service in $city_name is typically completed within 3-5 business days. We also offer Rush (72 hours) and Same-Day service for urgent matters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are your rates for serving in $city_name?</AccordionTrigger>
              <AccordionContent>
                Our rates are competitive and transparent. Please visit our pricing page or call us directly for a quote for service in the $city_name area.
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
EOF
    current_time=$(date '+%Y-%m-%d')
    sitemap_entry="  <url>\n    <loc>https://justlegalsolutions.org/seo/process-server-$location/</loc>\n    <lastmod>$current_time</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>"
    
    sitemap_content=$(cat public/sitemap.xml | sed '$d')
    echo -e "$sitemap_content\n$sitemap_entry\n</urlset>" > public/sitemap.xml

    echo "🗺️ Sitemap updated for $city_name."
    page_created="true"
    break
  fi
done

if [ "$page_created" = "false" ]; then
  echo "👍 All location pages already exist. No new pages created."
fi

echo "page_created=$page_created" >> "$GITHUB_OUTPUT"
