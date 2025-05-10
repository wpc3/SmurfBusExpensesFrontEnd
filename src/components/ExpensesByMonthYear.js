import React, { useState } from 'react';
import axios from 'axios';

const ExpensesByMonthYear = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [results, setResults] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:8080/expenses/${month}/${year}`, {
      // params: { month, year }
    });
    setResults(res.data);
  };

  return (
    <div>
      <h2>Expenses by Month & Year</h2>
      <input type="number" placeholder="Month" value={month} onChange={(e) => setMonth(e.target.value)} />
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={fetch}>Fetch</button>
      <ul>
        {results.map((r, idx) => (
          <li key={idx}>{r.dateString || `${month}/${year}`}: {r.category} ${r.totalCost}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesByMonthYear;
