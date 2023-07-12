import React from 'react'
import DG from '../assets/DG.jpg'
import DGA from '../assets/DGA.jpg'
import Chefs from '../assets/chefs.jpg'
import Staff1 from '../assets/staff1.jpg'
import Staff2 from '../assets/staff2.jpg'
import "./About.css"

const About = () => {
  return (
    <div >
      <div className='main-container'>
      </div>
      <div className='content'>
          <h1>Notre histoire</h1>
          <h2>Qui sommes nous?</h2>
          <p>Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est né de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux.</p>
          <p>C'est la première chaine de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faites dans des conditions sanitaires irréprochables alliant qualité de service et rapidité.</p>
          <p>Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.</p>
          <h2>Principes directifs</h2>
          <p>Depuis la création de Dabali Xpress, nous nous sommes promis de respecter quatre valeurs et principes :</p>
          <ul>
            <li>S'assurer d'effectuer le service sur place le plus rapidement possible, afin que nos clients aient plus de temps pour savourer nos repas.</li>
            <li>Toujours fournir un service après vente exceptionnel à no clients.</li>
            <li>S'assurer d'avoir le meilleur équipement.</li>
            <li>S'assurer que nos restaurants soient proprement impeccables à tout moment.</li>
          </ul>
          <h2>Notre Objectif</h2>
          <p>Notre objectif est de faire la promotion de nos mets locaux et être la vitrine du tourisme culinaire ivoirien.</p>
          <h1>Notre equipe</h1>
          <div className='container'>
            <div>
              <img src={DG}/>
              <h2>Olivia Aggre</h2>
              <h3>DG</h3>
            </div>
            <div>
              <img src={DGA}/>
              <h2>Abraham Anoh</h2>
              <h3>DGA</h3>
            </div>
          </div>
          <div className='container'>
            <div>
              <img src={Chefs}/>
              <h2>Chefs de cuisine</h2>
            </div>
          </div>
          <div className='container2'>
              <div>
                <img src={Staff1}/>
              </div>
              <div>
                <img src={Staff2} id='staff'/>
              </div>
          </div>
          <h4>Staff</h4>
      </div>
      <div className='content-mobile'>
        <h1>Notre histoire</h1>
          <h2>Qui sommes nous?</h2>
          <p>Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est né de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux.</p>
          <p>C'est la première chaine de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faites dans des conditions sanitaires irréprochables alliant qualité de service et rapidité.</p>
          <p>Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.</p>
          <h2>Principes directifs</h2>
          <p>Depuis la création de Dabali Xpress, nous nous sommes promis de respecter quatre valeurs et principes :</p>
          <ul>
            <li>S'assurer d'effectuer le service sur place le plus rapidement possible, afin que nos clients aient plus de temps pour savourer nos repas.</li>
            <li>Toujours fournir un service après vente exceptionnel à no clients.</li>
            <li>S'assurer d'avoir le meilleur équipement.</li>
            <li>S'assurer que nos restaurants soient proprement impeccables à tout moment.</li>
          </ul>
          <h2>Notre Objectif</h2>
          <p>Notre objectif est de faire la promotion de nos mets locaux et être la vitrine du tourisme culinaire ivoirien.</p>
          <h1>Notre equipe</h1>
          <div className='container'>
            <div>
              <img src={DG}/>
              <h2>Olivia Aggre</h2>
              <h3>DG</h3>
            </div>
            <div>
              <img src={DGA}/>
              <h2>Abraham Anoh</h2>
              <h3>DGA</h3>
            </div>
          </div>
          <div className='container'>
            <div>
              <img src={Chefs}/>
              <h2>Chefs de cuisine</h2>
            </div>
          </div>
          <div className='container2'>
              <div>
                <img src={Staff1}/>
              </div>
              <div>
                <img src={Staff2} id='staff'/>
              </div>
          </div>
          <h4>Staff</h4>
      </div>
      
    </div>
  )
}

export default About
