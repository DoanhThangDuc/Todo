import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import PropTypes from "prop-types";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";

function TodoList({ itemValues }) {
  const initialState = {
    todoItem: [],
    filter: "all",
  };

  const [state, setState] = useState(initialState);
  const { todoItem, filter } = state;

  const filterTodoItems = (status) => {
    switch (status) {
      case "all":
        return todoItem;
      case "checked":
        const checkedItems = todoItem.filter(
          (item) => item.status === "checked"
        );
        return checkedItems;
      case "crossed":
        const crossedItems = todoItem.filter(
          (item) => item.status === "crossed"
        );
        return crossedItems;
    }
  };

  const getNextId = (todoInput) => {
    return todoItem.length + todoInput.toString();
  };

  const createTodoItem = (itemValue) => {
    setState({ ...state, todoItem: [...todoItem, itemValue] });
  };

  const onSubmitTodoContent = (todoInput) => {
    const newItem = {
      content: todoInput,
      status: "unchecked",
      id: getNextId(todoInput),
    };
    createTodoItem(newItem);
  };

  const updateTodoItemStatus = (id, checkStatus) => {
    setState((current) => {
      const updatedItem = current.todoItem.map((item) =>
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
          {itemValues != undefined &&
            itemValues.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
              ></TodoItem>
            ))}
          {filterTodoItems(state.filter).map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection onSubmitTodoContent={onSubmitTodoContent}></InputSection>
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
TodoList.propTypes = {
  itemValues: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default TodoList;
