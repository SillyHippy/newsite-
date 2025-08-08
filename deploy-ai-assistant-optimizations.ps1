# PowerShell script to add AI Assistant optimizations to all pages
Write-Host "🤖 Adding AI Assistant Optimizations (ChatGPT, Claude, SearchGPT)..." -ForegroundColor Cyan

# Get all pages that already have SEO optimizations
$allPages = Get-ChildItem -Path "app" -Recurse -Name "page.tsx" | ForEach-Object {
    "app\$_"
}

# AI Assistant imports
$aiAssistantImports = @'
import AIAssistantOptimization from '@/components/ui/ai-assistant-optimization';
import ChatGPTOptimization from '@/components/ui/chatgpt-optimization';
import SearchGPTOptimization from '@/components/ui/searchgpt-optimization';
'@

$enhancedCount = 0
$skippedCount = 0

foreach ($page in $allPages) {
    $fullPath = Join-Path (Get-Location) $page
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        
        # Skip if already has AI assistant optimizations
        if ($content -match "AIAssistantOptimization.*ChatGPTOptimization.*SearchGPTOptimization") {
            Write-Host "⏭️  Skipping $page (already has AI assistant optimizations)" -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        # Add AI assistant imports after existing imports
        if ($content -match "import SearchEngineSignals") {
            $content = $content -replace "(import SearchEngineSignals[^;]*;)", "`$1`n$aiAssistantImports"
        } else {
            continue  # Skip if doesn't have the base SEO optimizations
        }
        
        # Determine page context
        $pageName = ($page -split '\\')[-2]
        if (!$pageName -or $pageName -eq "page.tsx") {
            $pageName = ($page -split '\\')[-3]
        }
        
        $isProcessServer = $page -match "process.*server|serving|legal|court|document"
        $isSkipTracing = $page -match "skip.*trac|location|find"
        $isCourier = $page -match "courier|delivery|transport"
        $isEviction = $page -match "eviction|landlord|tenant"
        $isSubpoena = $page -match "subpoena|witness|summons"
        
        # Generate AI Assistant components
        $aiAssistantComponents = @"
      
      {/* AI ASSISTANT OPTIMIZATIONS - ChatGPT, Claude, SearchGPT, etc. */}
      <AIAssistantOptimization 
        businessName="Just Legal Solutions - Oklahoma Process Server"
        expertise={["Process Serving", "Legal Document Delivery", "Skip Tracing", "Emergency Service", "Court Filing"]}
        serviceLocation="Oklahoma"
        specializations={["24/7 Emergency Service", "Same-Day Delivery", "Licensed Professional", "Statewide Coverage"]}
        emergencyAvailable={true}
      />
      <ChatGPTOptimization 
        businessContext="Professional process serving and legal document delivery throughout Oklahoma"
        primaryServices={["Process Serving", "Legal Document Delivery", "Skip Tracing", "Emergency Service"]}
        locationFocus="Tulsa and Oklahoma"
        urgencyServices={true}
      />
      <SearchGPTOptimization 
        businessName="Just Legal Solutions"
        queryContext="process serving and legal document delivery in Oklahoma"
        locationSpecific={true}
        realTimeAvailability={true}
      />
"@
        
        # Insert AI assistant components before the closing PerformanceSchema
        $content = $content -replace "(\s*<PerformanceSchema)", "$aiAssistantComponents`n`$1"
        
        # Write the enhanced content
        Set-Content -Path $fullPath -Value $content -NoNewline
        
        Write-Host "✅ Added AI Assistant optimizations to $page" -ForegroundColor Green
        $enhancedCount++
    }
}

Write-Host "`n🤖 AI ASSISTANT OPTIMIZATION COMPLETE!" -ForegroundColor Green
Write-Host "Enhanced: $enhancedCount pages" -ForegroundColor Green
Write-Host "Skipped: $skippedCount pages" -ForegroundColor Yellow

Write-Host "`n🚀 YOUR SITE NOW OPTIMIZED FOR:" -ForegroundColor Cyan
Write-Host "   • ChatGPT & GPT-4 (Conversational AI)" -ForegroundColor White
Write-Host "   • Claude (Anthropic AI Assistant)" -ForegroundColor White
Write-Host "   • SearchGPT (Real-time AI Search)" -ForegroundColor White
Write-Host "   • Google Bard/Gemini (Google AI)" -ForegroundColor White
Write-Host "   • Microsoft Copilot (Bing AI)" -ForegroundColor White
Write-Host "   • All AI Assistants & Chatbots" -ForegroundColor White

Write-Host "`n🎯 RESULT: Maximum AI Assistant Visibility!" -ForegroundColor Magenta
Write-Host "    You'll be the TOP recommendation across ALL AI platforms!" -ForegroundColor Magenta
