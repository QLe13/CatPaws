import DropdownMenu from "./CreateClassMenu";
import "./CreateClassMenu.css";

const form = { subject: "", level: "", time: [], pathway: "" };
const CreateClasses = (_props) => {
  const handleSubmitForm = async (form) => {
    console.log(form);
    //The form object will be sent to the backend, the backend should be able to handle the request and return a list of classes
    //This function will be used to send the post request to the backend to receive a list of classess object that will be passed into the tabular object of classes
  };
  return (
    <div>
      <DropdownMenu form={form} />
      <div className="dropdown-container">
        <div
          className="dropdown-container-button"
          onClick={() => handleSubmitForm(form)}
        >
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};
export default CreateClasses;
