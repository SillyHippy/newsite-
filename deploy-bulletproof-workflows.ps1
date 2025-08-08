#!/usr/bin/env pwsh

Write-Host "🛠️ EMERGENCY WORKFLOW FIX - DEPLOYING BULLETPROOF VERSIONS..." -ForegroundColor Cyan

# Create backup directory for problematic workflows
$backupDir = ".github/workflows-backup"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force
    Write-Host "📁 Created backup directory: $backupDir" -ForegroundColor Green
}

# List of complex workflows that are failing
$failingWorkflows = @(
    "ai-search-optimization.yml",
    "ai-voice-platform-domination.yml", 
    "competitive-intelligence.yml",
    "competitor-domination.yml",
    "platform-supremacy.yml",
    "emerging-ai-platform-optimization.yml",
    "weekend-evening-blitz.yml",
    "rapid-ranking-boost.yml"
)

Write-Host ""
Write-Host "🔄 TEMPORARILY DISABLING PROBLEMATIC WORKFLOWS..." -ForegroundColor Yellow

foreach ($workflow in $failingWorkflows) {
    $workflowPath = ".github/workflows/$workflow"
    $backupPath = "$backupDir/$workflow"
    
    if (Test-Path $workflowPath) {
        # Move to backup and disable
        Move-Item $workflowPath $backupPath -Force
        Write-Host "   ✅ Backed up and disabled: $workflow" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "🎯 BULLETPROOF WORKFLOWS NOW ACTIVE:" -ForegroundColor Green
Write-Host "   ✅ seo-bulletproof.yml - Simple SEO updates" -ForegroundColor Green
Write-Host "   ✅ voice-bulletproof.yml - Basic voice search optimization" -ForegroundColor Green  
Write-Host "   ✅ contact-bulletproof.yml - Contact consistency checks" -ForegroundColor Green

Write-Host ""
Write-Host "🚀 READY TO COMMIT AND TEST BULLETPROOF WORKFLOWS!" -ForegroundColor Cyan
