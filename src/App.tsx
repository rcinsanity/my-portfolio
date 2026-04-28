import './App.css'
import { useTheme } from './hooks'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  const { light, toggle } = useTheme()

  return (
    <>
      <a href="#about" className="skip-link">Skip to main content</a>
      <Nav light={light} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-logo" aria-label="RZC logo">[rzc]</span>
        <p>designed &amp; built by <span>Ralphael Zion D. Chata</span> — {new Date().getFullYear()}</p>
        <a href="#about" className="footer-top" aria-label="Back to top">↑ top</a>
      </footer>
      <BackToTop />
    </>
  )
}
