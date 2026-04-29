import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="not-found-inner">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-sub">
          Looks like this route doesn't exist. Maybe it got lost in the void.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          ← back home
        </Link>
      </div>
    </main>
  )
}
