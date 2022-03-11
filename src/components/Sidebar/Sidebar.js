import React from 'react'

import './Sidebar.scss'
import cartegoryData from '../../server/categories/index.get.json'
import { NavLink, useParams } from 'react-router-dom'

const Sidebar = () => {
    const catId = useParams()
    
    return (
        <ul className="sidebar">
            {
                cartegoryData.map((category, i) => {
                    return (
                        <NavLink key={i} to={`/products/${category.id}`}>
                            <li className={category.id === catId.id ? 'sidebar__item active' : 'sidebar__item'}>
                                {category.name}    
                            </li>
                        </NavLink>
                    )
                })
            }
        </ul>
    )
}

export default Sidebar