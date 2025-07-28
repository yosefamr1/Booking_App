import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  country: "Egypt",
  checkIn: "",
  checkOut: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: () => initialState,
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
