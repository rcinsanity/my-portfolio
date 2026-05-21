import Reveal from './Reveal'

const stats = [
  { value: 'Cum',    sub: 'Laude Graduate',   icon: '🎓' },
  { value: "Dean's", sub: 'Lister 2023–2025', icon: '🏅' },
  { value: '4+',     sub: 'Projects Built',   icon: '🛠️' },
  { value: '5',      sub: 'Cisco Certs',      icon: '📜' },
]

const journey = [
  {
    year: '2008–2017',
    type: 'Education',
    title: 'Elementary School',
    org: 'Saint Gabriel International School',
    label: 'Completed elementary education from Grade 1 through Grade 8.',
  },
  {
    year: '2018–2022',
    type: 'Education',
    title: 'Secondary School — STEM',
    org: 'Pasig Catholic College',
    label: 'Completed Senior High School under the STEM strand, building a strong foundation in science, technology, engineering, and mathematics.',
  },
  {
    year: '2022–2026',
    type: 'Education',
    title: 'Tertiary School — BS Information Technology',
    org: "Pasig Catholic College · Cum Laude · Dean's Lister 2023–2025",
    label: 'Graduated Cum Laude. Specialized in web development, UI/UX design, and database management. Built a capstone project and multiple web-based case study applications.',
  },
  {
    year: '2026',
    type: 'On the Job Training',
    title: 'Creative and Admin Department',
    org: 'Pru Life UK · Pasig, Metro Manila (Remote)',
    label: 'Handled creative and administrative tasks in a remote setup. Demonstrated strong communication, adaptability, and the ability to work both independently and collaboratively.',
  },
]

export default function About() {
  return (
    <section className="section section-about" id="about-detail" aria-labelledby="about-title">
      <Reveal>
        <div className="section-header">
          <span className="section-num" aria-hidden="true">01</span>
          <div>
            <p className="section-label">who I am</p>
            <h2 className="section-title" id="about-title">About Me</h2>
          </div>
        </div>
      </Reveal>

      {/* Bio + stats */}
      <div className="about-grid">
        <Reveal className="about-bio-wrap">
          <div className="about-bio-card">
            <p className="about-bio-text">
              I'm <strong>Ralphael Zion D. Chata</strong>, a Cum Laude Information Technology
              graduate from Pasig Catholic College in Cainta, Rizal. I build clean, functional
              web experiences and have a strong interest in UI/UX design and database-driven systems.
            </p>
            <p className="about-bio-text">
              Outside of code, I value adaptability and continuous learning — two things that
              helped me graduate Cum Laude, stay on the Dean's List, and earn multiple Cisco
              certifications. I'm actively looking for full-time opportunities where I can grow
              and contribute in a real team environment.
            </p>
            <div className="about-tags">
              <span className="about-tag">📍 Cainta, Rizal</span>
              <span className="about-tag">✉️ ralphaelzionchata@gmail.com</span>
              <span className="about-tag">📞 0915 543 5532</span>
            </div>
          </div>
        </Reveal>

        <div className="about-stats">
          {stats.map((s, i) => (
            <Reveal key={s.sub} delay={i * 80}>
              <div className="about-stat-card">
                <span className="about-stat-icon" aria-hidden="true">{s.icon}</span>
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-sub">{s.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>      {/* Journey timeline */}
      <Reveal delay={100}>
        <h3 className="about-journey-title">journey</h3>
      </Reveal>
      <ol className="timeline" aria-label="Academic and career journey">
        {journey.map((j, i) => (
          <Reveal key={j.year} delay={i * 100} className="timeline-reveal">
            <li className="timeline-item">
              <div className="timeline-left">
                <span className="tl-date">{j.year}</span>
                <span className="tl-type">{j.type}</span>
              </div>
              <div className="timeline-connector" aria-hidden="true">
                <div className="tl-dot" />
                <div className="tl-line" />
              </div>
              <div className="timeline-right">
                <h3>{j.title}</h3>
                <p className="tl-org">{j.org}</p>
                <p className="tl-desc">{j.label}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
