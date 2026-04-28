import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Reveal from '../components/Reveal'
import { projects } from '../data'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Skills />

      {/* Projects preview — 3 cards + CTA to /work */}
      <section className="section section-skills" id="projects" aria-labelledby="home-projects-title">
        <Reveal>
          <div className="section-header">
            <span className="section-num" aria-hidden="true">03</span>
            <div>
              <p className="section-label">selected work</p>
              <h2 className="section-title" id="home-projects-title">Projects</h2>
            </div>
          </div>
        </Reveal>

        <div className="bento" role="list">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className={`bento-item bento-${i}`}>
              <article className="card" role="listitem">
                <div className="card-header">
                  <span className="card-tag">{p.tag}</span>
                  <span className="card-num" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="card-tech" aria-label="Technologies used">
                  {p.tech.map(t => <span key={t} className="card-tech-tag">{t}</span>)}
                </div>
                <div className="card-footer">
                  <div className="card-links">
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">↗ demo</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">↗ repo</a>}
                  </div>
                  <div className="card-glow" aria-hidden="true" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="home-work-cta">
            <Link to="/work" className="btn btn-ghost">
              view experience, certifications &amp; more ↗
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
