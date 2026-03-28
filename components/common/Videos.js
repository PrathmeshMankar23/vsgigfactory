'use client'

import { useState } from 'react'

const Trust = () => {
  const [activeModal, setActiveModal] = useState(null)

  const videos = [
    {
      id: 1,
      name: "Puneet Arora - AMS Project Consultants",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      name: "Harshad Rajadhyax - Sandersons",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      name: "Yayati Kene | Real Estate",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      name: "Ashish | Construction Expert",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 5,
      name: "Yayati Kene | Real Estate",
      videoId: "dQw4w9WgXcQ"
    }
  ]

  return (
    <section className="trust-section">
      <div className="trust-container">

        <h2 className="trust-heading">
          Trusted by hundreds of Construction Industry Professionals
        </h2>

        {/* VIDEO SLIDER */}
        <div className="trust-slider">
          {videos.map((video) => (
            <div key={video.id} className="trust-card">

              <div
                className="video-box"
                onClick={() => setActiveModal(video.videoId)}
              >
                <div className="play-btn">▶</div>
              </div>

              <div className="video-name">
                {video.name}
              </div>

            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="slider-progress">
          <div className="progress-fill"></div>
        </div>

        {/* Description */}
        <p className="trust-desc">
          At Gigfactory, our success is measured by the confidence our clients place in us.
          Across 10+ million sq.ft. of delivered projects, we have partnered with developers,
          contractors, and consultants to bring clarity, coordination, and intelligence
          to complex construction projects.
        </p>

        <h3 className="trust-footer">Insights & Industry Knowledge</h3>

      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="modal" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setActiveModal(null)}>
              &times;
            </span>
            <iframe
              src={`https://www.youtube.com/embed/${activeModal}?autoplay=1`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Trust