import React from 'react'
import img1 from '../assets/Gbofloto.jpg'
import img2 from '../assets/Alloco.jpg'
import img3 from '../assets/Foutou2.jpg'
import './Food.css'
const Food = () => {
  return (
    <div className='groupe'>
      <h1>On mange pas un peu?</h1>
      <p>Explorez les plats de chez Dabali Xpress</p>
      <div className='plats'>
        <div ><div className='hide'><img src={img1} className='wide'/></div><p>Gbofloto - beignets africains</p></div>
        <div ><div className='hide'><img src={img2} className='wide'/></div><p>Alloco - Plantains frits</p></div>
        <div><div className='hide'><img src={img3} className='wide'/></div><p>Foutou banane</p></div>
      </div>
    </div>
  )
}

export default Food
