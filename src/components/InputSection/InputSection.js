import { useRef } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

function InputSection({ onSetTodoInput, onSetList, todoInput, list }) {
  const inputRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSetList([...list, todoInput]);
    onSetTodoInput("");
    inputRef.current.focus();
  };

  return (
    <StyledInputSection onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="enter task"
        onChange={(e) => {
          onSetTodoInput(e.target.value);
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
