import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import PropTypes from "prop-types";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";
import {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  sellectAllTodoItems,
} from "../../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { filterTodoItems } from "../../features/filters/filtersSlice";

function TodoList({ itemValues }) {
  const todoItems = useSelector(sellectAllTodoItems);
  const filterStatus = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getVisibleTodos = (todoItems, filter) => {
    switch (filter) {
      case "All":
        return todoItems;
      case "Checked":
        return todoItems.filter((item) => item.status === "checked");
      case "Crossed":
        return todoItems.filter((item) => item.status === "crossed");
      default:
        throw new Error("Unknown status: " + filter);
    }
  };

  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {itemValues !== undefined &&
            itemValues.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
              ></TodoItem>
            ))}

          {getVisibleTodos(todoItems, filterStatus).map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={updateTodoItemStatus}
                onContentClick={handleUpdateStrikeThrough}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection
          onSubmitTodoContent={(input) => {
            dispatch(createTodoItem(input));
          }}
        ></InputSection>
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => dispatch(filterTodoItems("All"))}>All</button>
          <button onClick={() => dispatch(filterTodoItems("Checked"))}>
            Checked
          </button>
          <button onClick={() => dispatch(filterTodoItems("Crossed"))}>
            Crossed
          </button>
        </StyleFilterPanel>
      </StyledList>
    </StyledTodoList>
  );
}
TodoList.propTypes = {
  itemValues: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default TodoList;
