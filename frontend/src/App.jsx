
import { Router, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductUnic from './pages/ProductUnic'


function App() {
  return (
    <div className="w-full h-screen grid min-h-dvh grid-rows-[auto_1fr_auto] bg-gray-100">
      <Navbar />
      <div className='w-4/5 mx-auto'>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductUnic />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
