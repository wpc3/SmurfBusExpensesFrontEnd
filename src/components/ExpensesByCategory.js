import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/expenses/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch expenses based on the selected category
  useEffect(() => {
    if (selectedCategory) {
      const fetchExpensesByCategory = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/expenses/category/${selectedCategory}`);
          setExpenses(response.data);
        } catch (error) {
          console.error('Error fetching expenses by category:', error);
        }
      };
      fetchExpensesByCategory();
    }
  }, [selectedCategory]);

  return (
    <div>
      <h2>Expenses by Category</h2>

      {/* Dropdown for selecting category */}
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="">Select a Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Display expenses based on selected category */}
      <div>
        <ul>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <li key={expense.expenseId}>
                {expense.description} - ${expense.cost} (Month: {expense.month}, Year: {expense.year})
              </li>
            ))
          ) : (
            <p>No expenses found for this category.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseByCategory;
