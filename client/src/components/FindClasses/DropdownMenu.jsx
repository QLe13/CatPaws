import React, { useState, useEffect} from 'react';
import { subjects, levels, days, pathways } from './CoursesData';
import './DropdownMenu.css';

const DropdownMenu = (props) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedPathway, setSelectedPathway] = useState(null);

  useEffect(() => {
    props.form.subject = selectedSubject;
    props.form.level = selectedLevel;
    props.form.time = selectedDays;
    props.form.pathway = selectedPathway;
  });

  const handleSubjectSelection = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleLevelSelection = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    }
  };

  const handlePathwayChange = (event) => {
    setSelectedPathway(event.target.value);
  };

  return (
    <div>
        <div className='dropdown-container'>
            <h1>Apply Filters</h1>
        </div>
        <div className='dropdown-container'>
        <table className='dropdown-table'>
        <tbody>
            <tr>
            <th>Subject</th>
            <th>Level</th>
            <th>Meeting days</th>
            <th>Pathway</th>
            </tr>
            <tr>
            <td>
                <select
                className='dropdown-select'
                value={selectedSubject || ''}
                onChange={handleSubjectSelection}
                >
                <option value='' disabled>
                    Select a subject
                </option>
                {subjects.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </td>
            <td>
                <select
                className='dropdown-select'
                value={selectedLevel || ''}
                onChange={handleLevelSelection}
                >
                <option value='' disabled>
                    Select a level
                </option>
                {levels.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </td>
            <td>
                <div className='checkbox-container'>
                {days.map((item) => (
                    <label key={item} className='checkbox-label'>
                    <input
                        type='checkbox'
                        value={item}
                        checked={selectedDays.includes(item)}
                        onChange={handleCheckboxChange}
                    />
                    <span className='checkbox-custom'></span>
                    {item}
                    </label>
                ))}
                </div>
            </td>
            <td>
                <select
                className='dropdown-select'
                value={selectedPathway || ''}
                onChange={handlePathwayChange}
                >
                <option key='' value=''>
                    Select a pathway
                </option>
                {pathways.map((item) => (
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
