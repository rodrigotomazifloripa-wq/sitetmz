import { CustomCursor } from './components/CustomCursor'
import { Nav } from './components/Nav'
import { HeroSection } from './components/HeroSection'
import { Marquee } from './components/Marquee'
import { ProblemSection } from './components/ProblemSection'
import { ServicesSection } from './components/ServicesSection'
import { HowItWorks } from './components/HowItWorks'
import { PortfolioSection } from './components/PortfolioSection'
import { ResultsSection } from './components/ResultsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <HeroSection />
        <Marquee />
        <ProblemSection />
        <ServicesSection />
        <HowItWorks />
        <PortfolioSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
