import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataObject, DetailsFormProps } from "./DetailsFormInterfaces";
import FormActions from "./FormActions";
import FormAmount from "./FormAmount";
import FormCategory from "./FormCategory";
import FormDate from "./FormDate";
import FormDescription from "./FormDescription";

const DetailsForm: React.FC<DetailsFormProps> = (props) => {
  const navigate = useNavigate();
  const [formIsEditable, setFormIsEditable] = useState(false);
  const activateFormEditing = () => setFormIsEditable(true);

  /** Holding the new DataObject which will be dispatched on submit */
  /** The initial state of the object is the object it self */
  /** I can use the state update Fun to update data that need to be changed in the current object */
  const [newDataObject, setNewDataObject] = useState({
    ...props.dataObject,
  });

  /** updater function will be passed to child input components */
  /** the child component will use this function onBlur to send the data to the state */
  const updateObject = (input: DataObject) => {
    setNewDataObject((prev) => ({ ...prev, ...input }));
  };

  /** Form Submission Handler */
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // The dispatch function comes from the parent because this is a resuable component
    // and the dispatch function has a specific details for storing the data correctly in the state
    // so I will create the dispatch function as needed in the parent, and just use it here with the data itself
    props.dispatchFun(newDataObject);

    // Navigating back when finish submission
    navigate(-1);
  };

  return (
    <form className="d-flex align-items-end" onSubmit={submitHandler}>
      <FormAmount
        amount={props.dataObject.amount}
        updateObject={updateObject}
        readonly={!formIsEditable}
      />
      <FormCategory
        category={props.dataObject.category}
        categories={props.categories}
        updateObject={updateObject}
        readonly={!formIsEditable}
      />
      <FormDescription
        description={props.dataObject.description}
        updateObject={updateObject}
        readonly={!formIsEditable}
      />
      <FormDate date={props.dataObject.date} readonly={!formIsEditable} />
      <FormActions
        formIsEditable={formIsEditable}
        activateFormEditing={activateFormEditing}
      />
    </form>
  );
};

export default DetailsForm;
