import '../App.css'
import './home.css'
import ModelViewer from '../components/ModelViewer'
import FeatureCarousel from '../components/FeatureCarousel'
import { useState, useEffect } from 'react'
import HowItWorks from '../components/HowItWorks'

const FEATURES = [
  {title: 'Instant Summaries', desc: 'Auto-generated concise summaries for any YouTube video—get the key points in seconds.'},
  {title: 'Smart Flashcards', desc: 'One-click flashcard creation from transcripts to speed up active recall.'},
  {title: 'Focused Study Mode', desc: 'Distraction-free mode with built-in timers and study sessions.'},
  {title: 'Progress Tracking', desc: 'Track mastery across videos and topics with visual progress charts.'},
  {title: 'Topic Search', desc: 'Search across your saved videos and notes to quickly find what matters.'},
  {title: 'Multi-language Support', desc: 'Works with transcripts and captions in many languages.'}
]

export default function Home(){
  return (
    <main className="home-root">
      {/* Hero: keeps previous styling that depended on .home-page */}
      <section id="hero" className="home-page">
        <div className="hero hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Turn YouTube into Your
              <br />
              <span className="hero-gradient">Personal AI Study Assistant</span>
            </h1>

            <p className="hero-sub">Summaries, flashcards, focus tools, and progress—instantly. Learn smarter, focus better, remember longer.</p>

            <div className="hero-ctas">
              <a className="btn primary" href="#">Start Free →</a>
              <a className="btn ghost" href="#">▶ Watch Demo</a>
            </div>

            <div className="hero-note">No credit card needed • Free forever • Upgrade anytime</div>
          </div>

          <div className="hero-media" aria-hidden>
            {/* responsive positioning: larger and higher on desktop, smaller on mobile */}
            <ResponsiveModel />
          </div>
        </div>
      </section>

      {/* Features placeholder section - ready for content */}
      <section id="features" className="section section-features">
        <div className="section-inner">
          <h2 className="section-title">Features</h2>
          <p className="section-sub muted">Core capabilities to turn passive watching into active learning.</p>
          <FeatureCarousel features={FEATURES} />
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* About */}
      <section id="about" className="section section-about">
        <div className="section-inner">
          <h2 className="section-title">About Mindsync</h2>
          <p className="section-sub muted">Built to help learners convert video content into retained knowledge.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-contact">
        <div className="section-inner">
          <h2 className="section-title">Contact</h2>
          <p className="section-sub muted">Questions or feedback? Reach out and we’ll respond soon.</p>
        </div>
      </section>
    </main>
  )
}

function ResponsiveModel(){
  const [props, setProps] = useState({gltfScale:2.0, gltfYOffset:0.9, modelXOffset:-0.9, modelZOffset:0.9})

  useEffect(()=>{
    function calc(){
      const w = window.innerWidth
      if(w >= 1200){
        setProps({gltfScale:2.0, gltfYOffset:0.9, modelXOffset:-0.9, modelZOffset:0.9})
      } else if(w >= 900){
        setProps({gltfScale:1.6, gltfYOffset:0.7, modelXOffset:-0.6, modelZOffset:0.7})
      } else {
        // mobile: smaller and centered more
        setProps({gltfScale:1.0, gltfYOffset:0.5, modelXOffset:0, modelZOffset:0.6})
      }
    }

    calc()
    window.addEventListener('resize', calc)
    return ()=> window.removeEventListener('resize', calc)
  }, [])

  return (
    <ModelViewer src="/futuristic_flying_animated_robot_-_low_poly/scene.gltf" {...props} />
  )
}
