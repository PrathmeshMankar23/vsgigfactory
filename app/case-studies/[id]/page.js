'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, use } from 'react'

const caseStudiesData = {
  1: {
    id: 1,
    title: "Commercial Complex Development",
    category: "Commercial",
    description: "Complete development of 50,000 sq.ft. commercial complex with advanced BIM integration",
    image: "/api/placeholder/400/300",
    features: ["BIM Modeling", "Cost Optimization", "Timeline Management"],
    overview: "A landmark commercial complex spanning 50,000 square feet, featuring modern architectural design with integrated BIM technology for seamless construction management.",
    challenges: [
      "Complex structural design requirements",
      "Tight urban construction timeline",
      "Integration of multiple commercial units",
      "Advanced MEP systems coordination"
    ],
    solutions: [
      "Implemented LOD 400 BIM modeling for clash detection",
      "Utilized 4D scheduling for timeline optimization",
      "Developed modular construction approach",
      "Integrated smart building management systems"
    ],
    results: [
      "Completed 15% ahead of schedule",
      "Achieved 98% client satisfaction",
      "Reduced construction costs by 12%",
      "Zero safety incidents throughout project"
    ],
    technologies: ["BIM 360", "Revit", "Navisworks", "AutoCAD", "Primavera P6"],
    duration: "18 months",
    teamSize: "45 professionals",
    projectValue: "$12.5M"
  },
  2: {
    id: 2,
    title: "Residential Tower Project",
    category: "Residential",
    description: "30-story residential tower with sustainable construction practices",
    image: "/api/placeholder/400/300",
    features: ["Sustainable Design", "Quality Control", "Safety Compliance"],
    overview: "A 30-story residential tower featuring 120 luxury apartments with sustainable construction practices and green building certifications.",
    challenges: [
      "Limited construction site access",
      "Strict environmental regulations",
      "High-rise safety requirements",
      "Complex facade installation"
    ],
    solutions: [
      "Implemented pre-fabricated panel systems",
      "Adopted green construction materials",
      "Advanced safety monitoring systems",
      "Modular bathroom and kitchen units"
    ],
    results: [
      "LEED Platinum certification achieved",
      "Energy efficiency improved by 35%",
      "Construction waste reduced by 40%",
      "Zero major safety incidents"
    ],
    technologies: ["LEED Modeling", "ETABS", "SketchUp", "Green Building Studio"],
    duration: "24 months",
    teamSize: "60 professionals",
    projectValue: "$25M"
  },
  3: {
    id: 3,
    title: "Industrial Facility",
    category: "Industrial",
    description: "Large-scale industrial facility with complex MEP systems",
    image: "/api/placeholder/400/300",
    features: ["MEP Integration", "Project Coordination", "Risk Management"],
    overview: "A state-of-the-art industrial manufacturing facility spanning 100,000 square feet with specialized production lines and complex utility systems.",
    challenges: [
      "Specialized equipment installation",
      "Clean room requirements",
      "Complex utility infrastructure",
      "Operational continuity during construction"
    ],
    solutions: [
      "Phased construction approach",
      "Advanced MEP coordination models",
      "Specialized equipment integration planning",
      "Real-time project monitoring systems"
    ],
    results: [
      "Operational efficiency increased by 25%",
      "Utility costs reduced by 18%",
      "Zero production downtime during transition",
      "Certified for international standards"
    ],
    technologies: ["SolidWorks", "CADmep", "Procore", "BIM 360", "MS Project"],
    duration: "30 months",
    teamSize: "80 professionals",
    projectValue: "$45M"
  },
  4: {
    id: 4,
    title: "Healthcare Infrastructure",
    category: "Healthcare",
    description: "State-of-the-art healthcare facility with specialized requirements",
    image: "/api/placeholder/400/300",
    features: ["Specialized Systems", "Regulatory Compliance", "Quality Assurance"],
    overview: "A 200-bed modern hospital facility with advanced medical infrastructure, specialized treatment areas, and emergency response capabilities.",
    challenges: [
      "Strict healthcare regulations",
      "Specialized medical gas systems",
      "Radiation shielding requirements",
      "Infection control protocols"
    ],
    solutions: [
      "Healthcare-specific BIM modeling",
      "Advanced medical equipment planning",
      "Strict contamination control measures",
      "Integrated hospital management systems"
    ],
    results: [
      "Joint Commission International accreditation",
      "Patient satisfaction score of 95%",
      "Emergency response time under 3 minutes",
      "Zero construction-related infections"
    ],
    technologies: ["Healthcare BIM", "Medical Equipment Planning", "Infection Control Modeling"],
    duration: "36 months",
    teamSize: "95 professionals",
    projectValue: "$85M"
  },
  5: {
    id: 5,
    title: "Educational Campus",
    category: "Educational",
    description: "Multi-building educational campus with integrated infrastructure",
    image: "/api/placeholder/400/300",
    features: ["Campus Planning", "Infrastructure Integration", "Sustainable Solutions"],
    overview: "A comprehensive educational campus spanning 25 acres with multiple academic buildings, sports facilities, and student housing.",
    challenges: [
      "Multiple building coordination",
      "Campus-wide infrastructure integration",
      "Sustainable campus design",
      "Phased occupancy requirements"
    ],
    solutions: [
      "Master campus BIM coordination",
      "Integrated infrastructure planning",
      "Green campus initiatives",
      "Phased construction and occupancy"
    ],
    results: [
      "Campus capacity increased by 40%",
      "Energy efficiency improved by 30%",
      "Student satisfaction score of 92%",
      "Completed within budget constraints"
    ],
    technologies: ["Campus BIM", "ArcGIS", "EnergyPlus", "Revit Campus"],
    duration: "48 months",
    teamSize: "120 professionals",
    projectValue: "$120M"
  },
  6: {
    id: 6,
    title: "Transportation Hub",
    category: "Infrastructure",
    description: "Major transportation hub with complex civil engineering requirements",
    image: "/api/placeholder/400/300",
    features: ["Civil Engineering", "Structural Design", "Project Management"],
    overview: "A major transportation hub integrating railway, metro, and bus services with passenger facilities and commercial spaces.",
    challenges: [
      "Complex civil engineering requirements",
      "Integration of multiple transport modes",
      "High passenger traffic management",
      "Minimal service disruption"
    ],
    solutions: [
      "Advanced structural analysis",
      "Integrated transport system design",
      "Phased construction methodology",
      "Real-time traffic management systems"
    ],
    results: [
      "Daily passenger capacity of 150,000",
      "Reduced average commute time by 25%",
      "Integrated ticketing system implemented",
      "Zero major service disruptions"
    ],
    technologies: ["Civil 3D", "Structural Analysis", "Transport Simulation", "ProjectWise"],
    duration: "42 months",
    teamSize: "150 professionals",
    projectValue: "$200M"
  }
}

export default function CaseStudyDetails({ params }) {
  const router = useRouter()
  const [caseStudy, setCaseStudy] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Unwrap params using React.use()
  const resolvedParams = use(params)

  useEffect(() => {
    const studyId = parseInt(resolvedParams.id)
    const study = caseStudiesData[studyId]
    
    if (study) {
      setCaseStudy(study)
    }
    setLoading(false)
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="case-study-details-section">
        <div className="container">
          <div className="loading">Loading case study details...</div>
        </div>
      </div>
    )
  }

  if (!caseStudy) {
    return (
      <div className="case-study-details-section">
        <div className="container">
          <div className="not-found">
            <h2>Case Study Not Found</h2>
            <p>The requested case study could not be found.</p>
            <button onClick={() => router.push('/case-studies')} className="back-button">
              ← Back to Case Studies
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="case-study-details-section">
      <div className="container">
        {/* Back Button */}
        <button onClick={() => router.push('/case-studies')} className="back-button">
          ← Back to Case Studies
        </button>

        {/* Header with Title */}
        <div className="case-study-header">
          <h1 className="case-study-title">{caseStudy.title}</h1>
        </div>

        {/* Main Image */}
        <div className="case-study-hero-image">
          <img src={caseStudy.image} alt={caseStudy.title} />
        </div>

        {/* Meta Information */}
        <div className="case-study-meta">
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="category-badge">{caseStudy.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{caseStudy.duration}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team Size</span>
              <span className="meta-value">{caseStudy.teamSize}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Project Value</span>
              <span className="meta-value">{caseStudy.projectValue}</span>
            </div>
          </div>
        </div>

        {/* Overview Information */}
        <div className="overview-section">
          <h2 className="section-title">Project Overview</h2>
          <p className="overview-text">{caseStudy.overview}</p>
        </div>

        {/* Key Features */}
        <div className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {caseStudy.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">✓</div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="challenges-solutions-section">
          <div className="two-column">
            <div className="column">
              <h2 className="section-title">Challenges</h2>
              <ul className="challenge-list">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="challenge-item">
                    <span className="bullet">●</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h2 className="section-title">Solutions</h2>
              <ul className="solution-list">
                {caseStudy.solutions.map((solution, index) => (
                  <li key={index} className="solution-item">
                    <span className="bullet">✓</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="results-section">
          <h2 className="section-title">Project Results</h2>
          <div className="results-grid">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-icon">🏆</div>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="technologies-section">
          <h2 className="section-title">Technologies Used</h2>
          <div className="tech-tags">
            {caseStudy.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="case-study-cta">
          <h3>Ready to Start Your Next Project?</h3>
          <p>Let us bring the same expertise and success to your construction project.</p>
          <button onClick={() => router.push('/contact')} className="cta-button">
            Get in Touch →
          </button>
        </div>
      </div>
    </section>
  )
}
