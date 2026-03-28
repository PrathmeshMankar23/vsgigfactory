'use client'

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Services",
      links: [
        { name: "2D Services", url: "/services-details#2d" },
        { name: "3D Services", url: "/services-details#3d" },
        { name: "4D Services", url: "/services-details#4d" },
        { name: "PP&C Services", url: "/services-details#pp-c" },
        { name: "BOQ Services", url: "/services-details#boq" },
        { name: "Audit Services", url: "/services-details#audit" }
      ]
    },
    {
      title: "Case Studies",
      links: [
        { name: "Recent Projects", url: "#case-studies" },
        { name: "Success Stories", url: "#success-stories" },
        { name: "Project Gallery", url: "#project-gallery" },
        { name: "Client Testimonials", url: "#testimonials" }
      ]
    },
    {
      title: "Our Expertise",
      links: [
        { name: "Construction Management", url: "#expertise" },
        { name: "Project Planning", url: "#planning" },
        { name: "BIM Integration", url: "#bim" },
        { name: "Quality Assurance", url: "#quality" },
        { name: "Risk Management", url: "#risk" },
        { name: "Cost Control", url: "#cost" }
      ]
    },
    {
      title: "Projects",
      links: [
        { name: "Current Projects", url: "#current" },
        { name: "Completed Projects", url: "#completed" },
        { name: "Upcoming Projects", url: "#upcoming" },
        { name: "Project Portfolio", url: "#portfolio" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", url: "/about/story" },
        { name: "Our Team", url: "/about/team" },
        { name: "Company Overview", url: "/about/overview" },
        { name: "Mission & Vision", url: "/about/mission" },
        { name: "Core Values", url: "/about/values" },
        { name: "Careers", url: "/careers" },
        { name: "Partners", url: "/partners" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Get in Touch", url: "/contact" },
        { name: "+1-234-567-8900", url: "tel:+12345678900" },
        { name: "Email Us", url: "mailto:info@gigfactory.com" },
        { name: "LinkedIn", url: "https://linkedin.com/company/gigfactory" },
        { name: "Office Location", url: "/location" }
      ]
    }
  ]

  return (
    <section className="sitemap-section">
      <div className="container">
        <div className="sitemap-header">
          <h2 className="sitemap-title">Site Map</h2>
          <p className="sitemap-subtitle">
            Complete overview of website structure and navigation
          </p>
        </div>

        {/* Logo Section - Only Once with Full Logo */}
        <div className="sitemap-logo">
          <div className="logo-main-text">
            <span className="logo-gig">Gig</span>
            <span className="logo-factory">factory</span>
            <div className="flags-container">
              <svg className="flag" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <rect width="24" height="16" fill="#FF9933" />
                <path d="M12 0L0 8h12v8H0V0z" fill="#138808" />
                <path d="M12 0l12 8h12V0H12z" fill="#FFFFFF" />
                <circle cx="6" cy="8" r="2" fill="#FF9933" />
                <circle cx="18" cy="8" r="2" fill="#FFFFFF" />
                <path d="M6 7v2h2V7H6zm10 0v2h2V7h-2z" fill="#FF9933" />
              </svg>
              <svg className="flag" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <rect width="24" height="16" fill="#012169" />
                <path d="M0 0l24 8v8L0 0z" fill="#FFFFFF" />
                <path d="M0 0l12 8v8L0 0z" fill="#C8102E" />
                <path d="M12 0l12 8v8L12 0z" fill="#012169" />
              </svg>
            </div>
          </div>
          <div className="logo-tagline">TECHNOLOGY ENABLED PLATFORM</div>
        </div>

        {/* Sitemap Links */}
        <div className="sitemap-content">
          {sitemapSections.map((section, index) => (
            <div key={index} className="sitemap-section-block">
              <h3 className="section-title">{section.title}</h3>
              <div className="section-links">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="sitemap-link"
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sitemap-footer">
          <div className="footer-content">
            <div className="footer-info">
              <p className="footer-text">
                © 2024 Gigfactory. All rights reserved.
              </p>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sitemap
