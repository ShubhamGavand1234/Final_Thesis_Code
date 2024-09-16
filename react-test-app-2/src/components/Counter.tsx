import React from 'react';

interface CounterProps {
  count: number;
  increment: () => void;
}

const Counter: React.FC<CounterProps> = React.memo(({ count, increment }) => {
  console.log('Counter rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default Counter;
