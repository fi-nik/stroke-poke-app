import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TabScreenNavigationProp, TabRoutes } from 'src/router/types';
import { favoriteActions, cartActions } from 'src/store';
import { BowlData, Favorite } from 'src/types';

export const useFavoriteActions = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<TabScreenNavigationProp<TabRoutes.Favorites>>();
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
      dispatch(favoriteActions.addFavorite(bowlData));
      return bowlData.id;
    },
    [dispatch],
  );

  const addToCart = useCallback(
    async bowl => {
      dispatch(cartActions.addBowl(bowl));
    },
    [dispatch],
  );

  return useMemo(
    () => ({ editFavorite, removeFavorite, addToCart, addFavorite }),
    [editFavorite, removeFavorite, addToCart, addFavorite],
  );
};
