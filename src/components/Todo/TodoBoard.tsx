import React from "react";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import { TodoItemModel } from "../../App";

export interface ControlModal {
  todoItems: TodoItemModel[];
  filterTodoItems: (status: "unchecked" | "checked" | "crossed") => void;
  onSubmitTodoContent: (todoInput: string) => void;
  updateTodoItemStatus: (
    id: string,
    checkStatus: "unchecked" | "checked" | "crossed"
  ) => void;
  handleUpdateStrikeThrough: (id: string) => void;
  onClickFilter: (filter: "unchecked" | "checked" | "crossed") => void;
}
const TodoBoard: React.FC<ControlModal> = ({
  todoItems,
  filterTodoItems,
  onSubmitTodoContent,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  onClickFilter
}) => {
  return (
    <StyledTodo>
      <Logo />
      <TodoList
        todoItems={todoItems}
        filterTodoItems={filterTodoItems}
        onSubmitTodoContent={onSubmitTodoContent}
        updateTodoItemStatus={updateTodoItemStatus}
        handleUpdateStrikeThrough={handleUpdateStrikeThrough}
        onClickFilter={onClickFilter}
      />
    </StyledTodo>
  );
};

export default TodoBoard;
