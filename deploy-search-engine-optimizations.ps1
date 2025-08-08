# PowerShell script to deploy search engine specific optimizations
Write-Host "🔍 Deploying Search Engine Specific Optimizations..." -ForegroundColor Cyan

# Define high-value pages for search engine optimization
$highValuePages = @(
    "app\(main)\page.tsx",
    "app\services\page.tsx", 
    "app\(main)\pricing\page.tsx",
    "app\tulsa-process-server\page.tsx",
    "app\process-server-tulsa\page.tsx",
    "app\courier-services-tulsa\page.tsx"
)

# Search engine optimization imports to add
$searchEngineImports = @'
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
'@

# Search engine optimization components to add before closing </div>
$searchEngineComponents = @'
      <GoogleSpecificOptimization />
      <BingYahooOptimization />
      <DuckDuckGoOptimization />
      <SearchEngineUniversalOptimization />
'@

$enhancedCount = 0
$skippedCount = 0

foreach ($page in $highValuePages) {
    $fullPath = Join-Path (Get-Location) $page
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        
        # Check if already has search engine optimizations
        if ($content -match "GoogleSpecificOptimization|BingYahooOptimization") {
            Write-Host "⏭️  Skipping $page (already has search engine optimizations)" -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        # Add imports after existing imports
        if ($content -match "import.*from.*@/components") {
            $content = $content -replace "(import.*from.*@/components[^;]*;)", "`$1`n$searchEngineImports"
        } else {
            # Add at the beginning if no component imports found
            $content = $searchEngineImports + "`n`n" + $content
        }
        
        # Find the last closing div before export and add components
        $content = $content -replace "(\s*</div>\s*)(export default)", "$searchEngineComponents`n`$1`$2"
        
        # Write the updated content
        Set-Content -Path $fullPath -Value $content -NoNewline
        
        Write-Host "✅ Enhanced $page with search engine optimizations" -ForegroundColor Green
        $enhancedCount++
    } else {
        Write-Host "❌ File not found: $page" -ForegroundColor Red
    }
}

Write-Host "`n🎯 Search Engine Optimization Deployment Complete!" -ForegroundColor Green
Write-Host "Enhanced: $enhancedCount pages" -ForegroundColor Green
Write-Host "Skipped: $skippedCount pages" -ForegroundColor Yellow
Write-Host "`n🔍 Your site now has specific optimizations for:" -ForegroundColor Cyan
Write-Host "   • Google Search (LocalBusiness + Reviews)" -ForegroundColor White
Write-Host "   • Bing & Yahoo (Professional Service Focus)" -ForegroundColor White  
Write-Host "   • DuckDuckGo (Privacy + Quick Answers)" -ForegroundColor White
Write-Host "   • Universal Search Engine Coverage" -ForegroundColor White
Write-Host "`n🚀 This maximizes your visibility across ALL major search engines!" -ForegroundColor Magenta
