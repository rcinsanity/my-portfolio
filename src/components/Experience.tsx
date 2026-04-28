import Reveal from './Reveal'
import { timeline } from '../data'

export default function Experience() {
  return (
    <section className="section section-exp" id="experience" aria-labelledby="exp-title">
      <Reveal>
        <div className="section-header">
          <span className="section-num" aria-hidden="true">02</span>
          <div>
            <p className="section-label">background</p>
            <h2 className="section-title" id="exp-title">Experience &amp; Education</h2>
          </div>
        </div>
      </Reveal>

      <ol className="timeline" aria-label="Career and education timeline">
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 120} className="timeline-reveal">
            <li className="timeline-item">
              <div className="timeline-left">
                <span className="tl-date">{item.date}</span>
                <span className="tl-type">{item.type}</span>
              </div>
              <div className="timeline-connector" aria-hidden="true">
                <div className="tl-dot" />
                <div className="tl-line" />
              </div>
              <div className="timeline-right">
                <h3>{item.title}</h3>
                <p className="tl-org">{item.org}</p>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
