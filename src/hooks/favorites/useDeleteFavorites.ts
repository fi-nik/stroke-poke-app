import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Database } from 'src/database';
import { Favorite, QueryKey } from 'src/types';

export function useDeleteFavorites() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (favoriteId: string) => {
      return Database.favorites.deleteFavorite(favoriteId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.favorites] });
    },
  });
  return useCallback(
    async (favoriteId: string) => mutation.mutate(favoriteId),
    [mutation],
  );
}
