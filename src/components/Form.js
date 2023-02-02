import { useReducer, useState } from "react";
import Button from "./Button";

const initialForm = {
  name: "",
  surname: "",
  password: ""
};

function handleInputChange(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "surName":
      return { ...state, surname: action.value };
    case "password":
      return { ...state, password: action.value };

    default:
      break;
  }
}

const Form = () => {
  const [value, setValue] = useState("Initial Value");
  const [title, setTitle] = useState(value);
  const [number, setNumber] = useState(100);
  const [state, dispatch] = useReducer(handleInputChange, initialForm);

  function handleSubmit(e) {
    e.preventDefault();
    setTitle(value);
    alert(`Form is Submited! Value: ${value}`);
  }

  console.log(state);
  return (
    <section>
      <form>
        <h3>Form with useReducer</h3>
        <label htmlFor="">
          Name
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: "name", value: e.target.value })}
          />
        </label>
        <label htmlFor="">
          Surname
          <input
            type="text"
            value={state.surname}
            onChange={(e) =>
              dispatch({ type: "surName", value: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "password", value: e.target.value })
            }
          />
        </label>
      </form>
      <form onSubmit={(e) => handleSubmit(e)} action="/submited">
        <h3>{title}</h3>
        <span>{value}</span>
        <br />
        <span>{number || ""}</span>
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
    </section>
  );
};

export default Form;
