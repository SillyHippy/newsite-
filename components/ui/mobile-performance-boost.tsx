'use client';

import { useEffect } from 'react';

export function MobilePerformanceBoost() {
  useEffect(() => {
    // Mobile-specific performance optimizations
    if (typeof window !== 'undefined') {
      // Reduce unnecessary reflows on mobile
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Disable hover effects on mobile to prevent unnecessary repaints
        const style = document.createElement('style');
        style.textContent = `
          @media (hover: none) and (pointer: coarse) {
            .hover\\:shadow-\\[0_0_25px_rgba\\(255\\,255\\,255\\,0\\.5\\)\\] {
              transition: none !important;
            }
            .hover\\:shadow-\\[0_0_30px_rgba\\(255\\,255\\,255\\,0\\.6\\)\\] {
              transition: none !important;
            }
          }
        `;
        document.head.appendChild(style);

        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--reduce-motion', 'reduce');
        
        // Optimize scroll performance
        document.documentElement.style.setProperty('scroll-behavior', 'auto');
        
        // Remove excessive box-shadows on mobile for performance
        const elements = document.querySelectorAll('[class*="shadow-[0_0_"]');
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.boxShadow = 'none';
          }
        });
      }
      
      // Preload critical resources with higher priority on mobile
      if (isMobile) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = '/images/hero.webp';
        link.as = 'image';
        (link as any).fetchPriority = 'high';
        document.head.appendChild(link);
      }
      
      // Lazy load non-critical JavaScript
      const loadNonCriticalJS = () => {
        // Defer any non-essential scripts
        const scripts = document.querySelectorAll('script[data-defer="true"]');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('data-src') || '';
          newScript.async = true;
          document.head.appendChild(newScript);
        });
      };
      
      // Load non-critical resources after page load
      if (document.readyState === 'complete') {
        loadNonCriticalJS();
      } else {
        window.addEventListener('load', loadNonCriticalJS);
      }
    }
  }, []);

  return null;
}
