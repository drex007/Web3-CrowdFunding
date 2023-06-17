import { useState, useContext } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Body from './components/Body'
import { ToastContainer, toast } from 'react-toastify';
// import './App.css'

import { CrowdFundingContext } from '../Context/CrowdFunding'
import Card from './components/Card'

function App() {
  const { titleData, createCampaign } = useContext(CrowdFundingContext);


  return (
    <>
      {/* <ToastContainer /> */}
      <NavBar />
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card />

      <Footer />
    </>
  )
}

export default App
