import React from "react";
import BasicRTable from "./BasicRTable";
import RegisterDropdown from "./RegisterDropdown";

//<Row Selection />

const form = { savedclasses:''}
const Register = ({classes}) => {

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
            <BasicRTable saved = {saved}/> 
            <RegisterDropdown form={form}/>       
        </div>
    )
}
export default Register;