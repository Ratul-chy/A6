
import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Footer from './components/Footer'
import CallToAction from './components/workflow'
import Pricing from './components/pricing'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Steps/>
      <Pricing />
      <CallToAction />
      <Footer />
      
    </>
  )
}

export default App
