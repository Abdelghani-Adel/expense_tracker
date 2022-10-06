export interface UpdateInput {
  amount?: number;
  category?: string;
  description?: string;
}

export default interface AddIncomeInputProps {
  updateNewIncomeState: (input: UpdateInput) => any;
}
