import React from 'react'
import { useCartItems, useMediaQuery } from '../../misc/custom-hooks'
import Button from '../Button/Button'

import './ProductCard.scss'

const ProductCard = ({name, image, description, price, id, openModal}) => {

    const shortDescription = (des) => des.length > 100 ? des.substr(0, 100) + '...' : des

    const [ , dispatchCart] = useCartItems()

    const isDesktop = useMediaQuery('(min-width: 500px)')

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
            <div className="product__info">
                <img src={image} alt={name} className="product__info-image" onClick={() => openModal({name, image, description})}/>
                <div>
                    <p className="product__info-description">{shortDescription(description)}</p>
                    <div className="product__info-bottom">
                        {
                            isDesktop ?
                            <>
                                <span className="product__info-bottom--price">MRP Rs.{price}</span>
                                <Button onClick={addItem}>Buy now</Button>
                            </> :
                            <Button onClick={addItem} classes="w-100">Buy now @ Rs.{price}</Button>
                        }
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ProductCard