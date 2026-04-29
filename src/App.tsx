import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useTheme } from './hooks'
import Nav from './components/Nav'
import BackToTop from './components/BackToTop'
import Cursor from './components/Cursor'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Work from './pages/Work'
import NotFound from './pages/NotFound'

function Layout() {
  const { light, toggle } = useTheme()

  return (
    <>
      <Cursor />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav light={light} onToggleTheme={toggle} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <footer className="footer">
        <span className="footer-logo" aria-label="RZC logo">[rzc]</span>
        <p>designed &amp; built by <span>Ralphael Zion D. Chata</span> — {new Date().getFullYear()}</p>
        <a href="#about" className="footer-top" aria-label="Back to top">↑ top</a>
      </footer>
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
