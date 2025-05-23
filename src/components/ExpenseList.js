import React, { useEffect, useState } from 'react';
import api from '../api';
import ExpenseForm from './ExpenseForm';



/**
 * This component fetches and displays a list of expenses from the backend.
 * It also allows the user to add or delete expenses.
 */
export default function ExpenseList() {
  // State to hold all expense records
  const [expenses, setExpenses] = useState([]);

  // Fetch all expenses from the backend
  const fetchExpenses = async () => {
    const res = await api.get('/expenses');
    setExpenses(res.data);
  };

  // Delete an expense by ID
  const handleDelete = async (id) => {
    await api.delete(`/expenses/${id}`);
    fetchExpenses(); // Refresh the list after deletion
  };

  // Add a new expense
  const handleAdd = async (newExpense) => {
    await api.post('/expenses', newExpense);
    fetchExpenses(); // Refresh the list after adding
  };

  // Run once when component mounts
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>All Expenses</h2>
      {/* Form for adding a new expense */}
      <ExpenseForm onSubmit={handleAdd} />

      {/* Display the list of expenses */}
      <ul>
        {expenses.map(exp => (
          <li key={exp.expenseId}>
            <strong>{exp.category}</strong> - ${exp.cost} ({exp.month}/{exp.year})
            <br />
            {exp.description}
            <br />
            <button onClick={() => handleDelete(exp.expenseId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
