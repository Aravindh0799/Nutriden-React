import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import Login from "./pages/login.tsx"
import PersistLogin from './components/PersistLogin.tsx'
import Checkout from "./pages/checkout.tsx"
import RequireAuth from './hooks/requireAuth.tsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
