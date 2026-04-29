import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface Props { children: ReactNode }

export default function PageTransition({ children }: Props) {
  const { pathname } = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('page-entered')
    // force reflow so the class removal takes effect before re-adding
    void el.offsetHeight
    el.classList.add('page-entered')
  }, [pathname])

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  )
}
