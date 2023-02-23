import React from 'react'
import Cookies from 'universal-cookie'
import './App.css'
import { Auth } from './components'

const authToken = false

const App = () => {

    if(!authToken){
        return <Auth/>
    }
  return (
    <div className='app__wrapper'>
      <h1>Huhhhh ur in me!</h1>
    </div>
  )
}

export default App
