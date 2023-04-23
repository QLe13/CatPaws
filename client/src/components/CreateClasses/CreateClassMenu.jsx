import React, { useState, useEffect} from 'react';
import { subjects, levels, days, pathways } from './CoursesData2';
import './CreateClassMenu.css';

const DropdownMenu = (props) => {
    const [selectedName, setSelectedName] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedPathway, setSelectedPathway] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);

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
                    <input 
                        placeholder="Monday Time"
                    />
            </div>
            <div className="containter">
                    <input 
                        placeholder="Tuesday Time"
                    />
            </div>
            <div className="containter">
                    <input 
                        placeholder="Wednesday Time"
                    />
            </div>
            <div className="containter">
                    <input 
                        placeholder="Thursday Time"
                    />
            </div>
            <div className="containter">
                    <input 
                        placeholder="Friday Time"
                    />
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

