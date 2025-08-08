#!/usr/bin/env pwsh
Write-Host "🛠️ EMERGENCY BUILD FIX - COMMIT CRITICAL CHANGES" -ForegroundColor Red
Write-Host "=================================================" -ForegroundColor Red

Write-Host "🚀 Committing fixes for HTML comment syntax errors..." -ForegroundColor Yellow

# Add the critical fixes
git add components/FreshContent.tsx
git add .github/workflows/content-freshness.yml
git add .github/workflows/ai-assistant-business-integration.yml

# Commit immediately
git commit -m "🛠️ EMERGENCY FIX: Convert HTML comments to JSX comments in workflows and components

- Fix content-freshness.yml: HTML comment → JSX comment
- Fix ai-assistant-business-integration.yml: Add error handling  
- Fix FreshContent.tsx: Proper JSX comment syntax
- Prevent TypeScript compilation errors in deployments"

Write-Host "⚡ Pushing emergency fixes..." -ForegroundColor Yellow
git push

Write-Host "✅ Emergency fixes committed and pushed!" -ForegroundColor Green
Write-Host "🎯 This should resolve the deployment build failures" -ForegroundColor Cyan
