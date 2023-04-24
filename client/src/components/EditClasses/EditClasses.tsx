import React from 'react'
import { Component, useState } from "react";
import { db, auth } from "../../firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import BasicRTable from '../Register/BasicRTable';

type EditClassesProps = {
  user: User
}


const EditClasses = ({user}: EditClassesProps) => {

  const [teachingClasses, setTeachingClasses] = useState<Class[]>([]);
  //to do fetch classes from database
  return (
    <div>
      <div className="register_container">
        <h1>Edit your classes</h1>
      </div>
      <BasicRTable saved={teachingClasses}/>
      <div className="register_container">
        <div className="register-container-button">
          <button>Delete class</button>
        </div>

      </div>
    </div>
  )
}

export default EditClasses

