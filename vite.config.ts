import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Latest Lovable Vite configuration with enhanced optimizations
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  // Enhanced component tagger for latest Lovable features (conditional loading)
  if (mode === 'development') {
    try {
      // Dynamically require the plugin only if available
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { componentTagger } = require('lovable-tagger');
      plugins.push(componentTagger());
    } catch (error) {
      console.warn('lovable-tagger not available, skipping...');
    }
  }
  return {
    plugins,
  
  // Enhanced path resolution with latest aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/integrations": path.resolve(__dirname, "./src/integrations"),
    },
  },
  
  // Latest build optimizations for enhanced performance
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tabs'],
          utils: ['lucide-react', 'clsx', 'tailwind-merge'],
        }
      }
    },
    
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    
    cssCodeSplit: true,
    cssMinify: true,
  },
  
  // Enhanced development server configuration
  server: {
    host: "::",
    port: 8080,
    open: true,
    cors: true,
    hmr: {
      overlay: true,
      clientPort: 8080
    }
  },
  
  preview: {
    port: 4173,
    host: "::",
    cors: true
  },
  
  // Latest esbuild optimizations - removed conflicting options
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  
  // Enhanced CSS processing
  css: {
    devSourcemap: false,
    postcss: {
      plugins: []
    }
  },
  
  // Latest optimizations for better performance
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast',
      'lucide-react'
    ]
  },
  

  // Enhanced define for environment variables
    define: {
      __DEV__: mode === 'development',
      __PROD__: mode === 'production'
    }
  };
});
