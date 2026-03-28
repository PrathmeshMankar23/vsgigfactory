'use client'

import { useRouter } from 'next/navigation'

const Services = () => {
  const router = useRouter()

  const services = [
    {
      id: '2d',
      title: '2D',
      image: '/assets/2d.png',
      description: 'Our team delivers clear, technically accurate drawings and documentation that serve as the foundation for successful construction projects.',
    },
    {
      id: '3d',
      title: '3D',
      image: '/assets/3d.png',
      description: 'Advanced 3D modeling and visualization services that bring your construction projects to life before breaking ground.',
    },
    {
      id: '4d',
      title: '4D',
      image: '/assets/4d.png',
      description: '4D simulation services that integrate time as the fourth dimension, enabling you to visualize and optimize construction sequences.',
    },
    {
      id: 'pp-c',
      title: 'PP&C',
      image: '/assets/pp&c.png',
      description: 'Comprehensive Project Planning and Control services that ensure your construction projects are properly planned and controlled.',
    },
    {
      id: 'boq',
      title: 'BOQ',
      image: '/assets/boq.png',
      description: 'Accurate Bill of Quantities and Quantity Intelligence services that provide precise measurement and cost estimation.',
    },
    {
      id: 'audit',
      title: 'Audit',
      image: '/assets/audit.png',
      description: 'Comprehensive Audit and Verification services that ensure compliance, quality, and accuracy throughout construction phases.',
    }
  ]

  const handleServiceClick = (service) => {
    // Navigate to details page with hash for direct jump
    const serviceId = service.id.toLowerCase().replace(/\s+/g, '-')
    router.push(`/services-details#${serviceId}`)
  }

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Services We Deliver</h2>
          <p className="services-description">
            Our comprehensive range of services covers every aspect of construction and design, 
            ensuring your project is handled with expertise from conception to completion.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" onClick={() => handleServiceClick(service)}>
              <div className="service-icon">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-icon-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="services-cta">
          <button className="services-button">
            Explore All Services →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
