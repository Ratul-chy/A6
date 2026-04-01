
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
import Cart from './components/Cart';
import Models from './components/Models';
import Header from './components/Header';


const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

const modelPromise = getModels();const items = fetch('/data.json')
  .then(res => res.json())

function App() {

  const [selectType, setSelectType] = useState("products")
  const [carts, setCarts] = useState([])
  

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />

      <Header selectType={selectType} setSelectType={setSelectType} cartCount={carts.length} />

      {selectType === "products" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}
      {selectType === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      


      <Steps/>
      <Pricing />
      <CallToAction />
      <Footer />
      <ToastContainer />
      
    </>
  )
}

export default App
