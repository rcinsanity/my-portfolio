import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './CertModal.css'

interface CertModalProps {
  title: string
  pdf: string
  onClose: () => void
}

export default function CertModal({ title, pdf, onClose }: CertModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="cert-modal" onClick={e => e.stopPropagation()}>
        <div className="cert-modal-header">
          <span className="cert-modal-title">{title}</span>
          <div className="cert-modal-actions">
            <a href={pdf} download className="cert-modal-btn" aria-label="Download certificate">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              download
            </a>
            <button className="cert-modal-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <div className="cert-modal-body">
          <iframe
            src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
            title={title}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
