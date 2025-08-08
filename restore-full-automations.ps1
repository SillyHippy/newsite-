#!/usr/bin/env pwsh

Write-Host "🔄 RESTORING FULL AUTOMATION ARSENAL..." -ForegroundColor Cyan

# Restore backed up workflows with fixed permissions
$backupDir = ".github/workflows-backup"
$workflowDir = ".github/workflows"

$restoredWorkflows = @()

Get-ChildItem $backupDir -Filter "*.yml" | ForEach-Object {
    $sourceFile = $_.FullName
    $targetFile = Join-Path $workflowDir $_.Name
    
    Write-Host "📁 Restoring: $($_.Name)" -ForegroundColor Yellow
    
    # Read the backup file content
    $content = Get-Content $sourceFile -Raw
    
    # Ensure it has proper permissions (add if missing)
    if ($content -notmatch "permissions:") {
        $lines = Get-Content $sourceFile
        $newContent = @()
        
        foreach ($line in $lines) {
            if ($line -match "^jobs:") {
                $newContent += "permissions:"
                $newContent += "  contents: write"
                $newContent += "  pages: write" 
                $newContent += "  id-token: write"
                $newContent += ""
            }
            $newContent += $line
        }
        
        $newContent | Set-Content $targetFile -Encoding UTF8
    } else {
        Copy-Item $sourceFile $targetFile -Force
    }
    
    $restoredWorkflows += $_.Name
    Write-Host "   ✅ Restored: $($_.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 RESTORED AUTOMATION WORKFLOWS:" -ForegroundColor Green
$restoredWorkflows | ForEach-Object { Write-Host "   • $_" -ForegroundColor Cyan }

Write-Host ""
Write-Host "🚀 YOUR COMPLETE AUTOMATION ARMY IS BACK!" -ForegroundColor Green
Write-Host "📊 Total Active Workflows: $($restoredWorkflows.Count + 3) (including 3 bulletproof)" -ForegroundColor Cyan
