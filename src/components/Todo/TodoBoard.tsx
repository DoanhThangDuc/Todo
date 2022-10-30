import React from "react";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";

export interface TodoItemType {
  content: string;
  status: string;
  id: string;
  strikeThrough: boolean;
}

const TodoBoard: React.FC<{ items?: TodoItemType[] }> = ({ items }) => {
  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList items={items}></TodoList>
    </StyledTodo>
  );
};

export default TodoBoard;
