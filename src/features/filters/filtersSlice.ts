import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../App"

export const filtersSlice = createSlice({
  name: "filter",
  initialState: 'unchecked' as Status,
  reducers: {
    filterTodoItems: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { filterTodoItems } = filtersSlice.actions;
export default filtersSlice.reducer;
