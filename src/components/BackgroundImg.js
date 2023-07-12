import React from 'react'
import "./BackgroundImg.css"
const backgroundPicture = new URL("../assets/slider/slide1.png", import.meta.url)

function BackgroundImg() {
  return (
    <>
        <section className='bg-container'>
        <div className='background'>
            <h1>Dabali xpress avec vous pour la can!</h1>
        </div>
      </section>
    </>
  )
}

export default BackgroundImg
