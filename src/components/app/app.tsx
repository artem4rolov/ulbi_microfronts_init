import React, { useState } from 'react';
import './app.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {count} <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};
