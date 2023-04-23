import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'
import FindTable from './FindTable'
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';


const form = { subject:'', level:'', time:[], pathway:''}
const FindClasses = (props) => {
  const curUser = props.user
  const handleSubmitForm = async (form) => {
    console.log(form);
    const db = getFirestore();
    const q = query(
      collection(db, 'classes'),
      where('subject', '==', form.subject),
      where('pathway', '==', form.pathway)
    );
  
    const querySnapshot = await getDocs(q);
    const classes = [];
    querySnapshot.forEach((doc) => {
      classes.push(doc.data());
    });
  
    setAvailableClasses(classes);
  };
  const [availableClasses, setAvailableClasses] = useState([]);  
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
      <FindTable classes={availableClasses} />
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
