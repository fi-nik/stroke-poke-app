import { useMemo } from 'react';
import { Option } from 'src/components/options/types';

import { useExtraIngredients } from './useExtraIngredients';

export const useExtraIngredientOptions = (): Option[] => {
  const { extraIngredients } = useExtraIngredients();
  return useMemo(
    () =>
      extraIngredients.map(ingredient => ({
        label: `${ingredient.name} - ${ingredient.currency}${ingredient.price}`,
        value: ingredient,
      })),
    [extraIngredients],
  );
};
