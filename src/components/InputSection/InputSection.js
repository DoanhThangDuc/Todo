import { useRef } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

function InputSection({ state, setState }) {
  const inputRef = useRef();
  const { todoInput, todoItem, filter } = state;

  const onFormSubmit = (e) => {
    e.preventDefault();
    setState(setTodoItem(todoInput));
    inputRef.current.focus();
  };
  const setTodoInput = (payload) => {
    return { ...state, todoInput: payload };
  };

  const setTodoItem = (payload) => {
    let newItem = {
      content: payload,
      id: todoItem.length,
      status: "unchecked",
    };
    return {
      ...state,
      todoInput: "",
      todoItem: [...todoItem, newItem],
    };
  };
  return (
    <StyledInputSection onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="enter task"
        onChange={(e) => {
          setState(setTodoInput(e.target.value));
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
