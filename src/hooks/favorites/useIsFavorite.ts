import { useFavorite } from './useFavorite';

export function useIsFavorite(favoriteId: string) {
  const favorite = useFavorite(favoriteId);
  return !!favorite;
}
