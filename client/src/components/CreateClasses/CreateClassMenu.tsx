import React, { useState, useEffect } from "react";
import { subjects, levels, days, pathways, ctimes } from "./CoursesData2";
import "./CreateClassMenu.css";

const DropdownMenu = (props) => {
  const [selections, setSelections] = useState<{
    Name: string | null;
    Number: string | null;
    subject: string | null;
    pathway: string | null;
    Term: string | null;
  }>({
    Name: null,
    Number: null,
    subject: null,
    pathway: null,
    Term: null,
  });

  const [times, setTimes] = useState<{
    Monday: string | null;
    Tuesday: string | null;
    Wednsday: string | null;
    Thursday: string | null;
    Friday: string | null;
  }>({
    Monday: null,
    Tuesday: null,
    Wednsday: null,
    Thursday: null,
    Friday: null,
  });

  useEffect(() => {
    props.form = selections;
  }, [selections]);
  // What does this useEffect do? It updates the form object in the FindClasses component

  return (
    <div>
      <div className="dropdown-container">
        <h1>Create Class</h1>
      </div>
      <div className="dropdown-container">
        <table className="dropdown-table">
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
                  <input placeholder="Course Name" />
                </div>
              </td>
              <td>
                <div className="containter">
                  <input placeholder="Course Number" />
                </div>
              </td>
              <td>
                <select
                  aria-label="Select a subject"
                  className="dropdown-select"
                  value={selections.subject || ""}
                  onChange={(e) => {
                    selections.subject = e.target.value;
                    setSelections(selections);
                  }}
                >
                  <option value="" disabled>
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
                  aria-label="Select a pathway"
                  className="dropdown-select"
                  value={selections.pathway || ""}
                  onChange={(e) => {
                    selections.pathway = e.target.value;
                    setSelections(selections);
                  }}
                >
                  <option key="" value="">
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
                  <input placeholder="Term" />
                </div>
              </td>
            </tr>
          </tbody>
          <br></br>
        </table>
      </div>
      <div className="dropdown-container">
        <table className="dropdown-table">
          <tbody>
            <tr>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <div className="containter2">
                  <input placeholder="Course Description" />
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
                    aria-label="Select a Monday Time"
                    className="dropdown-select"
                    value={times.Monday ?? ""}
                    onChange={(e) => {
                      times.Monday = e.target.value;
                      setTimes(times);
                    }}
                  >
                    <option key="" value="">
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
                    aria-label="Select a Tuesday Time"
                    className="dropdown-select"
                    value={times.Tuesday ?? ""}
                    onChange={(e) => {
                      times.Tuesday = e.target.value;
                      setTimes(times);
                    }}
                  >
                    <option key="" value="">
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
                    aria-label="Select a Wednesday Time"
                    className="dropdown-select"
                    value={times.Wednsday ?? ""}
                    onChange={(e) => {
                      times.Wednsday = e.target.value;
                      setTimes(times);
                    }}
                  >
                    <option key="" value="">
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
                    aria-label="Select a Thursday Time"
                    className="dropdown-select"
                    value={times.Thursday ?? ""}
                    onChange={(e) => {
                      times.Thursday = e.target.value;
                      setTimes(times);
                    }}
                  >
                    <option key="" value="">
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
                    aria-label="Select a Friday Time"
                    className="dropdown-select"
                    value={times.Friday ?? ""}
                    onChange={(e) => {
                      times.Friday = e.target.value;
                      setTimes(times);
                    }}
                  >
                    <option key="" value="">
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
