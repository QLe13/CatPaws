import React, {useState} from "react";
import BasicRTable from "./BasicRTable";
import { Component } from "react";
import RegisterDropdown from "./RegisterDropdown";
import CheckForm from "./CheckForm";

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

    return (
        <div>
            <div className="register_container">
            <h1>Register for Classes</h1>
            </div>
            <BasicRTable />        
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