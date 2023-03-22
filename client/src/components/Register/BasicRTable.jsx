import React from "react";
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
        </tr>
      </thead>
      <tbody>
        {saved.map((cls) => (
          <tr key={cls.courseId}>
            <td>{cls.courseId}</td>
            <td>{cls.courseName}</td>
            <td>{cls.meetingTime}</td>
            <td>{cls.location}</td>
            <td>{cls.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BasicRTable;