import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Database } from 'src/database';
import { Favorite, QueryKey } from 'src/types';

export function useSaveFavorite() {
  const queryClient = useQueryClient();

  return useCallback(
    (favorite: Omit<Favorite, 'id'>) => {
      return Database.favorites.addFavorite(favorite).then(favoriteId => {
        queryClient.invalidateQueries([QueryKey.favorites]);
        return favoriteId;
      });
    },
    [queryClient],
  );
}
