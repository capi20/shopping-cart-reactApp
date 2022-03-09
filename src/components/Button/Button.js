import React from 'react'

import './Button.scss'

const Button = ({children, classes, onClick}) => {
  return (
    <button className={`button ${classes}`} onClick={onClick}>{children}</button>
  )
}

export default Button