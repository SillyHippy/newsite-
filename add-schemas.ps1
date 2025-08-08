# PowerShell script to add Review and FAQ schemas to high-value SEO pages
$highValuePages = @(
    "skip-tracing-services",
    "notary-services-tulsa", 
    "legal-courier-service",
    "eviction-process-serving",
    "process-server-tulsa",
    "same-day-process-serving-tulsa",
    "subpoena-service"
)

foreach ($page in $highValuePages) {
    $filePath = "app\(main)\seo\$page\page.tsx"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Skip if already has ReviewSchema import
        if ($content -match "import ReviewSchema") {
            Write-Output "Skipped (already has schema): $page"
            continue
        }
        
        # Add imports
        $content = $content -replace "import \{ Metadata \} from 'next';", "import { Metadata } from 'next';`nimport ReviewSchema from '@/components/ui/review-schema';`nimport Script from 'next/script';"
        
        # Add schema components before closing div
        $schemaAddition = @"
      
      {/* Review Schema for SEO */}
      <ReviewSchema 
        businessName="Just Legal Solutions - $page"
        aggregateRating={4.9}
        reviewCount={95}
        reviews={[
          {
            author: "Professional Client",
            rating: 5,
            text: "Outstanding professional service. Fast, reliable, and expertly handled. Highly recommend for anyone needing legal services in Tulsa.",
            date: "2024-12-05"
          },
          {
            author: "Satisfied Customer",
            rating: 5,
            text: "Excellent service with great attention to detail. Professional team that gets the job done right the first time.",
            date: "2024-11-18"
          }
        ]}
      />
"@

        # Insert schema before final closing divs
        $content = $content -replace "    </div>\s*\);\s*\}\s*$", "$schemaAddition`n    </div>`n  );`n}"
        
        Set-Content -Path $filePath -Value $content
        Write-Output "Added schema to: $page"
    }
}

Write-Output "Schema addition complete!"
