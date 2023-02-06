import { useState } from "react";
import Counter from "./Counter";
import CounterUseReducer from "./CounterUseReducer";
import CounterWithClass from "./CounterWithClass";

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
        onChange={(e) => e.target.value ? setInitialValue(parseInt(e.target.value)) : setInitialValue()}
      />
      <button type="submit"> Update Initial Values </button>
      <CounterWithClass startNumber={initialValue || 0}/>
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
