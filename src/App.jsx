
import { useState } from 'react';
import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Footer from './components/Footer'
import CallToAction from './components/workflow'
import Pricing from './components/pricing'
import { ToastContainer } from 'react-toastify'


const items = fetch('/data.json')
  .then(res => res.json())

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
      <ToastContainer />
      
    </>
  )
}

export default App
