import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Auth from './Auth';
import NavBar from '../Navbar/NavBar'
import SchedulingPage from '../SchedulingPage/SchedulingPage';



const cookies = new Cookies()


//This is the login page for our application
const Landing = () => {
  const classesFall = [
    {
      courseId: "CSCI-2320",
      courseName: "Principle of Data Abstraction",
      meetingTime: "Mon/Wed/Fri 9:30AM-10:20AM",
      location: "CSI 257",
      hours: "3"
    },
    {
      courseId: "CSCI-2322",
      courseName: "Principle of Functional Languages",
      meetingTime: "Mon/Wed/Fri 11:30AM-12:20AM",
      location: "CSI 257",
      hours: "3"
    }
  ];
  const classesSpring = [
    {
      courseId: "CSCI-2321",
      courseName: "Placeholder",
      meetingTime: "Mon/Wed/Fri 9:30AM-10:20AM",
      location: "CSI 257",
      hours: "3"
    },
    {
      courseId: "CSCI-2323",
      courseName: "Placeholder",
      meetingTime: "Mon/Wed/Fri 11:30AM-12:20AM",
      location: "CSI 257",
      hours: "3"
    }
  ];
  const [curUser, setUser] = useState(cookies.get('curUser')||'')// Put the login token here
  const setUserState = (newUser) => {
    setUser(newUser);
    cookies.set('curUser',newUser)
  }; 

  const [curSem, setSem] = useState('fall') //current semester, we use this curSem useState to switch between semester
  const switchSem = (curr, button) => {
    if(button !== curr){
        setSem(button)
    }
  }

  //if authentication is successful, the authToken (or userID will be initialized and then we will make query based on that token)
    if(!curUser){
        return <Auth curUser={curUser} setUser ={setUserState}/>
    }

  return (
    <div>
    <NavBar cookies = {cookies}/>
    <div className='schedule__form-container_fields-content'>
        <div className='schedule__form-container_fields-content_button'onClick={()=>switchSem(curSem,'fall')}>
            <button>Fall 2022</button>
            </div>
        <div className='schedule__form-container_fields-content_button'onClick={()=>switchSem(curSem,'spring')}>
            <button>Spring 2023</button>
            </div>
    </div>
    <SchedulingPage classes={curSem==='fall' ? classesFall : classesSpring}/>
    </div>
  )
}


export default Landing

