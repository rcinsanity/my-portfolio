import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useScrolled } from '../hooks'

interface NavProps {
  light: boolean
  onToggleTheme: () => void
}

export default function Nav({ light, onToggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(80)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo" aria-label="Home" onClick={() => setMenuOpen(false)}>
        <span className="logo-bracket">[</span>rzc<span className="logo-bracket">]</span>
      </NavLink>

      <div className="nav-right">
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          {isHome ? (
            /* Home page — anchor links */
            <>
              <a href="#about"        onClick={() => setMenuOpen(false)}><span className="nav-num">01.</span> about</a>
              <a href="#about-detail" onClick={() => setMenuOpen(false)}><span className="nav-num">02.</span> bio</a>
              <a href="#skills"       onClick={() => setMenuOpen(false)}><span className="nav-num">03.</span> skills</a>
              <a href="#projects"     onClick={() => setMenuOpen(false)}><span className="nav-num">04.</span> projects</a>
              <NavLink to="/work" onClick={() => setMenuOpen(false)} className="nav-work-link">
                more ↗
              </NavLink>
            </>
          ) : (
            /* Work page — route links */
            <>
              <NavLink to="/"                onClick={() => setMenuOpen(false)}><span className="nav-num">00.</span> home</NavLink>
              <a href="#projects"            onClick={() => setMenuOpen(false)}><span className="nav-num">01.</span> projects</a>
              <a href="#experience"          onClick={() => setMenuOpen(false)}><span className="nav-num">02.</span> experience</a>
              <a href="#certifications"      onClick={() => setMenuOpen(false)}><span className="nav-num">03.</span> certifications</a>
              <a href="#contact"             onClick={() => setMenuOpen(false)}><span className="nav-num">04.</span> contact</a>
            </>
          )}
          <a href="/Chata-Resume.pdf" className="nav-resume" download onClick={() => setMenuOpen(false)}>
            resume ↓
          </a>
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
          title={light ? 'Dark mode' : 'Light mode'}
        >
          {light ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
