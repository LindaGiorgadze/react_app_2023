import { useReducer } from "react";

const CounterUseReducer = ({ startNumber, increaseNumber, decreaseNumber }) => {
  function changeValue(state, action) {
    switch (action.type) {
      case "increment":
        return state + action.value;
      case "decrement":
        return state - action.value;
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(changeValue, startNumber || 0);
  return (
    <section>
      <h2>Counter With useReducer</h2>
      <button
        onClick={() =>
          dispatch({ type: "decrement", value: decreaseNumber || 1 })
        }
      >
        Decrease
      </button>
      <br />
      <span>{state}</span>
      <br />
      <button
        onClick={() =>
          dispatch({ type: "increment", value: increaseNumber || 1 })
        }
      >
        Increase
      </button>
    </section>
  );
};
export default CounterUseReducer;
