import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { favoriteActions, cartActions } from 'src/store';
import { BowlOrder } from 'src/types';

export const useCartActions = () => {
  const dispatch = useDispatch();

  const removeFavorite = useCallback(
    (favoriteId: string) => {
      dispatch(favoriteActions.removeFavorite(favoriteId));
    },
    [dispatch],
  );
  const addFavorite = useCallback(
    (bowlData: BowlOrder) => {
      dispatch(favoriteActions.addFavorite(bowlData));
      return bowlData.id;
    },
    [dispatch],
  );

  const incrementBowl = useCallback(
    async (id: string) => {
      dispatch(cartActions.incrementBowl(id));
    },
    [dispatch],
  );
  const decrementBowl = useCallback(
    async (id: string) => {
      dispatch(cartActions.decrementBowl(id));
    },
    [dispatch],
  );
  const removeBowl = useCallback(
    async (id: string) => {
      dispatch(cartActions.removeBowl(id));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      incrementBowl,
      decrementBowl,
      removeFavorite,
      addFavorite,
      removeBowl,
    }),
    [incrementBowl, decrementBowl, removeFavorite, removeBowl, addFavorite],
  );
};
