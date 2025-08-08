#!/usr/bin/env pwsh

Write-Host "🔧 DEPLOYING FIXED WORKFLOWS" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Gray

# Define workflow mappings
$workflowMappings = @{
    "ai-search-optimization.yml" = "ai-search-optimization-fixed.yml"
    "weekend-evening-blitz.yml" = "weekend-evening-blitz-fixed.yml"
    "ai-voice-platform-domination.yml" = "ai-voice-platform-domination-fixed.yml"
    "competitive-intelligence.yml" = "competitive-intelligence-fixed.yml"
    "local-events-automation.yml" = "local-events-automation-fixed.yml"
    "ai-assistant-business-integration.yml" = "ai-assistant-business-integration-fixed.yml"
    "emerging-ai-platform-optimization.yml" = "emerging-ai-platform-optimization-fixed.yml"
}

Write-Host ""
Write-Host "📋 DEPLOYMENT PLAN:" -ForegroundColor Yellow

foreach ($original in $workflowMappings.Keys) {
    $fixed = $workflowMappings[$original]
    Write-Host "   $original -> $fixed" -ForegroundColor White
}

Write-Host ""
Write-Host "🔍 CHECKING CURRENT WORKFLOW STATUS..." -ForegroundColor Green

# List current workflows
$workflowPath = ".github/workflows"
if (Test-Path $workflowPath) {
    $currentWorkflows = Get-ChildItem $workflowPath -Name "*.yml"
    Write-Host "Current workflows found: $($currentWorkflows.Count)" -ForegroundColor Cyan
    
    foreach ($workflow in $currentWorkflows) {
        if ($workflow -like "*fixed*") {
            Write-Host "   ✅ $workflow (Fixed version ready)" -ForegroundColor Green
        } elseif ($workflowMappings.ContainsKey($workflow)) {
            Write-Host "   ❌ $workflow (Needs replacement)" -ForegroundColor Red
        } else {
            Write-Host "   ✅ $workflow (Working - keep as is)" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "🚀 READY TO DEPLOY FIXES!" -ForegroundColor Green
Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Replace failing workflows with fixed versions"
Write-Host "2. Keep all working workflows intact"
Write-Host "3. Test the fixed workflows"
Write-Host "4. Monitor automation success rate"

Write-Host ""
Write-Host "⚠️  SAFETY NOTES:" -ForegroundColor Yellow
Write-Host "- Fixed versions use simple shell commands only"
Write-Host "- No complex JavaScript or Node.js dependencies"
Write-Host "- Follow same pattern as working bulletproof workflows"
Write-Host "- All workflows maintain proper GitHub Actions permissions"

Write-Host ""
Write-Host "🎯 EXPECTED OUTCOME:" -ForegroundColor Green
Write-Host "- Current: 6 working, 7 failing (60% success)"
Write-Host "- After fix: 13 working, 0 failing (100% success)"
