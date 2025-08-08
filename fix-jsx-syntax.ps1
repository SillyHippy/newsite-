# PowerShell script to fix JSX syntax issues in SEO components
Write-Host "🔧 Fixing JSX Syntax Issues in SEO Components..." -ForegroundColor Yellow

# Get all pages that have SEO optimizations
$allPages = Get-ChildItem -Path "app" -Recurse -Name "page.tsx" | ForEach-Object {
    "app\$_"
} | Where-Object { (Get-Content (Join-Path (Get-Location) $_) -Raw) -match "GoogleSpecificOptimization" }

$fixedCount = 0

foreach ($page in $allPages) {
    $fullPath = Join-Path (Get-Location) $page
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        
        # Fix array syntax issues - Replace PowerShell array syntax with proper JSX
        $content = $content -replace 'serviceTypes=\{\[([^\]]+)\]\}', 'serviceTypes={[$1]}'
        $content = $content -replace 'expertise=\{\[([^\]]+)\]\}', 'expertise={[$1]}'
        $content = $content -replace 'focusKeywords=\{\[([^\]]+)\]\}', 'focusKeywords={[$1]}'
        $content = $content -replace 'primaryKeywords=\{\[([^\]]+)\]\}', 'primaryKeywords={[$1]}'
        $content = $content -replace 'semanticKeywords=\{\[([^\]]+)\]\}', 'semanticKeywords={[$1]}'
        $content = $content -replace 'primaryQuestions=\{\[([^\]]+)\]\}', 'primaryQuestions={[$1]}'
        $content = $content -replace 'conversationalAnswers=\{\[([^\]]+)\]\}', 'conversationalAnswers={[$1]}'
        $content = $content -replace 'serviceArea=\{\[([^\]]+)\]\}', 'serviceArea={[$1]}'
        $content = $content -replace 'additionalServices=\{\[([^\]]+)\]\}', 'additionalServices={[$1]}'
        
        # Remove any malformed arrays and replace with simple strings
        $content = $content -replace 'serviceTypes=\{\["([^"]+)"([^\]]*)\]\}', 'serviceTypes={["$1"]}'
        $content = $content -replace 'expertise=\{\["([^"]+)"([^\]]*)\]\}', 'expertise={["$1"]}'
        $content = $content -replace 'focusKeywords=\{\["([^"]+)"([^\]]*)\]\}', 'focusKeywords={["$1"]}'
        
        # Write the fixed content
        Set-Content -Path $fullPath -Value $content -NoNewline
        
        Write-Host "✅ Fixed JSX syntax in $page" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host "`n🔧 JSX Syntax Fix Complete!" -ForegroundColor Green
Write-Host "Fixed: $fixedCount pages" -ForegroundColor Green
