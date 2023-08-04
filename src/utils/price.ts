import { Cart, ExtraIngredient, Size } from 'src/types';

export function formatPrice(price: number) {
  return Math.floor(price * 100) / 100;
}

export function calculatePrice(
  size: Size,
  extraIngredients: ExtraIngredient[],
) {
  let sum = 0;
  extraIngredients.forEach(ingredient => (sum += ingredient.price));
  return formatPrice(size.price + sum);
}

export function getCartTotal(cart: Cart) {
  let sum = 0;
  let currency = '';
  cart.forEach(bowl => {
    if (!currency) {
      currency = bowl.size.currency;
    }
    sum += bowl.count * calculatePrice(bowl.size, bowl.extraIngredients);
  });

  return { currency, subtotal: formatPrice(sum) };
}
