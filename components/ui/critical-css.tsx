// Critical CSS inline styles for above-the-fold content
export const CriticalCSS = () => (
  <style jsx>{`
    /* Critical styles for hero section to prevent layout shift */
    .hero-section {
      height: calc(100vh - 4rem);
      position: relative;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
    }
    
    .hero-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 0 1rem;
    }
    
    .hero-title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
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
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7));
    }
    
    @media (min-width: 768px) {
      .hero-description {
        font-size: 1.25rem;
      }
    }
  `}</style>
);
