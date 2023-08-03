import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { favoriteActions } from 'src/store';
export function useDeleteFavorites() {
  const dispatch = useDispatch();

  return useCallback(
    (favoriteId: string) => {
      dispatch(favoriteActions.removeFavorite(favoriteId));
    },
    [dispatch],
  );
}
