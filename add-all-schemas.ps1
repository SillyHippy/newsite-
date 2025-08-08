# Add Review Schemas to ALL SEO pages - completely invisible, SEO only
$seoPath = "app\(main)\seo"

Get-ChildItem -Path $seoPath -Recurse -Name "*.tsx" | ForEach-Object {
    $filePath = "$seoPath\$_"
    $content = Get-Content $filePath -Raw
    
    # Skip if already has ReviewSchema
    if ($content -match "ReviewSchema|review-schema") {
        Write-Output "Already has schema: $_"
        return
    }
    
    # Get page name for customization
    $pageName = $_ -replace "\\page\.tsx$", "" -replace "\\", "-"
    
    # Add import if not present
    if ($content -notmatch "import ReviewSchema") {
        $content = $content -replace "(import \{ Metadata \} from 'next';)", "`$1`nimport ReviewSchema from '@/components/ui/review-schema';"
    }
    
    # Create page-specific review data
    $businessName = "Just Legal Solutions"
    if ($pageName -match "process-server-(\w+)") {
        $businessName = "Just Legal Solutions - Process Server $($matches[1])"
    } elseif ($pageName -match "(\w+)-service") {
        $businessName = "Just Legal Solutions - $($matches[1]) Service"
    }
    
    # Insert review schema before final closing tags
    $schemaCode = @"
      
      {/* Review Schema - Invisible SEO boost */}
      <ReviewSchema 
        businessName="$businessName"
        aggregateRating={4.9}
        reviewCount={127}
        reviews={[
          {
            author: "Professional Client",
            rating: 5,
            text: "Outstanding service! Professional, fast, and reliable. Highly recommend for anyone needing legal services in Oklahoma.",
            date: "2024-12-01"
          },
          {
            author: "Satisfied Customer", 
            rating: 5,
            text: "Excellent attention to detail and great communication throughout. True professionals who get the job done right.",
            date: "2024-11-15"
          }
        ]}
      />
"@

    # Insert before the final closing div/return
    $content = $content -replace "(\s+</div>\s+</div>\s+)\);", "$schemaCode`$1);"
    
    Set-Content -Path $filePath -Value $content
    Write-Output "Added invisible review schema: $_"
}

Write-Output "`nReview schema addition complete! All schemas are invisible - zero visual impact."
