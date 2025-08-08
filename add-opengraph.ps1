# PowerShell script to add OpenGraph meta tags to all SEO pages
$seoPath = "app\(main)\seo"
$baseUrl = "https://justlegalsolutions.org"

Get-ChildItem -Path $seoPath -Recurse -Name "*.tsx" | ForEach-Object {
    $filePath = "$seoPath\$_"
    $content = Get-Content $filePath -Raw
    
    # Skip if already has openGraph
    if ($content -match "openGraph:") {
        Write-Output "Skipped (already has OG): $_"
        return
    }
    
    # Extract title and description from existing metadata
    if ($content -match "title: '([^']+)'") {
        $title = $matches[1]
    }
    if ($content -match "description: '([^']+)'") {
        $description = $matches[1]
    }
    
    # Create URL from filename
    $pageSlug = $_ -replace "\\page\.tsx$", "" -replace "\\", "/"
    $pageUrl = "$baseUrl/$pageSlug"
    
    # Shorten description for Twitter (max 200 chars)
    $twitterDesc = if ($description.Length -gt 200) { 
        $description.Substring(0, 197) + "..." 
    } else { 
        $description 
    }
    
    # Create OpenGraph addition
    $ogAddition = @"
  openGraph: {
    title: '$title',
    description: '$twitterDesc',
    url: '$pageUrl',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - $title'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '$title',
    description: '$twitterDesc',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: '$pageUrl'
  },
"@

    # Replace the closing brace of metadata with OG tags + closing brace
    $newContent = $content -replace "  robots: 'index, follow'\s*\};", "  robots: 'index, follow',`n$ogAddition`n};"
    
    Set-Content -Path $filePath -Value $newContent
    Write-Output "Added OpenGraph: $_"
}
