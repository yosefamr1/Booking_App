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

    addBooking: (state, action) => {
      state.bookings.push(action.payload);

      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email) {
        const key = `bookings_${user.email}`;

        const existingBookings = JSON.parse(localStorage.getItem(key)) || [];
        existingBookings.push(action.payload);

        localStorage.setItem(key, JSON.stringify(existingBookings));
      }
    },

    loadBookingsForUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email) {
        const key = `bookings_${user.email}`;
        const storedBookings = JSON.parse(localStorage.getItem(key)) || [];
        state.bookings = storedBookings;
      } else {
        state.bookings = [];
      }
    },

    clearBookings: (state) => {
      state.bookings = [];

      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email) {
        const key = `bookings_${user.email}`;
        localStorage.removeItem(key);
      }
    },
  },
});

export const { setCurrentBooking, addBooking, loadBookingsForUser, clearBookings } =
  bookingsSlice.actions;

export default bookingsSlice.reducer;
