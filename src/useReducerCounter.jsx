import { useReducer } from "react";

// Step 1: Initial State
const initialState = {
  count: 0,
};

// Step 2: Reducer Function
const reducer = (state, action) => {
  if (action.type === "increase") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrease") {
    return { count: state.count - 1 };
  }

  return state;
};

export default function UseReducerCounter() {
  // Step 3: useReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increase" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease
      </button>
    </div>
  );
}