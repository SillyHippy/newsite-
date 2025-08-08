# Fix syntax errors in SEO pages
$seoFiles = Get-ChildItem -Path "app\seo" -Filter "*.tsx" -Recurse

foreach ($file in $seoFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Pattern 1: Fix incomplete pricing sections with missing opening divs
    $pattern1 = '(\s*)(<div className="grid md:grid-cols-2 gap-8 mb-8">\s*\n\s*<a href="/pricing")'
    $replacement1 = '$1$2
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Service Pricing Information
              </h3>
              <p className="text-green-700 mb-4">
                Professional process serving with competitive rates.
              </p>
              <div className="text-center">
                <a href="/pricing"'
    
    # Pattern 2: Fix incomplete pricing sections where div structure is broken
    $pattern2 = '(\s*<div className="grid md:grid-cols-2 gap-8 mb-8">\s*\n\s*<a href="/pricing"[^>]*>[^<]*</a>\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</div>)'
    $replacement2 = '$1
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
    
    # Apply replacements
    $content = $content -replace $pattern1, $replacement1
    $content = $content -replace $pattern2, $replacement2
    
    # Check if changes were made
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Fixed: $($file.FullName)"
    }
}

Write-Host "Syntax error fixes completed!"
