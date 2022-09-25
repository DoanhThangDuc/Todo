import { useRef, useState } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";
import PropTypes from "prop-types";
function InputSection({ onSubmitTodoContent }) {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmitTodoContent(todoInput);
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
InputSection.propTypes = {
  onSubmitTodoContent: PropTypes.func,
};
export default InputSection;
