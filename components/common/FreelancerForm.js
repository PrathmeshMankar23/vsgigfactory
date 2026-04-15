'use client'

import React, { useState } from 'react'
import './application-form-styles.css'

const FreelancerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // 1. Identity & Accountability
    fullName: '',
    designation: '',
    linkedinUrl: '',
    location: '',

    // 2. Legal & Tax Identity
    legalNamePan: '',
    personalPan: '',

    // 3. Service Selection
    selectedServices: [], // BIM, Audit, Peer, BOQ, Viz
    bimDetails: {
      softwareStack: [], // Revit, AutoCAD, Navisworks, Tekla, Civil3D
      maxLod: '', // LOD 300, 350, 400, 500
      cdeExperience: ''
    },
    auditDetails: {
      equipmentOwned: '',
      serviceRadius: '' // City-wide, State-wide, Nationwide
    },
    peerReviewDetails: {
      teamExperience: '',
      specialisation: '' // Structural, MEP, Architectural, Fire
    },
    boqDetails: {
      measurementStandards: '', // IS 1200, RICS, NRM2, SMM7
      estimationSoftware: ''
    },
    vizDetails: {
      renderingEngines: '',
      hardwareCapacity: '', // Render Farm, Cloud, Standard
      animationCapability: 'No'
    },

    // 4. Evidence & Commercials
    portfolioUrl: '',
    commercialBasis: '', // Hourly, Per Sq Ft, Per Sheet, Fixed Project Fee
    baseRate: '',
    noticePeriod: '', // Immediate, 1 Week, 2 Weeks
    availability: '', // Full-time, Part-time, Project Basis

    // 5. Final Declaration
    declarationAccepted: false,
    signatureName: '',
    submissionDate: new Date().toISOString().split('T')[0]
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox' && name === 'declarationAccepted') {
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const services = prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
      return { ...prev, selectedServices: services }
    })
  }

  const handleNestedChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleSoftwareToggle = (software) => {
    setFormData(prev => {
      const currentStack = prev.bimDetails.softwareStack
      const newStack = currentStack.includes(software)
        ? currentStack.filter(s => s !== software)
        : [...currentStack, software]
      return {
        ...prev,
        bimDetails: { ...prev.bimDetails, softwareStack: newStack }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.declarationAccepted) {
      alert("Please accept the final declaration.")
      return
    }
    console.log('Freelancer Application Data:', formData)
    alert("Application submitted successfully! Our team will contact you for technical vetting.")
    onClose()
  }

  return (
    <div className="app-form-overlay" onClick={onClose}>
      <div className="app-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="app-form-header">
          <div>
            <h2>APPLY AS A FREELANCER / INDIVIDUAL</h2>
          </div>
          <button className="close-app-btn" onClick={onClose}>&times;</button>
        </div>

        <form className="app-form-content" onSubmit={handleSubmit}>
          
          {/* Section 1: Identity & Accountability */}
          <div className="app-form-section">
            <h3><span className="section-number">1</span> Identity & Accountability</h3>
            <div className="app-form-grid">
              <div className="app-form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your professional name" 
                />
              </div>
              <div className="app-form-group">
                <label>Designation / Role *</label>
                <input 
                  type="text" 
                  name="designation" 
                  required 
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="e.g., BIM Modeller, Structural Engineer" 
                />
              </div>
              <div className="app-form-group">
                <label>LinkedIn Profile URL</label>
                <input 
                  type="url" 
                  name="linkedinUrl" 
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="Your personal LinkedIn profile URL" 
                />
              </div>
              <div className="app-form-group">
                <label>Current Location *</label>
                <input 
                  type="text" 
                  name="location" 
                  required 
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country" 
                />
              </div>
            </div>
          </div>

          {/* Section 2: Legal & Tax Identity */}
          <div className="app-form-section">
            <h3><span className="section-number">2</span> Legal & Tax Identity (Individual)</h3>
            <div className="app-form-grid">
              <div className="app-form-group">
                <label>Legal Name (as per PAN) *</label>
                <input 
                  type="text" 
                  name="legalNamePan" 
                  required 
                  value={formData.legalNamePan}
                  onChange={handleInputChange}
                  placeholder="Full name exactly as on PAN card" 
                />
              </div>
              <div className="app-form-group">
                <label>Personal PAN Card Number *</label>
                <input 
                  type="text" 
                  name="personalPan" 
                  required
                  value={formData.personalPan}
                  onChange={handleInputChange}
                  placeholder="10-character PAN" 
                />
              </div>
            </div>
          </div>

          {/* Section 3: Service Selection & Technical Vetting */}
          <div className="app-form-section">
            <h3><span className="section-number">3</span> Service Selection & Technical Vetting</h3>
            <p style={{marginBottom: '20px', color: '#64748b', fontSize: '0.9rem'}}>Select services you personally offer (check all applicable)</p>
            
            <div className="services-checkbox-grid">
              {[
                {id: 'BIM', label: 'BIM & 2D Drafting'},
                {id: 'Audit', label: 'As-Built Audit'},
                {id: 'Peer', label: 'Peer Review'},
                {id: 'BOQ', label: 'BOQ Creation'},
                {id: 'Viz', label: '3D Visualisation'}
              ].map(service => (
                <div 
                  key={service.id} 
                  className={`service-checkbox-item ${formData.selectedServices.includes(service.id) ? 'active' : ''}`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <input 
                    type="checkbox" 
                    checked={formData.selectedServices.includes(service.id)}
                    readOnly
                  />
                  <span>{service.label}</span>
                </div>
              ))}
            </div>

            {/* BIM Details */}
            {formData.selectedServices.includes('BIM') && (
              <div className="service-details-panel">
                <h4>BIM & 2D Drafting Details</h4>
                <div className="app-form-group" style={{marginBottom: '16px'}}>
                  <label>Software Stack</label>
                  <div className="software-stack-options">
                    {['Revit', 'AutoCAD', 'Navisworks', 'Tekla', 'Civil 3D'].map(sw => (
                      <label key={sw} className="software-tag">
                        <input 
                          type="checkbox" 
                          checked={formData.bimDetails.softwareStack.includes(sw)}
                          onChange={() => handleSoftwareToggle(sw)}
                        />
                        {sw}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="app-form-grid">
                  <div className="app-form-group">
                    <label>Max LOD Capability</label>
                    <select 
                      value={formData.bimDetails.maxLod}
                      onChange={(e) => handleNestedChange('bimDetails', 'maxLod', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="LOD 300">LOD 300</option>
                      <option value="LOD 350">LOD 350</option>
                      <option value="LOD 400">LOD 400</option>
                      <option value="LOD 500">LOD 500</option>
                    </select>
                  </div>
                  <div className="app-form-group">
                    <label>CDE Experience</label>
                    <input 
                      type="text" 
                      value={formData.bimDetails.cdeExperience}
                      onChange={(e) => handleNestedChange('bimDetails', 'cdeExperience', e.target.value)}
                      placeholder="e.g., BIM 360, ACC, ProjectWise" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* As-Built Audit Details */}
            {formData.selectedServices.includes('Audit') && (
              <div className="service-details-panel">
                <h4>As-Built Audit Details</h4>
                <div className="app-form-grid">
                  <div className="app-form-group">
                    <label>Equipment Owned</label>
                    <input 
                      type="text" 
                      value={formData.auditDetails.equipmentOwned}
                      onChange={(e) => handleNestedChange('auditDetails', 'equipmentOwned', e.target.value)}
                      placeholder="Laser Scanner, Total Station, Drone, etc." 
                    />
                  </div>
                  <div className="app-form-group">
                    <label>Service Radius</label>
                    <select 
                      value={formData.auditDetails.serviceRadius}
                      onChange={(e) => handleNestedChange('auditDetails', 'serviceRadius', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="City-wide">City-wide</option>
                      <option value="State-wide">State-wide</option>
                      <option value="Nationwide">Nationwide</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Peer Review Details */}
            {formData.selectedServices.includes('Peer') && (
              <div className="service-details-panel">
                <h4>Peer Review Details</h4>
                <div className="app-form-grid">
                  <div className="app-form-group">
                    <label>Total Years of Experience *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.peerReviewDetails.teamExperience}
                      onChange={(e) => handleNestedChange('peerReviewDetails', 'teamExperience', e.target.value)}
                      placeholder="Design + on-site combined" 
                    />
                  </div>
                  <div className="app-form-group">
                    <label>Specialisation</label>
                    <select 
                      value={formData.peerReviewDetails.specialisation}
                      onChange={(e) => handleNestedChange('peerReviewDetails', 'specialisation', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="Structural">Structural</option>
                      <option value="MEP">MEP</option>
                      <option value="Architectural">Architectural</option>
                      <option value="Fire & Life Safety">Fire & Life Safety</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* BOQ Details */}
            {formData.selectedServices.includes('BOQ') && (
              <div className="service-details-panel">
                <h4>BOQ (Bill of Quantities) Creation Details</h4>
                <div className="app-form-grid">
                  <div className="app-form-group">
                    <label>Preferred Measurement Standards</label>
                    <select 
                      value={formData.boqDetails.measurementStandards}
                      onChange={(e) => handleNestedChange('boqDetails', 'measurementStandards', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="IS 1200">IS 1200</option>
                      <option value="RICS">RICS</option>
                      <option value="NRM2">NRM2</option>
                      <option value="SMM7">SMM7</option>
                    </select>
                  </div>
                  <div className="app-form-group">
                    <label>Estimation Software</label>
                    <input 
                      type="text" 
                      value={formData.boqDetails.estimationSoftware}
                      onChange={(e) => handleNestedChange('boqDetails', 'estimationSoftware', e.target.value)}
                      placeholder="e.g., CostX, PlanSwift, Excel" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 3D Visualisation Details */}
            {formData.selectedServices.includes('Viz') && (
              <div className="service-details-panel">
                <h4>3D Visualisation & Rendering Details</h4>
                <div className="app-form-grid">
                  <div className="app-form-group full-width">
                    <label>Rendering Engine(s)</label>
                    <input 
                      type="text" 
                      value={formData.vizDetails.renderingEngines}
                      onChange={(e) => handleNestedChange('vizDetails', 'renderingEngines', e.target.value)}
                      placeholder="e.g., V-Ray, Corona, Lumion, Unreal Engine" 
                    />
                  </div>
                  <div className="app-form-group">
                    <label>Hardware Capacity</label>
                    <select 
                      value={formData.vizDetails.hardwareCapacity}
                      onChange={(e) => handleNestedChange('vizDetails', 'hardwareCapacity', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="Dedicated Render Farm / High-end GPU">Dedicated Render Farm / High-end GPU</option>
                      <option value="Cloud Rendering">Cloud Rendering</option>
                      <option value="Standard Workstation">Standard Workstation</option>
                    </select>
                  </div>
                  <div className="app-form-group">
                    <label>Animation Capability</label>
                    <select 
                      value={formData.vizDetails.animationCapability}
                      onChange={(e) => handleNestedChange('vizDetails', 'animationCapability', e.target.value)}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Evidence & Commercials */}
          <div className="app-form-section">
            <h3><span className="section-number">4</span> Evidence & Commercials</h3>
            <div className="app-form-grid">
              <div className="app-form-group full-width">
                <label>Portfolio / Work Samples URL</label>
                <input 
                  type="url" 
                  name="portfolioUrl" 
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="Dropbox / Drive / Behance / Website link" 
                />
              </div>
              <div className="app-form-group">
                <label>Standard Commercial Basis</label>
                <select 
                  name="commercialBasis"
                  value={formData.commercialBasis}
                  onChange={handleInputChange}
                >
                  <option value="">Select option</option>
                  <option value="Hourly Rate">Hourly Rate</option>
                  <option value="Per Sq. Ft.">Per Sq. Ft.</option>
                  <option value="Per Sheet">Per Sheet</option>
                  <option value="Fixed Project Fee">Fixed Project Fee</option>
                </select>
              </div>
              <div className="app-form-group">
                <label>Base Rate (INR / Unit)</label>
                <input 
                  type="number" 
                  name="baseRate" 
                  value={formData.baseRate}
                  onChange={handleInputChange}
                  placeholder="Numeric value" 
                />
              </div>
              <div className="app-form-group">
                <label>Notice Period / Lead Time</label>
                <select 
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                >
                  <option value="">Select option</option>
                  <option value="Immediate">Immediate</option>
                  <option value="1 Week">1 Week</option>
                  <option value="2 Weeks">2 Weeks</option>
                </select>
              </div>
              <div className="app-form-group">
                <label>Availability</label>
                <select 
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                >
                  <option value="">Select option</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Project Basis">Project Basis</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Final Declaration */}
          <div className="app-form-section" style={{border: '2px solid rgba(22, 163, 74, 0.2)', background: 'linear-gradient(to bottom right, #f0fdf4, white)'}}>
            <h3><span className="section-number">5</span> Final Declaration</h3>
            <div className="app-form-group" style={{display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'flex-start', marginBottom: '24px'}}>
              <input 
                type="checkbox" 
                name="declarationAccepted" 
                checked={formData.declarationAccepted}
                onChange={handleInputChange}
                style={{marginTop: '4px', width: '20px', height: '20px'}}
              />
              <label style={{fontSize: '0.95rem', lineHeight: '1.5', cursor: 'pointer'}}>
                I hereby certify that all PAN details provided are authentic. I understand that onboarding is subject to a technical audit of my previous work.
              </label>
            </div>
            
            <div className="app-form-grid">
              <div className="app-form-group">
                <label>Signature *</label>
                <input 
                  type="text" 
                  name="signatureName" 
                  required
                  value={formData.signatureName}
                  onChange={handleInputChange}
                  placeholder="Type your full name as signature" 
                />
              </div>
              <div className="app-form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  name="submissionDate" 
                  value={formData.submissionDate}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="app-form-footer">
            <button type="button" className="app-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="app-submit-btn">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FreelancerForm
