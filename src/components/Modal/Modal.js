import React from 'react'

import './Modal.scss'
import BackDrop from '../Backdrop/Backdrop'

function Modal({isOpen, close, children}) {
    return (
        <>
            <BackDrop isOpen={isOpen} close={close}/>
            <div 
                className='modal'
                style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: isOpen ? '1' : '0'
                }}>
                {/* <span className="modal__btn" onClick={close}>
                    x
                </span> */}
                {children}
            </div>
        </>
    )
}

export default Modal
