import Footer from "@/components/footer"
import Header from "@/components/header/Header"
//import About from "./home/AboutSection"
import FeaturedCourses from "./home/FeaturedCoursesSection"
import HeroSection from "./home/HeroSection"
import Pricing from "./home/PricingSection"
import InstructorSection from "./home/InstructorSection"
import ServiceSection from "./home/ServiceSection"

const Home = () => {
  return (
    <div>
    <Header />
      <HeroSection />
      <ServiceSection />
      {/* <About/> */}
      <FeaturedCourses />
      <InstructorSection />
      <Pricing />
    <Footer/>
    </div>
  )
}

export default Home
