import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Modal from '../../components/Modal/Modal'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useModalState } from '../../misc/custom-hooks'
import productData from '../../server/products/index.get.json'

import './Product.scss'

const Product = () => {
  const [displayProduct, setDisplayProduct] = useState({})
  const [filteredData, setFilteredData] = useState([])
  const paramId = useParams()
  const categoryId = paramId.id
  
  const {isOpen, open, close} = useModalState()

  useEffect(() => {
    let displayData = []
    if (categoryId) {
      displayData = productData.filter(el => el.category === categoryId)
    } else {
      displayData = [...productData]
    }
    setFilteredData([...displayData])
  }, [categoryId])

  const openImageModal = (img) => {
    open()
    setDisplayProduct(img)
  }
  
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
                  id={product.id}
                  openModal={openImageModal}/>
              )
            })
          }  
        </div>
        <Modal isOpen={isOpen} close={close}>
          <div className="product__modal">
            <h3>{displayProduct.name}</h3>
            {<img src={displayProduct.image} alt={displayProduct.name}/>} 
            <p>{displayProduct.description}</p>  
          </div>
        </Modal>
      </div>
      
    )
}

export default Product