import React from 'react'
import "./Menu.css"
import Sauce from "../assets/Sauces.jpeg"
import Grill from "../assets/grillades.jpg"
import Drink from "../assets/boisson.jpg"
import Beignet from "../assets/beignets.jpeg"
import Attieke from "../assets/attieke.jpg"
import Card from './Card'
const Menu = () => {
  return (
    <div className='menu-container'>
        <h1 className='menu-container-h1'>Menu Xpress</h1>
      
        <div className='menu'>
            <h1>Menu Thematique</h1>
        </div>
        <div className='menu-content'>
            <div>
              <Card 
              title='Sauces'
              imageUrl={Sauce}
              body='Plats typiquement africains' />
            </div>
            <div>
              <Card 
              title='Grillades'
              imageUrl={Grill}
              body='A feu vif!' />
            </div>
        </div>
        <div className='menu-content'>
          <div>
              <Card 
              title='Boissons'
              imageUrl={Drink}
              body='Boissons et jus africains' />
          </div>
          <div>
          <Card 
              title='Beignets'
              imageUrl={Beignet}
              body='Beignets africains' />
          </div>
          <div>
          <Card 
              title='Accompagnement'
              imageUrl={Attieke}
              body='Attieke / Riz / Alloco...' />
          </div>
        </div>
    </div>
  )
}

export default Menu
