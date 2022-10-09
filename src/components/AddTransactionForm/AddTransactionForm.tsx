import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TransactionUpdateInput } from "../../interfaces/Transaction";
import { expenseActions } from "../../redux/slices/expenseSlice";
import { incomeActions } from "../../redux/slices/incomeSlice";
import TransactionAmount from "./TransactionAmount";
import TransactionCategory from "./TransactionCategory";
import TransactionDesctiption from "./TransactionDescription";
import TransactionType from "./TransactionType";
import { Store } from "react-notifications-component";
import axios from "axios";

const AddTransactionForm: React.FC<{ closePortal: () => void }> = (props) => {
  const dispatch = useDispatch();

  /** State to control which categories avalable to choose from & decide the dispacth action behaviour & and styling classes */
  const [transactionType, setTransactionType] = useState("Expense");
  const changeTypeHandler = (input: string) => {
    setTransactionType(input);
  };

  /** Holding the new transaction object to be dispatched to the store on form submission */
  const [newTransaction, setNewTransaction] = useState({
    id: Math.random(),
    amount: 0,
    category: "",
    date: new Date().toLocaleDateString(),
    description: "",
  });

  /** Update function to be passed to child components for updating the new transaction object that stored in the state */
  const updateNewTransactionState = (input: TransactionUpdateInput) => {
    setNewTransaction((prev) => ({ ...prev, ...input }));
  };

  /** Form Submission */
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (transactionType === "Expense") {
      dispatch(expenseActions.addExpense(newTransaction));

      axios.post(
        "https://expense-tracker-3996f-default-rtdb.firebaseio.com/expenses.json",
        newTransaction
      );

      Store.addNotification({
        title: "Expense added successfully !",
        message: "Thank you",
        type: "warning",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          pauseOnHover: true,
        },
      });
    } else if (transactionType === "Income") {
      /** Dispatch the update to redux */
      dispatch(incomeActions.addIncome(newTransaction));

      /** Posting the update to firebase database */
      // axios.post(
      //   "https://expense-tracker-3996f-default-rtdb.firebaseio.com/incomes.json",
      //   newTransaction
      // );

      Store.addNotification({
        title: "Income added successfully !",
        message: "Thank you",
        type: "success",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          pauseOnHover: true,
        },
      });
    }
    props.closePortal();
  };

  return (
    <div className="modal-overlay w-25 bg-white p-2 rounded">
      <form action="" className=" g-2" onSubmit={submitHandler}>
        <h4 className="text-secondary text-center my-3">
          Adding New Transaction
        </h4>

        <TransactionType changeType={changeTypeHandler} />

        <TransactionCategory
          updateNewTransactionState={updateNewTransactionState}
          transactionType={transactionType}
        />
        <TransactionAmount
          updateNewTransactionState={updateNewTransactionState}
        />
        <TransactionDesctiption
          updateNewTransactionState={updateNewTransactionState}
        />
        <button
          className={`btn d-block m-auto w-25 btn-${
            transactionType === "Expense" ? "danger" : "success"
          }`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
