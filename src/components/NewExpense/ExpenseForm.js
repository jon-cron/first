import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
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
  const submitNewExpense = () => {
    console.log(title, amount, date);
  };
  return (
    <form className="new-expense__controls" onSubmit={submitNewExpense}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={changeTitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" onChange={changeAmount} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
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
