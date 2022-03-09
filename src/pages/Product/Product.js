import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import productData from '../../server/products/index.get.json'

import './Product.scss'

const Product = () => {
  const [filteredData, setFilteredData] = useState([])
  const paramId = useParams()
  const categoryId = paramId.id

  useEffect(() => {
    let displayData = []
    if (categoryId) {
      displayData = productData.filter(el => el.category === categoryId)
    } else {
      displayData = [...productData]
    }
    setFilteredData([...displayData])
  }, [categoryId])
  
    return (
      <div className="product__wrapper">
        <Sidebar/>
        <div className="products__list">
          {
            filteredData.map((product, i) => {
              return(
                <ProductCard
                  key={i}
                  name={product.name}
                  image={product.imageURL}
                  description={product.description}
                  price={product.price}
                  id={product.id}/>
              )
            })
          }  
        </div>
      </div>
      
    )
}

export default Product