import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'
import FindTable from './FindTable'
import { collection, getDocs, query, where, getFirestore, doc, updateDoc} from 'firebase/firestore';
import { getCurSemester } from '../../utils';

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
    const curSemester = await getCurSemester();
    let classQuery = collection(db, curSemester);

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
  const [fetchedClasses, setFetchedClasses] = useState([]); 
  const [selectedClasses, setSelectedClasses] = useState([]);
  const handleAddToRegistrationList = async () => {
    if (selectedClasses.length > 0) {
      const userRef = doc(getFirestore(), 'users', curUser.uid);
      await updateDoc(userRef, {
        saved: [...curUser.saved, ...selectedClasses],
      });
    } else {
      console.log('No classes selected');
    }
  };

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
      <FindTable
        fetchedClasses={fetchedClasses}
        onSelectClass={(classId, isSelected) => {
          if (isSelected) {
            setSelectedClasses([...selectedClasses, classId]);
          } else {
            setSelectedClasses(selectedClasses.filter((id) => id !== classId));
          }
        }}
      />
      </div>
      <div className="fclass_container">
        <div className="fclass-container-button">
          <button onClick={handleAddToRegistrationList}>Add to Registration List</button>
        </div>
      </div>







    </div>
  )
}


export default FindClasses
