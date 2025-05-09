import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductContextProvider } from './context/ProductProvider.jsx'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'


createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
)
