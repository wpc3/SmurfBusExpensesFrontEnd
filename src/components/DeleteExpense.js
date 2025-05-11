import React, { useState } from 'react';
import axios from 'axios';

const DeleteExpense = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`https://smurfbusexpensessitebackend.onrender.com/expense/${id}`);
      setMessage(`Expense ${id} deleted.`);
    } catch (err) {
      setMessage('Error deleting expense.');
    }
  };

  return (
    <div>
      <h2>Delete Expense</h2>
      <input
        type="number"
        placeholder="Expense ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteExpense;
