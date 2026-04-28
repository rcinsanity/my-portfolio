import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <Reveal>
        <div className="section-header">
          <span className="section-num" aria-hidden="true">01</span>
          <div>
            <p className="section-label">selected work</p>
            <h2 className="section-title" id="projects-title">Projects</h2>
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
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`Live demo of ${p.title}`}>↗ demo</a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`GitHub repo for ${p.title}`}>↗ repo</a>}
                </div>
                <div className="card-glow" aria-hidden="true" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
