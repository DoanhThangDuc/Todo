import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../App";

export const filtersSlice = createSlice({
  name: "filter",
  initialState: "unchecked" as Status,
  reducers: {
    filterTodoItems: (state: Status, action: PayloadAction<Status>) => {
      return (state = action.payload);
    },
  },
});

export const { filterTodoItems } = filtersSlice.actions;
export type FilterActionTypes = typeof filtersSlice.actions;
export default filtersSlice.reducer;
