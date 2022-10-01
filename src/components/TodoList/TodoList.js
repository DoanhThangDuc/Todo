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
      strikeThrough: false,
    };
    createTodoItem(newItem);
  };

  const updateTodoItemStatus = (id, checkStatus) => {
    setState((current) => {
      const updatedItemStatus = current.todoItem.map((item) =>
        item.id === id ? { ...item, status: checkStatus } : item
      );
      return { ...current, todoItem: updatedItemStatus };
    });
  };

  const updateTodoItemStrikeThrough = (id, strike) => {
    setState((current) => {
      const itemHasStrikeThrough = current.todoItem.find((item) =>
        item.strikeThrough === true ? item : undefined
      );
      let updatedItemStrike;
      if (itemHasStrikeThrough) {
        const removeStrikeThroughStatus = current.todoItem.map((item) =>
          item.id === itemHasStrikeThrough.id
            ? { ...item, strikeThrough: false }
            : item
        );
        updatedItemStrike = removeStrikeThroughStatus.map((item) =>
          item.id === id ? { ...item, strikeThrough: strike } : item
        );
      } else {
        updatedItemStrike = current.todoItem.map((item) =>
          item.id === id ? { ...item, strikeThrough: strike } : item
        );
      }
      return { ...current, todoItem: updatedItemStrike };
    });
  };

  const deleteTodoItem = (id) => {
    setState((current) => {
      const updatedItemDeleted = current.todoItem.filter((item) =>
        item.id !== id ? item : null
      );
      return { ...current, todoItem: updatedItemDeleted };
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
                onUpdateTodoItemStrikeThrough={updateTodoItemStrikeThrough}
                onDeleteTodoItem={deleteTodoItem}
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
