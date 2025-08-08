'use client';

import { useEffect } from 'react';

export const CriticalCSS = () => {
  useEffect(() => {
    // Add critical CSS for above-the-fold content directly to the head
    const criticalCSS = `
      <style id="critical-css">
        /* Critical styles for above-the-fold content */
        .hero-section {
          height: calc(100vh - 4rem);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          padding: 0 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7));
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }
        
        .hero-description {
          font-size: 1.125rem;
          max-width: 48rem;
          margin: 0 auto;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7));
          line-height: 1.6;
        }
        
        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.25rem;
          }
        }
        
        /* Critical navigation styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        /* Prevent layout shift for images */
        .service-card-image {
          position: relative;
          height: 12rem;
          width: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .service-card-image {
            height: 14rem;
          }
        }
        
        /* Critical font loading */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/inter-regular.woff2') format('woff2');
        }
        
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/inter-bold.woff2') format('woff2');
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero-description {
            font-size: 1rem;
            padding: 0 0.5rem;
          }
          
          .service-card-image {
            height: 10rem;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .hero-title,
          .hero-description {
            filter: none;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      </style>
    `;
    
    // Only add if not already present
    if (!document.getElementById('critical-css')) {
      document.head.insertAdjacentHTML('beforeend', criticalCSS);
    }
  }, []);

  return null;
};
