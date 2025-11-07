import React from 'react'
import '../App.css'

export default function Contact(){
  return (
    <main className="page-root">
      <section className="section">
        <div className="section-inner">
          <h1 className="section-title">Contact</h1>
          <p className="section-sub muted">Have questions or feedback? Send us a message and we'll get back to you.</p>

          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <label>
              Name
              <input name="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Message
              <textarea name="message" />
            </label>
            <button className="btn primary" type="submit">Send</button>
          </form>

        </div>
      </section>
    </main>
  )
}
