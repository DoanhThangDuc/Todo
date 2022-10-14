import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import TodoList from "../TodoList/TodoList";

function TodoBoard({
  todoItems,
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  filterStatus,
  filterTodoItems,
}) {
  return (
    <StyledTodo>
      <Logo />
      <TodoList
        todoItems={todoItems}
        createTodoItem={createTodoItem}
        updateTodoItemStatus={updateTodoItemStatus}
        handleUpdateStrikeThrough={handleUpdateStrikeThrough}
        filterStatus={filterStatus}
        filterTodoItems={filterTodoItems}
      />
    </StyledTodo>
  );
}

export default TodoBoard;
