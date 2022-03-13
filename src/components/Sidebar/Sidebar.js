import React, { useEffect, useState } from 'react'

import './Sidebar.scss'
import { useMediaQuery } from '../../misc/custom-hooks'
import cartegoryData from '../../server/categories/index.get.json'
import { NavLink, useParams } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [displaySidebar, setDisplaySidebar] = useState(false)
    const catId = useParams()

    const isDesktop = useMediaQuery('(min-width: 600px)')

    useEffect(() => {
        console.log(cartegoryData)
        const currentCategory = cartegoryData.filter(p => p.id === catId.id)
        setSelectedCategory(currentCategory[0].name)
    }, [])

    const clickHandler = (name) => {
        setSelectedCategory(name)
        setDisplaySidebar(false)
    }

    const sidebar = (
        <ul className="sidebar">
            {
                cartegoryData.map((category, i) => {
                    return (
                        <NavLink key={i} to={`/products/${category.id}`} onClick={() => clickHandler(category.name)}>
                            <li className={category.id === catId.id ? 'sidebar__item active' : 'sidebar__item'}>
                                {category.name}    
                            </li>
                        </NavLink>
                    )
                })
            }
        </ul>
    )
    
    return (
        <>
            { 
                isDesktop ?
                {...sidebar} :
                <div>
                    <div 
                        className="sidebar-mobile" 
                        onClick={() => setDisplaySidebar(!displaySidebar)}>
                        <span className="sidebar-mobile__text">{selectedCategory}</span>
                        <span className="sidebar-mobile__icon"><FaAngleDown/></span>
                    </div>
                    {displaySidebar && sidebar}
                </div>
            }
        </>
    )
}

export default Sidebar