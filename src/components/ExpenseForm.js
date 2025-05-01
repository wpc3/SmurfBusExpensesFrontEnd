import React, { useState } from 'react';

/**
 * A reusable form component to add a new expense.
 * It accepts an `onSubmit` function as a prop.
 */
export default function ExpenseForm({ onSubmit }) {
  // State for form fields
  const [formData, setFormData] = useState({
    category: '',
    cost: '',
    description: '',
    month: '',
    year: ''
  });

  // Update state when form input changes
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert data to appropriate types
    const expense = {
      ...formData,
      cost: parseFloat(formData.cost),
      month: parseInt(formData.month),
      year: parseInt(formData.year)
    };

    // Call the parent component’s submit handler
    onSubmit(expense);

    // Clear the form after submission
    setFormData({
      category: '',
      cost: '',
      description: '',
      month: '',
      year: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
        type="number"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="month"
        value={formData.month}
        onChange={handleChange}
        placeholder="Month"
        type="number"
        required
      />
      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        type="number"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
