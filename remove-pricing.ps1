# Remove pricing sections from all SEO pages
Get-ChildItem -Path "app\seo" -Recurse -Name "*.tsx" | ForEach-Object { 
    $file = "app\seo\$_"
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Look for the pricing section pattern and remove it
        $pricingPattern = '(?s)<div class="bg-green-50 rounded-lg p-6">\s*<h2[^>]*>.*?Service Pricing.*?</h2>.*?<div class="space-y-3">.*?Emergency.*?\$100.*?</div>\s*</div>\s*</div>'
        
        if ($content -match $pricingPattern) {
            $content = $content -replace $pricingPattern, '</div>'
            $content | Set-Content $file -NoNewline
            Write-Host "Removed pricing from: $file"
        }
    }
}
