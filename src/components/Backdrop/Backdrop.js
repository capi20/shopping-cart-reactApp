import React from 'react'

import './Backdrop.scss'

const Backdrop = ({isOpen, close}) => {
    return (
        isOpen ? <div className="backdrop" onClick={close}></div> : null
    )
}

export default Backdrop
