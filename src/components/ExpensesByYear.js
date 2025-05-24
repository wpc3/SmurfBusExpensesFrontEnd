import React, { useState } from 'react';
import axios from 'axios';

const ExpensesByYear = () => {
  const [year, setYear] = useState('');
  const [results, setResults] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`https://smurfbusexpensessitebackend.onrender.com/expenses/${year}`);
    setResults(res.data);
  };

  return (
    <div>
    <h2>Expenses by Year</h2>
    <div style={{ marginBottom: '1rem' }}>
     
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={fetch}>Fetch</button>
    </div>

    <table className="expenses-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r, idx) => (
          <tr key={idx}>
            {/* <td>{r.dateString || `${month}/${year}`}</td> */}
            <td>{r.category}</td>
            <td>${r.totalCost.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    // <div>
    //   <h2>Expenses by Year</h2>
    //   <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
    //   <button onClick={fetch}>Fetch</button>
    //   <ul>
    //     {results.map((r, idx) => (
    //       <li key={idx}> {r.category} ${r.totalCost} </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

//{r.dateString || `Year ${year}`}:

export default ExpensesByYear;
