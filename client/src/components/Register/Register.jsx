import React, {useState} from "react";
import BasicRTable from "./BasicRTable";
import { Component } from "react";
import RegisterDropdown from "./RegisterDropdown";

//<Row Selection />

const form = { savedclasses:''}
const Register = ({classes}) => {

    // example data needs to be replaced with data from the database
    const saved = [
        {
          courseId: "CSCI-2320",
          courseName: "Principle of Data Abstraction",
          meetingTime: "Mon/Wed/Fri 9:30AM-10:20AM",
          location: "CSI 257",
          hours: "3"
        },
        {
          courseId: "CSCI-2322",
          courseName: "Principle of Functional Languages",
          meetingTime: "Mon/Wed/Fri 11:30AM-12:20AM",
          location: "CSI 257",
          hours: "3"
        }
      ];

    

    const handleSubmitForm = async (form) =>{
        console.log(form)
        //The form object will be sent to the backend, the backend should be able to handle the request and return a list of classes
        //This function will be used to send the post request to the backend to receive a list of classess object that will be passed into the tabular object of classes
    }


    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

    return (
        <div>
            {/*
            <BasicRTable saved = {saved}/>
            <RegisterDropdown form={form}/>
            <div className='dropdown-container'>
            <div className='dropdown-container-button' onClick={()=>handleSubmitForm(form)}><button>Register</button></div>
            */
            }

            <label>
                Checkbox:<input type="checkbox" id="check" name="check1"/>
            </label>
        </div>
    )
}
export default Register;