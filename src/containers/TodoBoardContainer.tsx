import React from "react";
import { observer } from "mobx-react-lite";
import TodoBoard from "../components/Todo/TodoBoard";
import { TodoStoreImplement } from "../store";
import { Status } from "../store";

const TodoBoardContainer = observer(
  ({ todoStore }: { todoStore: TodoStoreImplement }) => {
    return (
      <TodoBoard
        todoItems={todoStore.todoItems}
        createTodoItem={(todoInput: string) => {
          todoStore.onSubmitTodoContent(todoInput);
        }}
        updateTodoItemStatus={({
          itemId,
          itemStatus,
        }: {
          itemId: string;
          itemStatus: Status;
        }) => {
          todoStore.updateTodoItemStatus({ itemId, itemStatus });
        }}
        handleUpdateStrikeThrough={(id: string) => {
          todoStore.handleUpdateStrikeThrough(id);
        }}
        filterTodoItems={(filterStatus: Status) => {
          todoStore.updateFilterStatus(filterStatus);
        }}
        visibleTodoItems={todoStore.todoItemsFiltered}
      />
    );
  }
);

export default TodoBoardContainer;
