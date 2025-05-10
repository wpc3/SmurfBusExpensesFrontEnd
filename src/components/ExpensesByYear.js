import React, { useState } from 'react';
import axios from 'axios';

const ExpensesByYear = () => {
  const [year, setYear] = useState('');
  const [results, setResults] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:8080/expenses/${year}`);
    setResults(res.data);
  };

  return (
    <div>
      <h2>Expenses by Year</h2>
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={fetch}>Fetch</button>
      <ul>
        {results.map((r, idx) => (
          <li key={idx}> {r.category} ${r.totalCost} </li>
        ))}
      </ul>
    </div>
  );
};

//{r.dateString || `Year ${year}`}:

export default ExpensesByYear;
