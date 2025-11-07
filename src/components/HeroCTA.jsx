import React, { useEffect, useState } from 'react'
import './cta.css'

export default function HeroCTA(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const t = setTimeout(()=> setVisible(true), 120)
    return ()=> clearTimeout(t)
  }, [])

  // particle positions (percent) and delays
  const particles = [
    {l:8, t:30, d:0, s:0.9}, {l:22, t:12, d:120, s:1.2}, {l:40, t:22, d:240, s:0.8},
    {l:62, t:18, d:60, s:1.0}, {l:78, t:34, d:180, s:0.85}, {l:88, t:10, d:300, s:1.1},
    {l:52, t:46, d:90, s:0.7}, {l:32, t:54, d:210, s:0.95}
  ]

  return (
    <section className={`cta-root ${visible ? 'enter' : ''}`} aria-hidden>
      <div className="cta-backdrop" />
      {/* decorative particles */}
      {particles.map((p, i)=> (
        <span key={i} className="cta-particle" style={{ left: `${p.l}%`, top: `${p.t}%`, ['--delay']: `${p.d}ms`, ['--scale']: p.s }} />
      ))}

      <div className="cta-inner">
        <h2 className="cta-title">Unlock Your Full Potential</h2>
        <p className="cta-sub">Seamlessly integrate knowledge with MindSync's AI-powered platform</p>

        <div className="cta-actions">
          <a className="btn cta-btn" href="#">Start Your Transformation</a>
          <div className="cta-note">No commitments. Cancel anytime.</div>
        </div>
      </div>
    </section>
  )
}
