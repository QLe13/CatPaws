import React from "react";
import { examplesaved } from "./classes";
import './Register.css'

const BasicRTable = ({ saved }) => {
  return (
    <div className="register__container">
    <table className="register__table">
      <thead>
        <tr>
          <th>Register</th>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Meeting Time</th>
          <th>Location</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        {examplesaved.map(({ courseId, courseName, meetingTime, location, hours }, index) => (
          <tr key={index}>
            <td>            
              <input
                    type="checkbox"
                    id={courseId}
                    name={courseName}
                    value={courseId}
                    style={{display:'inline-block'}}
              /></td> 
            <td>{courseId}</td>
            <td>{courseName}</td>
            <td>{meetingTime}</td>
            <td>{location}</td>
            <td>{hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BasicRTable;