import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import HappyHour from './components/HappyHour'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpotOnLandingModal from './components/SpotOnLandingModal'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <HappyHour />
        <Contact />
      </main>
      <Footer />
      <SpotOnLandingModal />
    </div>
  )
}
