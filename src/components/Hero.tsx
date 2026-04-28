import { Link } from 'react-router-dom'
import { useTyping } from '../hooks'
import Reveal from './Reveal'
import avatarImg from '../assets/avatar.jpg'

export default function Hero() {
  const typed = useTyping(['web developer.', 'UI/UX designer.', 'IT student.', 'problem solver.'])

  return (
    <section className="hero" id="about">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-left">
          <Reveal delay={0}>
            <p className="hero-status">
              <span className="status-dot" aria-hidden="true" /> available for work
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero-name">
              Ralphael<br />
              <span className="hero-name-last">Zion Chata</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-typed" aria-live="polite" aria-label={`I am a ${typed}`}>
              <span className="typed-prefix" aria-hidden="true">$ </span>
              <span aria-hidden="true">{typed}</span>
              <span className="cursor" aria-hidden="true">▋</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="hero-bio">
              IT student at Pasig Catholic College with a passion for building
              clean, fast web experiences. Dean's Lister 2023–2025. Lifelong learner.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero-actions">
              <a href="#skills" className="btn btn-primary">view_skills()</a>
              <Link to="/work" className="btn btn-ghost">my_work()</Link>
              <a href="/Chata-Resume.pdf" className="btn btn-outline" download>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                resume
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-right">
          <div className="avatar-wrap">
            <div className="avatar-ring" aria-hidden="true" />
            <div className="avatar-frame">
              <img src={avatarImg} alt="Ralphael Zion Chata" />
              <div className="avatar-scan" aria-hidden="true" />
            </div>
            <div className="avatar-badge" aria-label="Dean's Lister award">
              <span>Dean's Lister</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#skills" className="scroll-hint" aria-label="Scroll down">
        <span aria-hidden="true">scroll</span>
        <div className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
