'use client'

import Sitemap from './Sitemap'

const Login = () => {
  const culturePillars = [
    {
      title: "Intelligence -Driven Thinking",
      description: "We embrace creativity and forward-thinking solutions"
    },
    {
      title: "Collaboration Over Silos", 
      description: "We work together to achieve exceptional results"
    },
    {
      title: "Ownership & Accountability",
      description: "We uphold the highest standards of ethics and transparency"
    },
    {
      title: "Continuous Learning & Growth",
      description: "We strive for outstanding quality in everything we do"
    }
  ]

  return (
    <div className="login-page">

      {/* ===== MAIN LOGIN CARD ===== */}
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <p className="what-is-text" style={{ color: 'white' }}>what is</p>
          <h1>
            <a 
              href="https://app.gigbimlabs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="core-link"
            >
              CORE
            </a>
          </h1>
          <p>Gigfactory's Execution Control Platform</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h2>Login</h2>

          <form>
            <label>MAIL ID</label>
            <input type="email" placeholder="Enter your email" />

            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>


      {/* ===== SECOND CARD ===== */}
      <div className="expert-card">
        <p className="expert-title">
          Interested in becoming a Gigfactory Expert?
        </p>

        <p className="expert-subtitle">
          Submit your profile and explore freelance opportunities with us
        </p>

        <button className="expert-btn">
          Apply as an Expert
        </button>
      </div>

      {/* ===== CULTURE TEXT ===== */}
      <div className="culture-text">
        <h3>Building Intelligence. Growing Together.</h3>
        <p>At Gigfactory, culture is not just about where we work — it's about how we think, collaborate, and build</p>
      </div>

      {/* ===== OUR CULTURE PILLARS HEADING ===== */}
      <div className="culture-pillars-heading">
        <h2>Our Culture Pillars</h2>
      </div>

      {/* ===== CULTURE PILLARS GRID ===== */}
      <div className="culture-pillars-grid">
        {culturePillars.map((pillar, index) => (
          <div key={index} className="culture-pillar">
            <div className="pillar-number">{index + 1}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* ===== SITEMAP SECTION ===== */}
      <div className="login-sitemap-section">
        <Sitemap />
      </div>

    </div>
  )
}

export default Login