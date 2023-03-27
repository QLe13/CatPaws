import React, { useState} from 'react'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import FindClasses from './components/FindClasses/FindClasses'
import Cookies from 'universal-cookie'
import NavBar from './components/Navbar/NavBar'
import Auth from './components/Landing/Auth'
import CreateClasses from './components/CreateClasses/CreateClasses'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const cookies = new Cookies()
const App = () => {
  const [curUser, setUser] = useState(cookies.get('curUser')||null)// This is where the user information object is being stored
  const setUserState = (newUser) => {
    setUser(newUser);
    cookies.set('curUser',newUser)//This is the user object from the backend
    //this is the function that sets the user state and sets the cookie
  }; 

  if(!curUser){
    return <Auth setUser ={setUserState}/>
    // What does this conditional do? It validates the user and if the user is not logged in, it will redirect them to the login page
}
  return (
    <div>
  <Router>
      <NavBar cookies = {cookies} isTeacher={curUser.data.isTeacher}/>
      <Routes>
        <Route exact path='/' element={<Landing user = {curUser}/>} />
        <Route exact path='/schedule' element={<Landing user = {curUser}/>}/>
        <Route exact path='/register' element={<Register user = {curUser}/>}/>
        <Route exact path='/createclasses' element={ <CreateClasses/> }/>
        <Route exact path='/findclasses' element={<FindClasses user = {curUser}/>}/>
      </Routes>
  </Router>
    </div>
  )
}

export default App


