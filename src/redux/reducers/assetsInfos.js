import { createSlice } from '@reduxjs/toolkit';
import market from '../../market';

const assetsInfos = createSlice({
  name: 'assets',
  initialState: {
    assets: market,
  },

  reducers: {
    buyAssets({ assets }, { payload }) {
      const newState = assets.map((asset) => {
        if (asset.symbol === payload.symbol) {
          const assetUpdate = { ...asset, quantity: +asset.quantity + +payload.inputQuantity };
          return assetUpdate;
        }
        return asset;
      });
      return { assets: newState };
    },

    sellAssets({ assets }, { payload }) {
      const newState = assets.map((asset) => {
        if (asset.symbol === payload.symbol) {
          const assetUpdate = { ...asset, quantity: +asset.quantity - +payload.inputQuantity };
          return assetUpdate;
        }
        return asset;
      });
      return { assets: newState };
    },

    setAllAssets(state, action) {
      return { assets: action.payload };
    },
  },
});

export const {
  buyAssets, sellAssets, setAllAssets,
} = assetsInfos.actions;

export default assetsInfos.reducer;
