import React from 'react'
import ReactDOM from 'react-dom/client'


import store from "../store.ts";
import { Provider } from "react-redux";


// import  { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered", res))
      .catch(err => console.log("service worker not registered", err))
  })
}