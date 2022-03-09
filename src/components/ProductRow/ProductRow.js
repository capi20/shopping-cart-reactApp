import React from 'react'
import { useCartItems } from '../../misc/custom-hooks'
import Button from '../Button/Button'

import './ProductRow.scss'

const ProductRow = ({id, name, image, price, itemCount}) => {
    const [ , dispatchCart] = useCartItems()

    const onAddItem = () => {
        const addedItem = {
            id: id,
            name: name,
            image: image,
            price: price
        }
        dispatchCart({type: 'ADD', item: addedItem})
    }

    const onRemoveItem = () => {
        dispatchCart({type: 'REMOVE', item: id})
    }

    return (  
        <div className="productRow">
            <img src={image} alt={name} className="productRow__image"/>
            <div className="productRow__right">
                <h3  className="productRow__name mb-2">{name}</h3>
                <div className="productRow__right-bottom">
                    <div className="productRow__right-bottom--left">
                        <Button classes="p-small" onClick={onRemoveItem}>-</Button>
                        <span>{itemCount}</span>
                        <Button classes="p-small" onClick={onAddItem}>+</Button>
                        <span>X {price}</span>    
                    </div>  
                    <span>Rs.{price * itemCount}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductRow