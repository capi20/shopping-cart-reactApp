import React from 'react'
import { useModalState } from '../../misc/custom-hooks'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

import './CartIcon.scss'

const CartIcon = () => {
    const {isOpen, open, close} = useModalState()

    return (
        <>
            <div className="cart" onClick={() => open()}>
                <img src="/static/images/cart.svg" alt="cart logo" className="cart__logo"/>
                <span className="cart__count">0 items</span>
            </div>
            <Modal isOpen={isOpen} close={close}>
                <div className="cart__top">
                    <h4>My Cart (0 items)</h4>
                    <span onClick={close} className="cart__top-icon">x</span>
                </div>
                <div className="cart__middle">
                    <h3 className="mb-3">No items in your cart</h3>
                    <p>Your favourite items are just a click away</p>    
                </div>
                <div className="cart__bottom">
                    <Button text="Start shopping" classes="w-100"/>
                </div>  
            </Modal>
        </>
    )
}

export default CartIcon