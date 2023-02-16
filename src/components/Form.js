import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from "./Button";

const initialForm = {
  name: "",
  surname: "",
  password: ""
};

const formValidation = yup.object(
  {
    name: yup.string().required(),
    surname: yup.string().required(),
    password: yup.number().positive().integer().required()
  }
).required();

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialForm,
    resolver: yupResolver(formValidation)
  });
  const [value, setValue] = useState("Initial Value");
  const [title, setTitle] = useState(value);
  const [number, setNumber] = useState(100);
  const [state, dispatch] = useReducer(handleInputChange, initialForm);

  function onSubmit(e) {
    e.preventDefault();
    setTitle(value);
    alert(`Form is Submited! Value: ${value}`);
  }

  const formika = (data) => console.log(data);
  console.log(errors);
  // console.log(state);
  return (
    <section>
      <form onSubmit={handleSubmit(formika)}>
        <h3>Form with useReducer</h3>
        <label htmlFor="">
          Name
          <input
            type="text"
            {...register("name", { required: "This field is required." })}
            // value={state.name}
            // onChange={(e) => dispatch({ type: "name", value: e.target.value })}
          />
          <br/>
          {errors.name && <span>{errors.name?.message}</span>}
        </label>
        <label htmlFor="">
          Surname
          <input
            type="text"
            {...register("surname")}
            // value={state.surname}
            // onChange={(e) =>
            //   dispatch({ type: "surName", value: e.target.value })
            // }
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            {...register("password")}
            // value={state.password}
            // onChange={(e) =>
            //   dispatch({ type: "password", value: e.target.value })
            // }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={(e) => onSubmit(e)} action="/submited">
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
