import { useRef } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

function InputSection({ onSetTodoInput, onSetList, todoInput, list }) {
  const inputClick = useRef();
  const handleSubmit = () => {
    onSetList([...list, todoInput]);
    onSetTodoInput("");
    inputClick.current.focus();
  };
  return (
    <StyledInputSection>
      <input
        ref={inputClick}
        value={todoInput}
        placeholder="enter task"
        onChange={(e) => {
          onSetTodoInput(e.target.value);
        }}
      />
      <MonitorBtn>
        <button onClick={handleSubmit}>Add</button>
        <button>Close</button>
      </MonitorBtn>
    </StyledInputSection>
  );
}

export default InputSection;
