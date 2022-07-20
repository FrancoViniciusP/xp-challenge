import { createSlice } from '@reduxjs/toolkit';
import formatter from '../../helpers/functions';

const clientInfos = createSlice({
  name: 'client',
  initialState: {
    name: 'USUÁRIO',
    codClient: 0,
    amount: 0,
    freeAmount: 1000.00,
  },
  reducers: {
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setCodClient(state, action) {
      return { ...state, codClient: action.payload };
    },
    setAmount(state, action) {
      const result = formatter.format(action.payload);
      return { ...state, amount: result };
    },
    deposit(state, action) {
      const result = +state.freeAmount + +action.payload;
      return { ...state, freeAmount: result.toFixed(2) };
    },
    withdraw(state, action) {
      const result = +state.freeAmount - +action.payload;
      return { ...state, freeAmount: result.toFixed(2) };
    },
  },
});

export const {
  setName, setCodClient, setAmount, deposit, withdraw,
} = clientInfos.actions;

export default clientInfos.reducer;
