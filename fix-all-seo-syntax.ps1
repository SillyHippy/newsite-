# Fix all SEO page syntax errors systematically
$seoPath = "app\seo"
$files = Get-ChildItem -Path $seoPath -Name "*.tsx" -Recurse

Write-Host "Fixing syntax errors in SEO pages..."

foreach ($file in $files) {
    $fullPath = Join-Path $seoPath $file
    $content = Get-Content $fullPath -Raw
    $originalContent = $content
    
    # Fix 1: Incomplete pricing sections with broken div structure
    $pattern1 = '(<div className="grid md:grid-cols-2 gap-8 mb-8">\s*\n\s*<a href="/pricing"[^>]*>[^<]*</a>\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</div>)'
    $replacement1 = '<div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Service Pricing Information
              </h3>
              <p className="text-green-700 mb-4">
                Professional process serving with competitive rates.
              </p>
              <div className="text-center">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                  View Pricing Details
                </a>
              </div>
            </div>
          </div>'
    
    # Fix 2: Missing opening div tags in pricing sections
    $pattern2 = '(<div className="grid md:grid-cols-2 gap-8 mb-8">\s*\n\s*<a href="/pricing")'
    $replacement2 = '<div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Service Pricing Information
              </h3>
              <p className="text-green-700 mb-4">
                Professional process serving with competitive rates.
              </p>
              <div className="text-center">
                <a href="/pricing"'
    
    # Apply fixes
    if ($content -match $pattern1) {
        $content = $content -replace $pattern1, $replacement1
        Write-Host "Fixed broken pricing structure in: $file"
    }
    
    if ($content -match $pattern2) {
        $content = $content -replace $pattern2, $replacement2
        Write-Host "Fixed missing pricing div in: $file"
    }
    
    # Save if changes were made
    if ($content -ne $originalContent) {
        Set-Content $fullPath $content -NoNewline
        Write-Host "Updated: $file"
    }
}

Write-Host "All SEO page syntax fixes completed!"
