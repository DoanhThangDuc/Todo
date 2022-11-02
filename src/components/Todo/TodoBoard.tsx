import React from "react";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import { TodoItemModel, Status } from "../../App";

export interface TodoBoardProps {
  todoItems: TodoItemModel[];
  filterTodoItems: (status: Status) => void;
  onSubmitTodoContent: (todoInput: string) => void;
  updateTodoItemStatus: (id: string, checkStatus: Status) => void;
  handleUpdateStrikeThrough: (id: string) => void;
  onClickFilter: (filter: Status) => void;
}
const TodoBoard: React.FC<TodoBoardProps> = ({
  todoItems,
  filterTodoItems,
  onSubmitTodoContent,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  onClickFilter,
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
