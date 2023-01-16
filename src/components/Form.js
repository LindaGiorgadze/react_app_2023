import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [value, setValue] = useState("Initial Value");
  const [title, setTitle] = useState(value);
  const [number, setNumber] = useState(100);

  function handleSubmit(e) {
    e.preventDefault();
    setTitle(value);
    alert(`Form is Submited! Value: ${value}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} action="/submited">
      <h3>{title}</h3>
      <span>{value}</span>
      <br />
      <span>{number || ''}</span>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default Form;
