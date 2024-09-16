import React, { useState, useMemo, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/appSlice";
import ExpensiveComponent from "./components/ExpensiveComponent";

const LazyLoadedComponent = lazy(() =>
  import("./components/LazyLoadedComponent")
);

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);

  const [count, setCount] = useState(0);

  // Memoizing expensive calculations
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation");
    return count * 2;
  }, [count]);

  const loadLazyComponent = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Performance Optimization Test</h1>

      {/* Memoized expensive component */}
      <ExpensiveComponent data={data} />

      <h3>Expensive Calculation: {expensiveCalculation}</h3>

      <button onClick={() => dispatch(setData([1, 2, 3]))}>
        Set Redux State
      </button>
      <button onClick={loadLazyComponent}>Load Lazy Component</button>

      {/* Lazy load component */}
      <Suspense fallback={<div>Loading...</div>}>
        {count > 0 && <LazyLoadedComponent />}
      </Suspense>
    </div>
  );
}

export default App;
