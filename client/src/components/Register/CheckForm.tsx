import { useState } from "react";
import { examplesaved, saveddata } from "./classes";
import "./Register";

const CheckForm = () => {
  // const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(saveddata.length).fill(false)
  );

  return (
    <div>
      {examplesaved.map(
        ({ courseID, courseName, meetingTime, location, hours }, index) => {
          return (
            <ul>
              <li key={index}>
                <div className="checkform_container">
                  <div className="checkform_block">{courseName}</div>
                  <div className="checkform_block">{meetingTime}</div>
                  <div className="checkform_block">{location}</div>
                  <div className="checkform_block">{hours}</div>
                  <div className="checkform_block">
                    <input
                      aria-label="select course"
                      type="checkbox"
                      id={courseID}
                      name={courseName}
                      value={courseID}
                      style={{ display: "inline-block" }}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          );
        }
      )}
    </div>
  );
};

export default CheckForm;
