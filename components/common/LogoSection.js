const LogoSection = () => {
  const logos = [
    { name: 'TCS', image: '/assets/tcs.jpg' },
    { name: 'EY', image: '/assets/ey.png', customStyle: { maxHeight: '50px', maxWidth: '240px' } },
    { name: 'Atkins', image: '/assets/atkins.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'Cynosure', image: '/assets/cynosure.jpg', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'Adani', image: '/assets/adani.png' },
    { name: 'Emaar', image: '/assets/emaar.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'Labindia', image: '/assets/labindia.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'LT', image: '/assets/lt.png', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'Salesforce', image: '/assets/salesforce.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'Schneider', image: '/assets/schneider.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'Mastercard', image: '/assets/mastercard.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'denkall', image: '/assets/denkall.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'Mudon', image: '/assets/mudon.jpg' },
    { name: 'Claramont', image: '/assets/claramont.jpg', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'gulf islamic', image: '/assets/gulf islamic.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'jacobs', image: '/assets/jacobs.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'jmbaxi', image: '/assets/jmbaxi.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'natash', image: '/assets/natash.png', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'orchid', image: '/assets/orchid.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'peninsula', image: '/assets/peninsula.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'skillbind', image: '/assets/skillbind.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'westbridge', image: '/assets/westbridge.png', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'ascenders', image: '/assets/ascenders.jpg', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'DH', image: '/assets/DH.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'freespanz', image: '/assets/freespanz.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'gilly', image: '/assets/gilly.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'imagegrafix', image: '/assets/imagegrafix.png', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'mmoser', image: '/assets/mmoser.jpg', customStyle: { maxHeight: '150px', maxWidth: '230px' } },
    { name: 'oarchilos', image: '/assets/oarchilos.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'turnkey', image: '/assets/turnkey.jpg', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'Au', image: '/assets/Au.webp', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'EDIFICE', image: '/assets/EDIFICE.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'suresh_babu_and_partners', image: '/assets/suresh_babu_and_partners_logo.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'Designworks', image: '/assets/Designworks.jpg', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'TGE', image: '/assets/TGE.png', customStyle: { maxHeight: '95px', maxWidth: '230px' } },
    { name: 'GBArchitect', image: '/assets/GBArchitect.jpg', customStyle: { maxHeight: '90px', maxWidth: '220px' } },
    { name: 'Sanderson', image: '/assets/Sanderson.jpg', customStyle: { maxHeight: '100px', maxWidth: '240px' } },
    { name: 'HOSMAC', image: '/assets/HOSMAC.jpg', customStyle: { maxHeight: '95px', maxWidth: '230px' } },


  ]

  return (
    <section className="logo-section">
      <div className="logo-slider">
        <div className="logo-track">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-container">
                {logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="logo-image" 
                    style={logo.customStyle || {}}
                  />
                ) : (
                  <div className="logo-placeholder" style={{ backgroundColor: logo.color }}>
                    <span className="logo-text">{logo.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Duplicate logos for continuous scroll */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-container">
                {logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="logo-image" 
                    style={logo.customStyle || {}}
                  />
                ) : (
                  <div className="logo-placeholder" style={{ backgroundColor: logo.color }}>
                    <span className="logo-text">{logo.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSection
