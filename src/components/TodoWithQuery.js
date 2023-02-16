import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import apiRequest from "../apiRequest";
import useApiRequest from "../hook/useApiRequest";
import Button from "./Button";
import Input from "./Input";
import ToDoItem from "./ToDoItem";

const TodoWithQuery = () => {
  const textInput = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery("repoData", () => apiRequest(), {
    onSuccess: (data) => setToDoItems(data?.data?.data)
  });

  const addTodo = useMutation(
    () =>
      apiRequest("/create", "POST", {
        text: inputValue
      }),
    {
      onSuccess: () => {
        console.log("Todo Item is Sent Successfuly!");
        queryClient.invalidateQueries("repoData");
      },
      onError: (error) => console.log(error)
    }
  );

  useEffect(() => {
    textInput?.current?.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    setInputValue("");
    addTodo.mutate();
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
        {isLoading ? (
          <p>Is Loading ...</p>
        ) : (
          toDoItems
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
            })
        )}
      </ul>
    </div>
  );
};

export default TodoWithQuery;
