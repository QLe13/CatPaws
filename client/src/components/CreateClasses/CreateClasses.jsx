import React from 'react'
import DropdownMenu from './CreateClassMenu'
import { collection, getDocs, query, where, getFirestore, doc, setDoc} from 'firebase/firestore';
import './CreateClassMenu.css'

const form = { name: '', subject:'', level:'', time:[], pathway:''}
const CreateClasses = (props) => {
  const curUser = props.user
  const handleSubmitForm = async (form) =>{
    console.log(form)
    //The form object will be sent to the backend, the backend should be able to handle the request and return a list of classes
    //This function will be used to send the post request to the backend to receive a list of classess object that will be passed into the tabular object of classes
    try {
      const filteredForm = Object.fromEntries(
        Object.entries(form).filter(
          ([key, value]) => value !== null && !(Array.isArray(value) && value.length === 0)
        )
      );
      console.log(filteredForm);
      const db = getFirestore(app);
      const curSemester = await getCurSemester();
      let classQuery = collection(db, curSemester);

      await setDoc(doc(db, 'classes', form.name), filteredForm);
  }
  catch (error) {
    console.log(error);
  }
}
  return (
    <div>
      <DropdownMenu form={form}/>
      <div className='dropdown-container'>
            <div className='dropdown-container-button' onClick={()=>handleSubmitForm(form)}><button>Create</button></div>
        </div>
    </div>
  )
}
export default CreateClasses