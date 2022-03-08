import React from 'react'

import './Input.scss'

const Input = ({label, val, changed}) => {
  return (
    <div className="input">
        <input className="input__box" value={val} onChange={changed} required/>
        <div className="input__label">{label}</div>
    </div>
  )
}

export default Input