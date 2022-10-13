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
  todoItems,
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  filterStatus,
  filterTodoItems,
}) {
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
                updateTodoItemStatus={({ itemId, itemStatus }) => {
                  updateTodoItemStatus({ itemId, itemStatus });
                }}
              ></TodoItem>
            ))}

          {getVisibleTodos(todoItems, filterStatus).map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={({ itemId, itemStatus }) => {
                  updateTodoItemStatus({ itemId, itemStatus });
                }}
                onContentClick={(id) => handleUpdateStrikeThrough(id)}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection
          onSubmitTodoContent={(input) => {
            createTodoItem(input);
          }}
        ></InputSection>
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => filterTodoItems("All")}>All</button>
          <button onClick={() => filterTodoItems("Checked")}>Checked</button>
          <button onClick={() => filterTodoItems("Crossed")}>Crossed</button>
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
