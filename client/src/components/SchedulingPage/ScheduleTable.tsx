import React, { useEffect } from "react";
import './Schedule.css'


type ScheduleTableProps = {
  classes: Class[]
}


const ScheduleTable = ({ classes }: ScheduleTableProps) => {
  useEffect(() => {
    console.log(classes);
  }, [classes]);
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
          {
            classes.filter(cls => cls !== undefined).map((cls) => {
              try {
                return (
                  <tr key={cls.class_id}>
                    <td>{cls.class_id}</td>
                    <td>{cls.name}</td>
                    <td>{cls.time}</td>
                    <td>{cls.location}</td>
                    <td>{cls.credits}</td>
                  </tr>
                );
              } catch (e) {
                console.error(e);
                return null;
              }
            })
          }
        </tbody>
      </table>
    </div>
  );
};


export default ScheduleTable;
