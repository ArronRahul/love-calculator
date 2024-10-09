import React, { useState } from 'react';
import './LoveCalculator.scss';

const LoveCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [percentage, setPercentage] = useState(null);

  // Function to calculate love percentage
  const calculateLove = (e) => {
    e.preventDefault();
    if (name1 && name2) {
      // Generate a random percentage between 1 and 100
      const randomPercentage = Math.floor(Math.random() * 100) + 1;
      setPercentage(randomPercentage);
    } else {
      alert('Please enter both names!');
    }
  };

  return (
    <div className="love-calculator">
      <h1>Love Calculator</h1>
      <form onSubmit={calculateLove}>
        <div>
          <label>Enter Your Name:</label>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div>
          <label>Enter Partner's Name:</label>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Partner's name"
          />
        </div>
        <button type="submit">Calculate Love</button>
      </form>
      {percentage !== null && (
        <div className="result">
          <h2>Love Percentage</h2>
          <p>{name1} ❤️ {name2} = {percentage}%</p>
        </div>
      )}
    </div>
  );
};

export default LoveCalculator;
