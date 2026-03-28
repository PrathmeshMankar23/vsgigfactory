'use client'

import { useRouter } from 'next/navigation'

const Advantages = () => {
  const router = useRouter()

  const handleHighlightClick = (word) => {
    // Navigate to details page with hash for direct jump
    const wordId = word.toLowerCase().replace(/\s+/g, '-')
    router.push(`/advantages-details#${wordId}`)
  }

  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-header">
          <h2 className="advantages-title">Construction Technology Advantages</h2>
          <p className="advantages-subtitle">
            Discover how our comprehensive solutions transform construction projects through innovation and efficiency
          </p>
        </div>

        {/* All Words Cloud */}
        <div className="tags-container">
          <div className="all-tags">
            {/* 2D Category Tags */}
            <span className="tag active">Improved accuracy</span>
            <span className="tag active medium">Enhanced coordination</span>
            <span className="tag active">Clarity in documentation</span>
            <span className="tag active large">Standardized outputs</span>
            <span className="tag active medium">Reduced errors</span>
            <span className="tag active small">Faster reviews</span>
            <span className="tag active">Better quality control</span>
            <span className="tag active medium">Streamlined workflows</span>
            <span className="tag active">Clear communication</span>
            <span className="tag active large">Professional presentation</span>

            {/* 3D Category Tags */}
            <span className="tag active">Visualization excellence</span>
            <span className="tag active large">Design clarity</span>
            <span className="tag active medium">Clash detection</span>
            <span className="tag active">Space planning</span>
            <span className="tag active large">Client presentations</span>
            <span className="tag active medium">Design validation</span>
            <span className="tag active">Improved collaboration</span>
            <span className="tag active small">Error reduction</span>
            <span className="tag active">Better decision making</span>
            <span className="tag active large">Enhanced understanding</span>

            {/* 4D Category Tags */}
            <span className="tag active">Time-based visualization</span>
            <span className="tag active large">Schedule optimization</span>
            <span className="tag active medium">Progress tracking</span>
            <span className="tag active">Sequence planning</span>
            <span className="tag active large">Resource allocation</span>
            <span className="tag active medium">Timeline management</span>
            <span className="tag active">Risk identification</span>
            <span className="tag active small">Delay Analysis</span>

            <span className="tag active large">Design Clarity</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Construction Smart')}>
              Construction Smart
            </span>
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

            {/* PP&C Category Tags */}
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

            {/* BOQ Category Tags */}
            <span className="tag active">Accurate BOQ</span>
            <span className="tag active medium">Reduced cost overruns</span>
            <span className="tag active">Quantity validation</span>
            <span className="tag active large">Procurement optimization</span>
            <span className="tag active medium">Waste reduction</span>
            <span className="tag active small">Cost forecasting</span>
            <span className="tag active">Budget tracking</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Intelligence')}>
              Intelligence
            </span>
            <span className="tag active small">Resource</span>
            <span className="tag active">Risk Reduction</span>

            <span className="tag active">Better decision-making</span>

            <span className="tag active small">Reduced design conflicts</span>
            <span className="tag active small">Accelerated delivery</span>
            <span className="tag highlight" onClick={() => handleHighlightClick('Optimize Cost')}>
              Optimize Cost
            </span>

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
          <button className="advantages-button">
            Explore All Advantages →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Advantages