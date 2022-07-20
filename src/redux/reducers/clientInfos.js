import { createSlice } from '@reduxjs/toolkit';
import formatter from '../../helpers/functions';

const clientInfos = createSlice({
  name: 'client',
  initialState: {
    name: 'USUÁRIO',
    codClient: 0,
    amount: 0,
    freeAmount: 0,
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
    setFreeAmount(state, action) {
      const result = formatter.format(action.payload);
      return { ...state, freeAmount: result };
    },
  },
});

export const {
  setName, setCodClient, setAmount, setFreeAmount,
} = clientInfos.actions;

export default clientInfos.reducer;
