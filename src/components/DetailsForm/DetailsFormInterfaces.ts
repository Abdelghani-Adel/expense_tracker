interface Category {
  id: number;
  title: string;
  subCategories?: string[];
}

export interface DataObject {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
}

interface InputProps {
  updateObject: (input: any) => void;
  readonly: boolean;
}

export interface DetailsFormProps {
  dataObject: DataObject;
  categories: string[];
  dispatchFun: (input: DataObject) => any;
}

export interface FormAmountProps extends InputProps {
  amount: number;
}

export interface FormCategoryProps extends InputProps {
  category: string;
  categories: string[];
}

export interface FormDescriptionPros extends InputProps {
  description: string;
}

export {};
