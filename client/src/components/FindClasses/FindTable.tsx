import "./Findclasses.css";

const BasicRTable = ({ fetchedClasses, onSelectClass }) => {
  //const { classes } = props;
  return (
    <div className="fclass__container">
      <table className="fclass__table">
        <thead>
          <tr>
            <th>Register</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Meeting Time</th>
            <th>Location</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {fetchedClasses && fetchedClasses.length > 0 ? (
            fetchedClasses.map(
              ({ class_id, name, time, location, credits }, index) => (
                <tr key={index}>
                  <td>
                    <input
                      aria-label="select course"
                      type="checkbox"
                      id={class_id}
                      name={name}
                      value={class_id}
                      style={{ display: "inline-block" }}
                      onChange={(e) => {
                        const classId = e.target.value;
                        if (e.target.checked) {
                          onSelectClass(classId, true);
                        } else {
                          onSelectClass(classId, false);
                        }
                      }}
                    />
                  </td>
                  <td>{class_id}</td>
                  <td>{name}</td>
                  <td>{time}</td>
                  <td>{location}</td>
                  <td>{credits}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={6}>No classes found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const FindTable = ({ fetchedClasses, onSelectClass }) => {
  return (
    <div>
      <BasicRTable
        fetchedClasses={fetchedClasses}
        onSelectClass={onSelectClass}
      />
    </div>
  );
};

export default FindTable;
