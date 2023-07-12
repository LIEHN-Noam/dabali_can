import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Annonces from '../components/Annonces'
import "../components/Can.css"
import BackgroundImg from '../components/BackgroundImg'

const Can = () => {
  return (
    <div className='can2024'>
      <Navbar2/>
      <BackgroundImg/>
      <Annonces/>
      <Footer/>
    </div>
  )
}

export default Can
