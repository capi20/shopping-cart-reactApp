import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Form from '../../components/Form/Form'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const location = useLocation()

    const isSignup = location.pathname === "/register"

    const loginForm=[
        {
            label:"Email",
            val: email,
            handler: setEmail,
            type:"email"
        },
        {
            label:"Password",
            val: password,
            handler: setPassword,
            type: "password"
        }
    ]

    const signupForm = [
        {
            label: "First Name",
            val: firstName,
            handler: setFirstName
        },
        {
            label: "Last Name",
            val: lastName,
            handler: setLastName
        },
        {
            label:"Email",
            val: email,
            handler: setEmail,
            type: "email"
        },
        {
            label:"Password",
            val: password,
            handler: setPassword,
            type: "password"
        },
        {
            label: "Confirm Password",
            val: confirmPassword,
            handler: setConfirmPassword,
            type: "password"
        }
    ]

    return (
        <Form heading={isSignup ? 'Signup' : 'Login'} 
            description={isSignup ? "We do not share your personal details with anyone." : "Get access to your Orders, Wishlist and Recommendations"}
            btnText={isSignup ? 'Signup' : 'Login'} 
            form={isSignup ? signupForm : loginForm}/>
    )
}

export default SignIn