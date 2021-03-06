import React, { useState } from 'react'

import './Slider.scss'
import sliderData from '../../server/banners/index.get.json'
import { useMediaQuery } from '../../misc/custom-hooks'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const isDesktop = useMediaQuery('(min-width: 500px)')
    const totalSlides = sliderData.length

    const nextSlide = () => setSlideIndex(slideIndex === totalSlides - 1 ? 0 : slideIndex + 1)

    const prevSlide = () => setSlideIndex(slideIndex === 0 ? totalSlides - 1 : slideIndex - 1)

    const currentSlide = (n) => setSlideIndex(n)

    return (
        <section className="slider">
            {
                isDesktop && (
                    <>
                        <button className="slider__btn slider__btn-left" onClick={prevSlide}>Prev</button>
                        <button className="slider__btn slider__btn-right" onClick={nextSlide}>Next</button>
                    </>
                )
            }
            <div className="slider__container">
                {
                    sliderData.map((banner, i) => {
                        return (
                            <div key={banner.id} className={i === slideIndex ? 'slider__container-banner active' : 'slider__container-banner'}>
                                {i === slideIndex && <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} className="slider__container-banner--img"/>}
                            </div>
                        )
                    })
                }
            </div>
            <div className="slider__dots">
                {
                    sliderData.map((banner, index) => {
                        return (
                            <div key={banner.id} className={index === slideIndex ? 'dot-active' : ''} onClick={() => currentSlide(index)}></div>
                        )
                    })
                }    
            </div>
        </section>
    )
}

export default Slider