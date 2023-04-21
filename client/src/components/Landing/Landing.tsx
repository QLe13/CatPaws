import React, { useEffect, useState } from 'react';
import SchedulingPage from '../SchedulingPage/SchedulingPage';
import './landing.css';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { db, auth } from "../../firebase";
import { getCurSemester } from '../../utils';

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

  useEffect(() => {
    const fetchSemester = async () => {
      const curSemester = await getCurSemester();
      setSem(curSemester);
    };
    fetchSemester();
  }, []);

  const switchSem = (semester) => {
    if (semester !== curSem) {
      setSem(semester);
    }
  }


  const [springclasses, setSpringClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchSavedClasses = async () => {
      if (user) { // Check if 'user' is not 'null'
        const springClasses = (
          await Promise.all(user.classes.map((s) => getDoc(doc(db, s))))
        ).map((d) => d.data()) as Class[];
        setSpringClasses(springClasses);
      }
    };
    fetchSavedClasses();
  }, []);

  const [fallclasses, setFallClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchSavedClasses = async () => {
      if (user) { // Check if 'user' is not 'null'
        const fallClasses = (
          await Promise.all(user.classes.map((s) => getDoc(doc(db, s))))
        ).map((d) => d.data()) as Class[];
        setFallClasses(fallClasses);
      }
    };
    fetchSavedClasses();
  }, []);

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
      <SchedulingPage classes={curSem === 'fall' ? fallclasses : springclasses} />
    </div>
  );
}

export default Landing;
