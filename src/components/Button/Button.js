import React from 'react'

import './Button.scss'

const Button = ({text, classes}) => {
  return (
    <button className={`button ${classes}`}>{text}</button>
  )
}

export default Button