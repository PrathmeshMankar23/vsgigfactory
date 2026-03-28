'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const AdvantagesDetails = () => {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('')

  const advantagesData = [
    {
      id: 'intelligence',
      title: 'Intelligence',
      description: 'Our AI-powered intelligence system provides deep insights into construction processes, enabling data-driven decision making and predictive analytics for optimal project outcomes.',
      features: [
        'Real-time data analysis and reporting',
        'Predictive modeling for risk assessment',
        'Automated workflow optimization',
        'Machine learning for continuous improvement',
        'Advanced analytics dashboard'
      ],
      benefits: [
        'Improved project predictability',
        'Reduced operational risks',
        'Enhanced decision-making capabilities',
        'Better resource allocation',
        'Increased project success rates'
      ]
    },
    {
      id: 'optimize-cost',
      title: 'Optimize Cost',
      description: 'Comprehensive cost optimization strategies that leverage technology and data analytics to minimize expenses while maintaining quality and project timelines.',
      features: [
        'Dynamic cost tracking and monitoring',
        'Automated budget alerts and controls',
        'Resource utilization optimization',
        'Supply chain cost analysis',
        'Value engineering recommendations'
      ],
      benefits: [
        'Up to 20% cost reduction',
        'Improved budget adherence',
        'Enhanced cost visibility',
        'Better ROI on investments',
        'Sustainable cost management'
      ]
    },
    {
      id: 'construction-smart',
      title: 'Construction Smart',
      description: 'Smart construction solutions that integrate IoT, automation, and digital technologies to create efficient, connected, and intelligent building sites.',
      features: [
        'IoT sensor integration for real-time monitoring',
        'Automated quality control systems',
        'Digital twin technology for simulation',
        'Smart equipment management',
        'Real-time communication platforms'
      ],
      benefits: [
        'Enhanced site safety',
        'Improved construction quality',
        'Reduced project timelines',
        'Better resource management',
        'Increased operational efficiency'
      ]
    },
    {
      id: 'reduce-rework',
      title: 'Reduce Rework',
      description: 'Advanced quality control and error prevention systems that significantly reduce rework through proactive detection and correction of issues.',
      features: [
        'Automated clash detection',
        'Real-time quality monitoring',
        'Digital inspection workflows',
        'Error prediction algorithms',
        'Continuous quality assurance'
      ],
      benefits: [
        'Up to 30% reduction in rework',
        'Improved project timelines',
        'Reduced material waste',
        'Enhanced client satisfaction',
        'Lower overall project costs'
      ]
    },
    {
      id: 'accelerate-delivery',
      title: 'Accelerate Delivery',
      description: 'Streamlined project delivery methodologies that leverage technology and optimized workflows to significantly reduce construction timelines.',
      features: [
        'Parallel processing capabilities',
        'Automated scheduling optimization',
        'Resource leveling algorithms',
        'Progress tracking automation',
        'Integrated delivery management'
      ],
      benefits: [
        '25-40% faster project delivery',
        'Improved cash flow management',
        'Enhanced competitive advantage',
        'Better resource utilization',
        'Increased project capacity'
      ]
    }
  ]

  useEffect(() => {
    // Check for hash in URL and scroll to section
    const hash = window.location.hash.replace('#', '')
    if (hash && advantagesData.find(item => item.id === hash)) {
      setActiveSection(hash)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const handleBackClick = () => {
    router.back()
  }

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="advantages-details-section">
      <div className="container">
        {/* Header */}
        <div className="advantages-details-header">
          <button onClick={handleBackClick} className="back-button">
            ← Back to Advantages
          </button>
          <h1 className="advantages-details-title">Construction Technology Advantages</h1>
          <p className="advantages-details-subtitle">
            Comprehensive solutions for modern construction challenges
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="advantages-nav">
          <div className="nav-title">Quick Navigation:</div>
          <div className="nav-links">
            {advantagesData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="advantages-content">
          {advantagesData.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className={`advantage-section ${activeSection === item.id ? 'active' : ''}`}
            >
              <div className="advantage-header">
                <h2 className="advantage-title">{item.title}</h2>
                <div className="advantage-divider"></div>
              </div>
              
              <div className="advantage-description">
                <p>{item.description}</p>
              </div>

              <div className="advantage-features">
                <h3 className="section-subtitle">Key Features</h3>
                <ul className="feature-list">
                  {item.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="advantage-benefits">
                <h3 className="section-subtitle">Benefits</h3>
                <ul className="benefit-list">
                  {item.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-bullet">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="advantages-details-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Construction Projects?</h3>
            <p className="cta-subtitle">
              Contact us today to learn how these advantages can benefit your organization
            </p>
            <button className="cta-button">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesDetails
