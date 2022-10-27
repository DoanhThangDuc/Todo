import React from "react";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";

export interface ItemValues {
  content: string;
  status: string;
  id: string;
  strikeThrough: boolean;
}

const TodoBoard: React.FC<{}> = () => {
  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList></TodoList>
    </StyledTodo>
  );
};

export default TodoBoard;
