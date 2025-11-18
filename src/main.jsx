import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'
import App from './App.jsx'
import { MenuModalProvider } from './context/MenuModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <MenuModalProvider>
          <App />
        </MenuModalProvider>
      </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>,
)
