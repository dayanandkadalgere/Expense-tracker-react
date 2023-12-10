import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };
  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id=""
            value={formData.title}
            onChange={handleFormData}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id=""
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={handleFormData}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            id=""
            min="2020-01-01"
            max="2023-12-31"
            value={formData.date}
            onChange={handleFormData}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
