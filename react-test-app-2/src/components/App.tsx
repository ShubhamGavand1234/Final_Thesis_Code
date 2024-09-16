import React, { useState, useCallback } from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <h1>React Test App</h1>
      <Counter count={count} increment={increment} />
    </div>
  );
};

export default App;
