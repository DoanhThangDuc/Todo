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

function TodoList({
  itemValues,
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  filterTodoItems,
  visibleTodoItems,
}) {
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

          {visibleTodoItems.map((item) => {
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
        <InputSection onSubmitTodoContent={createTodoItem}></InputSection>
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => filterTodoItems("all")}>All</button>
          <button onClick={() => filterTodoItems("checked")}>Checked</button>
          <button onClick={() => filterTodoItems("crossed")}>Crossed</button>
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
