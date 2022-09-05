import { StyledTodo, Logo, LogoImage } from "./Todo.styled";
import TodoList from "./TodoList/TodoList";
function TodoApp() {
  return (
    <StyledTodo>
      <Logo>
        <img src="/img/companyLogo.png" alt="Logo"/>
      </Logo>
      <TodoList></TodoList>
    </StyledTodo>
  );
}

export default TodoApp;
