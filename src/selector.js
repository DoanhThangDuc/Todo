import { createSelector } from "reselect";

const selectFilterStatus = (state) => state.filter;
const selectAllTodoItems = (state) => state.todoItems;

export const selectTodoItemsByStatus = createSelector(
  [selectAllTodoItems, selectFilterStatus],
  (todoItems, filterStatus) => {
    switch (filterStatus) {
      case "All":
        return todoItems;
      case "Checked":
        return todoItems.filter((item) => item.status === "checked");
      case "Crossed":
        return todoItems.filter((item) => item.status === "crossed");
      default:
        throw new Error("Unknown status: " + filterStatus);
    }
  }
);
