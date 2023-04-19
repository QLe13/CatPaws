import React, { useState } from 'react';
import SchedulingPage from '../SchedulingPage/SchedulingPage';
import './landing.css';

type LandingProps = {
  user: User | null
}

const Landing = ({user}: LandingProps) => {
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

  const [curSem, setSem] = useState('fall');

  const switchSem = (semester) => {
    if (semester !== curSem) {
      setSem(semester);
    }
  }

  return (
    <div className="landing">
      <div className="landing__buttons">
        <button
          className={`landing__button ${curSem === 'fall' ? 'landing__button--active' : ''}`}
          onClick={() => switchSem('fall')}
        >
          Fall 2022
        </button>
        <button
          className={`landing__button ${curSem === 'spring' ? 'landing__button--active' : ''}`}
          onClick={() => switchSem('spring')}
        >
          Spring 2023
        </button>
      </div>
      <SchedulingPage classes={curSem === 'fall' ? classesFall : classesSpring} />
    </div>
  );
}

export default Landing;
