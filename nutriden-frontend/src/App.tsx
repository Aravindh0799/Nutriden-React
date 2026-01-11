import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home.tsx"
import Navbar from "./components/navbar.tsx"
import Footer from "./components/Footer.tsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
