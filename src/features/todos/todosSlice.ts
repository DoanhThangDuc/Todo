import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModel, Status } from "../../App";

export const todosSlice = createSlice({
  name: "todoItems",
  initialState: [] as TodoItemModel[],
  reducers: {
    addTodoItem: {
      reducer: (state, action: PayloadAction<TodoItemModel>) => {
        const newItem = action.payload;
        return [...state, { ...newItem }];
      },
      prepare(content: string) {
        const id = nanoid()
        return {
          payload: {
            content: content,
            status: "unchecked" as Status,
            id: id,
            strikeThrough: false,
          },
        };
      },
    },

    setTodoItemStatus(state, action) {
      const updatedItemStatus = state.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, status: action.payload.itemStatus }
          : item
      );
      return [...updatedItemStatus];
    },

    setStrikeThrough(state, action) {
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

export const {
  addTodoItem,
  setTodoItemStatus,
  setStrikeThrough,
} = todosSlice.actions;

export default todosSlice.reducer;
