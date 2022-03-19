import React from 'react'

import './Form.scss'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Form = ({heading, description, btnText, form}) => {
    return (
        <article className="form">
            <section className="form__left">
                <h2 className="form__heading mb-3">{heading}</h2>
                <p className="form__description">{description}</p>    
            </section>
            <form className="form__right">
                {form.map((el, i) => {
                    return <Input 
                        key={i}
                        label={el.label} 
                        val={el.val} 
                        onChange={(e) => el.handler(e.target.value)} 
                        type={el.type}/>
                    })}
                    <Button classes="w-100 mt-2 mb-2">{btnText}</Button>
            </form>
        </article>
    )
}

export default Form