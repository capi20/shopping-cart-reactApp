import React from 'react'

import './Button.scss'

const Button = ({text, extraClass}) => {
  return (
    <button className={`button ${extraClass}`}>{text}</button>
  )
}

export default Button