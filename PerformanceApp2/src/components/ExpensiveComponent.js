import React from "react";

const ExpensiveComponent = ({ data }) => {
  console.log("ExpensiveComponent re-rendered");

  // Simulate an expensive calculation
  const compute = (num) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const result = compute(5);

  return (
    <div>
      <h2>Expensive Calculation Result: {result}</h2>
    </div>
  );
};

// No memoization, so this component will re-render every time
export default ExpensiveComponent;
