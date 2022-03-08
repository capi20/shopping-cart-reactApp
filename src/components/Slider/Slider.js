import React, { useState } from 'react'

import './Slider.scss'
// import sliderData from '../server/banners/index.get.json'
import offer1 from '../../images/offers/offer1.jpg'
import offer2 from '../../images/offers/offer2.jpg'
import offer3 from '../../images/offers/offer3.jpg'
import offer4 from '../../images/offers/offer4.jpg'
import offer5 from '../../images/offers/offer5.jpg'

const sliderData = [offer1, offer2, offer3, offer4, offer5]

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const totalSlides = sliderData.length

    const nextSlide = () => setSlideIndex(slideIndex === totalSlides - 1 ? 0 : slideIndex + 1)

    const prevSlide = () => setSlideIndex(slideIndex === 0 ? totalSlides - 1 : slideIndex - 1)

    const currentSlide = (n) => setSlideIndex(n)

    return (
        <section className="slider">
            <button className="slider__btn slider__btn-left" onClick={prevSlide}>Prev</button>
            <button className="slider__btn slider__btn-right" onClick={nextSlide}>Next</button>
            {
                sliderData.map((banner, i) => {
                    return (
                        <div className={i === slideIndex ? 'slide active' : 'slide'}>
                            {i === slideIndex && (<img key={i} src={banner} alt="Banner" className="slider__img"/>)}
                        </div>
                    )
                })
            }
            <div className="slider__dots">
                {
                    sliderData.map((_, index) => {
                        return (
                            <div key={index} className={index === slideIndex ? 'dot-active' : ''} onClick={() => currentSlide(index)}></div>
                        )
                    })
                }    
            </div>
        </section>
    )
}

export default Slider