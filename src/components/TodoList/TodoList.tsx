import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";

import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";
import { ItemValues } from "../Todo/TodoBoard";

interface State {
  todoItems: ItemValues[];
  filter: string;
}

const TodoList: React.FC<{}> = () => {
  const initialState = {
    todoItems: [],
    filter: "all",
  };

  const [state, setState] = useState<State>(initialState);
  const { todoItems } = state;

  const filterTodoItems = (status: string | undefined) => {
    switch (status) {
      case "checked":
        const checkedItems = todoItems.filter(
          (item: ItemValues) => item.status === "checked"
        );
        return checkedItems;
      case "crossed":
        const crossedItems = todoItems.filter(
          (item: ItemValues) => item.status === "crossed"
        );
        return crossedItems;
      default:
        return todoItems;
    }
  };

  const createTodoItem = (itemValue: ItemValues) => {
    setState({ ...state, todoItems: [...todoItems, itemValue] });
  };

  const onSubmitTodoContent = (todoInput: string) => {
    const newItem = {
      content: todoInput,
      status: "unchecked",
      id: todoInput,
      strikeThrough: false,
    };
    createTodoItem(newItem);
  };

  const updateTodoItemStatus = (id: string, checkStatus: string) => {
    setState((current) => {
      const updatedItemStatus = current.todoItems.map((item: ItemValues) =>
        item.id === id ? { ...item, status: checkStatus } : item
      );
      return { ...current, todoItems: updatedItemStatus };
    });
  };

  const handleUpdateStrikeThrough = (id: string) => {
    setState((current) => {
      if (!id) return current;
      const todoItem = current.todoItems.find(
        (item: ItemValues) => item.id === id
      );

      if (!todoItem) return current;

      if (todoItem.strikeThrough) {
        const deletedItem = current.todoItems.filter(
          (item: ItemValues) => item.id !== id
        );
        return { ...current, todoItems: deletedItem };
      }
      const updatedItemsStrike = current.todoItems.map((item: ItemValues) => {
        if (item.id === todoItem.id) {
          return { ...item, strikeThrough: true };
        }
        return { ...item, strikeThrough: false };
      });
      return { ...current, todoItems: updatedItemsStrike };
    });
  };

  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {filterTodoItems(state.filter).map((item: ItemValues) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
                onContentClick={handleUpdateStrikeThrough}
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
};

export default TodoList;
