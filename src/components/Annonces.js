import React from 'react'
import res from "../assets/CAN-2024-qualifies-resultats-1.jpg"
import "./Annonces.css"
const Annonces = () => {
  return (
    <div className='background-blk'>
        <div>
            <h3>Coupe d'Afrique des Nations, CAN U23: Les équipes qualifiées</h3>
            <h5>05 Juillet 2023</h5>
            <img src={res} className='bigger'/>
            <p className='background-white'>La prochaine édition passionnante de la Coupe d'Afrique des Nations (CAN) se rapproche à grands pas, et la liste des pays qualifiés commence à prendre forme.</p>
            <p className='background-white'>L'événement, qui se déroulera en Côte d'Ivoire, promet de mettre en valeur les talents du football africain. Jusqu'à présent, quinze équipes ont assuré leur place parmi les meilleures, mais neuf places restent encore à pourvoir. Découvrons les pays déjà qualifiés qui vont se battre pour le prestigieux titre continental.</p>
            
        </div>
        <div>
            <h4 className='news'>Articles récents</h4>

            <p className='news news-p'>CAN 2024: Les pays éliminés des qualifications gardent les yeux tournés vers l'avenir</p>
            <h6 className='news news-h6'>05 Juillet 2023</h6>
            <hr className='news-hr'></hr>
            <p className='news news-p'>CAN 2024: La lutte pour les dernières places reste intense.</p>
            <h6 className='news news-h6'>05 Juillet 2023</h6>
            <hr className='news-hr'></hr>
            <p className='news news-p'>CAN 2024: La lutte pour les dernières places restent intense.</p>
            <h6 className='news news-h6'>05 Juillet 2023</h6>
            <hr className='news-hr'></hr>
            <p className='news news-p'>CAN 2024: La lutte pour les dernières places restent intense.</p>
            <h6 className='news news-h6'>05 Juillet 2023</h6>
            <hr className='news-hr'></hr>
        </div>
    </div>
  )
}

export default Annonces
