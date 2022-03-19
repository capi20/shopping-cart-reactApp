import React from 'react'
import CartData from '../../components/CartIcon/CartData/CartData'

const Cart = ({occupiedHeight}) => {

    return (
        <main>
            <CartData occupiedHeight={occupiedHeight}/>
        </main>
    )
}

export default Cart