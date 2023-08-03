import {useCart} from "./useCart";
export function useCartNumber() {
  const cart =useCart()
  return cart.length;
}
