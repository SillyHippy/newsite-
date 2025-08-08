#!/usr/bin/env pwsh

param(
    [string]$GitHubToken = $env:GITHUB_TOKEN,
    [switch]$TestOnly = $false
)

Write-Host "🎯 MANUAL WORKFLOW TRIGGER SCRIPT" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Gray

if (!$GitHubToken -and !$TestOnly) {
    Write-Host ""
    Write-Host "⚠️  GitHub Token Required" -ForegroundColor Yellow
    Write-Host "To trigger workflows remotely, you need a GitHub Personal Access Token."
    Write-Host ""
    Write-Host "🔧 Setup Instructions:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/settings/tokens"
    Write-Host "2. Create a new token with 'workflow' and 'repo' permissions"
    Write-Host "3. Set environment variable: `$env:GITHUB_TOKEN = 'your_token_here'"
    Write-Host "4. Or run: .\trigger-workflows.ps1 -GitHubToken 'your_token'"
    Write-Host ""
    Write-Host "🧪 Running in TEST-ONLY mode..." -ForegroundColor Yellow
    $TestOnly = $true
}

# Workflow definitions
$workflows = @(
    @{
        Name = "SEO Automation (Bulletproof)"
        File = "seo-bulletproof.yml"
        Priority = 1
        Description = "Daily SEO ranking updates"
    },
    @{
        Name = "Voice Search Optimization (Bulletproof)"
        File = "voice-bulletproof.yml"
        Priority = 1
        Description = "Voice search AI optimization"
    },
    @{
        Name = "Contact Consistency (Bulletproof)"
        File = "contact-bulletproof.yml"
        Priority = 1
        Description = "Business contact information sync"
    },
    @{
        Name = "AI Search Optimization (Fixed)"
        File = "ai-search-optimization.yml"
        Priority = 2
        Description = "AI platform content optimization"
    },
    @{
        Name = "Weekend Evening Blitz (Fixed)"
        File = "weekend-evening-blitz.yml"
        Priority = 2
        Description = "Weekend traffic optimization"
    },
    @{
        Name = "AI Voice Platform Domination (Fixed)"
        File = "ai-voice-platform-domination.yml"
        Priority = 2
        Description = "Multi-platform voice optimization"
    },
    @{
        Name = "Content Freshness & Ranking Boost"
        File = "content-freshness.yml"
        Priority = 2
        Description = "Content update automation"
    },
    @{
        Name = "Competitive Intelligence (Fixed)"
        File = "competitive-intelligence.yml"
        Priority = 3
        Description = "Market position analysis"
    },
    @{
        Name = "Local Events Automation (Fixed)"
        File = "local-events-automation.yml"
        Priority = 3
        Description = "Local community engagement"
    },
    @{
        Name = "AI Assistant Integration (Fixed)"
        File = "ai-assistant-business-integration.yml"
        Priority = 3
        Description = "AI assistant compatibility"
    },
    @{
        Name = "Emerging AI Platform (Fixed)"
        File = "emerging-ai-platform-optimization.yml"
        Priority = 3
        Description = "Future AI platform preparation"
    }
)

Write-Host ""
Write-Host "📋 AVAILABLE WORKFLOWS:" -ForegroundColor Yellow

foreach ($workflow in $workflows) {
    $priorityColor = switch ($workflow.Priority) {
        1 { "Green" }
        2 { "Yellow" }  
        3 { "Cyan" }
    }
    
    $priorityName = switch ($workflow.Priority) {
        1 { "HIGH" }
        2 { "MEDIUM" }
        3 { "LOW" }
    }
    
    Write-Host "[$priorityName] $($workflow.Name)" -ForegroundColor $priorityColor
    Write-Host "     File: $($workflow.File)" -ForegroundColor Gray
    Write-Host "     Purpose: $($workflow.Description)" -ForegroundColor Gray
    Write-Host ""
}

if ($TestOnly) {
    Write-Host "🧪 TEST MODE: Validating workflow files..." -ForegroundColor Yellow
    
    $validCount = 0
    $totalCount = $workflows.Count
    
    foreach ($workflow in $workflows) {
        $filePath = ".github\workflows\$($workflow.File)"
        if (Test-Path $filePath) {
            Write-Host "✅ $($workflow.Name)" -ForegroundColor Green
            $validCount++
            
            # Check file content
            $content = Get-Content $filePath -Raw
            if ($content -match "workflow_dispatch") {
                Write-Host "     ✓ Manual trigger enabled" -ForegroundColor DarkGreen
            } else {
                Write-Host "     ⚠️  No manual trigger" -ForegroundColor Yellow
            }
        } else {
            Write-Host "❌ $($workflow.Name) - File not found!" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "📊 VALIDATION RESULTS:" -ForegroundColor Green
    Write-Host "Valid workflows: $validCount/$totalCount" -ForegroundColor White
    $percentage = [math]::Round(($validCount / $totalCount) * 100, 1)
    Write-Host "Success rate: $percentage%" -ForegroundColor White
    
    if ($validCount -eq $totalCount) {
        Write-Host ""
        Write-Host "🎉 ALL WORKFLOWS VALIDATED!" -ForegroundColor Green
        Write-Host "Ready for remote triggering with GitHub token." -ForegroundColor White
    }
    
    exit
}

# Function to trigger workflow via GitHub API
function Trigger-GitHubWorkflow {
    param(
        [string]$WorkflowFile,
        [string]$WorkflowName,
        [string]$Token
    )
    
    $owner = "SillyHippy"
    $repo = "BOLT-SITE"
    $branch = "main"
    
    $uri = "https://api.github.com/repos/$owner/$repo/actions/workflows/$WorkflowFile/dispatches"
    $headers = @{
        "Authorization" = "Bearer $Token"
        "Accept" = "application/vnd.github.v3+json"
        "User-Agent" = "PowerShell-Automation-Script"
    }
    
    $body = @{
        ref = $branch
    } | ConvertTo-Json
    
    Write-Host "🎯 Triggering: $WorkflowName" -ForegroundColor Cyan
    
    try {
        $response = Invoke-RestMethod -Uri $uri -Method POST -Headers $headers -Body $body -ContentType "application/json"
        Write-Host "   ✅ Successfully triggered!" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Trigger workflows by priority
Write-Host ""
Write-Host "🚀 TRIGGERING ALL WORKFLOWS..." -ForegroundColor Green

$successCount = 0
$failureCount = 0

foreach ($priority in 1..3) {
    $priorityName = switch ($priority) {
        1 { "HIGH PRIORITY" }
        2 { "MEDIUM PRIORITY" }
        3 { "LOW PRIORITY" }
    }
    
    Write-Host ""
    Write-Host "🎯 $priorityName WORKFLOWS" -ForegroundColor Magenta
    Write-Host "=" * 40 -ForegroundColor Gray
    
    $priorityWorkflows = $workflows | Where-Object { $_.Priority -eq $priority }
    
    foreach ($workflow in $priorityWorkflows) {
        if (Test-Path ".github\workflows\$($workflow.File)") {
            $success = Trigger-GitHubWorkflow -WorkflowFile $workflow.File -WorkflowName $workflow.Name -Token $GitHubToken
            
            if ($success) {
                $successCount++
            } else {
                $failureCount++
            }
            
            # Delay between triggers
            Start-Sleep -Seconds 3
        } else {
            Write-Host "❌ $($workflow.Name) - File not found!" -ForegroundColor Red
            $failureCount++
        }
    }
    
    if ($priority -lt 3) {
        Write-Host ""
        Write-Host "⏱️  Waiting 30 seconds before next priority batch..." -ForegroundColor Yellow
        Start-Sleep -Seconds 30
    }
}

Write-Host ""
Write-Host "📊 FINAL RESULTS:" -ForegroundColor Green
Write-Host "================" -ForegroundColor Gray
Write-Host "✅ Successfully triggered: $successCount" -ForegroundColor Green
Write-Host "❌ Failed to trigger: $failureCount" -ForegroundColor Red

$total = $successCount + $failureCount
if ($total -gt 0) {
    $successRate = [math]::Round(($successCount / $total) * 100, 1)
    Write-Host "📈 Success rate: $successRate%" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🌐 MONITOR RESULTS:" -ForegroundColor Yellow
Write-Host "GitHub Actions: https://github.com/SillyHippy/BOLT-SITE/actions"
Write-Host ""
Write-Host "🔄 USAGE EXAMPLES:" -ForegroundColor Cyan
Write-Host "Test mode: .\trigger-workflows.ps1 -TestOnly"
Write-Host "With token: .\trigger-workflows.ps1 -GitHubToken 'your_token'"
Write-Host "With env var: `$env:GITHUB_TOKEN='token'; .\trigger-workflows.ps1"
