import React from 'react'

import './Home.scss'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className="home">
        <Header/>
        <div className="home__bottom">
            <Slider/> 
        </div>   
    </div>
  )
}

export default Home