import { createSlice } from '@reduxjs/toolkit';
import { BowlOrder } from 'src/types';

export interface CartState {
  list: BowlOrder[];
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBowl: (state, action) => {
      state.list.push(action.payload);
    },
    incrementBowl: (state, action) => {
      state.list[action.payload].count = state.list[action.payload].count + 1;
    },
    decrementBowl: (state, action) => {
      const bowlIndex = action.payload;
      state.list[bowlIndex].count = state.list[bowlIndex].count - 1;
      if (state.list[bowlIndex].count === 0) {
        state.list.splice(bowlIndex, 1);
      }
    },
    removeBowl: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.list.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeBowl, addBowl, incrementBowl, decrementBowl } =
  cartSlice.actions;

export default cartSlice.reducer;
