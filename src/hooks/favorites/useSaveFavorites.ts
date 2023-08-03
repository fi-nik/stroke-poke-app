import * as Crypto from 'expo-crypto';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { favoriteActions } from 'src/store';
import { BowlData } from 'src/types';
export function useSaveFavorite() {
  const dispatch = useDispatch();

  return useCallback(
    (bowlData: BowlData) => {
      const id = Crypto.randomUUID();
      dispatch(favoriteActions.addFavorite({ ...bowlData, id }));
      return id;
    },
    [dispatch],
  );
}
