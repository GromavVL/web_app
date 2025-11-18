import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './App.module.scss'
import App from './App.jsx'
import { WishlistProvider } from './context/WishlistContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </StrictMode>,
);