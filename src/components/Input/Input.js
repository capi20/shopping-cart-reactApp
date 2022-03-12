import React from 'react'

import './Input.scss'

const Input = ({label, val, onChange, type}) => {
  return (
    <div className="input">
        <input type={type ? type : "text"} value={val} onChange={onChange} required/>
        <div className="input__label">{label}</div>
    </div>
  )
}

export default Input