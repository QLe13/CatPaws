import React, {useState} from 'react'
import DropdownMenu from './TDropdownMenu'
import './DropdownMenu.css'

const EditClasses = (props) => {
    const [] = useState(null);

    const curUser = props.user
    const handleSubmitForm = async (form) => {
        console.log(form)
    //The form object will be sent to the backend, the backend should be able to handle the request and return a list of classes
    //This function will be used to send the post request to the backend to receive a list of classess object that will be passed into the tabular object of classes
    }
    const handleSubmitEdits = async (formEdits) => {
        console.log(formEdits)
    //as Above, but instead of just search for a class, this sends data back to it to edit. 
    }
    // ^ This is pretty much ripped exactly from Find Classes.jsx. Why reinvent the wheel? 

  return (
    <div>
      <h1>Edit Classes</h1> 
    </div>
  )
}

export default EditClasses