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
        {saved.map(({ class_id, name, time, location, credits }, index) => (
          <tr key={index}>
            <td>            
              <input
                    type="checkbox"
                    id={class_id}
                    name={name}
                    value={class_id}
                    style={{display:'inline-block'}}
              /></td> 
            <td>{class_id}</td>
            <td>{name}</td>
            <td>{time}</td>
            <td>{location}</td>
            <td>{credits}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BasicRTable;