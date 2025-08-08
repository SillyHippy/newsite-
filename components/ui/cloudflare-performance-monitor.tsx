
'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  buildOptimization: string;
  cacheStatus: string;
}

export default function CloudflarePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        // Cloudflare-specific optimizations check
        const cfRay = document.querySelector('meta[name="cf-ray"]');
        const cfCache = document.querySelector('meta[name="cf-cache-status"]');
        
        const newMetrics: PerformanceMetrics = {
          loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Will be updated by observer
          cumulativeLayoutShift: 0, // Will be updated by observer
          firstInputDelay: 0, // Will be updated by observer
          buildOptimization: process.env.NODE_ENV === 'production' ? 'Optimized for Cloudflare Pages' : 'Development Mode',
          cacheStatus: cfCache?.getAttribute('content') || 'Unknown'
        };

        // Core Web Vitals Observer
        if ('PerformanceObserver' in window) {
          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            if (lastEntry) {
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lastEntry.startTime } : null);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              setMetrics(prev => prev ? { ...prev, firstInputDelay: entry.processingStart - entry.startTime } : null);
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        }

        setMetrics(newMetrics);
        
        // Determine if site is well optimized
        const isWellOptimized = 
          newMetrics.firstContentfulPaint < 1500 &&
          newMetrics.loadTime < 3000;
          
        setIsOptimized(isWellOptimized);

        // Log performance for debugging
        console.log('🚀 Cloudflare Performance Metrics:', newMetrics);
        
      } catch (error) {
        console.error('Performance measurement error:', error);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 100);
    } else {
      window.addEventListener('load', () => setTimeout(measurePerformance, 100));
    }

    // Real-time optimization hints
    const optimizeForCloudflare = () => {
      // Add Cloudflare-specific optimization hints
      const existingHints = document.querySelector('meta[name="cf-edge-optimization"]');
      if (!existingHints) {
        const hint = document.createElement('meta');
        hint.name = 'cf-edge-optimization';
        hint.content = 'enabled';
        document.head.appendChild(hint);
      }

      // Preload critical resources for CDN
      const criticalResources = [
        '/images/jls-logo.webp',
        '/pricing',
        '/services'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        link.setAttribute('data-cf-prefetch', 'true');
        document.head.appendChild(link);
      });
    };

    optimizeForCloudflare();

  }, []);

  // Don't render in production unless there are performance issues
  if (process.env.NODE_ENV === 'production' && isOptimized) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50" style={{ fontSize: '12px' }}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">⚡ CF Performance</h3>
        <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
      </div>
      
      {metrics && (
        <div className="space-y-1 text-gray-600">
          <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
          <div>LCP: {Math.round(metrics.largestContentfulPaint)}ms</div>
          <div>Load: {Math.round(metrics.loadTime)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          {metrics.firstInputDelay > 0 && <div>FID: {Math.round(metrics.firstInputDelay)}ms</div>}
          <div className="text-xs text-blue-600 mt-1">{metrics.buildOptimization}</div>
        </div>
      )}
      
      <div className="mt-2 text-xs">
        <a href="/pricing" className="text-blue-600 hover:underline">View Pricing</a> |{' '}
        <a href="/services" className="text-blue-600 hover:underline">Services</a>
      </div>
    </div>
  );
}
