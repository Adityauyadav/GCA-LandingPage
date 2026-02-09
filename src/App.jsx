import Header from './components/Header'
import NavBarHover from './components/Navbar'
import HeroSection from './components/Hero'
import Footer from './components/Footer'
import CardSection from './components/CardSection'
import MissionStatement from './components/MissionStatement'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />
      <NavBarHover />
      <div className='relative z-20'><HeroSection /></div>
      <div className="-mt-12 relative z-10">
        <MissionStatement />
      </div>
      <CardSection/>
      <div className="-mt-12 relative z-10">
        <CallToAction/>
      </div>

      <Footer/>
    </div>
  )
}

export default App
