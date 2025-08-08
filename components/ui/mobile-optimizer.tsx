'use client';

import { useEffect } from 'react';

export const MobileOptimizer = () => {
  useEffect(() => {
    // Mobile-specific performance optimizations
    
    // 1. Optimize touch events for mobile
    if ('ontouchstart' in window) {
      // Passive touch event listeners for better scroll performance
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
    }

    // 2. Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }

    // 3. Optimize for mobile viewports
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // Prevent zoom on input focus for iOS
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
      }

      // Add mobile-specific CSS optimizations
      const mobileCSS = document.createElement('style');
      mobileCSS.textContent = `
        /* Mobile-specific optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
        
        body {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
        
        /* Optimize button touch targets for mobile */
        button, a, [role="button"] {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Prevent horizontal scroll on mobile */
        html, body {
          overflow-x: hidden;
        }
        
        /* Optimize images for mobile */
        img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `;
      document.head.appendChild(mobileCSS);
    }

    // 4. Network-aware optimizations
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        // Adjust loading strategy based on connection speed
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Disable non-essential animations and images for very slow connections
          document.documentElement.classList.add('slow-connection');
        }
      }
    }

    // 5. Memory optimization for mobile devices
    if ('deviceMemory' in navigator) {
      const deviceMemory = (navigator as any).deviceMemory;
      if (deviceMemory && deviceMemory < 4) {
        // Reduce image quality and disable some features for low-memory devices
        document.documentElement.classList.add('low-memory');
      }
    }

    // 6. Battery optimization
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        if (battery.level < 0.2 || battery.charging === false) {
          // Reduce animations and non-essential features when battery is low
          document.documentElement.classList.add('low-battery');
        }
      });
    }

    // 7. Intersection Observer for performance monitoring
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, can trigger lazy loading or analytics
            entry.target.classList.add('in-viewport');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      // Observe key elements for performance tracking
      document.querySelectorAll('[data-track-viewport]').forEach((el) => {
        observer.observe(el);
      });
    }

  }, []);

  return null;
};
