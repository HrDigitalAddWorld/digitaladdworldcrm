import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import Pricing from '../components/home/Pricing'
import Testimonials from '../components/home/Testimonials'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home