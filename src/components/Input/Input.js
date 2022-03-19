import React from 'react'

import './Input.scss'

const Input = ({label, val, onChange, type}) => {
  return (
    <div className="input-wrapper">
        <input type={type ? type : "text"} value={val} onChange={onChange} required/>
        <label className="input-wrapper__label">{label}</label>
    </div>
  )
}

export default Input