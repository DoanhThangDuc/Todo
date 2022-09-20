import { useRef, useState } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

function InputSection({ getNextId, createTodoItem }) {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef();

  const setTodoItem = (todoInput) => {
    const newTodoItem = {
      content: todoInput,
      status: "unchecked",
      id: getNextId(todoInput),
    };
    return newTodoItem;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTodoItem(setTodoItem(todoInput));
    setTodoInput("");
    inputRef.current.focus();
  };

  return (
    <StyledInputSection onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="enter task"
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
      <MonitorBtn>
        <button>Add</button>
        <button>Close</button>
      </MonitorBtn>
    </StyledInputSection>
  );
}

export default InputSection;
