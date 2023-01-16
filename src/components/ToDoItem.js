const ToDoItem = ({text, ...props}) => {
  return (
    <li>
      <input
        type="checkbox"
        {...props}
      />
      <span>{text}</span>
    </li>
  );
};

export default ToDoItem;