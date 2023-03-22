import React, { useState, useEffect} from 'react';
import './RegisterDrop.css';
import saveddata from "./classes"

const RegisterDropdown = (props) => {
    const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    props.form.classes = selectedClass;

  },[selectedClass]);

  const handleClassSelection = (event) => {
    setSelectedClass(event.target.value);
  };



  return (
    <div>
        <div className='dropdown-container'>
        <table className='dropdown-table'>
        <tbody>
            <tr>
            <th>Select Class to Register</th>
            </tr>
            <tr>
            <td>
                <select
                className='dropdown-select'
                value={selectedClass || ''}
                onChange={handleClassSelection}
                >
                <option value='' disabled>
                    Select a class
                </option>
                {saveddata.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>

  );
};

export default RegisterDropdown;
