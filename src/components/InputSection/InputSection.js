import { useRef, useState } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createTodoItem } from "../../features/todos/todosSlice";

function InputSection({ inputValues }) {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodoItem(todoInput));
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
}
InputSection.propTypes = {
  inputValues: PropTypes.string,
  onSubmitTodoContent: PropTypes.func,
};
export default InputSection;
