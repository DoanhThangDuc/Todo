import { observer } from "mobx-react";
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

const TodoList = observer(({ itemValues, todoStore }) => {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {itemValues != undefined &&
            itemValues.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoItemStatus={() => {
                  todoStore.updateTodoItemStatus();
                }}
              ></TodoItem>
            ))}
          {todoStore.todoItemsFiltered.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoStore={todoStore}
                item={item}
              ></TodoItem>
            );
          })}
        </TodoContainer>
        <InputSection todoStore={todoStore}></InputSection>
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => todoStore.updateFilterStatus("all")}>
            All
          </button>
          <button onClick={() => todoStore.updateFilterStatus("checked")}>
            Checked
          </button>
          <button onClick={() => todoStore.updateFilterStatus("crossed")}>
            Crossed
          </button>
        </StyleFilterPanel>
      </StyledList>
    </StyledTodoList>
  );
});

TodoList.propTypes = {
  itemValues: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default TodoList;
