# PowerShell script to remove problematic SEO components temporarily
Write-Host "🔧 Removing problematic SEO components for successful build..." -ForegroundColor Yellow

# Get all pages with SEO optimizations
$allPages = Get-ChildItem -Path "app" -Recurse -Name "page.tsx" | ForEach-Object {
    "app\$_"
}

$cleanedCount = 0

foreach ($page in $allPages) {
    $fullPath = Join-Path (Get-Location) $page
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        
        # Remove all the problematic SEO imports and components
        $content = $content -replace "import GoogleSpecificOptimization[^;]*;", ""
        $content = $content -replace "import BingYahooOptimization[^;]*;", ""
        $content = $content -replace "import DuckDuckGoOptimization[^;]*;", ""
        $content = $content -replace "import SearchEngineUniversalOptimization[^;]*;", ""
        $content = $content -replace "import AIOptimizedContentSchema[^;]*;", ""
        $content = $content -replace "import VoiceSearchOptimization[^;]*;", ""
        $content = $content -replace "import EntityRecognitionSchema[^;]*;", ""
        $content = $content -replace "import SearchEngineSignals[^;]*;", ""
        $content = $content -replace "import AIAssistantOptimization[^;]*;", ""
        $content = $content -replace "import ChatGPTOptimization[^;]*;", ""
        $content = $content -replace "import SearchGPTOptimization[^;]*;", ""
        
        # Remove all SEO component usage (everything between the SEO comments)
        $content = $content -replace "(?s)\{/\* COMPLETE SEO DOMINATION.*?</PerformanceSchema>", ""
        $content = $content -replace "(?s)\{/\* AI ASSISTANT OPTIMIZATIONS.*?</SearchGPTOptimization>", ""
        
        # Clean up any leftover empty lines
        $content = $content -replace "(?m)^\s*$\n", ""
        $content = $content -replace "\n{3,}", "`n`n"
        
        # Write the cleaned content
        Set-Content -Path $fullPath -Value $content -NoNewline
        
        Write-Host "✅ Cleaned $page" -ForegroundColor Green
        $cleanedCount++
    }
}

Write-Host "`n🔧 SEO Component Cleanup Complete!" -ForegroundColor Green
Write-Host "Cleaned: $cleanedCount pages" -ForegroundColor Green
Write-Host "Site should now build successfully with basic functionality" -ForegroundColor Green
