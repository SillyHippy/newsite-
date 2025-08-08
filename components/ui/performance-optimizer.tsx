'use client';

import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Prefetch critical resources on idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Prefetch secondary images
        const imagesToPrefetch = [
          '/images/secure-delivery.webp',
          '/images/court-transfer.webp',
          '/images/skip-trace.webp',
          '/images/same-day.webp',
          '/images/courier-bg.webp'
        ];
        
        imagesToPrefetch.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });

        // Prefetch likely next pages
        const pagesToPrefetch = [
          '/pricing',
          '/services',
          '/payments',
          '/card'
        ];
        
        pagesToPrefetch.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          document.head.appendChild(link);
        });
      });
    }

    // Enable smooth scrolling performance with minimal CPU usage
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize font loading performance
    if ('fonts' in document) {
      // Preload critical font weights
      const fontPromises = [
        new FontFace('Inter', 'url(/fonts/inter-regular.woff2)', { weight: '400', display: 'swap' }),
        new FontFace('Inter', 'url(/fonts/inter-bold.woff2)', { weight: '700', display: 'swap' })
      ].map(font => {
        return font.load().then(loadedFont => {
          document.fonts.add(loadedFont);
        }).catch(() => {
          // Fail silently, fallback fonts will be used
        });
      });
    }

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical analytics until user interaction
      let analyticsLoaded = false;
      const loadAnalytics = () => {
        if (!analyticsLoaded) {
          analyticsLoaded = true;
          // Analytics are already loaded in layout.tsx, this is just for future optimization
        }
      };

      // Load analytics on first user interaction
      const userInteractionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
      userInteractionEvents.forEach(eventType => {
        document.addEventListener(eventType, loadAnalytics, { once: true, passive: true });
      });

      // Fallback: load after 3 seconds regardless
      setTimeout(loadAnalytics, 3000);
    };

    optimizeThirdPartyScripts();

    // Performance monitoring
    if ('performance' in window && 'observe' in window.PerformanceObserver.prototype) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Log LCP for monitoring (remove in production or send to analytics)
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            // Log FID for monitoring
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            // Log CLS for monitoring
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              console.log('CLS:', clsEntry.value);
            }
          }
        }
      });

      try {
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        observer.observe({ type: 'first-input', buffered: true });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (error) {
        // Browser doesn't support these metrics
      }
    }

    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null; // This component doesn't render anything
};
