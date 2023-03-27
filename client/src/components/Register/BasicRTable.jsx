import React from "react";
import { examplesaved } from "./classes";
import './Register.css'

const BasicRTable = ({ saved }) => {
  return (
    <div className="register__container">
    <table className="register__table">
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Meeting Time</th>
          <th>Location</th>
          <th>Hours</th>
          <th>Register</th>
        </tr>
      </thead>
      <tbody>
        {examplesaved.map(({ courseId, courseName, meetingTime, location, hours }, index) => (
          <tr key={index}>
            <td>{courseId}</td>
            <td>{courseName}</td>
            <td>{meetingTime}</td>
            <td>{location}</td>
            <td>{hours}</td>
            <td>            
              <input
                    type="checkbox"
                    id={courseId}
                    name={courseName}
                    value={courseId}
                    style={{display:'inline-block'}}
              /></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BasicRTable;