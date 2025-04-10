import ContentSection from "@/components/content-2"
import Features from "@/components/features-1"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-2"
import Testimonials from "@/components/testimonials"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <ContentSection/>
      <StatsSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
