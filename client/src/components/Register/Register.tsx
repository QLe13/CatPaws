import React, { useEffect, useState } from "react";
import BasicRTable from "./BasicRTable";
import { Component } from "react";
import RegisterDropdown from "./RegisterDropdown";
import CheckForm from "./CheckForm";
import { db, auth } from "../../firebase";
//import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
//<Row Selection />

const form = { savedclasses: '' }

type Class = {
  name: string;
  class_id: string;
  instructor: string;
  enrolled: string[];
  waitlisted: string[];
  time: string;
  location: string;
  credits: number;
  subject: string;
  pathway: string;
};

type RegisterProps = {
  user: User;
}
const Register = ({ user }: RegisterProps) => {

  // example data needs to be replaced with data from the database
  const [savedClasses, setSavedClasses] = useState<Class[]>([]);

  useEffect(() => {

    const fetchSavedClasses = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
          console.error("User document not found");
          return;
        }
        const userClasses = userDoc.data()?.saved;
        if (!userClasses) {
          console.error("No saved classes found for user");
          return;
        }
        const classPromises = userClasses.map((classId) => {
          const pathSegments = classId.split("/");
          const classCollection = collection(db, pathSegments.slice(0, -1).join("/"));
          return getDoc(doc(classCollection, pathSegments.pop() as string));
        });
        const classDocs = await Promise.all(classPromises);
        const fetchedClasses = classDocs.map((docSnapshot) => {
          if (!docSnapshot.exists()) {
            console.error(`Class document not found: ${docSnapshot.id}`);
            return null;
          }
          return docSnapshot.data();
        });
        setSavedClasses(fetchedClasses.filter((classData) => classData !== null));
      } catch (error) {
        console.error("Error fetching saved classes:", error);
      }
    };

    
    
    fetchSavedClasses();
  }, [user]);

  return (
    <div>
      <div className="register_container">
        <h1>Register for Classes</h1>
      </div>
      <BasicRTable saved={savedClasses}/>
      <div className="register_container">
        <div className="register-container-button">
          <button>Register</button>
        </div>
        <div className="register-container-button">
          <button>Remove</button>
        </div>

      </div>
    </div>
  )
}
export default Register;
