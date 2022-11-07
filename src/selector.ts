import { createSelector } from "reselect";
import {State, TodoItemModel} from './App'

export const selectFilterStatus = (state: State) => state.filter;
export const selectAllTodoItems = (state: State) => state.todoItems;

export const selectTodoItemsByStatus = createSelector(
  [selectAllTodoItems, selectFilterStatus],
  (todoItems, filterStatus) => {
    switch (filterStatus) {
      case "unchecked":
        return todoItems;
      case "checked":
        return todoItems.filter((item: TodoItemModel) => item.status === "checked");
      case "crossed":
        return todoItems.filter((item: TodoItemModel) => item.status === "crossed");
      default:
        throw new Error("Unknown status: " + filterStatus);
    }
  }
);
