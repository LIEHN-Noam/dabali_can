import React from 'react'
import './Dates.css'
import img1 from "../assets/dates_annonce.jpg"
import img2 from "../assets/ballons.PNG"
import Button from './Button.tsx'
const Dates = () => {
  return (
    <div className='dates'>
      <h1>CAN 2024!</h1>
      <div className='container'>
        <div className='gauche'>
            <img src={img1} alt='homme tenant un ballon'/>
            <div className='texte'>
                <h3>Dates finalement annoncées!</h3>
                <p>
                    Initialement prévue pour 2023, la confédération Africaine dévoile les dates de la Coupe d'Afrique des Nations 
                    (CAN) 2024. Cette 34ème édition se déroulera en Côte d'Ivoire du 13 Janvier au 11 Février 2024.
                </p>
            </div>
        </div>
      <div className='droite'>
        <img src={img2}/>
        <div className='bouton'>
          <Button><a href='/dabali_xpress'>PLUS D'INFOS</a></Button>
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Dates
