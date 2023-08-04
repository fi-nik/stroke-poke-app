import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export function useCart() {
  return useSelector((state: RootState) => state.cart.list);
}
