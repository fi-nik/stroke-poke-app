import { useNavigation } from '@react-navigation/native';
import * as Crypto from 'expo-crypto';
import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { FavoritesScreenNavigationProp, TabRoutes } from 'src/router/types';
import { favoriteActions, cartActions } from 'src/store';
import { BowlData, Favorite } from 'src/types';

export const useFavoriteActions = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const editFavorite = useCallback(
    (bowl: Favorite) => {
      navigation.navigate(TabRoutes.Home, {
        data: bowl,
      });
    },
    [navigation],
  );
  const removeFavorite = useCallback(
    (favoriteId: string) => {
      dispatch(favoriteActions.removeFavorite(favoriteId));
    },
    [dispatch],
  );
  const addFavorite = useCallback(
    (bowlData: BowlData) => {
      const id = Crypto.randomUUID();
      dispatch(favoriteActions.addFavorite({ ...bowlData, id }));
      return id;
    },
    [dispatch],
  );

  const addToCart = useCallback(
    async bowl => {
      dispatch(cartActions.addBowl(bowl));
      navigation.navigate(TabRoutes.Home, { data: new Favorite() });
    },
    [dispatch, navigation],
  );

  return useMemo(
    () => ({ editFavorite, removeFavorite, addToCart, addFavorite }),
    [editFavorite, removeFavorite, addToCart, addFavorite],
  );
};
