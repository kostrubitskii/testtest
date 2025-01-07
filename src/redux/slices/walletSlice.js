import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    adress: null,
    connected: false,
  },
  reducers: {
    connectWallet: (state, action) => {
      state.adress = action.payload;
      state.connected = true;
    },
    disconnectWallet: (state) => {
      state.adress = null;
      state.connected = false;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;