export interface TransactionUpdateInput {
  amount?: number;
  category?: string;
  description?: string;
}

export interface TransactionInputProps {
  updateNewTransactionState: (input: TransactionUpdateInput) => any;
}

export interface TransactionObject {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export default interface Transaction {
  [key: string]: {
    id: number;
    amount: number;
    category: string;
    description: string;
    date: string;
  };
}
