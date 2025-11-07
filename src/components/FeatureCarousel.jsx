import React from 'react'
import './featureCarousel.css'

export default function FeatureCarousel({features = []}){
  const cards = Array.from({length:7}).map((_,i)=>{
    const f = features[i] || {title:`Feature ${i+1}`, desc: 'Short description.'}
    const center = 3
    const offset = i - center
    const absOffset = Math.abs(offset)
    return (
      <article
        key={i}
        className={`fc-card ${absOffset === 0 ? 'center' : ''}`}
        style={{ ['--offset']: offset, ['--abs']: absOffset }}
        tabIndex={0}
        aria-label={`${f.title}: ${f.desc}`}
      >
        <div className="fc-thumb" aria-hidden></div>
        <div className="fc-body">
          <h3 className="fc-title">{f.title}</h3>
          <p className="fc-desc">{f.desc}</p>
        </div>
      </article>
    )
  })

  return (
    <div className="fc-root" role="group" aria-label="Feature showcase">
      <div className="fc-stage">
        {cards}
      </div>
    </div>
  )
}
