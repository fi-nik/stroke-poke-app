import { createSlice } from '@reduxjs/toolkit';
import * as Crypto from 'expo-crypto';
import { BowlData, Favorite } from 'src/types';

export interface FavoriteState {
  list: Favorite[];
  map: Record<string, Favorite>;
}

const initialState: FavoriteState = {
  list: [],
  map: {},
};


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: { payload: Favorite }) => {

      state.list.push(action.payload);
      state.map[action.payload.id] = action.payload;
    },
    removeFavorite: (state, action: { payload: string }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const favoriteIndex = state.list.findIndex(
        favorite => favorite.id === action.payload,
      );
      state.list.splice(favoriteIndex, 1);
      state.map[action.payload] = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeFavorite, addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
