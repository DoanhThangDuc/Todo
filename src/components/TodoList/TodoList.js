import { useState } from "react";
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
    todoItem: [],
    filter: "all",
  };

  const [state, setState] = useState(initialState);
  const { todoItem, filter } = state;

  const handleFilter = (status) => {
    switch (status) {
      case "all":
        return todoItem;
      case "checked":
        let checkedItems = todoItem.filter((item) => item.status === "checked");
        return checkedItems;
      case "crossed":
        let crossedItems = todoItem.filter((item) => item.status === "crossed");
        return crossedItems;
    }
  };

  const getNextId = (todoInput) => {
    return todoItem.length + todoInput.toString();
  };
  const createTodoItem = (itemValue) => {
    setState({ ...state, todoItem: [...todoItem, itemValue] });
  };

  const updateTodoItem = (id, checkStatus) => {
    setState((current) => {
      let updatedItem = current.todoItem.map((item) =>
        item.id === id ? { ...item, status: checkStatus } : item
      );
      return { ...current, todoItem: updatedItem };
    });
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
                item={item}
                updateTodoItem={updateTodoItem}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection
          getNextId={getNextId}
          createTodoItem={createTodoItem}
        ></InputSection>
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
