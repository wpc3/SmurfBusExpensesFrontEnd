import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Expenses Tracker</h1>
      <ul>
        <li><Link to="/create">Create Expense</Link></li>
        <li><Link to="/create-multiple">Create Multiple Expenses</Link></li>
        <li><Link to="/get">Retrieve Expense By ID</Link></li>
        <li><Link to="/get-all">Retrieve All Expenses</Link></li>
        <li><Link to="/update">Update Expense</Link></li>
        <li><Link to="/delete">Delete Expense</Link></li>
        <li><Link to="/month-year">Expenses by Month & Year</Link></li>
        <li><Link to="/year">Expenses by Year</Link></li>
        <li><Link to="/category">Expenses by Category</Link></li>
        <li><Link to="/delete">Delete Expenses</Link></li>
        <li><Link to="/update">Edit expense</Link></li>
      </ul>
    </div>
  );
};

export default Home;
