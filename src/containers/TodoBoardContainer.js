import React from "react";
import { observer } from "mobx-react-lite";
import TodoBoard from "../components/Todo/TodoBoard";

const TodoBoardContainer = observer(({ todoStore }) => {
  return (
    <TodoBoard
      todoItems={todoStore.todoItems}
      createTodoItem={(todoInput) => {
        todoStore.onSubmitTodoContent(todoInput);
      }}
      updateTodoItemStatus={({ itemId, itemStatus }) => {
        todoStore.updateTodoItemStatus({ itemId, itemStatus });
      }}
      handleUpdateStrikeThrough={(id) => {
        todoStore.handleUpdateStrikeThrough(id);
      }}
      filterStatus={todoStore.filter}
      filterTodoItems={(filterStatus) => {
        todoStore.updateFilterStatus(filterStatus);
      }}
      visibleTodoItems={todoStore.todoItemsFiltered}
    />
  );
});

export default TodoBoardContainer;
