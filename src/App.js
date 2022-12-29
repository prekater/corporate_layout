import { useRef } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Description } from './components/Description'
import { Clients } from './components/Clients'
import { Services } from './components/Services'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const clientsRef = useRef(null)
  const contactUsRef = useRef(null)

  const handleScroll = (ref) => {
    ref?.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        onHandleScroll={handleScroll}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        clientsRef={clientsRef}
        contactUsRef={contactUsRef}
      />
      <Hero />
      <Description refProp={aboutRef} />
      <Services refProp={servicesRef} />
      <Clients refProp={clientsRef} />
      <ContactUs refProp={contactUsRef} />
      <Footer />
    </>
  )
}

export default App
