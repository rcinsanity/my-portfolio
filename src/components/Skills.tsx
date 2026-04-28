import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <div className="section-header">
          <span className="section-num" aria-hidden="true">00</span>
          <div>
            <p className="section-label">what I work with</p>
            <h2 className="section-title" id="skills-title">Tech Stack</h2>
          </div>
        </div>
      </Reveal>

      <div className="skills-grid" role="list" aria-label="Skills and proficiency levels">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 80}>
            <div className="skill-item" role="listitem">
              <div className="skill-top">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct" aria-label={`${s.level}%`}>{s.level}%</span>
              </div>
              <div className="skill-bar" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name} proficiency`}>
                <div
                  className="skill-fill"
                  style={{ '--w': `${s.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
