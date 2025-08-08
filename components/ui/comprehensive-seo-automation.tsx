
'use client';

import { useEffect } from 'react';

interface SEOAutomationProps {
  enableSchemaMonitoring?: boolean;
  enableContentFreshness?: boolean;
  enablePerformanceTracking?: boolean;
  enableKeywordTracking?: boolean;
}

export default function ComprehensiveSEOAutomation({ 
  enableSchemaMonitoring = true,
  enableContentFreshness = true,
  enablePerformanceTracking = true,
  enableKeywordTracking = true
}: SEOAutomationProps) {
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Schema markup monitoring
    if (enableSchemaMonitoring) {
      const monitorSchemaMarkup = () => {
        const schemas = document.querySelectorAll('script[type="application/ld+json"]');
        const schemaTypes = Array.from(schemas).map(script => {
          try {
            const data = JSON.parse(script.textContent || '');
            return data['@type'] || 'Unknown';
          } catch {
            return 'Invalid';
          }
        });

        console.log('📋 Schema Markup Status:', {
          totalSchemas: schemas.length,
          schemaTypes: schemaTypes,
          timestamp: new Date().toISOString()
        });

        // Validate critical schema types
        const criticalSchemas = ['LocalBusiness', 'Service', 'FAQPage', 'BreadcrumbList'];
        const missingSchemas = criticalSchemas.filter(type => !schemaTypes.includes(type));
        
        if (missingSchemas.length > 0) {
          console.warn('⚠️ Missing Critical Schema Types:', missingSchemas);
        }
      };

      setTimeout(monitorSchemaMarkup, 1000);
    }

    // Content freshness automation
    if (enableContentFreshness) {
      const trackContentFreshness = () => {
        const lastModified = document.querySelector('meta[name="last-modified"]');
        const contentAge = lastModified ? 
          Date.now() - new Date(lastModified.getAttribute('content') || '').getTime() : 
          null;

        console.log('🔄 Content Freshness:', {
          lastModified: lastModified?.getAttribute('content'),
          contentAge: contentAge ? `${Math.floor(contentAge / (1000 * 60 * 60 * 24))} days` : 'Unknown',
          needsUpdate: contentAge ? contentAge > (7 * 24 * 60 * 60 * 1000) : false,
          timestamp: new Date().toISOString()
        });
      };

      setTimeout(trackContentFreshness, 500);
    }

    // Performance tracking automation
    if (enablePerformanceTracking) {
      const trackPerformanceMetrics = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');
          
          const metrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
            timestamp: new Date().toISOString()
          };

          console.log('⚡ Performance Metrics:', metrics);

          // Log performance warnings
          if (metrics.loadTime > 3000) {
            console.warn('⚠️ Slow page load time:', `${metrics.loadTime}ms`);
          }
          if (metrics.firstContentfulPaint > 1500) {
            console.warn('⚠️ Slow First Contentful Paint:', `${metrics.firstContentfulPaint}ms`);
          }
        }
      };

      window.addEventListener('load', trackPerformanceMetrics);
    }

    // Keyword tracking automation
    if (enableKeywordTracking) {
      const analyzeKeywordOptimization = () => {
        const title = document.title;
        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.textContent || '');
        
        // Extract potential keywords
        const titleKeywords = title.toLowerCase().match(/process server|legal|document|delivery|oklahoma|tulsa/g) || [];
        const descriptionKeywords = metaDescription.toLowerCase().match(/process server|legal|document|delivery|oklahoma|tulsa/g) || [];
        
        console.log('🎯 Keyword Analysis:', {
          titleKeywords: titleKeywords.length,
          descriptionKeywords: descriptionKeywords.length,
          headingCount: headings.length,
          primaryKeywords: ['process server', 'legal document delivery', 'oklahoma'],
          optimization: {
            titleOptimized: titleKeywords.length >= 2,
            descriptionOptimized: descriptionKeywords.length >= 3,
            headingsOptimized: headings.length >= 3
          },
          timestamp: new Date().toISOString()
        });
      };

      setTimeout(analyzeKeywordOptimization, 1500);
    }

  }, [enableSchemaMonitoring, enableContentFreshness, enablePerformanceTracking, enableKeywordTracking]);

  return null; // This is an automation component only
}
