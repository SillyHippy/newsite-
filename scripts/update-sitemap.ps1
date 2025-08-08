# Quick sitemap date updater for Windows
# Usage: .\update-sitemap.ps1

# Get current date
$CurrentDate = Get-Date -Format "yyyy-MM-dd"

Write-Host "🔄 Updating sitemap dates to $CurrentDate..." -ForegroundColor Yellow

# Update sitemap.xml
$sitemapPath = "public\sitemap.xml"
$content = Get-Content $sitemapPath -Raw
$updatedContent = $content -replace '<lastmod>\d{4}-\d{2}-\d{2}</lastmod>', "<lastmod>$CurrentDate</lastmod>"
Set-Content -Path $sitemapPath -Value $updatedContent

Write-Host "✅ Sitemap updated!" -ForegroundColor Green
Write-Host "📋 Run these commands to deploy:" -ForegroundColor Cyan
Write-Host "   git add ." -ForegroundColor White
Write-Host "   git commit -m 'Update sitemap dates to $CurrentDate'" -ForegroundColor White
Write-Host "   git push" -ForegroundColor White
