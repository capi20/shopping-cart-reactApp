import React from 'react'

import './Form.scss'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Form = ({heading, description, btnText, form}) => {
    return (
        <div className="form">
            <div className="form__left">
                <h1 className="form__heading mb-3">{heading}</h1>
                <p className="form__description">{description}</p>    
            </div>
            <form className="form__right">
                {form.map((el, i) => {
                    return <Input label={el.label} 
                        val={el.val} 
                        changed={(e) => el.handler(e.target.value)} 
                        type={el.type}/>
                    })}
                    <Button classes="w-100 mt-2 mb-2">{btnText}</Button>
            </form>
        </div>
    )
}

export default Form