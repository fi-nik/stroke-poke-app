import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Database } from 'src/database';
import {
  AppRoutes,
  FavoritesScreenNavigationProp,
  TabRoutes,
} from 'src/router/types';
import { BowlData, Favorite, QueryKey } from 'src/types';
export const useFavorites = () => {
  const { data, refetch } = useQuery<Favorite[]>({
    queryKey: [QueryKey.favorites],
    queryFn: () => {
      console.log('fetching new favorites');
      return Database.favorites.getFavorites();
    },
  });
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
    async (favoriteId: string) => {
      await Database.favorites.deleteFavorite(favoriteId);
      refetch();
    },
    [refetch],
  );

  const addToCart = useCallback(async bowl => {
    return null;
  }, []);

  return { data, editFavorite, removeFavorite, addToCart };
};
