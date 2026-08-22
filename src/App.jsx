import { Routes, Route } from 'react-router-dom'
import NavDrawer from './components/NavDrawer.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Places from './pages/Places.jsx'
import PlaceDetail from './pages/PlaceDetail.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain-overlay" aria-hidden="true" />
      <NavDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:slug" element={<PlaceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
