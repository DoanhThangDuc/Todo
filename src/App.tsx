import React, { useState } from "react";
import TodoBoard from "./components/Todo/TodoBoard";
import GlobalStyles from "./shared/Global.styled";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    header: "#edfbff",
    body: "#141516",
    footer: "#003333",
  },
  mobile: "46.1875em",
  tablet: "63.9375em",
};

export type Status = "unchecked" | "checked" | "crossed";

export interface TodoItemModel {
  content: string;
  status: Status;
  id: string;
  strikeThrough: boolean;
}

interface State {
  todoItems: TodoItemModel[];
  filter: Status;
}
const App: React.FC = () => {
  const initialState: State = {
    todoItems: [],
    filter: "unchecked",
  };

  const [state, setState] = useState<State>(initialState);

  const { todoItems, filter } = state;

  const filterTodoItems = (status: Status) => {
    switch (status) {
      case "checked":
        const checkedItems = todoItems.filter(
          (item: TodoItemModel) => item.status === "checked"
        );
        return checkedItems;
      case "crossed":
        const crossedItems = todoItems.filter(
          (item: TodoItemModel) => item.status === "crossed"
        );
        return crossedItems;
      default:
        return todoItems;
    }
  };

  const onSubmitTodoContent = (todoInput: string) => {
    const newItem: TodoItemModel = {
      content: todoInput,
      status: "unchecked",
      id: todoInput,
      strikeThrough: false,
    };
    setState({ ...state, todoItems: [...todoItems, newItem] });
  };

  const updateTodoItemStatus = (
    id: string,
    checkStatus: Status,
  ) => {
    setState((current) => {
      const updatedItemStatus = current.todoItems.map((item: TodoItemModel) =>
        item.id === id ? { ...item, status: checkStatus } : item
      );
      return { ...current, todoItems: updatedItemStatus };
    });
  };

  const handleUpdateStrikeThrough = (id: string) => {
    setState((current) => {
      if (!id) return current;
      const todoItem = current.todoItems.find(
        (item: TodoItemModel) => item.id === id
      );

      if (!todoItem) return current;

      if (todoItem.strikeThrough) {
        const deletedItem = current.todoItems.filter(
          (item: TodoItemModel) => item.id !== id
        );
        return { ...current, todoItems: deletedItem };
      }
      const updatedItemsStrike = current.todoItems.map(
        (item: TodoItemModel) => {
          if (item.id === todoItem.id) {
            return { ...item, strikeThrough: true };
          }
          return { ...item, strikeThrough: false };
        }
      );
      return { ...current, todoItems: updatedItemsStrike };
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TodoBoard
        todoItems={filterTodoItems(filter)}
        filterTodoItems={() => filterTodoItems(filter)}
        onSubmitTodoContent={onSubmitTodoContent}
        updateTodoItemStatus={updateTodoItemStatus}
        handleUpdateStrikeThrough={handleUpdateStrikeThrough}
        onClickFilter={(filter) =>
          setState((current) => ({ ...current, filter: filter }))
        }
      />
    </ThemeProvider>
  );
};

export default App;
