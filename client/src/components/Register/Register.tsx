import React, { useEffect, useState } from "react";
import BasicRTable from "./BasicRTable";
import { Component } from "react";
import RegisterDropdown from "./RegisterDropdown";
import CheckForm from "./CheckForm";
import { db, auth } from "../../firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
//<Row Selection />

const form = { savedclasses: '' }

type RegisterProps = {
  user: User;
}
const Register = ({ user }: RegisterProps) => {

  const [savedclasses, setSavedClasses] = useState<Class[]>([]);

  const [form, setForm] = useState({
    semester: 'spring',
  });

  useEffect(() => {
    const fetchSavedClasses = async () => {
      const savedClasses = (await Promise.all(user.saved.map((s) => getDoc(doc(db, s))))).map((d) => d.data()) as Class[];
      setSavedClasses(savedClasses);
    };
    fetchSavedClasses();
  }, [form]);

  // example data needs to be replaced with data from the database

  return (
    <div>
      <div className="register_container">
        <h1>Register for Classes</h1>
      </div>
      <BasicRTable saved={savedclasses}/>
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
