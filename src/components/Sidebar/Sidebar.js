import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'

import './Sidebar.scss'
import cartegoryData from '../../server/categories/index.get.json'
import { useMediaQuery } from '../../misc/custom-hooks'
import { FaAngleDown } from 'react-icons/fa'

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [displaySidebar, setDisplaySidebar] = useState(false)
    const catId = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const isDesktop = useMediaQuery('(min-width: 500px)')
    const isProductPage = location.pathname.includes('/products')

    useEffect(() => {
        if (isProductPage && catId.id) {
            const currentCategory = cartegoryData.filter(p => p.id === catId.id)
            setSelectedCategory(currentCategory[0].name)
        } else {
            setSelectedCategory(cartegoryData[0].name)
        }
    }, [isDesktop, catId, isProductPage])

    const clickHandler = (name, id) => {
        setSelectedCategory(name)
        setDisplaySidebar(false)
        navigate(`/products/${id}`)
    }

    const sidebar = (
        <nav className="sidebar">
            <ul>
                {
                    cartegoryData.map((category, i) => {
                        return (
                            <li 
                                key={category.id}
                                className={category.id === catId.id ? 'sidebar__item active' : 'sidebar__item'}
                                onClick={() => clickHandler(category.name, category.id)}>
                                    {category.name}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
    
    return (
        <aside>
            { 
                isDesktop ?
                {...sidebar} :
                <>
                    <div 
                        className="sidebar-mobile" 
                        onClick={() => setDisplaySidebar(!displaySidebar)}>
                        <span className="sidebar-mobile__text">{selectedCategory}</span>
                        <span className="sidebar-mobile__icon"><FaAngleDown/></span>
                    </div>
                    <div className={displaySidebar ? 'sidebar-active sidebar-wrapper' : 'sidebar-wrapper'}>
                        {sidebar}
                    </div>
                </>
            }
        </aside>
    )
}

export default Sidebar