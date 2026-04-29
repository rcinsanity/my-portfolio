import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  visible: boolean
  onHide: () => void
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (visible) {
      setRendered(true)
      const t = setTimeout(onHide, 3500)
      return () => clearTimeout(t)
    } else {
      // keep in DOM briefly for exit animation
      const t = setTimeout(() => setRendered(false), 400)
      return () => clearTimeout(t)
    }
  }, [visible, onHide])

  if (!rendered) return null

  return (
    <div className={`toast ${visible ? 'toast-visible' : 'toast-hidden'}`} role="status" aria-live="polite">
      <span className="toast-icon" aria-hidden="true">✓</span>
      {message}
    </div>
  )
}
