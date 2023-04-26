import { subjects, levels, days, pathways } from "./CoursesData";
import "./DropdownMenu.css";

type DropdownMenuProps<
  T extends {
    subject: string;
    level: string;
    time: string[];
    pathway: string;
  }
> = {
  form: T;
  setForm: React.Dispatch<React.SetStateAction<T>>;
  formOnChange: React.ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
  >;
};

export default function DropdownMenu<
  T extends {
    subject: string;
    level: string;
    time: string[];
    pathway: string;
  }
>({ form, setForm, formOnChange }: DropdownMenuProps<T>): JSX.Element {
  return (
    <div>
      <div className="dropdown-container">
        <h1>Apply Filters</h1>
      </div>
      <div className="dropdown-container">
        <table className="dropdown-table">
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
                  aria-label="select subject"
                  name="subject"
                  className="dropdown-select"
                  value={form.subject ?? ""}
                  onChange={(e) => {
                    console.log(e.target.name, e.target.value);
                    formOnChange(e);
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
                  aria-label="select level"
                  name="level"
                  className="dropdown-select"
                  value={form.level ?? ""}
                  onChange={formOnChange}
                >
                  <option value="" disabled>
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
                <div className="checkbox-container">
                  {days.map((item) => (
                    <label key={item} className="checkbox-label">
                      <input
                        aria-label="select day"
                        name="time"
                        type="checkbox"
                        value={item}
                        checked={form.time.includes(item)}
                        onChange={(e) => {
                          const value = e.target.value;
                          const isChecked = e.target.checked;
                          if (isChecked) {
                            form.time.push(value);
                          } else {
                            form.time = form.time.filter(
                              (day) => day !== value
                            );
                          }
                          setForm({ ...form });
                        }}
                      />
                      <span className="checkbox-custom"></span>
                      {item}
                    </label>
                  ))}
                </div>
              </td>
              <td>
                <select
                  aria-label="select pathway"
                  name="pathway"
                  className="dropdown-select"
                  value={form.pathway ?? ""}
                  onChange={formOnChange}
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
