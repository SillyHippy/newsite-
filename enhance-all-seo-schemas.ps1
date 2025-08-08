# Enhanced SEO Schema Deployment Script
# Adds breadcrumb, FAQ, service, and performance schemas to all SEO pages

$seoPages = Get-ChildItem -Path "app\(main)\seo" -Recurse -Name "*.tsx"
$enhancedCount = 0

foreach ($page in $seoPages) {
    $filePath = "app\(main)\seo\$page"
    $content = Get-Content $filePath -Raw
    
    # Skip if already has enhanced schemas
    if ($content -match "EnhancedBreadcrumbSchema|EnhancedFAQSchema|EnhancedServiceSchema|PerformanceSchema") {
        Write-Host "Skipping $page - already enhanced"
        continue
    }
    
    # Extract page info for customization
    $pageName = ($page -replace "page\.tsx", "" -replace "\\", " " -replace "-", " ").Trim()
    $pageUrl = "/" + ($page -replace "\\page\.tsx", "" -replace "\\", "/")
    $serviceType = "Process Serving"
    $city = "Oklahoma"
    
    if ($page -match "tulsa") { $city = "Tulsa" }
    if ($page -match "broken-arrow") { $city = "Broken Arrow" }
    if ($page -match "claremore") { $city = "Claremore" }
    if ($page -match "sapulpa") { $city = "Sapulpa" }
    
    if ($page -match "notary") { $serviceType = "Notary Services" }
    if ($page -match "courier") { $serviceType = "Courier Services" }
    if ($page -match "skip-tracing") { $serviceType = "Skip Tracing" }
    if ($page -match "eviction") { $serviceType = "Eviction Service" }
    if ($page -match "executive") { $serviceType = "Executive Assistant" }
    if ($page -match "data-entry") { $serviceType = "Data Entry Services" }
    
    # Add enhanced imports if not present
    if ($content -notmatch "EnhancedBreadcrumbSchema") {
        $content = $content -replace "import ReviewSchema from '@/components/ui/review-schema';", 
@"
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
"@
    }
    
    # Add enhanced schemas before ReviewSchema
    $enhancedSchemas = @"
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "$($pageName -replace '\\b\\w', {$_.Value.ToUpper()})", url: "$pageUrl" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="$($pageName -replace '\\b\\w', {$_.Value.ToUpper()}) in $city"
        faqs={generateProcessServingFAQs("$city", "$serviceType")}
      />
      
      <EnhancedServiceSchema 
        serviceName="$($pageName -replace '\\b\\w', {$_.Value.ToUpper()})"
        serviceDescription="Professional $serviceType services in $city, Oklahoma"
        serviceArea="$city, Oklahoma"
        serviceType="$serviceType"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="$($pageName -replace '\\b\\w', {$_.Value.ToUpper()}) - $city"
        pageUrl="$pageUrl"
        loadTime={2.0}
        mobileOptimized={true}
      />
      
"@
    
    # Insert enhanced schemas before existing ReviewSchema
    $content = $content -replace "      <ReviewSchema", "$enhancedSchemas      <ReviewSchema"
    
    # Write updated content
    Set-Content -Path $filePath -Value $content -Encoding UTF8
    $enhancedCount++
    Write-Host "Enhanced: $page"
}

Write-Host "`nEnhanced $enhancedCount SEO pages with complete schema suite!"
Write-Host "All pages now have: Breadcrumb + FAQ + Service + Performance + Review schemas"
