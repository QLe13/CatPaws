import React from "react";
import './Schedule.css'

const ScheduleTable = ({ classes }) => {
  return (
    <div className="schedule__container">
    <table className="schedule__table">
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
        {classes.map((cls) => (
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

export default ScheduleTable;
