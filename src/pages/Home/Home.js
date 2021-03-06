import React from 'react'

import './Home.scss'
import Slider from '../../components/Slider/Slider'
import categoryData from '../../server/categories/index.get.json'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Home = () => {
    return (
      <main className="home">
          <Slider/>
          <article>
              { categoryData.map((category, index) => {
                return (
                  <CategoryCard 
                    key={category.id}
                    image={category.imageUrl}
                    heading={category.name}
                    description={category.description}
                    btnText={category.key}
                    index={index}
                    id={category.id}/>
                )
            })}
          </article>
      </main>
    )
}

export default Home