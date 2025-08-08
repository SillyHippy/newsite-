#!/usr/bin/env pwsh

Write-Host "🚀 AUTOMATED WORKFLOW TESTING & EXECUTION SUITE" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Gray

# Check if GitHub CLI is installed
if (!(Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI not found. Installing via winget..." -ForegroundColor Red
    winget install --id GitHub.cli
    Write-Host "✅ GitHub CLI installed. Please restart PowerShell and run this script again." -ForegroundColor Green
    exit
}

# List of all workflows to test and trigger
$workflows = @(
    @{Name="SEO Automation (Bulletproof)"; File="seo-bulletproof.yml"; Priority="High"}
    @{Name="Voice Search Optimization (Bulletproof)"; File="voice-bulletproof.yml"; Priority="High"}
    @{Name="Contact Consistency (Bulletproof)"; File="contact-bulletproof.yml"; Priority="High"}
    @{Name="AI Search Optimization (Fixed)"; File="ai-search-optimization.yml"; Priority="Medium"}
    @{Name="Weekend Evening Blitz (Fixed)"; File="weekend-evening-blitz.yml"; Priority="Medium"}
    @{Name="AI Voice Platform Domination (Fixed)"; File="ai-voice-platform-domination.yml"; Priority="Medium"}
    @{Name="Competitive Intelligence (Fixed)"; File="competitive-intelligence.yml"; Priority="Low"}
    @{Name="Local Events Automation (Fixed)"; File="local-events-automation.yml"; Priority="Low"}
    @{Name="AI Assistant Integration (Fixed)"; File="ai-assistant-business-integration.yml"; Priority="Low"}
    @{Name="Emerging AI Platform (Fixed)"; File="emerging-ai-platform-optimization.yml"; Priority="Low"}
    @{Name="Contact Info Consistency Fix"; File="contact-consistency-fix.yml"; Priority="High"}
    @{Name="Content Freshness & Ranking Boost"; File="content-freshness.yml"; Priority="Medium"}
    @{Name="AI Voice Search Domination"; File="voice-search-optimization.yml"; Priority="Medium"}
)

Write-Host ""
Write-Host "🔍 STEP 1: LOCAL WORKFLOW VALIDATION" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Gray

foreach ($workflow in $workflows) {
    $filePath = ".github\workflows\$($workflow.File)"
    if (Test-Path $filePath) {
        Write-Host "✅ $($workflow.Name)" -ForegroundColor Green
        
        # Basic syntax validation
        $content = Get-Content $filePath -Raw
        if ($content -match "on:" -and $content -match "jobs:" -and $content -match "runs-on:") {
            Write-Host "   ✓ Valid YAML structure" -ForegroundColor DarkGreen
        } else {
            Write-Host "   ⚠️  Potential YAML structure issues" -ForegroundColor Yellow
        }
        
        # Check for proper permissions
        if ($content -match "permissions:") {
            Write-Host "   ✓ Permissions defined" -ForegroundColor DarkGreen
        } else {
            Write-Host "   ⚠️  No permissions defined" -ForegroundColor Yellow
        }
        
    } else {
        Write-Host "❌ $($workflow.Name) - File not found!" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host ""
Write-Host "🚀 STEP 2: REMOTE WORKFLOW TRIGGERING" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Gray

# Function to trigger workflow
function Trigger-Workflow {
    param($WorkflowFile, $WorkflowName)
    
    Write-Host "🎯 Triggering: $WorkflowName" -ForegroundColor Cyan
    
    try {
        # Trigger the workflow
        $result = gh workflow run $WorkflowFile 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "   ✅ Successfully triggered!" -ForegroundColor Green
            
            # Wait a moment and check status
            Start-Sleep -Seconds 3
            $runs = gh run list --workflow=$WorkflowFile --limit=1 --json status,conclusion,createdAt | ConvertFrom-Json
            
            if ($runs.Count -gt 0) {
                $latestRun = $runs[0]
                Write-Host "   📊 Status: $($latestRun.status)" -ForegroundColor White
                if ($latestRun.conclusion) {
                    Write-Host "   🏁 Conclusion: $($latestRun.conclusion)" -ForegroundColor White
                }
            }
        } else {
            Write-Host "   ❌ Failed to trigger: $result" -ForegroundColor Red
        }
    } catch {
        Write-Host "   ❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host ""
}

# Check if authenticated with GitHub
Write-Host "🔐 Checking GitHub authentication..." -ForegroundColor Cyan
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not authenticated with GitHub. Please run: gh auth login" -ForegroundColor Red
    exit
}
Write-Host "✅ GitHub authentication verified" -ForegroundColor Green
Write-Host ""

# Trigger workflows by priority
$priorities = @("High", "Medium", "Low")

foreach ($priority in $priorities) {
    Write-Host "🎯 TRIGGERING $priority PRIORITY WORKFLOWS" -ForegroundColor Magenta
    Write-Host "=" * 50 -ForegroundColor Gray
    
    $priorityWorkflows = $workflows | Where-Object { $_.Priority -eq $priority }
    
    foreach ($workflow in $priorityWorkflows) {
        if (Test-Path ".github\workflows\$($workflow.File)") {
            Trigger-Workflow -WorkflowFile $workflow.File -WorkflowName $workflow.Name
            
            # Small delay between triggers to avoid rate limiting
            Start-Sleep -Seconds 2
        }
    }
    
    Write-Host "⏱️  Waiting 30 seconds before next priority batch..." -ForegroundColor Yellow
    Start-Sleep -Seconds 30
}

Write-Host ""
Write-Host "📊 STEP 3: MONITORING RESULTS" -ForegroundColor Yellow
Write-Host "==============================" -ForegroundColor Gray

Write-Host "🔍 Checking all recent workflow runs..." -ForegroundColor Cyan
$allRuns = gh run list --limit=20 --json status,conclusion,name,createdAt,workflowName | ConvertFrom-Json

$successCount = 0
$failureCount = 0
$runningCount = 0

foreach ($run in $allRuns) {
    $status = "🔄"
    $color = "Yellow"
    
    switch ($run.conclusion) {
        "success" { $status = "✅"; $color = "Green"; $successCount++ }
        "failure" { $status = "❌"; $color = "Red"; $failureCount++ }
        "cancelled" { $status = "⚠️"; $color = "Yellow" }
        $null { 
            if ($run.status -eq "in_progress") { 
                $status = "🏃"; $color = "Cyan"; $runningCount++ 
            } else { 
                $status = "⏳"; $color = "Yellow"; $runningCount++ 
            }
        }
    }
    
    Write-Host "$status $($run.workflowName) - $($run.status)" -ForegroundColor $color
}

Write-Host ""
Write-Host "📈 FINAL RESULTS:" -ForegroundColor Green
Write-Host "✅ Successful: $successCount"
Write-Host "❌ Failed: $failureCount" 
Write-Host "🏃 Running: $runningCount"

$totalCompleted = $successCount + $failureCount
if ($totalCompleted -gt 0) {
    $successRate = [math]::Round(($successCount / $totalCompleted) * 100, 1)
    Write-Host "📊 Success Rate: $successRate%" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🌐 VIEW RESULTS:" -ForegroundColor Cyan
Write-Host "GitHub Actions: https://github.com/SillyHippy/BOLT-SITE/actions"
Write-Host ""
Write-Host "🔄 To run this script again: .\test-all-automations.ps1" -ForegroundColor Green
