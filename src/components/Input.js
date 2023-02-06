import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(({ inputValue, onChange }, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <input ref={inputRef} type="text" value={inputValue} onChange={onChange} />
  );
});

export default Input;
