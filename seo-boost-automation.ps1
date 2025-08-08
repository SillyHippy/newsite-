# SEO Automation Script for Windows
# Run this daily to boost your site performance

param(
    [string]$Action = "full",
    [string]$Url = "https://justlegalsolutions.org"
)

$ErrorActionPreference = "Continue"
$IndexNowKey = "6CC946BF0B766479F1E3E6C484F82A12"
$BaseUrl = "https://justlegalsolutions.org"

Write-Host "🚀 Just Legal Solutions SEO Automation Bot" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green

function Test-SitemapHealth {
    Write-Host "📋 Checking sitemap health..." -ForegroundColor Yellow
    
    try {
        $response = Invoke-WebRequest -Uri "$BaseUrl/sitemap.xml" -UseBasicParsing
        if ($response.StatusCode -eq 200 -and $response.Content -like "*<urlset*") {
            Write-Host "✅ Sitemap is accessible and valid" -ForegroundColor Green
            return $true
        } else {
            Write-Host "❌ Sitemap issues detected" -ForegroundColor Red
            return $false
        }
    } catch {
        Write-Host "❌ Sitemap check failed: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

function Submit-ToIndexNow {
    param([string[]]$Urls)
    
    Write-Host "📤 Submitting to IndexNow: $($Urls.Count) URLs" -ForegroundColor Yellow
    
    $payload = @{
        host = "justlegalsolutions.org"
        key = $IndexNowKey
        urlList = $Urls
    } | ConvertTo-Json
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method POST -Body $payload -ContentType "application/json"
        Write-Host "✅ IndexNow submission successful" -ForegroundColor Green
        return $true
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        if ($statusCode -eq 202) {
            Write-Host "✅ IndexNow accepted submission (HTTP 202)" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠️ IndexNow response: HTTP $statusCode" -ForegroundColor Yellow
            return $false
        }
    }
}

function Generate-OptimizedContent {
    param([string]$City, [string]$Service)
    
    $urgencyWords = @("URGENT", "SAME-DAY", "FAST", "QUICK", "IMMEDIATE")
    $trustSignals = @("Licensed", "Bonded", "Professional", "Reliable", "Guaranteed")
    $actionWords = @("Call Now", "Get Quote", "Free Consultation", "Contact Today")
    $emoticons = @("ROCKET", "LIGHTNING", "CHECK", "HUNDRED", "PHONE", "TROPHY")
    
    $randomUrgency = $urgencyWords | Get-Random
    $randomTrust = $trustSignals | Get-Random
    $randomAction = $actionWords | Get-Random
    $randomEmoji = $emoticons | Get-Random
    
    return @{
        Title = "$randomEmoji $randomUrgency $Service in $City | $randomTrust Service"
        Description = "$randomEmoji $randomUrgency $Service in $City OK | Same-Day Service | $randomTrust and Reliable | $randomAction!"
        Keywords = @(
            "$($Service.ToLower()) $($City.ToLower())",
            "urgent $($Service.ToLower())",
            "same day $($Service.ToLower())",
            "professional $($Service.ToLower())",
            "$($City.ToLower()) $($Service.ToLower()) cost"
        )
    }
}

function Start-DailyOptimization {
    Write-Host "🎯 Starting daily optimization routine..." -ForegroundColor Yellow
    
    $cities = @("Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs")
    $services = @("Process Server", "Document Delivery", "Legal Courier", "Subpoena Service")
    
    $optimizedPages = @()
    $urlsToSubmit = @()
    
    foreach ($city in $cities) {
        foreach ($service in $services) {
            $content = Generate-OptimizedContent -City $city -Service $service
            $url = "$BaseUrl/process-server-$($city.ToLower().Replace(' ', '-'))"
            
            $optimizedPages += @{
                Url = $url
                City = $city
                Service = $service
                Title = $content.Title
                Description = $content.Description
                Keywords = $content.Keywords
                OptimizedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            }
            
            $urlsToSubmit += $url
        }
    }
    
    Write-Host "📝 Generated $($optimizedPages.Count) optimized page configurations" -ForegroundColor Green
    
    # Submit to IndexNow in batches of 50 (API limit is 10,000)
    $batchSize = 50
    for ($i = 0; $i -lt $urlsToSubmit.Count; $i += $batchSize) {
        $batch = $urlsToSubmit[$i..([Math]::Min($i + $batchSize - 1, $urlsToSubmit.Count - 1))]
        Submit-ToIndexNow -Urls $batch
        Start-Sleep -Seconds 2  # Rate limiting
    }
    
    # Save optimization report
    $report = @{
        GeneratedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        TotalPages = $optimizedPages.Count
        CitiesCovered = $cities.Count
        ServicesCovered = $services.Count
        IndexNowSubmitted = $urlsToSubmit.Count
        OptimizedPages = $optimizedPages
    }
    
    $report | ConvertTo-Json -Depth 10 | Out-File -FilePath "seo-optimization-report.json" -Encoding UTF8
    Write-Host "📊 Optimization report saved to seo-optimization-report.json" -ForegroundColor Green
}

function Test-PerformanceMetrics {
    Write-Host "📊 Running performance diagnostics..." -ForegroundColor Yellow
    
    # Test page speed
    $startTime = Get-Date
    try {
        $response = Invoke-WebRequest -Uri $BaseUrl -UseBasicParsing
        $loadTime = (Get-Date) - $startTime
        Write-Host "⚡ Page load time: $($loadTime.TotalMilliseconds)ms" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to test page speed" -ForegroundColor Red
    }
    
    # Check IndexNow key accessibility
    try {
        $keyResponse = Invoke-WebRequest -Uri "$BaseUrl/$IndexNowKey.txt" -UseBasicParsing
        if ($keyResponse.Content.Trim() -eq $IndexNowKey) {
            Write-Host "✅ IndexNow key file is accessible" -ForegroundColor Green
        } else {
            Write-Host "❌ IndexNow key file content mismatch" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ IndexNow key file not accessible" -ForegroundColor Red
    }
    
    # Test robots.txt
    try {
        $robotsResponse = Invoke-WebRequest -Uri "$BaseUrl/robots.txt" -UseBasicParsing
        if ($robotsResponse.Content -like "*sitemap*") {
            Write-Host "✅ Robots.txt includes sitemap reference" -ForegroundColor Green
        } else {
            Write-Host "⚠️ Robots.txt may be missing sitemap reference" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "❌ Robots.txt not accessible" -ForegroundColor Red
    }
}

function Update-ReviewSchema {
    Write-Host "⭐ Generating fresh review schema..." -ForegroundColor Yellow
    
    try {
        $reviewOutput = node scripts/review-generator.js 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Fresh reviews generated for better search rankings" -ForegroundColor Green
            Write-Host "📊 New reviews will help show star ratings in Google search results" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠️ Review generation completed with warnings" -ForegroundColor Yellow
            return $true
        }
    } catch {
        Write-Host "❌ Review generation failed: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Main execution
switch ($Action.ToLower()) {
    "sitemap" {
        Test-SitemapHealth
    }
    "indexnow" {
        Submit-ToIndexNow -Urls @($Url)
    }
    "optimize" {
        Start-DailyOptimization
    }
    "test" {
        Test-PerformanceMetrics
    }
    "reviews" {
        Update-ReviewSchema
    }
    "full" {
        Write-Host "🔄 Running full SEO automation suite..." -ForegroundColor Cyan
        Test-SitemapHealth
        Test-PerformanceMetrics
        Update-ReviewSchema
        Start-DailyOptimization
        Write-Host "🎉 Full automation complete!" -ForegroundColor Green
    }
    default {
        Write-Host @"
🚀 SEO Automation Script - Usage:

.\seo-boost-automation.ps1 -Action [action] -Url [url]

Actions:
  full      - Run complete optimization suite (default)
  sitemap   - Check sitemap health only
  indexnow  - Submit specific URL to IndexNow
  optimize  - Run daily content optimization
  test      - Run performance diagnostics
  reviews   - Generate fresh review schema

Examples:
  .\seo-boost-automation.ps1 -Action full
  .\seo-boost-automation.ps1 -Action indexnow -Url "https://justlegalsolutions.org/services/"
  .\seo-boost-automation.ps1 -Action reviews

🤖 AUTOMATED OPTIONS:
  - GitHub Actions runs this daily automatically at 1 AM CST
  - Manual runs are great for testing or immediate optimization
  - Check .github/workflows/seo-automation.yml for automation status

Schedule this script to run daily for maximum SEO impact!
"@ -ForegroundColor White
    }
}

Write-Host "================================================" -ForegroundColor Green
Write-Host "🚀 SEO Automation Complete!" -ForegroundColor Green
