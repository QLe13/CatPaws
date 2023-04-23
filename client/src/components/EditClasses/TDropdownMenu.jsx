import React, { useState, useEffect} from 'react';
import { classes } from './TempTeacherClasses'; //TODO: Actuall connection to backend classes/data here. 
import './DropdownMenu.css';

const DropdownMenu = (props) => {
    const [selectedClass, setSelectedSubject] = useState(null);

  useEffect(() => {
    props.form.class = selectedClass;
  },[selectedClass]);
  // What does this useEffect do? It updates the form object in the FindClasses component

  const handleClassSelection = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div>
        <div classEdit='dropdown-container'>
            <h1>Apply Filters</h1>
        </div>
        <div classEdit='dropdown-container'>
        <table classEdit='dropdown-table'>
        <tbody>
            <tr>
            <th>Class to Edit</th>
            </tr>
            <tr>
            <td>
                <select
                classEdit='dropdown-select'
                value={selectedClass || ''}
                onChange={handleClassSelection}
                >
                <option value='' disabled>
                    Select a Class
                </option>
                {selectedClass.map((item) => (
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

export default DropdownMenu;