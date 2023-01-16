import { useState } from "react";
import "./App.css";
import ButtonSection from "./components/ButtonSection";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDo from "./components/ToDo";

function App() {
  const [initialValue, setInitialValue] = useState(0);
  // console.log(initialValue);
  function handleChangeInitialValue(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Header />
      <ToDo />
      <ButtonSection />
      <form onSubmit={(e) => handleChangeInitialValue(e)} className="Counter">
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(parseInt(e.target.value))}
        />
        <button type="submit"> Update Initial Values </button>
        <Counter startNumber={initialValue} increaseNumber={10} />
        <Counter startNumber={initialValue + 10} increaseNumber={10} decreaseNumber={10} />
        <Counter decreaseNumber={7} />
      </form>
      <Form />
    </div>
  );
}

export default App;
