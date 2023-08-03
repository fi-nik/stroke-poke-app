import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export function useFavorite(favoriteId: string) {
  return useSelector((state: RootState) => state.favorites.map[favoriteId]);
}
