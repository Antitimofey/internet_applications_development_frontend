import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App.tsx'

// Service Worker (оставляем как есть)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    const swUrl = '/internet_applications_development_frontend/serviceWorker.js';
    
    navigator.serviceWorker
      .register(swUrl)
      .then(() => console.log("Service worker registered"))
      .catch(err => console.log("Service worker not registered", err))
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)