import React, { useContext, useState } from 'react'
import SchedulingPage from '../SchedulingPage/SchedulingPage';





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
  

  const [curSem, setSem] = useState('fall') //current semester, we use this curSem useState to switch between semester
  const switchSem = (curr, button) => {
    if(button !== curr){
        setSem(button)
    }
  }


  return (
    <div>
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

