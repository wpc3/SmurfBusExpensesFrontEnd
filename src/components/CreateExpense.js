import React, { useState } from 'react';
import axios from 'axios';

const CreateExpense = () => {
  const [formData, setFormData] = useState({
    category: '',
    cost: '',
    description: '',
    month: '',
    year: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expense = {
        category: formData.category,
        cost: parseFloat(formData.cost),
        description: formData.description,
        month: parseInt(formData.month),
        year: parseInt(formData.year)
      };

      await axios.post('http://localhost:8080/api/expense', expense);
      setMessage('Expense created successfully!');
      setFormData({ category: '', cost: '', description: '', month: '', year: '' });
    } catch (error) {
      setMessage('Error creating expense: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Expense</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Cost:</label>
          <input type="number" step="0.01" name="cost" value={formData.cost} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Month (1–12):</label>
          <input type="number" name="month" value={formData.month} onChange={handleChange} required />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <button type="submit">Create Expense</button>
      </form>
    </div>
  );
};

export default CreateExpense;
