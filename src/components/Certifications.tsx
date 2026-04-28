import { useState } from 'react'
import Reveal from './Reveal'
import CertModal from './CertModal'
import { certifications } from '../data'

const categoryColor: Record<string, string> = {
  Networking: 'cert-tag-blue',
  Security:   'cert-tag-green',
  IT:         'cert-tag-purple',
}

export default function Certifications() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive]   = useState<typeof certifications[0] | null>(null)

  return (
    <section className="section section-certs" id="certifications" aria-labelledby="certs-title">
      <Reveal>
        <div className="section-header">
          <span className="section-num" aria-hidden="true">03</span>
          <div>
            <p className="section-label">credentials</p>
            <h2 className="section-title" id="certs-title">Certifications</h2>
          </div>
        </div>
      </Reveal>

      <div className="certs-grid" role="list">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div
              className="cert-card cert-card-btn"
              role="listitem"
              onMouseEnter={() => setHovered(c.title)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(c)}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActive(c)}
              aria-label={`View certificate: ${c.title}`}
            >
              {/* PDF preview on hover */}
              {hovered === c.title && (
                <div className="cert-preview" aria-hidden="true">
                  <iframe
                    src={`${c.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`Preview of ${c.title}`}
                    tabIndex={-1}
                  />
                  <div className="cert-preview-hint">click to expand</div>
                </div>
              )}

              <div className="cert-card-top">
                <div className="cert-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <span className={`cert-tag ${categoryColor[c.category] ?? ''}`}>{c.category}</span>
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p className="cert-org">via {c.org}</p>
              <div className="cert-footer">
                <span className="cert-date">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {c.date}
                </span>
                <span className="cert-view-hint">click to expand ↗</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {active && (
        <CertModal
          title={active.title}
          pdf={active.pdf}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}
