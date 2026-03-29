'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Advantages = () => {
  const router = useRouter()
  const [selectedAdvantageId, setSelectedAdvantageId] = useState(null)
  const modalContentRef = useRef(null)

  const advantagesData = [
    {
      id: 'construction-smart',
      key: 'Construction Smart',
      title: 'Construct Smart',
      subtitle: 'End-to-End Construction Intelligence',
      description: "We don't just deliver drawings — we deliver integrated project intelligence. From 3D BIM (LOD 100–500) to 4D planning, 6D asset management, and AI-powered automation, Gigfactory provides a unified ecosystem that connects:",
      points: [
        'Architecture',
        'Structure',
        'MEPF',
        'Planning',
        'BOQ & Quantity Take-Off',
        'Documentation',
        'Operations & Maintenance'
      ],
      footer: 'This ensures seamless coordination from concept to facility lifecycle.',
      images: ['/assets/1.png', '/assets/2.png', '/assets/design development.png']
    },
    {
      id: 'intelligence',
      key: 'Intelligence',
      title: 'Intelligence',
      subtitle: 'Data-Driven Insights',
      description: 'Our AI-powered intelligence system provides deep insights into construction processes, enabling data-driven decision making and predictive analytics for optimal project outcomes.',
      points: [
        'Real-time data analysis and reporting',
        'Predictive modeling for risk assessment',
        'Automated workflow optimization',
        'Machine learning for continuous improvement',
        'Advanced analytics dashboard'
      ],
      footer: 'Empowering your projects with intelligent foresight.',
      images: ['/assets/initiation.png', '/assets/execution.png']
    },
    {
      id: 'reduce-rework',
      key: 'Reduce Rework',
      title: 'Reduce Rework',
      subtitle: 'Proactive Error Prevention',
      description: 'Advanced quality control and error prevention systems that significantly reduce rework through proactive detection and correction of issues.',
      points: [
        'Automated clash detection',
        'Real-time quality monitoring',
        'Digital inspection workflows',
        'Error prediction algorithms',
        'Continuous quality assurance'
      ],
      footer: 'Minimizing errors, maximizing efficiency.',
      images: ['/assets/Preconstruction.png', '/assets/handover.png']
    },
    {
      id: 'accelerate-delivery',
      key: 'Accelerate Delivery',
      title: 'Accelerate Delivery',
      subtitle: 'Streamlined Project Methodology',
      description: 'Streamlined project delivery methodologies that leverage technology and optimized workflows to significantly reduce construction timelines.',
      points: [
        'Parallel processing capabilities',
        'Automated scheduling optimization',
        'Resource leveling algorithms',
        'Progress tracking automation',
        'Integrated delivery management'
      ],
      footer: 'Fast-tracking your vision to completion.',
      images: ['/assets/3d.png', '/assets/4d.png']
    },
    {
      id: 'optimize-cost',
      key: 'Optimize Cost',
      title: 'Optimize Cost',
      subtitle: 'Value Engineering & Efficiency',
      description: 'Comprehensive cost optimization strategies that leverage technology and data analytics to minimize expenses while maintaining quality.',
      points: [
        'Dynamic cost tracking and monitoring',
        'Automated budget alerts and controls',
        'Resource utilization optimization',
        'Supply chain cost analysis',
        'Value engineering recommendations'
      ],
      footer: 'Smart spending for superior results.',
      images: ['/assets/boq.png', '/assets/audit.png']
    }
  ]

  const handleHighlightClick = (key) => {
    const advantage = advantagesData.find(a => a.key === key)
    if (advantage) {
      setSelectedAdvantageId(advantage.id)
    }
  }

  const closeModal = () => {
    setSelectedAdvantageId(null)
  }

  useEffect(() => {
    if (selectedAdvantageId) {
      const element = document.getElementById(`modal-section-${selectedAdvantageId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedAdvantageId])

  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-header">
          <h2 className="advantages-title">Advantages of working with Gigfactory</h2>
          <p className="advantages-subtitle">
            We don't just support projects - we improve performance across time, cost, coordination and lifecycle value.
          </p>
        </div>

        {/* All Words Cloud */}
        <div className="tags-container">
          <div className="all-tags">
            <span className="tag active">Improved accuracy</span>
            <span className="tag active medium">Enhanced coordination</span>
            <span className="tag active">Clarity in documentation</span>
            <span className="tag active large">Standardized outputs</span>
            <span className="tag active medium">Reduced errors</span>
            <span className="tag active small">Faster reviews</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Construction Smart')}>
              Construction Smart
            </span>
            <span className="tag active">Better quality control</span>
            <span className="tag active medium">Streamlined workflows</span>
            <span className="tag active">Clear communication</span>
            <span className="tag active large">Professional presentation</span>
            <span className="tag active">Visualization excellence</span>
            <span className="tag active large">Design clarity</span>
            <span className="tag active medium">Clash detection</span>
            <span className="tag active">Space planning</span>
            <span className="tag active large">Client presentations</span>
            <span className="tag active medium">Design validation</span>
            <span className="tag active">Improved collaboration</span>
            <span className="tag active small">Error reduction</span>
            <span className="tag active">Better decision making</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Intelligence')}>
              Intelligence
            </span>
            <span className="tag active large">Enhanced understanding</span>
            <span className="tag active">Time-based visualization</span>
            <span className="tag active large">Schedule optimization</span>
            <span className="tag active medium">Progress tracking</span>
            <span className="tag active">Sequence planning</span>
            <span className="tag active large">Resource allocation</span>
            <span className="tag active medium">Timeline management</span>
            <span className="tag active">Risk identification</span>
            <span className="tag active small">Delay Analysis</span>
            <span className="tag active large">Design Clarity</span>
            <span className="tag active medium">Clash-Free Execution</span>
            <span className="tag active large">Integrated Coordination</span>
            <span className="tag active medium">Smart Collaboration</span>
            <span className="tag active">Real-time monitoring</span>
            <span className="tag active medium">Structured workflows</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Reduce Rework')}>
              Reduce Rework
            </span>
            <span className="tag active">Clear construction intent</span>
            <span className="tag active small">Reduced design conflicts</span>
            <span className="tag active large">Better interdisciplinary coordination</span>
            <span className="tag active">Real-time coordination</span>
            <span className="tag active large">Improved site productivity</span>
            <span className="tag active medium">Reduced bottlenecks</span>
            <span className="tag active">Faster decision cycles</span>
            <span className="tag active small">Safer execution</span>
            <span className="tag active medium">Enhanced productivity</span>
            <span className="tag active">Quality assurance</span>
            <span className="tag active large">Improved compliance</span>
            <span className="tag active medium">Risk mitigation strategies</span>
            <span className="tag active">Data-driven operations</span>
            <span className="tag active">Long-term cost savings</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Accelerate Delivery')}>
              Accelerate Delivery
            </span>
            <span className="tag active small">Asset performance tracking</span>
            <span className="tag active large">Lifecycle optimization</span>
            <span className="tag active medium">Digital continuity</span>
            <span className="tag active">Strategic planning</span>
            <span className="tag active large">Timeline optimization</span>
            <span className="tag active medium">Resource management</span>
            <span className="tag active">Cost control</span>
            <span className="tag active large">Risk assessment</span>
            <span className="tag active medium">Progress monitoring</span>
            <span className="tag active">Quality assurance</span>
            <span className="tag active small">Schedule adherence</span>
            <span className="tag active">Stakeholder coordination</span>
            <span className="tag active large">Project visibility</span>
            <span className="tag active">Accurate BOQ</span>
            <span className="tag active medium">Reduced cost overruns</span>
            <span className="tag active">Quantity validation</span>
            <span className="tag active large">Procurement optimization</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Optimize Cost')}>
              Optimize Cost
            </span>
            <span className="tag active medium">Waste reduction</span>
            <span className="tag active small">Cost forecasting</span>
            <span className="tag active">Budget tracking</span>
            <span className="tag active small">Resource</span>
            <span className="tag active">Risk Reduction</span>
            <span className="tag active">Better decision-making</span>
            <span className="tag active small">Reduced design conflicts</span>
            <span className="tag active small">Accelerated delivery</span>

            {/* Audit Category Tags */}
            <span className="tag active">Compliance verification</span>
            <span className="tag active large">Quality audits</span>
            <span className="tag active medium">Documentation review</span>
            <span className="tag active">Process validation</span>
            <span className="tag active large">Risk assessment</span>
            <span className="tag active medium">Performance evaluation</span>
            <span className="tag active">Standards compliance</span>
            <span className="tag active small">Audit trail</span>
            <span className="tag active">Quality assurance</span>
            <span className="tag active large">Continuous improvement</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="advantages-cta">
          <a href="/contact" className="advantages-button">
            <span>Looking for smart construction solutions? Let's talk →</span>
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedAdvantageId && (
        <div className="advantage-modal-overlay" onClick={closeModal}>
          <div className="advantage-modal-content" onClick={(e) => e.stopPropagation()} ref={modalContentRef}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-scroll-container">
              {advantagesData.map((advantage) => (
                <div key={advantage.id} id={`modal-section-${advantage.id}`} className="modal-section">
                  <div className="modal-header">
                    <h2 className="modal-title">{advantage.title}</h2>
                    <div className="modal-accent"></div>
                  </div>
                  <div className="modal-body">
                    <h3 className="modal-subtitle">{advantage.subtitle}</h3>
                    <p className="modal-description">{advantage.description}</p>
                    <ul className="modal-points">
                      {advantage.points.map((point, index) => (
                        <li key={index} className="modal-point">
                          <span className="bullet">•</span> {point}
                        </li>
                      ))}
                    </ul>
                    <p className="modal-footer-text">{advantage.footer}</p>
                    
                    <div className="modal-images">
                      {advantage.images.map((img, index) => (
                        <div key={index} className="modal-image-wrapper">
                          <img src={img} alt={`Visual representation ${index + 1}`} className="modal-image" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="modal-section-divider"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Advantages