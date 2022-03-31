import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

import './CategoryCard.scss'

const CategoryCard = ({ image, heading, description, btnText, index, id}) => {
    const navigate = useNavigate()

    const onBtnClick = (catId) => {
        navigate(`/products/${catId}`)
    }
    
    return (
        <section className="category">
            <img src={image} alt={heading} className="category__image"/>
            <div className="category__right">
                <h2 className="category__right-heading">{heading}</h2>
                <p className="category__right-description">{description}</p>
                <Button onClick={() => onBtnClick(id)}>{`Explore ${btnText}`}</Button>
            </div>
        </section>
    )
}

export default CategoryCard