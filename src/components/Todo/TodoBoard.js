import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import PropTypes from "prop-types";
import {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  sellectAllTodoItems,
} from "../../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { filterTodoItems } from "../../features/filters/filtersSlice";

function TodoBoard() {
  const todoItems = useSelector(sellectAllTodoItems);
  const filterStatus = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <StyledTodo>
      <Logo></Logo>
      <TodoList
        todoItems={todoItems}
        createTodoItem={(input) => dispatch(createTodoItem(input))}
        updateTodoItemStatus={({itemId, itemStatus}) => dispatch(updateTodoItemStatus({itemId, itemStatus}))}
        handleUpdateStrikeThrough={(id) => dispatch(handleUpdateStrikeThrough(id))}
        filterStatus={filterStatus}
        filterTodoItems={(filterStatus) => dispatch(filterTodoItems(filterStatus))}
      ></TodoList>
    </StyledTodo>
  );
}

export default TodoBoard;
