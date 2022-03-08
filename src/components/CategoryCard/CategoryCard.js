import React from 'react'
import Button from '../Button/Button'

import './CategoryCard.scss'

const CategoryCard = ({ image, heading, description, btnText}) => {
    return (
        <div className="category">
            <img src={image} alt="Category" className="category__image"/>
            <div className="category__right">
                <h2 className="category__heading">{heading}</h2>
                <p className="category__description">{description}</p>
                <Button
                    text={`Explore ${btnText}`}/>
            </div>
        </div>
    )
}

export default CategoryCard