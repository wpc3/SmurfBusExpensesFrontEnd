import React, { useState } from 'react';
import axios from 'axios';

const RetrieveExpenseById = () => {
  const [id, setId] = useState('');
  const [expense, setExpense] = useState(null);
  const [message, setMessage] = useState('');

  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/expense/${id}`);
      setExpense(res.data);
      setMessage('');
    } catch (err) {
      setExpense(null);
      setMessage('Expense not found.');
    }
  };

  return (
    <div>
      <h2>Retrieve Expense by ID</h2>
      <input
        type="number"
        placeholder="Enter Expense ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch Expense</button>
      {message && <p>{message}</p>}
      {expense && (
        <pre>{JSON.stringify(expense, null, 2)}</pre>
      )}
    </div>
  );
};

export default RetrieveExpenseById;
