import React from 'react'
import { useCartItems } from '../../misc/custom-hooks'
import Button from '../Button/Button'

import './ProductCard.scss'
// import { useCart } from '../../misc/custom-hooks'

const ProductCard = ({name, image, description, price, id}) => {

    const shortDescription = (des) => des.length > 100 ? des.substr(0, 100) + '...' : des

    const [ , dispatchCart] = useCartItems()

    const onBtnClick = () => {
        const addedItem = {
            id: id,
            name: name,
            image: image,
            price: price
        }
        dispatchCart({type: 'ADD', item: addedItem})
    }

    return (
        <div className="product">
            <h4 className="product__name">{name}</h4>
            <img src={image} alt={name} className="product__image"/>
            <p className="product__description">{shortDescription(description)}</p>
            <div className="product__bottom">
                <span className="product__price">MRP Rs. {price}</span>
                <Button onClick={onBtnClick}>Buy now</Button>
            </div>
        </div>
    )
}

export default ProductCard