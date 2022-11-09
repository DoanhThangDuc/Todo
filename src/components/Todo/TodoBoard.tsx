import { observer } from "mobx-react-lite";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import TodoList from "../TodoList/TodoList";
import { TodoItemModal, Status } from "../../store";

export interface TodoBoardProps {
  todoItems: TodoItemModal[];
  createTodoItem: (input: string) => void;
  updateTodoItemStatus: ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => void;
  handleUpdateStrikeThrough: (id: string) => void;
  filterTodoItems: (status: Status) => void;
  visibleTodoItems: TodoItemModal[];
}

const TodoBoard: React.FC<TodoBoardProps> = ({
  todoItems,
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  filterTodoItems,
  visibleTodoItems,
}) => {
  return (
    <StyledTodo>
      <Logo />
      <TodoList
        todoItems={todoItems}
        createTodoItem={createTodoItem}
        updateTodoItemStatus={updateTodoItemStatus}
        handleUpdateStrikeThrough={handleUpdateStrikeThrough}
        filterTodoItems={filterTodoItems}
        visibleTodoItems={visibleTodoItems}
      />
    </StyledTodo>
  );
};

export default observer(TodoBoard);
