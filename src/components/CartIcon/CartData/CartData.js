import React from 'react'
import { useCartItems } from '../../../misc/custom-hooks'
import Button from '../../Button/Button'
import ProductRow from '../../ProductRow/ProductRow'
import { FaAngleRight } from 'react-icons/fa'

import './CartData.scss'

const CartData = ({occupiedHeight}) => {
    const [myCart, ] = useCartItems()

    return (
        <section className="cart-wrapper"
            style={{
                height: `calc(100vh - ${occupiedHeight}px)`
            }}>
            <div className="cart-wrapper__top">
                <h3>My Cart {myCart.count > 0 && (
                    `(${myCart.count} item)`
                )}</h3>
            </div>
            <div className="cart-wrapper__middle">
                {myCart.count === 0 && (
                    <div className="cart-wrapper__emptyMsg">
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
                                <img src="/static/images/lowest-price.png" alt="Offer"/>
                                <span>You won't find it cheaper anywhere</span>
                            </div>
                
                        </>
                    )
                } 
            </div>
            <div className="cart-wrapper__bottom">
                {myCart.count !== 0 && (
                    <p className="mb-2 text-center">Promo code can be applied on payment page</p>
                )}
                <Button classes="w-100">
                    {myCart.count === 0 && "Start shopping"}
                    {myCart.count !== 0 && (
                        <div className="d-flex justify-content-between">
                            <span>Proceed to Checkout</span>
                            <span className="d-flex justify-content-between align-items-center">Rs.{myCart.amount} <FaAngleRight/></span>
                        </div>
                    )}
                </Button>
            </div>
        </section>
    )
}

export default CartData