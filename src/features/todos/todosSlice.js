import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = [];

// function nextTodoId(state) {
//   const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }

export const todosSlice = createSlice({
  name: "todoItems",
  initialState: initialState,
  reducers: {
    createTodoItem: {
      reducer(state, action) {
        const newItem = action.payload;
        return [...state, { ...newItem }];
      },
      prepare(payload) {
        return {
          payload: {
            content: payload,
            status: "unchecked",
            id: payload,
            strikeThrough: false,
          },
        };
      },
    },

    updateTodoItemStatus(state, action) {
      const updatedItemStatus = state.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, status: action.payload.itemStatus }
          : item
      );
      return [...updatedItemStatus];
    },

    handleUpdateStrikeThrough(state, action) {
      const todoItem = state.find((item) => item.id === action.payload);
      if (!todoItem) return state;
      if (todoItem.strikeThrough) {
        const deletedItem = state.filter((item) => item.id !== action.payload);
        return [...deletedItem];
      }
      const updatedItemsStrike = state.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, strikeThrough: true };
        }
        return { ...item, strikeThrough: false };
      });
      return [...updatedItemsStrike];
    },
  },
});

export const selectAllTodoItems = (state) => {
  return state.todoItems;
};

export const selectTodoItemsByStatus = createSelector(
  [(state) => state.todoItems, (state) => state.filter],
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

export const {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
} = todosSlice.actions;

export default todosSlice.reducer;
