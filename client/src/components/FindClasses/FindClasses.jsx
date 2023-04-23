import React from 'react'
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'
import FindTable from './FindTable'

const form = { subject:'', level:'', time:[], pathway:''}
const FindClasses = (props) => {
  const curUser = props.user
  const handleSubmitForm = async (form) =>{
    console.log(form)
    //The form object will be sent to the backend, the backend should be able to handle the request and return a list of classes
    //This function will be used to send the post request to the backend to receive a list of classess object that will be passed into the tabular object of classes
  }
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
        <FindTable></FindTable>
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
