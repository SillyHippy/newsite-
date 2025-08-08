
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Enhanced error boundary for better development experience
if (import.meta.env.DEV) {
  // Enable React DevTools profiler in development
  if ((window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot = (id: number, root: any) => {
      console.log('React commit:', { id, root });
    };
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
