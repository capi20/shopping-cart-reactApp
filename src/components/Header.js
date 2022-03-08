import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import cartLogo from '../images/cart.svg'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="header__logo"/>
        <nav className="header__nav">
            <div className="header__nav-left">
                <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    Home    
                </NavLink>
                <NavLink to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                    Products    
                </NavLink>
            </div>
            <div className="header__nav-right">
                <div>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        SignIn    
                    </NavLink>
                    <NavLink to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                        Register    
                    </NavLink>
                </div>
                <img src={cartLogo} width="100px" alt="cart logo"/>
            </div>
        </nav>
    </header>
  )
}

export default Header