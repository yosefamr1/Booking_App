import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    cardHolder: "",
  },
  reducers: {
    setPaymentData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearPaymentData: () => ({
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      cardHolder: "",
    }),
  },
});

export const { setPaymentData, clearPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;
