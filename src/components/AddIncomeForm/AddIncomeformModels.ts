interface UpdateInput {
  amount?: number;
  category?: string;
  description?: string;
}

export interface InputProps {
  updateNewIncomeState: (input: UpdateInput) => any;
}

export {};
