'use client'

import { useRouter } from 'next/navigation'

const OurExpertise = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  const services = [
    {
      title: "Architectural Design",
      description: "Advanced 3D architectural modeling and design visualization with parametric capabilities",
      image: "/images/service1.jpg", // replace with your image
      features: ["Parametric Design", "3D Visualization", "Design Optimization"]
    },
    {
      title: "3D Modeling",
      description: "High-precision 3D modeling services for complex architectural and engineering projects",
      image: "/images/service2.jpg",
      features: ["LOD Development", "Family Creation", "Model Coordination"]
    },
    {
      title: "4D/5D Construction Simulation",
      description: "Time and cost simulation for construction planning and project management optimization",
      image: "/images/service3.jpg",
      features: ["Construction Sequencing", "Cost Analysis", "Resource Planning"]
    }
  ]

  return (
    <section className="our-expertise-section">
      {/* Header */}
      <div className="expertise-header-simple">
        <h1 className="expertise-title">BIM Services</h1>
        <p className="expertise-subtitle">
          Comprehensive Building Information Modeling solutions for modern construction
        </p>
      </div>


      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Content */}
              <div className="bim-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {/* Features */}
                <ul>
                  {service.features.map((item, i) => (
                    <li key={i}>
                      <span className="tick">✔</span> {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="learn-btn">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className="expertise-header-simple">
        <h1 className="expertise-title">BIM Consulting</h1>
        <p className="expertise-subtitle">
          Strategic BIM implementation and consulting services for construction excellence
        </p>
      </div>


      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Content */}
              <div className="bim-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {/* Features */}
                <ul>
                  {service.features.map((item, i) => (
                    <li key={i}>
                      <span className="tick">✔</span> {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="learn-btn">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>  
    </section>
  )
}

export default OurExpertise
