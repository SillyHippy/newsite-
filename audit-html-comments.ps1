#!/usr/bin/env pwsh
Write-Host "🔍 COMPREHENSIVE HTML COMMENT AUDIT" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

Write-Host "🔎 Searching for HTML comment patterns in ALL workflows..." -ForegroundColor Yellow

# Search for HTML comment patterns
$htmlCommentPatterns = @(
    "<!--",
    "-->", 
    "echo.*<.*>.*--",
    "Generated:.*-->"
)

$problemWorkflows = @()

foreach ($pattern in $htmlCommentPatterns) {
    Write-Host "`n🔍 Searching for pattern: $pattern" -ForegroundColor Cyan
    
    $matches = Get-ChildItem ".github/workflows/*.yml" | Select-String -Pattern $pattern -SimpleMatch
    
    foreach ($match in $matches) {
        $file = $match.Filename
        $line = $match.LineNumber
        $content = $match.Line.Trim()
        
        Write-Host "   ❌ $file (line $line): $content" -ForegroundColor Red
        
        if ($problemWorkflows -notcontains $file) {
            $problemWorkflows += $file
        }
    }
}

Write-Host "`n📊 AUDIT RESULTS:" -ForegroundColor Cyan
Write-Host "Problem workflows found: $($problemWorkflows.Count)" -ForegroundColor Yellow

if ($problemWorkflows.Count -gt 0) {
    Write-Host "`n🚨 WORKFLOWS NEEDING FIXES:" -ForegroundColor Red
    foreach ($workflow in $problemWorkflows) {
        Write-Host "   • $workflow" -ForegroundColor Red
    }
} else {
    Write-Host "✅ No HTML comment patterns found!" -ForegroundColor Green
}

Write-Host "`n🔧 Next step: Fix all HTML comments → JSX comments" -ForegroundColor Yellow
