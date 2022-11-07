import React from "react";
import { Action } from "redux";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import { TodoItemModel, Status } from "../../App";

export interface TodoBoardProps {
  todoItems: TodoItemModel[];
  onSubmitTodoContent: (todoInput: string) => Action;
  setTodoItemStatus: ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => Action;
  setStrikeThrough: (id: string) => Action;
  onClickFilter: (filter: Status) => Action;
}

const TodoBoard: React.FC<TodoBoardProps> = ({
  todoItems,
  onSubmitTodoContent,
  setTodoItemStatus,
  setStrikeThrough,
  onClickFilter,
}) => {
  return (
    <StyledTodo>
      <Logo />
      <TodoList
        todoItems={todoItems}
        onSubmitTodoContent={onSubmitTodoContent}
        setTodoItemStatus={setTodoItemStatus}
        setStrikeThrough={setStrikeThrough}
        onClickFilter={onClickFilter}
      />
    </StyledTodo>
  );
};

export default TodoBoard;
