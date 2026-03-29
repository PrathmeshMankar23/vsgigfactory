import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Hero from '../components/common/Hero'
import LogoSection from '../components/common/LogoSection'
import Services from '../components/common/Services'
import Lifecycle from '../components/common/Lifecycle'
import Advantages from '../components/common/Advantages'
import Trust from '../components/common/Videos'
import CaseStudies from '../components/common/CaseStudies'
import Contact from '../components/common/Contact'
import Sitemap from '../components/common/Sitemap'

const Home = () => {
  
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Logo Section */}
      <LogoSection />

      {/* Services Section */}
      <Services />

      {/* Lifecycle Section */}
      <Lifecycle />

      {/* Advantages Section */}
      <Advantages />

      {/* Trust Section */}
      <Trust />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Contact Section */}
      <Contact />

      {/* Sitemap Section */}
      <Sitemap />
      
    </main>
  )
}

export default Home
