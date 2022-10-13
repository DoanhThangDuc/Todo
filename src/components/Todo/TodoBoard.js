import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import ControlTodoList from "../../container/ControlTodoList";
function TodoBoard() {
  return (
    <StyledTodo>
      <Logo />
      <ControlTodoList />
    </StyledTodo>
  );
}

export default TodoBoard;
