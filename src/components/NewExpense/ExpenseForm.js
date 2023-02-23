import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // NOTE this works but you could manage the state with a single useState object
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // NOTE there is a time and place to use a single object state.
  // const [userInput, setUserInput] = useState({
  //   newTitle: "",
  //   newAmount: "",
  //   newDate: "",
  // });

  const changeTitle = (event) => {
    setTitle(event.target.value);
    // NOTE this would work but...
    // setUserInput({
    //   ...userInput,
    //   newTitle: event.target.value,
    // });
    // NOTE this is better practice
    // setUserInput((prevState) => {
    //   return { ...prevState, newTitle: event.target.value };
    // });
  };
  const changeAmount = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, newAmount: event.target.value };
    // });
  };
  const changeDate = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, newDate: event.target.value };
    // });
  };
  const submitNewExpense = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form className="new-expense__controls" onSubmit={submitNewExpense}>
      <div className="new-expense__control">
        <label>Title</label>
        <input required type="text" value={title} onChange={changeTitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          required
          type="number"
          value={amount}
          min="0.01"
          step="0.01"
          onChange={changeAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          required
          value={date}
          type="date"
          min="2023-01-01"
          max="2024-12-31"
          onChange={changeDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
