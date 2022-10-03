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
    todoItems: [],
    filter: "all",
  };

  const [state, setState] = useState(initialState);
  const { todoItems } = state;

  const filterTodoItems = (status) => {
    switch (status) {
      case "all":
        return todoItems;
      case "checked":
        const checkedItems = todoItems.filter(
          (item) => item.status === "checked"
        );
        return checkedItems;
      case "crossed":
        const crossedItems = todoItems.filter(
          (item) => item.status === "crossed"
        );
        return crossedItems;
    }
  };

  const getNextId = (todoInput) => {
    return todoItems.length + todoInput.toString();
  };

  const createTodoItem = (itemValue) => {
    setState({ ...state, todoItems: [...todoItems, itemValue] });
  };

  const onSubmitTodoContent = (todoInput) => {
    const newItem = {
      content: todoInput,
      status: "unchecked",
      id: getNextId(todoInput),
      strikeThrough: false,
    };
    createTodoItem(newItem);
  };

  const updateTodoItemStatus = (id, checkStatus) => {
    setState((current) => {
      const updatedItemStatus = current.todoItems.map((item) =>
        item.id === id ? { ...item, status: checkStatus } : item
      );
      return { ...current, todoItems: updatedItemStatus };
    });
  };

  const handleUpdateStrikeThrough = (id) => {
    setState((current) => {
      const itemHasStrike = todoItems.find(
        (item) => item.id === id && item.strikeThrough === true
      );
      let updatedItemStrike;
      if (itemHasStrike) {
        updatedItemStrike = current.todoItems.filter((item) => item.id !== id);
      } else {
        updatedItemStrike = current.todoItems.map((item) => {
          if (item.strikeThrough === false && item.id === id) {
            return { ...item, strikeThrough: true };
          }
          if (item.strikeThrough === true && item.id !== id) {
            return { ...item, strikeThrough: false };
          }
          return item;
        });
      }
      return { ...current, todoItems: updatedItemStrike };
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
                handleUpdateStrikeThrough={handleUpdateStrikeThrough}
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
