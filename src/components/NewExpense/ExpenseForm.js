import React, { useState } from "react";

import "./ExpenseForm.css";

//시나리오에 따른 입력값 처리
//1. 개별로 처리
//2-1. 카운터와 같이 입력과 동시에 나머지값 새로 갱신
//2-2. 이전상태를 중요시 할 경우 익명함수 사용함
const ExpenseFrom = (props) => {
  //1. 개별로 처리
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //
  //2. 묶어서 처리
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    //1. 개별로 처리
    setEnteredTitle(event.target.value);
    //
    //2-1. 스프레드 연산자를 사용
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //
    //2-2. 익명함수를 사용해 항상 최신의 값이라고 보증할 수있음.
    // setUserInput((preState) => {
    //   return {...preState, enteredTitle: event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    //props을 통해 부모의 함수 포인터를 전달받음
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>A</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
