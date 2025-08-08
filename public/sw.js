// Service Worker for Just Legal Solutions
// Provides offline functionality and advanced caching for better mobile performance

const CACHE_NAME = 'jls-v2025-01-15';
const STATIC_CACHE_NAME = 'jls-static-v2025-01-15';

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/pricing',
  '/services',
  '/images/hero.webp',
  '/images/jls-logo.webp',
  '/Favicon/favicon.ico',
  '/_next/static/css/app/layout.css'
];

// Static assets to cache on first visit
const STATIC_ASSETS = [
  '/images/secure-delivery.webp',
  '/images/court-transfer.webp',
  '/images/skip-trace.webp',
  '/images/same-day.webp',
  '/images/courier-bg.webp'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache critical assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_ASSETS);
      }),
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
    ]).then(() => {
      // Force the waiting service worker to become the active service worker
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // Delete old cache versions
            return cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME;
          })
          .map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      // Take control of all pages
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      try {
        // Try cache first for critical assets
        if (CRITICAL_ASSETS.some(asset => url.pathname === asset)) {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
        }

        // For images, try cache first, then network
        if (request.destination === 'image') {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }

          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }

        // For HTML pages, try network first, then cache
        if (request.destination === 'document') {
          try {
            const networkResponse = await fetch(request);
            if (networkResponse.ok) {
              const cache = await caches.open(CACHE_NAME);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          } catch (error) {
            // If network fails, try cache
            const cachedResponse = await caches.match(request);
            if (cachedResponse) {
              return cachedResponse;
            }
            // If no cache, return offline page
            return caches.match('/offline.html') || new Response('Offline', { status: 503 });
          }
        }

        // For other assets, try network first
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          const cache = await caches.open(STATIC_CACHE_NAME);
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;

      } catch (error) {
        // Try cache as fallback
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Return appropriate offline response
        if (request.destination === 'image') {
          return new Response('', { status: 204 });
        }
        
        return new Response('Network error', { status: 503 });
      }
    })()
  );
});

// Background sync for form submissions (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmissions()
    );
  }
});

// Push notifications (if implemented)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/Favicon/favicon-96x96.png',
      badge: '/Favicon/favicon-96x96.png',
      data: data
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Helper function for offline form submissions
async function handleOfflineFormSubmissions() {
  try {
    // Implementation for handling offline form data
    // This would sync with your backend when connection is restored
    console.log('Handling offline form submissions');
  } catch (error) {
    console.error('Failed to sync offline forms:', error);
  }
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MEASURE') {
    // Log performance metrics
    console.log('Performance measure:', event.data.measure);
  }
});
