import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Description } from './components/Description'
import { Clients } from './components/Clients'
import { Services } from './components/Services'
import { ContactUs } from './components/ContactUs'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Services />
      <Clients />
      <ContactUs />
    </>
  )
}

export default App
