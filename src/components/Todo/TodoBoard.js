import TodoList from "../TodoList/TodoList";
import Logo from '../Logo/Logo'
import { StyledTodo } from "./TodoBoard.styled";

function TodoBoard() {
  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList></TodoList>
    </StyledTodo>
  );
}

export default TodoBoard;
