import React from 'react'

import './Home.scss'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import categoryData from '../../server/categories/index.get.json'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
      <main className="home">
          <Header/>
          <div className="home__bottom">
              <Slider/>
              { categoryData.map((category, index) => {
                return (
                  <CategoryCard 
                    key={category.id}
                    image={category.imageUrl}
                    heading={category.name}
                    description={category.description}
                    btnText={category.key}
                    index={index}/>
                )
              })}
          </div>  
          <Footer/> 
      </main>
    )
}

export default Home