import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExpenseByCategory.css'

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const ExpenseByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const accountId = localStorage.getItem("accountId")
  // if (!accountId ) {
  //   setMessage('User not logged in. Please log in first.');
  //   return;
  // }

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {

      // const accountId = localStorage.setItem("accountId")
      // if (!accountId ) {
      //   setMessage('User not logged in. Please log in first.');
      //   return;
      // }
      try {
        const response = await axios.get(`https://smurfbusexpensessitebackend.onrender.com/expenses/account/categories/${accountId}`);
        // const response = await axios.get('http://localhost:8080/expenses/categories');
        const data = Array.isArray(response.data) ? response.data : [];
        // setCategories(response.data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, [accountId]);

  // Fetch expenses based on the selected category
  const fetchExpensesByCategory = async () => {
    if (!selectedCategory || !accountId) return;
    try {
      const response = await axios.get(`https://smurfbusexpensessitebackend.onrender.com/expenses/category/account/${selectedCategory}/${accountId}`);
      const data = Array.isArray(response.data) ? response.data : [];
      setExpenses(data)
      // const response = await axios.get(`http://localhost:8080/expenses/category/${selectedCategory}`);
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses by category:', error);
      setExpenses([]);
    }
  };

  // useEffect(() => {
  //   if (selectedCategory) {
  //     const fetchExpensesByCategory = async () => {
  //       try {
  //         // const response = await axios.get(`https://smurfbusexpensessitebackend.onrender.com/expenses/category/${selectedCategory}`);
  //         const response = await axios.get(`http://localhost:8080/expenses/category/${selectedCategory}`);
  //         setExpenses(response.data);
  //       } catch (error) {
  //         console.error('Error fetching expenses by category:', error);
  //       }
  //     };
  //     fetchExpensesByCategory();
  //   }
  // }, [selectedCategory]);

  return (
    <div>
      <h2>Expenses by Category</h2>
      <div style={{ marginBottom: '1rem' }}>
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
        <button onClick={fetchExpensesByCategory} style={{ marginLeft: '0.5rem' }}>Fetch</button>
      </div>

      {expenses.length > 0 ? (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Cost</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.expenseId}>
                <td>{expense.description}</td>
                <td>${expense.cost.toFixed(2)}</td>
                <td>{monthNames[expense.month -1]}</td>
                <td>{expense.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        selectedCategory && <p>No expenses found for this category.</p>
      )}
    </div>
    // <div>
    //   <h2>Expenses by Category</h2>

    //   {/* Dropdown for selecting category */}
    //   <select
    //     onChange={(e) => setSelectedCategory(e.target.value)}
    //     value={selectedCategory}
    //   >
    //     <option value="">Select a Category</option>
    //     {categories.map((category, index) => (
    //       <option key={index} value={category}>
    //         {category}
    //       </option>
    //     ))}
    //   </select>

    //   {/* Display expenses based on selected category */}
    //   <div>
    //     <ul>
    //       {expenses.length > 0 ? (
    //         expenses.map((expense) => (
    //           <li key={expense.expenseId}>
    //             {expense.description} - ${expense.cost} (Month: {expense.month}, Year: {expense.year})
    //           </li>
    //         ))
    //       ) : (
    //         <p>No expenses found for this category.</p>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default ExpenseByCategory;
