import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useCartItems, useMediaQuery } from '../../misc/custom-hooks'
import Modal from '../Modal/Modal'
import CartData from './CartData/CartData'

import './CartIcon.scss'

const CartIcon = ({isOpen, open, close, occupiedHeight}) => {
    const [previousRoute, setPreviousRoute] = useState('')

    const [myCart, ] = useCartItems()

    const isDesktop = useMediaQuery('(min-width: 500px)')

    const location = useLocation()
    const isCartPage = location.pathname === "/cart"

    const openCart = () => {
        open()
        if (location.pathname !== "/cart") {
            setPreviousRoute(location.pathname)
        }
    }

    return (
        <>
            <div className="cart" onClick={openCart}>
                <img src="/static/images/cart.svg" alt="cart logo" className="cart__logo"/>
                <span className="cart__count">{myCart.count} items</span>
            </div>
            
            {
                isDesktop ?
                isOpen && <>
                    {isCartPage && <Navigate to={previousRoute}/>}
                    <Modal isOpen={isOpen} close={close}>
                        <CartData occupiedHeight={occupiedHeight}/>
                    </Modal>
                </> :
                isOpen && !isCartPage && <Navigate to="/cart"/>
            }
        </>
    )
}

export default CartIcon