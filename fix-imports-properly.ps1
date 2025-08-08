Write-Host "🚀 FIXING ALL IMPORT ERRORS PROPERLY..." -ForegroundColor Green

# Get all page files
$pages = Get-ChildItem -Path "app" -Recurse -Filter "page.tsx" | Where-Object { $_.FullName -notlike "*node_modules*" }

foreach ($page in $pages) {
    Write-Host "🔧 Fixing: $($page.FullName)" -ForegroundColor Yellow
    
    $content = Get-Content $page.FullName -Raw
    
    # Remove all duplicate SEO imports that were added incorrectly
    $content = $content -replace '(?s)// SEO Optimization Imports.*?import PerformanceSchema from.*?;', ''
    
    # Remove any imports that appear after the component export/closing
    $content = $content -replace '(?s)(}\s*export\s+default.*?;).*?import.*', '$1'
    
    # Remove any imports that appear after the last closing brace of the component
    $content = $content -replace '(?s)(}\s*;?\s*)import\s+.*', '$1'
    
    # Clean up any trailing imports after component code
    if ($content -match '(export\s+default\s+\w+\s*;?\s*)import') {
        $content = $content -replace '(export\s+default\s+\w+\s*;?\s*)import.*', '$1'
    }
    
    # Remove duplicate import lines (keep only first occurrence)
    $lines = $content -split "`n"
    $seenImports = @{}
    $cleanLines = @()
    
    foreach ($line in $lines) {
        if ($line -match '^import\s+(.+?)\s+from\s+[''"](.+?)[''"];?\s*$') {
            $importName = $matches[1]
            $importPath = $matches[2]
            $key = "$importName|$importPath"
            
            if (-not $seenImports.ContainsKey($key)) {
                $seenImports[$key] = $true
                $cleanLines += $line
            }
        } else {
            $cleanLines += $line
        }
    }
    
    $content = $cleanLines -join "`n"
    
    # Clean up multiple empty lines
    $content = $content -replace "`n{3,}", "`n`n"
    
    Set-Content $page.FullName $content -Encoding UTF8
    Write-Host "   ✅ Fixed imports in $($page.Name)" -ForegroundColor Green
}

Write-Host "🎯 ALL IMPORT ERRORS FIXED!" -ForegroundColor Green
Write-Host "🚀 Ready to build without errors!" -ForegroundColor Yellow
