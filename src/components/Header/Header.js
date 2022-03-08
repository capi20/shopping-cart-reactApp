import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.scss'
import logo from '../../images/logo.png'
import cartLogo from '../../images/cart.svg'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="header__logo"/>
        <nav className="header__nav">
            <div className="header__nav-left">
                <NavLink to="/" className="header__nav-link">
                    Home    
                </NavLink>
                <NavLink to="/products" className="header__nav-link">
                    Products    
                </NavLink>
            </div>
            <div className="header__nav-right">
                <div className="header__nav-right--top">
                    <NavLink to="/" className="header__nav-link">
                        SignIn    
                    </NavLink>
                    <NavLink to="/products" className="header__nav-link">
                        Register    
                    </NavLink>
                </div>
                <div className="header__nav-right--bottom">
                    <img src={cartLogo} alt="cart logo" className="cart__logo"/>
                    <span>0 items</span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header