import React, { useState } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";
import LazyLoadedComponent from "./components/LazyLoadedComponent"; // Loaded immediately

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const expensiveCalculation = count * 2;

  const loadLazyComponent = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Performance Test Before Optimization</h1>

      {/* Expensive component without memoization */}
      <ExpensiveComponent data={data} />

      <h3>Expensive Calculation: {expensiveCalculation}</h3>

      <button onClick={() => setData([1, 2, 3])}>Set Local State</button>
      <button onClick={loadLazyComponent}>Load Lazy Component</button>

      {/* No lazy loading, component is imported immediately */}
      <LazyLoadedComponent />
    </div>
  );
}

export default App;
