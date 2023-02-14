import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import apiRequest from "../apiRequest";
import useApiRequest from "../hook/useApiRequest";
import Button from "./Button";
import Input from "./Input";
import ToDoItem from "./ToDoItem";

// const _toDoItems = [
//   { id: 1, text: "Todo 1", checked: true },
//   { id: 2, text: "Todo 2", checked: false },
//   { id: 3, text: "Todo 3", checked: false },
//   { id: 4, text: "Todo 4", checked: true }
// ];

const ToDo = () => {
  const textInput = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const tasks = useApiRequest();

  useEffect(() => {
    textInput?.current?.focus();
    // axios("https://us-central1-js04-b4877.cloudfunctions.net/tasks").then(
    //   (response) => setToDoItems(response.data.data)
    // );
  }, []);

  useEffect(() => {
    setToDoItems(tasks);
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    const toDoItem = { id: Date.now(), text: inputValue, completed: false };
    setToDoItems([toDoItem, ...toDoItems]);
    setInputValue("");
    apiRequest("/create", "POST", {
      text: inputValue
    });
  }

  function handleCheck(itemId) {
    const newTodoItems = toDoItems.map((item) => {
      if (item.id === itemId) {
        item.completed = !item.completed;
      }
      return item;
    });
    setToDoItems(newTodoItems);
  }

  return (
    <div>
      <h3>Todo App</h3>
      <form
        onSubmit={(e) =>
          inputValue !== "" ? handleSubmit(e) : e.preventDefault()
        }
      >
        <Input
          ref={textInput}
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" />
      </form>
      <ul>
        {toDoItems
          ?.sort((a, b) => b.create_time - a.create_time)
          ?.map((item) => {
            return (
              <ToDoItem
                onChange={() => handleCheck(item.id)}
                key={item.id}
                text={item.text}
                checked={item.completed}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ToDo;
