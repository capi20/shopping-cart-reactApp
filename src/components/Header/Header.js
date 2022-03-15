import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.scss'
import CartIcon from '../Cart/CartIcon/CartIcon'
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'

const Header = ({occupiedHeight}) => {
    const {isOpen, open, close} = useModalState() 

    const isDesktop = useMediaQuery('(min-width: 500px)')

    return (
        <div className="header">
            <Link to="/" onClick={close}>
                <img src="/static/images/logo.png" alt="logo" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                {isDesktop && (
                    <div className="header__nav-left mb-2">
                        <NavLink to="/" className="header__nav-link"  onClick={close}>
                            Home    
                        </NavLink>
                        <NavLink to="/products" className="header__nav-link" onClick={close}>
                            Products    
                        </NavLink>
                    </div>
                )}
                <div className="header__nav-right">
                    <div className="mb-2">
                        <NavLink to="/signin" className="header__nav-link" onClick={close}>
                            SignIn    
                        </NavLink>
                        <NavLink to="/register" className="header__nav-link" onClick={close}>
                            Register    
                        </NavLink>
                    </div>
                    <CartIcon
                        isOpen={isOpen}
                        open={open}
                        close={close}
                        occupiedHeight={occupiedHeight}/>
                </div>
            </nav>
        </div>
    )
}

export default Header