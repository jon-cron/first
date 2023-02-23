// NOTE it is standard to save the css file name next to the comp and import the entire file as seen below
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
