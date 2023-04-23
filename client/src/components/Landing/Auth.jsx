import React from 'react'
import { useState } from 'react'
import './Auth.css'
import { auth, googleProvider } from '../../firebase'
import { getRedirectResult, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'
import { redirect } from 'react-router-dom'

const initialState = {
    email: '',
    password: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        form[event.target.name] = event.target.value
        setForm(form)
    }

    const handleSubmit = async (event) => {
        // prevent the page reloading
        event.preventDefault()
        await signInWithEmailAndPassword(auth, form.email, form.password).then((cred) => {
            redirect('/')
        }).catch((error) => {
            window.alert('Email or password is incorrect!')
        })
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="user@gmail.com"
                                autoComplete='username'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                autoComplete='current-password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='auth__form-container_fields-content_button button'>
                            <button>Sign In</button>
                        </div>
                    </form>
                    <a href="https://accounts.google.com/login" onClick={async () => {
                        await signInWithRedirect(auth, googleProvider)
                        await getRedirectResult().then((result) => {
                            if (result.user) {
                                redirect('/')
                            }
                        }).catch((error) => {
                            window.alert(error.message)
                        })
                    }}>Login with Google</a>
                </div>
            </div>
        </div>
    )
}

export default Auth
