import Navbar from '../components/fj/Navbar.jsx'
import HeroSection from '../components/fj/HeroSection.jsx'
import ServicesSection from '../components/fj/ServicesSection.jsx'
import WhyUsSection from '../components/fj/WhyUsSection.jsx'
import GallerySection from '../components/fj/GallerySection.jsx'
import ReviewsSection from '../components/fj/ReviewsSection.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <ReviewsSection />
      <FinalCTA />
    </div>
  )
}
