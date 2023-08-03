import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
export function useCartNumber() {
  const cart = useSelector((state: RootState) => state.cart.list);
  return cart.length;
}
