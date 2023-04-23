import React from "react";
import { examplesaved } from "./classes";
import './Findclasses.css'

const BasicRTable = ({ fetchedClasses }) => {
  //const { classes } = props;
  return (
    <div className="fclass__container">
    <table className="fclass__table">
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
      {fetchedClasses && fetchedClasses.length > 0 ? (
            fetchedClasses.map(({ class_id, name, time, location, credits }, index) => (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              id={class_id}
              name={name}
              value={class_id}
              style={{ display: "inline-block" }}
            />
          </td>
          <td>{class_id}</td>
          <td>{name}</td>
          <td>{time}</td>
          <td>{location}</td>
          <td>{credits}</td>
        </tr>
        ))
        ) : (
          <tr>
          <td colSpan="6">No classes found</td>
        </tr>
      )}
    </tbody>
    </table>
    </div>
  );
};

export default BasicRTable;