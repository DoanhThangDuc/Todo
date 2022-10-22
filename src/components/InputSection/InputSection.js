import { useRef, useState } from "react";
import { observer } from "mobx-react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";
import PropTypes from "prop-types";

const InputSection = observer(({ inputValues, todoStore }) => {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    todoStore.onSubmitTodoContent(todoInput);
    setTodoInput("");
    inputRef.current.focus();
  };

  return (
    <StyledInputSection onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        value={inputValues ? inputValues : todoInput}
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
});
// InputSection.propTypes = {
//   inputValues: PropTypes.string,
//   onSubmitTodoContent: PropTypes.func,
// };
export default InputSection;
