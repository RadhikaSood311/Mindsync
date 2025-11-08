import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<NotFound />} />
          <Route path="/pricing" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
