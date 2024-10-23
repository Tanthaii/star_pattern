import React, { useState } from 'react';

function StarPattern() {
  const [number, setNumber] = useState(0);
  const [pattern, setPattern] = useState([]);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const generatePattern = () => {
    const n = parseInt(number);
    let tempPattern = [];

    
    for (let i = 1; i <= n; i++) {
      tempPattern.push('*'.repeat(i));
    }

   
    for (let i = n - 1; i >= 1; i--) {
      tempPattern.push('*'.repeat(i));
    }

    setPattern(tempPattern);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Star Pattern Generator</h1>
      <input 
        type="number" 
        value={number} 
        onChange={handleInputChange} 
        placeholder="Enter a number" 
      />
      <button onClick={generatePattern}>Submit</button>

      <div>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default StarPattern;
