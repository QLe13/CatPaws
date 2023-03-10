import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Auth.css'

const initialState = {
    username:'',
    password:''
}

const Auth = ({curUser, setUser}) => {

    const [form,setForm] = useState(initialState)
    const handleChange = (event) => {
        setForm({...form, [event.target.name]:event.target.value})
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        //prevent the page reloading
        const URL = 'http://localhost:4500'
        const ans = await axios.post(`${URL}/login`,form)
        if(ans){
            setUser(ans)
            console.log(ans)
        }else{
            window.alert("Username or password is incorrect!")
        }

    }
  return (
    <div className='auth__form-container'>
      <div className='auth__form-container_fields'>
        <div className='auth__form-container_fields-content'>
            <p>Sign In</p>
            <form onSubmit={handleSubmit}>
            <div className="auth__form-container_fields-content_input">
                <label htmlFor="username">Username</label>
                    <input 
                        name="username" 
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
            </div>
            <div className="auth__form-container_fields-content_input">
                <label htmlFor="password">Password</label>
                    <input 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
            </div>
            <div className='auth__form-container_fields-content_button button'>
                    <button>Submit</button>
            </div> 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
