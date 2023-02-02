import { useState } from "react";
import Counter from "./Counter";
import CounterUseReducer from "./CounterUseReducer";

const CounterForm = () => {
  const [initialValue, setInitialValue] = useState(0);
  // console.log(initialValue);
  function handleChangeInitialValue(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleChangeInitialValue(e)} className="Counter">
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(parseInt(e.target.value))}
      />
      <button type="submit"> Update Initial Values </button>
      <CounterUseReducer
        startNumber={initialValue}
        increaseNumber={15}
        decreaseNumber={10}
      />
      <Counter startNumber={initialValue} increaseNumber={10} />
      <Counter
        startNumber={initialValue + 10}
        increaseNumber={10}
        decreaseNumber={10}
      />
      <Counter decreaseNumber={7} />
    </form>
  );
};

export default CounterForm;
