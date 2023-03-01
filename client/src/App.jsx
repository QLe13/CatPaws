import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Cookies from 'universal-cookie'
import NavBar from './components/Navbar/NavBar'
import Auth from './components/Landing/Auth'


const cookies = new Cookies()
const App = () => {
  const [curUser, setUser] = useState(cookies.get('curUser')||'')// Put the login token here
  const setUserState = (newUser) => {
    setUser(newUser);
    cookies.set('curUser',newUser)
  }; 
  if(!curUser){
    return <Auth curUser={curUser} setUser ={setUserState}/>
}
  return (
    <div>
      <NavBar cookies = {cookies}/>
      <Landing/>
    </div>
  )
}

export default App


