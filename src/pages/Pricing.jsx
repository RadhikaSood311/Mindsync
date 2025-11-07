import React from 'react'
import '../App.css'

export default function Pricing(){
  return (
    <main className="page-root">
      <section className="section">
        <div className="section-inner">
          <h1 className="section-title">Pricing</h1>
          <p className="section-sub muted">Simple pricing — free forever tier plus optional upgrades.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <p>Core features, summaries, and basic flashcards.</p>
            </div>
            <div className="pricing-card">
              <h3>Pro</h3>
              <p>Advanced flashcards, priority processing, and extended history.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
