# Complete fix for all remaining corrupted SEO files
$moreLocations = @(
    @{name="drumright"; county="Creek County"; zip="74030"},
    @{name="haskell"; county="Muskogee County"; zip="74436"}, 
    @{name="henryetta"; county="Okmulgee County"; zip="74437"},
    @{name="inola"; county="Rogers County"; zip="74036"},
    @{name="jenks"; county="Tulsa County"; zip="74037"},
    @{name="kiefer"; county="Creek County"; zip="74041"},
    @{name="kellyville"; county="Creek County"; zip="74039"},
    @{name="leonard"; county="Tulsa County"; zip="74043"},
    @{name="lotsee"; county="Tulsa County"; zip="74063"},
    @{name="mannford"; county="Creek County"; zip="74044"},
    @{name="morris"; county="Okmulgee County"; zip="74445"},
    @{name="mounds"; county="Creek County"; zip="74047"},
    @{name="oakhurst"; county="Tulsa County"; zip="74050"},
    @{name="okay"; county="Wagoner County"; zip="74446"},
    @{name="okmulgee"; county="Okmulgee County"; zip="74447"},
    @{name="porter"; county="Wagoner County"; zip="74454"},
    @{name="skiatook"; county="Tulsa County"; zip="74070"},
    @{name="sperry"; county="Tulsa County"; zip="74073"},
    @{name="turley"; county="Tulsa County"; zip="74126"},
    @{name="verdigris"; county="Rogers County"; zip="74019"},
    @{name="wagoner"; county="Wagoner County"; zip="74467"}
)

foreach ($location in $moreLocations) {
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
    if (Test-Path $filePath) {
        Set-Content $filePath $content -NoNewline
        Write-Host "Fixed: $filePath"
    }
}

Write-Host "All remaining corrupted files fixed!"
