import { createSlice } from "@reduxjs/toolkit";
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

export const sellectAllTodoItems = (state) => {
  return state.todoItems;
};

export const {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
} = todosSlice.actions;

export default todosSlice.reducer;
