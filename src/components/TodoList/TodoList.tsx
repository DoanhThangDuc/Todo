import { observer } from "mobx-react-lite";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";
import { TodoBoardProps } from "../Todo/TodoBoard";

const TodoList: React.FC<TodoBoardProps> = ({
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  filterTodoItems,
  visibleTodoItems,
}) => {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {visibleTodoItems.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
                handleUpdateStrikeThrough={handleUpdateStrikeThrough}
              />
            );
          })}
        </TodoContainer>
        <InputSection onSubmitTodoContent={createTodoItem} inputValues="" />
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => filterTodoItems("unchecked")}>All</button>
          <button onClick={() => filterTodoItems("checked")}>Checked</button>
          <button onClick={() => filterTodoItems("crossed")}>Crossed</button>
        </StyleFilterPanel>
      </StyledList>
    </StyledTodoList>
  );
};

export default observer(TodoList);
