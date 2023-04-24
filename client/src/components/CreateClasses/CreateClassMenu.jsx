import React, { useState, useEffect} from 'react';
import { subjects, levels, days, pathways, ctimes } from './CoursesData2';
import './CreateClassMenu.css';

const DropdownMenu = (props) => {
    const [selectedName, setSelectedName] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedPathway, setSelectedPathway] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedMTime, setSelectedMTime] = useState(null);
    const [selectedTTime, setSelectedTTime] = useState(null);
    const [selectedWTime, setSelectedWTime] = useState(null);
    const [selectedRTime, setSelectedRTime] = useState(null);
    const [selectedFTime, setSelectedFTime] = useState(null);   

  useEffect(() => {
    props.form.Name = selectedName;
    props.form.Number = selectedNumber;
    props.form.subject = selectedSubject;
    props.form.pathway = selectedPathway;
    props.form.Term = selectedTerm;
  },[selectedName,selectedNumber,selectedSubject,selectedPathway,selectedTerm]);
  // What does this useEffect do? It updates the form object in the FindClasses component

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };
  
  const handleSubjectSelection = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handlePathwayChange = (event) => {
    setSelectedPathway(event.target.value);
  };

  const handleMTimeChange = (event) => {
    setSelectedMTime(event.target.value);
  };

  const handleTTimeChange = (event) => {
    setSelectedTTime(event.target.value);
  };

  const handleWTimeChange = (event) => {
    setSelectedWTime(event.target.value);
  };

  const handleRTimeChange = (event) => {
    setSelectedRTime(event.target.value);
  };

  const handleFTimeChange = (event) => {
    setSelectedFTime(event.target.value);
  };

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
        <div className='dropdown-container'>
            <h1>Create Class</h1>
        </div>
        <div className='dropdown-container'>
        <table className='dropdown-table'>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Subject</th>
            <th>Pathway</th>
            <th>Term</th>
            </tr>
            <tr>
            <td>
            <div className="containter">
                    <input 
                        placeholder="Course Name"
                    />
            </div>
            </td>
            <td>
            <div className="containter">
                    <input 
                        placeholder="Course Number"
                    />
            </div>
            </td>
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
            <td>
            <div className="containter">
                    <input 
                        placeholder="Term"
                    />
            </div>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
        <div className='dropdown-container'>
        <table className='dropdown-table'>
        <tbody>
          <tr>
            <th>Description</th>
          </tr>
          <tr>
            <td>
            <div className="containter2">
                    <input 
                        placeholder="Course Description"
                    />
            </div>
            </td>
          </tr>
          <tr>
            <th>Meeting Times</th>
          </tr>
          <tr>
            <td>
            <div className="containter">
            <select
                className='dropdown-select'
                value={selectedMTime || ''}
                onChange={handleMTimeChange}
                >
                <option key='' value=''>
                    Select Monday Time
                </option>
                {ctimes.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            <div className="containter">
            <select
                className='dropdown-select'
                value={selectedTTime || ''}
                onChange={handleTTimeChange}
                >
                <option key='' value=''>
                    Select Tuesday Time
                </option>
                {ctimes.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            <div className="containter">
            <select
                className='dropdown-select'
                value={selectedWTime || ''}
                onChange={handleWTimeChange}
                >
                <option key='' value=''>
                    Select Wednesday Time
                </option>
                {ctimes.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            <div className="containter">
            <select
                className='dropdown-select'
                value={selectedRTime || ''}
                onChange={handleRTimeChange}
                >
                <option key='' value=''>
                    Select Thursday Time
                </option>
                {ctimes.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            <div className="containter">
            <select
                className='dropdown-select'
                value={selectedFTime || ''}
                onChange={handleFTimeChange}
                >
                <option key='' value=''>
                    Select Friday Time
                </option>
                {ctimes.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            </td>
          </tr>
        </tbody>
        </table>
        </div>
    </div>

  );
};


export default DropdownMenu;

