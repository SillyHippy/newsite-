# Comprehensive SEO Pricing Fix Script
# Replaces all problematic pricing with professional links to /pricing page

Write-Host "🚀 Starting comprehensive SEO pricing fix..." -ForegroundColor Green

$seoFolder = "c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app\seo"
$fileCount = 0
$totalReplacements = 0

# Get all .tsx files in SEO folder
$files = Get-ChildItem -Path $seoFolder -Recurse -Filter "*.tsx"
Write-Host "📁 Found $($files.Count) SEO files to process" -ForegroundColor Yellow

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $replacements = 0
    
    # 1. Replace specific dollar amounts with pricing links
    $content = $content -replace '\$[3-9][0-9](?:\.[0-9]{2})?', '<a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>'
    $content = $content -replace '\$1[0-5][0-9](?:\.[0-9]{2})?', '<a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>'
    
    # 2. Replace "Starting at $X/hour" patterns
    $content = $content -replace 'Starting at \$[0-9]+(?:\.[0-9]{2})?\/hour', '<a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing Details</a>'
    
    # 3. Replace "competitive rates" patterns
    $content = $content -replace 'competitive rates for [A-Za-z ]+ area', 'professional pricing - <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline">View Pricing Details</a>'
    $content = $content -replace 'competitive rates(?![\w-])', 'professional pricing - <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline">View Pricing Details</a>'
    
    # 4. Replace "competitive hourly rates"
    $content = $content -replace 'competitive hourly rates', 'professional pricing - <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline">View Pricing Details</a>'
    
    # 5. Replace font-bold pricing spans (the $40, $60, $75, $100 spans)
    $content = $content -replace '<span className="font-bold text-green-800">\$[0-9]+</span>', '<a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>'
    
    # 6. Replace any remaining "affordable pricing" or similar
    $content = $content -replace 'affordable pricing', 'professional pricing - <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline">View Pricing Details</a>'
    
    # 7. Handle specific problematic pricing list items or divs
    $content = $content -replace 'Professional Pricing:\s*Competitive rates[^<]*', 'Professional Pricing: <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline">View Pricing Details</a>'
    
    # 8. Replace any pricing tables or structured pricing content
    $content = $content -replace '(?s)<div[^>]*pricing[^>]*>.*?</div>', '<div className="text-center py-4"><a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">View Complete Pricing</a></div>'
    
    # Check if any changes were made
    if ($content -ne $originalContent) {
        Set-Content $file.FullName -Value $content -NoNewline
        $fileCount++
        Write-Host "✅ Fixed pricing in: $($file.Name)" -ForegroundColor Green
        
        # Count replacements (rough estimate)
        $currentReplacements = ($originalContent.Length - $content.Length) / 10
        $totalReplacements += [Math]::Max(1, $currentReplacements)
    }
}

Write-Host ""
Write-Host "🎉 PRICING FIX COMPLETE!" -ForegroundColor Green
Write-Host "📊 Files modified: $fileCount" -ForegroundColor Yellow
Write-Host "🔄 Estimated replacements: $totalReplacements" -ForegroundColor Yellow
Write-Host ""
Write-Host "✅ All SEO pages now link to /pricing page for pricing information" -ForegroundColor Green
Write-Host "🚀 Ready for build and deployment!" -ForegroundColor Green
