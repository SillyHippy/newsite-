#!/usr/bin/env pwsh

Write-Host "🔧 FIXING ALL GITHUB ACTIONS WORKFLOW PERMISSIONS..." -ForegroundColor Cyan

# Get all workflow files
$workflowFiles = Get-ChildItem -Path ".github/workflows" -Filter "*.yml" -Recurse

foreach ($file in $workflowFiles) {
    Write-Host "📝 Fixing permissions in: $($file.Name)" -ForegroundColor Yellow
    
    $content = Get-Content $file.FullName -Raw
    
    # Check if permissions already exist
    if ($content -notmatch "permissions:") {
        # Find the line with "jobs:" and add permissions before it
        $lines = Get-Content $file.FullName
        $newLines = @()
        
        foreach ($line in $lines) {
            if ($line -match "^jobs:") {
                # Add permissions section before jobs
                $newLines += "permissions:"
                $newLines += "  contents: write"
                $newLines += "  pages: write"
                $newLines += "  id-token: write"
                $newLines += ""
            }
            $newLines += $line
            
            # Also fix checkout action to include token
            if ($line -match "uses: actions/checkout@v4") {
                $newLines += "      with:"
                $newLines += "        token: `${{ secrets.GITHUB_TOKEN }}"
            }
        }
        
        # Write back to file
        $newLines | Set-Content $file.FullName -Encoding UTF8
        Write-Host "   ✅ Fixed: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "   ⏭️  Already has permissions: $($file.Name)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "🎯 ALL WORKFLOW PERMISSIONS FIXED!" -ForegroundColor Green
Write-Host "📈 Your automations should now have proper push permissions!" -ForegroundColor Cyan
