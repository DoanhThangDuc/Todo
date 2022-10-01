import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import PropTypes from "prop-types";

function TodoBoard({ itemValues }) {
  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList itemValues={itemValues}></TodoList>
    </StyledTodo>
  );
}
TodoBoard.propTypes = {
  itemValues: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    strikeThrough: PropTypes.bool.isRequired,
  }),
};

export default TodoBoard;
