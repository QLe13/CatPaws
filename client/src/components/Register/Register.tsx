import { useEffect, useState } from "react";
import FindTable from "../FindClasses/FindTable";
import { db } from "../../firebase";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore/lite";
import { getNextSemester } from "../../utils";
//<Row Selection />

type RegisterProps = {
  user: User;
};

const Register = ({ user }: RegisterProps) => {
  const [nextSemester, setNextSemester] = useState<string>("");

  useEffect(() => {
    const fetchNextSemester = async () => {
      const nextSemesterValue = await getNextSemester();
      setNextSemester(nextSemesterValue);
    };

    fetchNextSemester();
  }, []);

  const [savedclasses, setSavedClasses] = useState<Class[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<Class[]>([]);

  const [form] = useState({
    semester: "spring",
  });

  useEffect(() => {
    const fetchSavedClasses = async () => {
      const savedClasses = (
        await Promise.all(user.saved.map((s) => getDoc(doc(db, s))))
      ).map((d) => d.data()) as Class[];
      setSavedClasses(savedClasses);
    };
    fetchSavedClasses();
  }, [form]);

  // useEffect(() => {
  //   console.log(selectedClasses);
  // }, [selectedClasses]); this one is for testing purposes

  const handleRemoveClasses = async () => {
    // create a new array of classes with the class_id not in the selectedClasses array
    const stringifySelectedClasses = selectedClasses.map((c) =>
      JSON.stringify(c)
    );
    const selectedClassesSet: Set<string> = new Set(stringifySelectedClasses);
    console.log(selectedClassesSet);
    const newSavedClasses = savedclasses
      .filter((c) => !selectedClassesSet.has(`"${c.class_id}"`))
      .map((c) => `${nextSemester}/${c.class_id}`);
    try {
      if (selectedClasses.length > 0) {
        const curUser = user;
        const userRef = doc(getFirestore(), "users", curUser.uid);
        await updateDoc(userRef, {
          saved: newSavedClasses,
        }).then(() => {
          window.alert("Classes removed!");
        });
      } else {
        console.log("No classes selected");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterClasses = async () => {
    // create a new array of classes with the class_id not in the selectedClasses array
    const reFormatSelectedClasses = selectedClasses.map(
      (c) => `${nextSemester}/${JSON.stringify(c).slice(1, -1)}`
    );
    try {
      if (selectedClasses.length > 0) {
        const curUser = user;
        const userRef = doc(getFirestore(), "users", curUser.uid);
        await updateDoc(userRef, {
          classes: [...curUser.classes, ...reFormatSelectedClasses],
        }).then(() => {
          handleRemoveClasses().then(() => {
            window.alert("Classes registered!");
          });
        });
      } else {
        console.log("No classes selected");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // example data needs to be replaced with data from the database

  return (
    <div>
      <div className="register_container">
        <h1>Register for Classes</h1>
      </div>
      <FindTable
        fetchedClasses={savedclasses}
        onSelectClass={(classId, isSelected) => {
          if (isSelected) {
            setSelectedClasses([...selectedClasses, classId]);
          } else {
            setSelectedClasses(selectedClasses.filter((id) => id !== classId));
          }
        }}
      />
      <div className="register_container">
        <div className="register-container-button">
          <button onClick={handleRegisterClasses}>Register</button>
        </div>
        <div className="register-container-button">
          <button onClick={handleRemoveClasses}>Remove</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
