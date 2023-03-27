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
  const [curUser, setUser] = useState(cookies.get('curUser')||null)// Put the login token here
  const setUserState = (newUser) => {
    setUser(newUser);
    cookies.set('curUser',newUser)
  }; 
  if(!curUser){
    return <Auth curUser={curUser} setUser ={setUserState}/>
    // What does this conditional do? It validates the user and if the user is not logged in, it will redirect them to the login page
}
  return (
    <div>
  <Router>
      <NavBar cookies = {cookies}/>
      <Routes>
        <Route exact path='/' element={<Landing user = {curUser}/>} />
        <Route exact path='/schedule' element={<Landing user = {curUser}/>}/>
        <Route exact path='/register' element={<Register user = {curUser}/>}/>
        <Route exact path='/findclasses' element={<FindClasses user = {curUser}/>}/>
      </Routes>
  </Router>
  {/*// This part is the navigation bar */}
    </div>
  )
}

export default App


