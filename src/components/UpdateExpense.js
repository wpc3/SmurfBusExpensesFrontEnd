import React, { useState } from 'react';
import axios from 'axios';

const UpdateExpense = () => {
  const [id, setId] = useState('');
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const payload = {
        ...formData,
        cost: parseFloat(formData.cost),
        month: parseInt(formData.month),
        year: parseInt(formData.year)
      };
      await axios.put(`http://localhost:8080/expense/${id}`, payload);
      setMessage('Expense updated successfully!');
    } catch (err) {
      setMessage('Error updating expense.');
    }
  };

  return (
    <div>
      <h2>Update Expense</h2>
      <input placeholder="Expense ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="cost" type="number" placeholder="Cost" value={formData.cost} onChange={handleChange} />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="month" type="number" placeholder="Month" value={formData.month} onChange={handleChange} />
      <input name="year" type="number" placeholder="Year" value={formData.year} onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateExpense;
