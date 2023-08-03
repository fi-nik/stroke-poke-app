import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, createMigrate } from 'redux-persist';
import thunk from 'redux-thunk';

import cartReducer from './slices/cart';
import favoritesReducer from './slices/favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});
const migrations = {
  0: state => {
    return state;
  },
  1: state => {
    return state;
  },
  2: state => {
    return {
      ...state,
      favorites: {
        list: state.favorites.list,
        map: {},
      },
    };
  },
};
const persistedReducer = persistReducer(
  {
    version: 2,
    key: 'root',
    storage: AsyncStorage,
    migrate: createMigrate(migrations, { debug: true }),
  },

  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
