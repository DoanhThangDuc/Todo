import { useState, useCallback } from "react";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";

function TodoList() {
  const initialState = {
    todoInput: "",
    todoItem: [],
    filter: "all",
  };
  const [state, setState] = useState(initialState);
  const { todoInput, todoItem, filter } = state;

  const handleFilter = (status) => {
    switch (status) {
      case "all":
        return todoItem;
      case "checked":
        return todoItem.filter((item) => item.status === "checked");
      case "crossed":
        return todoItem.filter((item) => item.status === "crossed");
    }
  };
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {handleFilter(state.filter).map((item) => {
            return (
              <TodoItem
                key={item.id}
                content={item.content}
                item={item}
                state={state}
                setState={setState}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection state={state} setState={setState}></InputSection>
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => setState({ ...state, filter: "all" })}>
            All
          </button>
          <button onClick={() => setState({ ...state, filter: "checked" })}>
            Checked
          </button>
          <button onClick={() => setState({ ...state, filter: "crossed" })}>
            Crossed
          </button>
        </StyleFilterPanel>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
