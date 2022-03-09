import React from 'react'
import Button from '../Button/Button'

import './ProductRow.scss'

const ProductRow = ({name, image, price}) => {
    return (  
        <div className="productRow">
            <img src={image} alt={name} className="productRow__image"/>
            <div className="productRow__right">
                <h3  className="productRow__name mb-2">{name}</h3>
                <div className="productRow__right-bottom">
                    <div className="productRow__right-bottom--left">
                        <Button classes="p-small">-</Button>
                        <span>0</span>
                        <Button classes="p-small">+</Button>
                        <span>X {price}</span>    
                    </div>  
                    <span>Rs.{price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductRow