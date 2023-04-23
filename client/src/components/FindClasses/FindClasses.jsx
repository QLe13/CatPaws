import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'
import FindTable from './FindTable'
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';


const form = { subject:'', pathway:''}
const FindClasses = (props) => {
  const curUser = props.user
  const handleSubmitForm = async (form) => {
    
    const filteredForm = Object.fromEntries(
      Object.entries(form).filter(
        ([key, value]) => value !== null && !(Array.isArray(value) && value.length === 0)
      )
    );
    console.log(filteredForm);
    const db = getFirestore();
    let classQuery = collection(db, 'classes');

    // Add filters to the query based on the filteredForm
    Object.entries(filteredForm).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          classQuery = query(classQuery, where(key, 'array-contains', item));
        });
      } else {
        classQuery = query(classQuery, where(key, '==', value));
      }
    });

    const querySnapshot = await getDocs(classQuery);
    const fetchedClassesData = [];

    querySnapshot.forEach((doc) => {
      fetchedClassesData.push(doc.data());
    });

    setFetchedClasses(fetchedClassesData);
  };
  const [availableClasses, setAvailableClasses] = useState([]); 
  const [fetchedClasses, setFetchedClasses] = useState([]); 
  return (
    <div>
      <DropdownMenu form={form}/>
      <div className='dropdown-container'>
            <div className='dropdown-container-button' onClick={()=>handleSubmitForm(form)}><button>Search</button></div>
        </div>
      <div className="fclass_container">
        <h1>Available Classes</h1>
      </div>
      <div>
      <FindTable fetchedClasses={fetchedClasses} />
      </div>
      <div className="fclass_container">
        <div className="fclass-container-button">
          <button>Add to Registration List</button>
        </div>
      </div>







    </div>
  )
}


export default FindClasses
