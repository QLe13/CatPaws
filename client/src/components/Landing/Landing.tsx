import { collection, doc, getDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getCurSemester } from "../../utils";
import SchedulingPage from "../SchedulingPage/SchedulingPage";
import "./landing.css";

type LandingProps = {
  user: User | null;
};

const Landing = ({ user }: LandingProps) => {
  const [curSem, setSem] = useState("fall");

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
  };

  const [springclasses, setSpringClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchSavedClasses = async () => {
      if (user) {
        // Check if 'user' is not 'null'
        const springClasses = (
          await Promise.all(
            user.classes.map(async (s) => {
              const [semester, docId] = s.split("/");
              if (semester === "spring2023") {
                const col = semester;
                const docRef = doc(collection(db, col), docId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  return docSnap.data() as Class;
                } else {
                  console.error(`Document ${s} not found.`);
                  return null;
                }
              } else {
                return null;
              }
            })
          )
        ).filter((c) => c !== null) as Class[];
        console.log("Spring Classes:", springClasses);
        setSpringClasses(springClasses);
      }
    };
    fetchSavedClasses();
  }, []);

  const [fallclasses, setFallClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchSavedClasses = async () => {
      if (user) {
        // Check if 'user' is not 'null'
        const fallClasses = (
          await Promise.all(
            user.classes.map(async (s) => {
              const [semester, docId] = s.split("/");
              if (semester === "fall2022") {
                const col = semester;
                const docRef = doc(collection(db, col), docId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  return docSnap.data() as Class;
                } else {
                  console.error(`Document ${s} not found.`);
                  return null;
                }
              } else {
                return null;
              }
            })
          )
        ).filter((c) => c !== null) as Class[];
        console.log("Fall Classes:", fallClasses);
        setFallClasses(fallClasses);
      }
    };
    fetchSavedClasses();
  }, []);

  return (
    <div className="landing">
      <h2>User Information</h2>
      <div className="card">
        <p>
          <strong>Username:</strong> {user?.username}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Is Teacher:</strong> {(!!user?.isTeacher).toString()}
        </p>
      </div>
      <h2>{curSem === "fall" ? "Fall 2022" : "Spring 2023"} Schedule</h2>
      <div className="landing__buttons">
        <button
          className={`landing__button ${
            curSem === "fall" ? "landing__button--active" : ""
          }`}
          onClick={() => switchSem("fall")}
        >
          Fall 2022
        </button>
        <button
          className={`landing__button ${
            curSem === "spring" ? "landing__button--active" : ""
          }`}
          onClick={() => switchSem("spring")}
        >
          Spring 2023
        </button>
      </div>
      <SchedulingPage
        classes={curSem === "fall" ? fallclasses : springclasses}
      />
    </div>
  );
};

export default Landing;
