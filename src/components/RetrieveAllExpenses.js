import React, { useState } from 'react';
import axios from 'axios';

const RetrieveAllExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchAll = async () => {
    const res = await axios.get('https://smurfbusexpensessitebackend.onrender.com/expenses');
    setExpenses(res.data);
  };

  return (
    <div>
      <h2>All Expenses</h2>
      <button onClick={fetchAll}>Load Expenses</button>
      <ul>
        {expenses.map((e) => (
          <li key={e.expenseId}>
            id {e.expenseId}:  {e.category} - ${e.cost} on {e.month}/{e.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveAllExpenses;
