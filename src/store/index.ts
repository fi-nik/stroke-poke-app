import {
  addBowl,
  decrementBowl,
  removeBowl,
  cleanCart,
  incrementBowl,
} from './slices/cart';
import { removeFavorite, addFavorite } from './slices/favorites';
import { store } from './store';

export const favoriteActions = {
  removeFavorite,
  addFavorite,
};
export const cartActions = {
  addBowl,
  decrementBowl,
  removeBowl,
  cleanCart,
  incrementBowl,
};
export { StoreProvider } from './provider';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
