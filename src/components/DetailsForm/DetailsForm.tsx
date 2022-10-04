import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormActions from "./FormActions";
import FormAmount from "./FormAmount";
import FormCategory from "./FormCategory";
import FormDate from "./FormDate";
import FormDescription from "./FormDescription";

interface DataObject {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
}

interface Props {
  dataObject: DataObject;
  dispatchFun: (input: DataObject) => any;
}

const DetailsForm: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [canEdit, setCanEdit] = useState<boolean>(false);

  const [newDataObject, setNewDataObject] = useState<DataObject>({
    ...props.dataObject,
  });

  const activateEdit = () => setCanEdit(true);

  const onBlurHandler = (input: DataObject) => {
    setNewDataObject((prev) => ({ ...prev, ...input }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    props.dispatchFun(newDataObject);

    navigate(-1);
  };

  return (
    <form className="d-flex align-items-end" onSubmit={submitHandler}>
      <FormAmount
        amount={props.dataObject.amount}
        onBlur={onBlurHandler}
        readonly={!canEdit}
      />
      <FormCategory
        category={props.dataObject.category}
        onBlur={onBlurHandler}
        readonly={!canEdit}
      />
      <FormDescription
        description={props.dataObject.description}
        onBlur={onBlurHandler}
        readonly={!canEdit}
      />
      <FormDate
        date={props.dataObject.date}
        onBlur={onBlurHandler}
        readonly={!canEdit}
      />
      <FormActions editable={canEdit} edithandler={activateEdit} />
    </form>
  );
};

export default DetailsForm;
