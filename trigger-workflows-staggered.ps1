#!/usr/bin/env pwsh
Write-Host "🎯 STAGGERED WORKFLOW EXECUTION" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host "⚡ Running workflows in small batches to prevent conflicts" -ForegroundColor Yellow

# Check for GitHub token
if (-not $env:GITHUB_TOKEN) {
    Write-Host "❌ GitHub Token Required" -ForegroundColor Red
    Write-Host "Set: `$env:GITHUB_TOKEN = 'your_token'" -ForegroundColor Yellow
    exit 1
}

$repo = "SillyHippy/BOLT-SITE"
$apiBase = "https://api.github.com/repos/$repo/actions/workflows"

# Define workflow batches (to prevent conflicts)
$batch1 = @(
    @{name="SEO Automation (Bulletproof)"; file="seo-bulletproof.yml"}
    @{name="Voice Search (Bulletproof)"; file="voice-bulletproof.yml"}
)

$batch2 = @(
    @{name="Contact Consistency (Bulletproof)"; file="contact-bulletproof.yml"}
    @{name="Content Freshness"; file="content-freshness.yml"}
)

$batch3 = @(
    @{name="AI Search Optimization"; file="ai-search-optimization.yml"}
    @{name="Weekend Evening Blitz"; file="weekend-evening-blitz.yml"}
)

$batch4 = @(
    @{name="AI Voice Platform"; file="ai-voice-platform-domination.yml"}
    @{name="Competitive Intelligence"; file="competitive-intelligence.yml"}
)

$batch5 = @(
    @{name="Local Events"; file="local-events-automation.yml"}
    @{name="AI Assistant Integration"; file="ai-assistant-business-integration.yml"}
    @{name="Emerging AI Platform"; file="emerging-ai-platform-optimization.yml"}
)

function Trigger-WorkflowBatch {
    param($batch, $batchName, $delaySeconds = 60)
    
    Write-Host "`n🚀 BATCH: $batchName" -ForegroundColor Green
    Write-Host "=" * 40 -ForegroundColor Green
    
    foreach ($workflow in $batch) {
        Write-Host "⏳ Triggering: $($workflow.name)" -ForegroundColor Yellow
        
        $headers = @{
            "Authorization" = "token $env:GITHUB_TOKEN"
            "Accept" = "application/vnd.github.v3+json"
        }
        
        try {
            $response = Invoke-RestMethod -Uri "$apiBase/$($workflow.file)/dispatches" -Method POST -Headers $headers -Body '{"ref":"main"}' -ContentType "application/json"
            Write-Host "   ✅ Success: $($workflow.name)" -ForegroundColor Green
            Start-Sleep -Seconds 10  # Small delay between individual workflows
        }
        catch {
            Write-Host "   ❌ Failed: $($workflow.name) - $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    if ($delaySeconds -gt 0) {
        Write-Host "`n⏱️  Waiting $delaySeconds seconds before next batch..." -ForegroundColor Cyan
        Start-Sleep -Seconds $delaySeconds
    }
}

# Execute batches with delays
Trigger-WorkflowBatch -batch $batch1 -batchName "HIGH PRIORITY BULLETPROOF" -delaySeconds 90
Trigger-WorkflowBatch -batch $batch2 -batchName "CONTENT & CONTACT" -delaySeconds 90  
Trigger-WorkflowBatch -batch $batch3 -batchName "AI OPTIMIZATION" -delaySeconds 90
Trigger-WorkflowBatch -batch $batch4 -batchName "PLATFORM DOMINATION" -delaySeconds 90
Trigger-WorkflowBatch -batch $batch5 -batchName "ADVANCED INTEGRATIONS" -delaySeconds 0

Write-Host "`n🎉 ALL BATCHES TRIGGERED!" -ForegroundColor Green
Write-Host "📊 Monitor: https://github.com/SillyHippy/BOLT-SITE/actions" -ForegroundColor Cyan
Write-Host "⏱️  Total execution time: ~7-8 minutes with proper spacing" -ForegroundColor Yellow
