import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import "./DropdownMenu.css";
import FindTable from "./FindTable";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  QueryFieldFilterConstraint,
} from "firebase/firestore/lite";
import { getCurSemester, getNextSemester, useFormState } from "../../utils";
import { db } from "../../firebase";

const FindClasses = (props) => {
  const curUser = props.user;
  const [form, setForm, formOnChange] = useFormState({
    subject: "",
    pathway: "",
    level: "",
    time: [],
  });
  const [loading, setLoading] = useState(false);
  const [findingClasses, setFindingClasses] = useState(false);
  const [nextSemester, setNextSemester] = useState<string | null>(null); // add this line

  useEffect(() => {
    const getNextSemesterAsync = async () => {
      const result = await getNextSemester();
      setNextSemester(result);
    };
    getNextSemesterAsync();
  }, []); // add this useEffect block

  const handleSubmitForm = async (form) => {
    setFindingClasses(true);
    try {
      const filteredForm = Object.fromEntries(
        Object.entries(form).filter(
          ([_, value]) =>
            value !== "" && !(Array.isArray(value) && value.length === 0)
        )
      );
      console.log(filteredForm);
      const curSemester = await getCurSemester();
      const curClasses = collection(db, curSemester);
      const qualifiers: QueryFieldFilterConstraint[] = [];

      // Add filters to the query based on the filteredForm
      Object.entries(filteredForm).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            qualifiers.push(where(key, "array-contains", item));
          });
        } else {
          qualifiers.push(where(key, "==", value));
        }
      });

      const querySnapshot = await getDocs(query(curClasses, ...qualifiers));
      const fetchedClassesData: Class[] = [];

      querySnapshot.forEach((doc) => {
        fetchedClassesData.push(doc.data() as Class);
      });
      setFetchedClasses(fetchedClassesData);
    } catch (error) {
      console.log(error);
    }
    setFindingClasses(false);
  };
  const [fetchedClasses, setFetchedClasses] = useState<Class[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<Class[]>([]);
  const handleAddToRegistrationList = async () => {
    setLoading(true);
    try {
      if (selectedClasses.length > 0) {
        const userRef = doc(db, "users", curUser.uid);
        const reFormatedSelectedClasses = selectedClasses.map((classId) => {
          return `${nextSemester}/${classId}`;
        });
        await updateDoc(userRef, {
          saved: [...curUser.saved, ...reFormatedSelectedClasses],
        }).then(() => {
          window.alert("Classes added to pre-registration list!");
        });
      } else {
        console.log("No classes selected");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <DropdownMenu form={form} setForm={setForm} formOnChange={formOnChange} />
      <div className="dropdown-container">
        {!findingClasses ? (
          <div
            className="fclass-container-button"
            onClick={() => handleSubmitForm(form)}
          >
            <button>Search</button>
          </div>
        ) : (
          <div className="fclass-container-button">
            <button disabled>Finding...</button>
          </div>
        )}
      </div>
      <div className="fclass_container">
        <h1>Available Classes</h1>
      </div>
      <div>
        <FindTable
          fetchedClasses={fetchedClasses}
          onSelectClass={(classId, isSelected) => {
            if (isSelected) {
              setSelectedClasses([...selectedClasses, classId]);
            } else {
              setSelectedClasses(
                selectedClasses.filter((id) => id !== classId)
              );
            }
          }}
        />
      </div>
      <div className="fclass_container">
        <div className="fclass-container-button">
          {!loading ? (
            <button onClick={handleAddToRegistrationList}>
              Add to Registration List
            </button>
          ) : (
            <button disabled>Adding...</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindClasses;
