import React from 'react'
import Button from '../Button/Button'

import './ProductCard.scss'

const ProductCard = ({name, image, description, price}) => {

    const shortDescription = (des) => des.length > 100 ? des.substr(0, 100) + '...' : des

    return (
        <div className="product">
            <h4 className="product__name">{name}</h4>
            <img src={image} alt={name} className="product__image"/>
            <p className="product__description">{shortDescription(description)}</p>
            <div className="product__bottom">
                <span className="product__price">MRP Rs. {price}</span>
                <Button text="Buy now"/>
            </div>
        </div>
    )
}

export default ProductCard