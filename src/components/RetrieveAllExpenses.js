import React, { useState } from 'react';
import axios from 'axios';
import './RetrieveAllExpenses.css';

const RetrieveAllExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  const fetchUserExpenses = async () => {
    const accountId = localStorage.getItem("accountId");
    

    if (!accountId) {
      setError("You must be logged in to view expenses.");
      return;
    }

    try {
      const res = await axios.get(`https://smurfbusexpensessitebackend.onrender.com/expenses/account/${accountId}`);
      console.log("Fetched expenses:", res.data);
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch expenses.");
    }
  };

  return (
    <div>
      <h2>Your Expenses</h2>
      <button onClick={fetchUserExpenses}>Load My Expenses</button>
      {error && <p className="error">{error}</p>}
      <table className="expenses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr
              key={e.expenseId}
              className={`expense-row ${selectedId === e.expenseId ? 'selected' : ''}`}
              onClick={() => setSelectedId(e.expenseId)}
            >
              <td>{e.expenseId}</td>
              <td>{e.category}</td>
              <td>${e.cost.toFixed(2)}</td>
              <td>{e.month}/{e.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
  );

  
};

// const RetrieveAllExpenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);

//   const fetchAll = async () => {
//     const res = await axios.get('https://smurfbusexpensessitebackend.onrender.com/expenses');
//     setExpenses(res.data);
//   };

//   return (
//     <div>
//     <h2>All Expenses</h2>
//     <button onClick={fetchAll}>Load Expenses</button>
//     <table className="expenses-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Category</th>
//           <th>Cost</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {expenses.map((e) => (
//           <tr
//             key={e.expenseId}
//             className={`expense-row ${selectedId === e.expenseId ? 'selected' : ''}`}
//             onClick={() => setSelectedId(e.expenseId)}
//           >
//             <td>{e.expenseId}</td>
//             <td>{e.category}</td>
//             <td>${e.cost.toFixed(2)}</td>
//             <td>{e.month}/{e.year}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
    // <div>
    //   <h2>All Expenses</h2>
    //   <button onClick={fetchAll}>Load Expenses</button>
    //   <ul>
    //     {expenses.map((e) => (
    //       <li key={e.expenseId}>
    //         id {e.expenseId}:  {e.category} - ${e.cost} on {e.month}/{e.year}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  // );
// };

export default RetrieveAllExpenses;
