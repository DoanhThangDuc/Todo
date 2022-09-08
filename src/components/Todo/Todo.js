import TodoList from "../TodoList/TodoList";
import Logo from '../Logo/Logo'
import { StyledTodo } from "./Todo.styled";

function Todo() {
  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList></TodoList>
    </StyledTodo>
  );
}

export default Todo;
