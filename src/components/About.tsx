import Reveal from './Reveal'

const stats = [
  { value: "Dean's", sub: 'Lister 2023–2025', icon: '🏅' },
  { value: '4+',     sub: 'Projects Built',   icon: '🛠️' },
  { value: '5',      sub: 'Cisco Certs',      icon: '📜' },
  { value: 'BSIT',   sub: 'Pasig Catholic College', icon: '🎓' },
]

const journey = [
  { year: '2008', label: 'Started Grade 1 at Saint Gabriel International School' },
  { year: '2017', label: 'Completed Grade 8 at Saint Gabriel International School' },
  { year: '2018', label: 'Enrolled at Pasig Catholic College — Senior High School (STEM strand)' },
  { year: '2020', label: 'Graduated Senior High School and continued to college at PCC' },
  { year: '2022', label: 'Enrolled in BS Information Technology at Pasig Catholic College' },
  { year: '2023', label: "Achieved Dean's Lister status — maintained through 2025" },
  { year: '2024', label: 'Earned Cisco certifications in networking and cybersecurity' },
  { year: '2026', label: 'Interned at Pru Life UK · Graduated · Open to full-time roles' },
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
              I'm <strong>Ralphael Zion D. Chata</strong>, an Information Technology graduate from
              Pasig Catholic College in Cainta, Rizal. I build clean, functional web experiences
              and have a strong interest in UI/UX design and database-driven systems.
            </p>
            <p className="about-bio-text">
              Outside of code, I value adaptability and continuous learning — two things that
              helped me stay on the Dean's List while juggling multiple project builds and
              Cisco certifications. I'm currently looking for opportunities where I can grow
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
      </div>

      {/* Journey timeline */}
      <Reveal delay={100}>
        <h3 className="about-journey-title">
          <span className="section-label" style={{ display: 'inline' }}>journey</span>
        </h3>
      </Reveal>
      <div className="about-journey">
        {journey.map((j, i) => (
          <Reveal key={j.year} delay={i * 70}>
            <div className="about-journey-item">
              <span className="about-journey-year">{j.year}</span>
              <div className="about-journey-dot" aria-hidden="true" />
              <p className="about-journey-label">{j.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
