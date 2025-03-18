import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src="{logo}" alt="" />
            <p>Shopiing</p>
        </div>
        <ul className='nav-menu'>
            <li>Shop</li>
            <li>Kids</li>
            <li>Men</li>
            <li>Women</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src="{cart_icon}" alt="" />
        </div>
    </div>
  )
}

export default Navbar
