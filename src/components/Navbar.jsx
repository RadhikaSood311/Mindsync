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
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#features">Study Mode</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="login" href="#">Login</a>
          <a className="cta" href="#">Start Free</a>
        </div>
      </div>
    </nav>
  )
}
