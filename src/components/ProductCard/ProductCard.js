import React from 'react'
import { useCartItems } from '../../misc/custom-hooks'
import Button from '../Button/Button'

import './ProductCard.scss'

const ProductCard = ({name, image, description, price, id, openModal}) => {

    const shortDescription = (des) => des.length > 100 ? des.substr(0, 100) + '...' : des

    const [ , dispatchCart] = useCartItems()

    const addItem = () => {
        const itemData = {
            id: id,
            name: name,
            image: image,
            price: price,
            itemCount: 1
        }
        dispatchCart({type: 'ADD', item: itemData})
    }
 
    return (
        <div className="product">
            <h3 className="product__name">{name}</h3>
            <img src={image} alt={name} className="product__image" onClick={() => openModal({name, image, description})}/>
            <p className="product__description">{shortDescription(description)}</p>
            <div className="product__bottom">
                <span className="product__price">MRP Rs. {price}</span>
                <Button onClick={addItem}>Buy now</Button>
            </div>
        </div>
    )
}

export default ProductCard