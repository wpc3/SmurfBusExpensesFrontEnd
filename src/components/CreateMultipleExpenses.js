import React, { useState } from 'react';
import axios from 'axios';

const CreateMultipleExpenses = () => {
  const [expenses, setExpenses] = useState([
    { category: '', cost: '', description: '', month: '', year: '' }
  ]);

  const [message, setMessage] = useState('');

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExpenses = [...expenses];
    updatedExpenses[index][name] = value;
    setExpenses(updatedExpenses);
  };

  const addExpenseRow = () => {
    setExpenses([
      ...expenses,
      { category: '', cost: '', description: '', month: '', year: '' }
    ]);
  };

  const removeExpenseRow = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedExpenses = expenses.map(exp => ({
        category: exp.category,
        cost: parseFloat(exp.cost),
        description: exp.description,
        month: parseInt(exp.month),
        year: parseInt(exp.year)
      }));

      await axios.post('http://localhost:8080/expenses', formattedExpenses);
      setMessage('Expenses created successfully!');
      setExpenses([{ category: '', cost: '', description: '', month: '', year: '' }]);
    } catch (error) {
      setMessage('Error creating expenses: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Create Multiple Expenses</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {expenses.map((expense, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            <label>Category:</label>
            <input name="category" value={expense.category} onChange={(e) => handleChange(index, e)} required />
            <label>Cost:</label>
            <input type="number" step="0.01" name="cost" value={expense.cost} onChange={(e) => handleChange(index, e)} required />
            <label>Description:</label>
            <input name="description" value={expense.description} onChange={(e) => handleChange(index, e)} />
            <label>Month:</label>
            <input type="number" name="month" value={expense.month} onChange={(e) => handleChange(index, e)} required />
            <label>Year:</label>
            <input type="number" name="year" value={expense.year} onChange={(e) => handleChange(index, e)} required />
            {expenses.length > 1 && (
              <button type="button" onClick={() => removeExpenseRow(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addExpenseRow}>Add Another Expense</button><br /><br />
        <button type="submit">Submit All</button>
      </form>
    </div>
  );
};

export default CreateMultipleExpenses;
