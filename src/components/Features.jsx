import React from 'react'
import './features.css'

const FEATURES = [
  {title: 'Instant Summaries', desc: 'Auto-generated concise summaries for any YouTube video—get the key points in seconds.'},
  {title: 'Smart Flashcards', desc: 'One-click flashcard creation from transcripts to speed up active recall.'},
  {title: 'Focused Study Mode', desc: 'Distraction-free mode with built-in timers and study sessions.'},
  {title: 'Progress Tracking', desc: 'Track mastery across videos and topics with visual progress charts.'},
  {title: 'Topic Search', desc: 'Search across your saved videos and notes to quickly find what matters.'},
  {title: 'Multi-language Support', desc: 'Works with transcripts and captions in many languages.'}
]

export default function Features(){
  return (
    <section id="features" className="site-features">
      <div className="features-inner">
        <div className="features-header">
          <h2 className="section-title">Smarter Tools for Smarter Minds</h2>
          <p className="section-sub">Everything you need to turn passive videos into active learning — fast, private, and easy to use.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article className="feature-card" key={i}>
              <div className="feature-icon" aria-hidden>{/* placeholder */}{String.fromCharCode(0x1F4A1 + i)}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
