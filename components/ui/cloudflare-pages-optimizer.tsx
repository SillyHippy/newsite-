
'use client';

import { useEffect } from 'react';

interface CloudflareOptimizationProps {
  enableEdgeOptimization?: boolean;
  enableCDNPrefetch?: boolean;
  enableBuildOptimization?: boolean;
}

export default function CloudflarePagesOptimizer({ 
  enableEdgeOptimization = true,
  enableCDNPrefetch = true,
  enableBuildOptimization = true
}: CloudflareOptimizationProps) {
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cloudflare Pages edge optimization
    if (enableEdgeOptimization) {
      // Add Cloudflare-specific performance hints
      const cfHints = document.createElement('meta');
      cfHints.name = 'cf-edge-cache';
      cfHints.content = 'cache';
      document.head.appendChild(cfHints);

      // Optimize for Cloudflare CDN
      const cfOptimize = document.createElement('meta');
      cfOptimize.name = 'cf-auto-minify';
      cfOptimize.content = 'html,css,js';
      document.head.appendChild(cfOptimize);
    }

    // CDN prefetch optimization
    if (enableCDNPrefetch) {
      const criticalResources = [
        '/images/hero.webp',
        '/images/jls-logo.webp',
        '/pricing',
        '/services'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        link.setAttribute('data-cf-priority', 'high');
        document.head.appendChild(link);
      });
    }

    // Build optimization monitoring
    if (enableBuildOptimization && process.env.NODE_ENV === 'development') {
      // Monitor build performance metrics
      const buildMetrics = {
        buildStartTime: Date.now(),
        chunksLoaded: 0,
        resourcesOptimized: 0
      };

      // Track chunk loading for optimization
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.tagName === 'SCRIPT' || element.tagName === 'LINK') {
                  buildMetrics.chunksLoaded++;
                }
              }
            });
          }
        });
      });

      observer.observe(document.head, { childList: true });

      // Log build metrics after page load
      window.addEventListener('load', () => {
        const buildTime = Date.now() - buildMetrics.buildStartTime;
        console.log('🏗️ Cloudflare Build Metrics:', {
          buildTime: `${buildTime}ms`,
          chunksLoaded: buildMetrics.chunksLoaded,
          resourcesOptimized: buildMetrics.resourcesOptimized,
          timestamp: new Date().toISOString()
        });
      });
    }

    // Cleanup function
    return () => {
      // Remove optimization hints on component unmount
      const cfElements = document.querySelectorAll('[name^="cf-"]');
      cfElements.forEach(el => el.remove());
    };
  }, [enableEdgeOptimization, enableCDNPrefetch, enableBuildOptimization]);

  return null; // This is an optimization component only
}
