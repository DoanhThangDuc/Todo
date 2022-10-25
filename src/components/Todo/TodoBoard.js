import { observer } from "mobx-react-lite";
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
  visibleTodoItems,
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
        visibleTodoItems={visibleTodoItems}
      />
    </StyledTodo>
  );
}

export default observer(TodoBoard);
