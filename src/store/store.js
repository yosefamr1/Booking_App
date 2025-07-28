import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingsReducer from "./bookingsSlice";
import filtersReducer from "./filtersSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    bookings: bookingsReducer,
    filters: filtersReducer,

  },
});
