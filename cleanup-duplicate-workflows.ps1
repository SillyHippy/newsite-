#!/usr/bin/env pwsh
Write-Host "🧹 WORKFLOW CLEANUP - REMOVING DUPLICATES" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

# Define the working workflows to KEEP
$keepWorkflows = @(
    "seo-bulletproof.yml",
    "voice-bulletproof.yml", 
    "contact-bulletproof.yml",
    "content-freshness.yml",
    "ai-search-optimization.yml",
    "weekend-evening-blitz.yml",
    "ai-voice-platform-domination.yml",
    "competitive-intelligence.yml",
    "local-events-automation.yml",
    "ai-assistant-business-integration.yml",
    "emerging-ai-platform-optimization.yml"
)

# Get all workflow files
$workflowDir = ".github/workflows"
$allWorkflows = Get-ChildItem -Path $workflowDir -Filter "*.yml" | Where-Object { $_.Name -notlike "deploy.yml" -and $_.Name -notlike "nextjs.yml" }

Write-Host "📋 Found $($allWorkflows.Count) total workflow files" -ForegroundColor Yellow

$keptCount = 0
$removedCount = 0

foreach ($workflow in $allWorkflows) {
    if ($keepWorkflows -contains $workflow.Name) {
        Write-Host "✅ KEEPING: $($workflow.Name)" -ForegroundColor Green
        $keptCount++
    } else {
        Write-Host "🗑️  REMOVING: $($workflow.Name)" -ForegroundColor Red
        Remove-Item -Path $workflow.FullName -Force
        $removedCount++
    }
}

Write-Host "`n📊 CLEANUP SUMMARY:" -ForegroundColor Cyan
Write-Host "✅ Workflows kept: $keptCount" -ForegroundColor Green
Write-Host "🗑️  Workflows removed: $removedCount" -ForegroundColor Red
Write-Host "🎯 Working workflows ready: $($keepWorkflows.Count)" -ForegroundColor Yellow

Write-Host "`n🚀 Ready to commit changes..." -ForegroundColor Green
git add .github/workflows/
git commit -m "🧹 Clean up duplicate workflows - keep only working versions"

Write-Host "✨ Cleanup complete! Only working workflows remain." -ForegroundColor Green
