import { createSlice } from '@reduxjs/toolkit';

const clientInfos = createSlice({
  name: 'client',
  initialState: {
    name: 'USUÁRIO',
    codClient: 0,
    freeAmount: 10000,
  },
  reducers: {
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setCodClient(state, action) {
      return { ...state, codClient: action.payload };
    },
    setFreeAmount(state, action) {
      return { ...state, freeAmount: action.payload };
    },
    deposit(state, action) {
      const result = +state.freeAmount + +action.payload;
      return { ...state, freeAmount: result };
    },
    withdraw(state, action) {
      const result = +state.freeAmount - +action.payload;
      return { ...state, freeAmount: result };
    },
  },
});

export const {
  setName, setCodClient, setAmount, deposit, withdraw, setFreeAmount,
} = clientInfos.actions;

export default clientInfos.reducer;
