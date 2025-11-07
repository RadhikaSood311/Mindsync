import React, { useState } from 'react'
import './footer.css'

export default function Footer(){
  const [status, setStatus] = useState('idle')

  function handleSubmit(e){
    e.preventDefault()
    const form = e.target
    const email = form.email?.value?.trim()
    if(!email) return
    setStatus('sending')
    // simulate network
    setTimeout(()=>{
      setStatus('sent')
      form.reset()
      setTimeout(()=> setStatus('idle'), 2500)
    }, 800)
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">Mindsync<span className="logo-dot">.</span></div>
          <p className="brand-desc">Turn YouTube into your personal AI study assistant — summaries, flashcards, focus tools and progress tracking.</p>
          <div className="socials" aria-hidden>
            <a href="#" aria-label="Twitter" className="social">T</a>
            <a href="#" aria-label="LinkedIn" className="social">in</a>
            <a href="#" aria-label="Github" className="social">GH</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#demo">Demo</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay in the loop</h4>
          <p className="muted">Get product updates, tips, and exclusive offers. Unsubscribe anytime.</p>

          <form className="subscribe-form" onSubmit={handleSubmit} aria-label="Subscribe to newsletter">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" name="email" type="email" placeholder="you@company.com" required />
            <button type="submit" className="btn subscribe" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : status==='sent' ? 'Thanks!' : 'Subscribe'}</button>
          </form>

          <div className="legal">© {new Date().getFullYear()} Mindsync — All rights reserved.</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-inner">
          <small className="muted">Built with care • Privacy · Terms</small>
        </div>
      </div>
    </footer>
  )
}
