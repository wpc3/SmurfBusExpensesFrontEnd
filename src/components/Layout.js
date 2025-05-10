// components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Expense Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Expense</Link></li>
            <li><Link to="/create-multiple">Create Multiple</Link></li>
            <li><Link to="/get-all">All Expenses</Link></li>
            <li><Link to="/month-year">By Month & Year</Link></li>
            <li><Link to="/year">By Year</Link></li>
            <li><Link to="/category">By Category</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
