
'use client';

import { useEffect, useState } from 'react';

interface AutomationStatus {
  buildOptimization: 'active' | 'idle' | 'error';
  seoMonitoring: 'active' | 'idle' | 'error';
  contentFreshness: 'active' | 'idle' | 'error';
  performanceTracking: 'active' | 'idle' | 'error';
  lastUpdate: string;
}

export default function AdvancedAutomationMonitor() {
  const [status, setStatus] = useState<AutomationStatus>({
    buildOptimization: 'active',
    seoMonitoring: 'active', 
    contentFreshness: 'active',
    performanceTracking: 'active',
    lastUpdate: new Date().toISOString()
  });

  useEffect(() => {
    // Monitor automation status in development
    if (process.env.NODE_ENV === 'development') {
      const checkAutomationStatus = async () => {
        try {
          // Check if automation scripts are working
          const response = await fetch('/api/automation-status', {
            method: 'GET',
            cache: 'no-cache'
          });
          
          if (response.ok) {
            const automationData = await response.json();
            setStatus(prev => ({
              ...prev,
              ...automationData,
              lastUpdate: new Date().toISOString()
            }));
          }
        } catch (error) {
          console.log('Automation monitoring:', error);
          // Set status to idle if monitoring fails
          setStatus(prev => ({
            ...prev,
            buildOptimization: 'idle',
            seoMonitoring: 'idle',
            contentFreshness: 'idle',
            performanceTracking: 'idle',
            lastUpdate: new Date().toISOString()
          }));
        }
      };

      // Check status every 30 seconds in development
      const interval = setInterval(checkAutomationStatus, 30000);
      checkAutomationStatus(); // Initial check

      return () => clearInterval(interval);
    }
  }, []);

  // Log automation activity for monitoring
  useEffect(() => {
    console.log('🤖 Advanced Automation Status:', {
      buildOptimization: status.buildOptimization,
      seoMonitoring: status.seoMonitoring,
      contentFreshness: status.contentFreshness,
      performanceTracking: status.performanceTracking,
      lastUpdate: status.lastUpdate
    });
  }, [status]);

  return null; // This is a monitoring component only
}
