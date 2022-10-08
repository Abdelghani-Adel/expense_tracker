export interface DataObject {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
}

export interface DetailsInputProps {
  updateObject: (input: any) => void;
  readonly: boolean;
}

export interface DetailsFormProps {
  dataObject: DataObject;
  categories: string[];
  dispatchFun: (input: DataObject) => any;
  deleteFun: () => any;
}

export interface FormAmountProps extends DetailsInputProps {
  amount: number;
}

export interface FormCategoryProps extends DetailsInputProps {
  category: string;
  categories: string[];
}

export interface FormDescriptionProps extends DetailsInputProps {
  description: string;
}
