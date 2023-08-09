import React, { useState } from 'react';

function NumberSorting() {
  const [numbers, setNumbers] = useState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

  const sortNumbers = () => {
    setNumbers([...numbers].sort((a, b) => a - b));
  };

  return (
    <div>
      <h1>"Numbers:"</h1>
      <button onClick={sortNumbers}></button>
      <pre>
        {JSON.stringify({ numbers }, null, 2)}
      </pre>
    </div>
  );
}

export default NumberSorting;
