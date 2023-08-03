import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavoritesScreenNavigationProp, TabRoutes } from 'src/router/types';
import { RootState, favoriteActions } from 'src/store';
import { Favorite } from 'src/types';

export function useFavorite(favoriteId: string) {
  return useSelector((state: RootState) => state.favorites.map[favoriteId]);
}

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

  const addToCart = useCallback(async bowl => {
    return null;
  }, []);

  return useMemo(
    () => ({ editFavorite, removeFavorite, addToCart }),
    [editFavorite, removeFavorite, addToCart],
  );
};
