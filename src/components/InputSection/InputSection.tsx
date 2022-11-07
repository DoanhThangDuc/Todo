import React, { useRef, useState } from "react";
import { Action } from "redux";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";
import { TodoItemModel } from "../../App";

const InputSection: React.FC<{
  initialInput: string;
  onSubmitTodoContent: (todoInput: string) => Action;
}> = ({ onSubmitTodoContent, initialInput }) => {
  const [todoInput, setTodoInput] = useState(initialInput);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit: React.FormEventHandler = (e: React.ChangeEvent) => {
    e.preventDefault();
    onSubmitTodoContent(todoInput);
    setTodoInput("");
    inputRef.current?.focus();
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
};

export default InputSection;
