export interface UpdateInput {
  amount?: number;
  category?: string;
  description?: string;
}

export default interface AddExpenseInputProps {
  updateNewExpenseState: (input: UpdateInput) => any;
}
