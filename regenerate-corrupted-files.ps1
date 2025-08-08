# Template to regenerate corrupted SEO files
$locations = @(
    @{name="bristow"; county="Creek County"; zip="74010"},
    @{name="catoosa"; county="Rogers County"; zip="74015"}, 
    @{name="claremore"; county="Rogers County"; zip="74017"},
    @{name="collinsville"; county="Tulsa County"; zip="74021"},
    @{name="coweta"; county="Wagoner County"; zip="74429"}
)

foreach ($location in $locations) {
    $locationName = $location.name
    $properName = (Get-Culture).TextInfo.ToTitleCase($locationName)
    $county = $location.county
    $zip = $location.zip
    
    $content = @"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server $properName | $county Legal Document Service',
  description: 'Professional process server in $properName, $county. Expert legal document delivery throughout Oklahoma. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server $properName', '$properName process serving', '$county legal service', '$zip process server', 'Oklahoma legal'],
  robots: 'index, follow'
};

export default function ProcessServer$properName() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in $properName, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Serving:</strong> $properName & $county
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides professional process serving throughout $properName and $county. 
            Our experienced team delivers all legal documents quickly and efficiently, serving the $properName 
            community with reliable, professional legal document delivery services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Service Pricing Information
              </h3>
              <p className="text-green-700 mb-4">
                Professional process serving with competitive rates for $properName area.
              </p>
              <div className="text-center">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                  View Pricing Details
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Professional Process Serving in ${properName}:</strong> This page highlights our 
              comprehensive process serving capabilities in ${properName}, ${county}. Updated daily for current 
              service areas and pricing information. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"@

    $filePath = "app\seo\process-server-$locationName\page.tsx"
    Set-Content $filePath $content -NoNewline
    Write-Host "Regenerated: $filePath"
}

Write-Host "All corrupted files regenerated!"
