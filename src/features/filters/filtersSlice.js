import { createSlice } from "@reduxjs/toolkit";

const initialState = "All";

export const filtersSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterTodoItems: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { filterTodoItems } = filtersSlice.actions;
export default filtersSlice.reducer;
