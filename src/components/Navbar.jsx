import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-logo" aria-hidden>
            <span className="logo-icon">🧠</span>
          </div>
          <span className="brand-name">
            <span className="brand-left">Mind</span>
            <span className="brand-right">Sync</span>
          </span>
        </div>

        <ul className="nav-links">
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/study">Study Mode</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="login" to="/login">Login</Link>
          <Link className="cta" to="/study">Start Free</Link>
        </div>
      </div>
    </nav>
  )
}
