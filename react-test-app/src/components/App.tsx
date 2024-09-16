import React, { useState, useMemo, useReducer, memo } from 'react';
import UserList from './UserList';

// Example of a reducer function
const initialState = { count: 0 };
function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Example of a memoized component
const MemoizedUserList = memo(UserList);

const App: React.FC = () => {
  const [users, setUsers] = useState<string[]>(['Alice', 'Bob', 'Charlie']);
  
  // Example of useMemo
  const sortedUsers = useMemo(() => users.sort(), [users]);

  // Example of useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>React Test App</h1>
      <MemoizedUserList users={sortedUsers} />
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      </div>
    </div>
  );
};

export default App;
