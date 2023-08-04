import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const useFavorites = () => {
  return useSelector((state: RootState) => state.favorites.list);
};
