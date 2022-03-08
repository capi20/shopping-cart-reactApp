import React from 'react'
import Button from '../Button/Button'

import './CategoryCard.scss'

const CategoryCard = ({ image, heading, description, btnText, index}) => {
    return (
        <div className={(index + 1) % 2 === 0 ? 'category reverse' : 'category'}>
            <img src={image} alt={heading} className="category__image"/>
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