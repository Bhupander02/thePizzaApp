import React, { createContext } from 'react'
import {useContext} from 'react'
import { CartContext } from './contexts'
import { Link } from '@tanstack/react-router';

function Header() {
 const [cart] = useContext(CartContext);
 
  return (
    <nav>
      <Link to= "/">
        <h1 className='logo'> Padre Gino's Pizza </h1>      
      </Link>
        <div className='nav-cart'>
            <span className='nav-cart-number'>{cart.length}</span>
            <img src="src/assets/cart.svg" alt="CART" className='nav-cart-img' />
        </div>
        
    </nav>
  )
}


export default Header