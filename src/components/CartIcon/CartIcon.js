import React from 'react'
import { useCartItems, useModalState } from '../../misc/custom-hooks'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import ProductRow from '../ProductRow/ProductRow'

import './CartIcon.scss'

const CartIcon = () => {
    const {isOpen, open, close} = useModalState()

    const [myCart, ] = useCartItems()

    // console.log(myCart)

    return (
        <>
            <div className="cart" onClick={() => open()}>
                <img src="/static/images/cart.svg" alt="cart logo" className="cart__logo"/>
                <span className="cart__count">{myCart.count} items</span>
            </div>
            <Modal isOpen={isOpen} close={close}>
                <div className="cart__top">
                    <h4>My Cart {myCart.count > 0 && (
                        `(${myCart.count} item)`
                    )}</h4>
                    <span onClick={close} className="cart__top-icon">x</span>
                </div>
                <div className="cart__middle">
                    {myCart.count === 0 && (
                        <div className="cart__emptyMsg">
                            <h3 className="mb-3">No items in your cart</h3>
                            <p>Your favourite items are just a click away</p> 
                        </div>
                    )}
                    {
                        myCart.count !== 0 && (
                            <>
                                {
                                    Object.keys(myCart.cart).map((item, i) => {
                                        return <ProductRow
                                            key={i}
                                            id={item}
                                            name={myCart.cart[item].name}
                                            image={myCart.cart[item].image}
                                            price={myCart.cart[item].price}
                                            itemCount={myCart.cart[item].itemCount}
                                        />
                                    })
                                }
                                <div className="offer-wrapper">
                                    <img src="/static/images/lowest-price.png"/>
                                    <span>You won't find it cheaper anywhere</span>
                                </div>
            
                            </>
                        )
                    } 
                </div>
                <div className="cart__bottom">
                    {myCart.count !== 0 && (
                        <p className="mb-2 text-center">Promo code can be applied on payment page</p>
                    )}
                    <Button classes="w-100">
                        {myCart.count === 0 && "Start shopping"}
                        {myCart.count !== 0 && (
                            <div className="d-flex justify-content-between">
                                <span>Proceed to Checkout</span>
                                <span>Rs.{myCart.amount}</span>
                            </div>
                        )}
                    </Button>
                </div>  
            </Modal>
        </>
    )
}

export default CartIcon