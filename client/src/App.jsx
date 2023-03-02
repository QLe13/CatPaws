import React, { useState } from 'react'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import FindClasses from './components/FindClasses/FindClasses'
import Cookies from 'universal-cookie'
import NavBar from './components/Navbar/NavBar'
import Auth from './components/Landing/Auth'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
  <Router>
      <NavBar cookies = {cookies}/>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/schedule' element={<Landing/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/findclasses' element={<FindClasses/>}/>
      </Routes>
  </Router>
    </div>
  )
}

export default App


