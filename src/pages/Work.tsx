import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Work() {
  const { hash } = useLocation()

  // Scroll to anchor if navigated with a hash
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [hash])

  return (
    <main id="main">
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  )
}
