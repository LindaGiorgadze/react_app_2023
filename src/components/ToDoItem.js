const ToDoItem = ({ text, ...props }) => {
  return (
    <li className={props.checked ? "checkedItem" : ""}>
      <input type="checkbox" {...props} />
      <span>{text}</span>
    </li>
  );
};

export default ToDoItem;
