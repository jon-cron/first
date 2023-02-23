import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};
export default NewExpense;
