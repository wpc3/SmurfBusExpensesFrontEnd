import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateExpense from './components/CreateExpense';
import CreateMultipleExpenses from './components/CreateMultipleExpenses.js';
import RetrieveExpenseById from './components/RetrieveExpenseById';
import RetrieveAllExpenses from './components/RetrieveAllExpenses';
import UpdateExpense from './components/UpdateExpense';
import DeleteExpense from './components/DeleteExpense';
import ExpensesByMonthYear from './components/ExpensesByMonthYear';
import ExpensesByYear from './components/ExpensesByYear';
import ExpensesByCategory from './components/ExpensesByCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateExpense />} />
        <Route path="/create-multiple" element={<CreateMultipleExpenses />} />
        <Route path="/get" element={<RetrieveExpenseById />} />
        <Route path="/get-all" element={<RetrieveAllExpenses />} />
        <Route path="/update" element={<UpdateExpense />} />
        <Route path="/delete" element={<DeleteExpense />} />
        <Route path="/month-year" element={<ExpensesByMonthYear />} />
        <Route path="/year" element={<ExpensesByYear />} />
        <Route path="/category" element={<ExpensesByCategory />} />
      </Routes>
    </Router>
  );
}

export default App; 
