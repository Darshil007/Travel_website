import Navbar from "./components/Navbar"
import Category from "./pages/Category"
import Destination from "./pages/Destination"
import Footer from "./pages/Footer"
import HeroSection from "./pages/HeroSection"
import Partners from "./pages/Partners"
import Travel from "./pages/Travel"
const App = () => {
  return (
    <>
      <HeroSection/>
      <Category/>
      <Destination/>
      <Travel/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default App
