import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    currentBooking: {
      checkIn: "",
      checkOut: "",
      nights: 0,
      totalPrice: 0,
    },
  },
  reducers: {
    setCurrentBooking: (state, action) => {
      state.currentBooking = { ...state.currentBooking, ...action.payload };
    },
    addBooking: (state) => {
      state.bookings.push(state.currentBooking);
      state.currentBooking = { checkIn: "", checkOut: "", nights: 0, totalPrice: 0 };
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { setCurrentBooking, addBooking, clearBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
