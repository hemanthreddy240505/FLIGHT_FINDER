import React, { useState } from 'react';

const mockFlights = [
  { id: 1, from: 'Delhi', to: 'Mumbai', date: '2025-07-01', time: '10:00 AM', price: '₹5000' },
  { id: 2, from: 'Delhi', to: 'Bangalore', date: '2025-07-01', time: '1:00 PM', price: '₹6500' },
  { id: 3, from: 'Hyderabad', to: 'Chennai', date: '2025-07-01', time: '4:00 PM', price: '₹4000' },
];

function FlightSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);

  const searchFlights = () => {
    const filtered = mockFlights.filter(
      f => f.from.toLowerCase() === from.toLowerCase()
        && f.to.toLowerCase() === to.toLowerCase()
        && f.date === date
    );
    setResults(filtered);
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <input placeholder="From" value={from} onChange={e => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={searchFlights}>Search</button>

      {results.length > 0 ? (
        <ul>
          {results.map(flight => (
            <li key={flight.id}>
              {flight.from} ➡ {flight.to} | {flight.time} | {flight.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found.</p>
      )}
    </div>
  );
}

export default FlightSearch;
