import React from 'react';
import ExpenseList from './components/ExpenseList';

/**
 * Root component of the app. Displays the heading and includes the ExpenseList.
 */
function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseList />
    </div>
  );
}

export default App;
