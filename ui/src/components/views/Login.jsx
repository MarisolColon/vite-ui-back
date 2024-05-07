import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        setEmailError('')
        setPasswordError('')

        if (email === '') {
            setEmailError('Email is required')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Invalid email')
            return
        }

        if (password === '') {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters')
            return
        }
        navigate('/')
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <h1>LOGIN</h1>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={'Login'} 
                />
            </div>
        </div>
    )
}

export default Login