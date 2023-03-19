import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchItem: '',
};
const searchSlice = createSlice({
  name: "seachProduct",
  initialState,
  reducers: {
    getSearchItem: (state,action) => {
      state.searchItem = action.payload;
    },
  },
});

const searchReducer = searchSlice.reducer;
export const {
    getSearchItem,
} = searchSlice.actions;
export default searchReducer;
