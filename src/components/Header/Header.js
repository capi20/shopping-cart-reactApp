import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.scss'
import CartIcon from '../CartIcon/CartIcon'
import { useMediaQuery } from '../../misc/custom-hooks'

const Header = () => {

    const isDesktop = useMediaQuery('(min-width: 600px)')

    return (
        <header className="header">
            <Link to="/">
                <img src="/static/images/logo.png" alt="logo" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                {isDesktop && (
                    <div className="header__nav-left mb-2">
                        <NavLink to="/" className="header__nav-link">
                            Home    
                        </NavLink>
                        <NavLink to="/products" className="header__nav-link">
                            Products    
                        </NavLink>
                    </div>
                )}
                <div className="header__nav-right">
                    <div className="mb-2">
                        <NavLink to="/signin" className="header__nav-link">
                            SignIn    
                        </NavLink>
                        <NavLink to="/register" className="header__nav-link">
                            Register    
                        </NavLink>
                    </div>
                    <CartIcon/>
                </div>
            </nav>
        </header>
    )
}

export default Header