import React, { useRef, useState } from "react";
import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

const InputSection: React.FC<{
  inputValues: string;
  onSubmitTodoContent: (input: string) => void;
}> = ({ inputValues, onSubmitTodoContent }) => {
  const [todoInput, setTodoInput] = useState<string>("");
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
};

export default InputSection;
