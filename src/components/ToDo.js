import { useState } from "react";
import Button from "./Button";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const _toDoItems = [
    { id: 1, text: "Todo 1", checked: true },
    { id: 2, text: "Todo 2", checked: false },
    { id: 3, text: "Todo 3", checked: false },
    { id: 4, text: "Todo 4", checked: true }
  ];

  const [inputValue, setInputValue] = useState("");
  const [toDoItems, setToDoItems] = useState(_toDoItems);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    const toDoItem = { id: Date.now(), text: inputValue, checked: false };
    setToDoItems([toDoItem, ...toDoItems]);
    setInputValue("");
  }

  function handleCheck(itemId) {
    const newTodoItems = toDoItems.map((item) => {
      if (item.id === itemId) {
        item.checked = !item.checked;
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
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" />
      </form>
      <ul>
        {toDoItems.map((item) => {
          return (
            <ToDoItem
              onChange={() => handleCheck(item.id)}
              key={item.id}
              text={item.text}
              checked={item.checked}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
