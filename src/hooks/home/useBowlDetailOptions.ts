import { useMemo } from 'react';
import { Option } from 'src/components/options/types';
import { useBowlDetails } from 'src/hooks/home/useBowlDetails';
import { Size } from 'src/types';
import { getSizeNumber } from 'src/utils/bowlSize';

export const useBowlDetailsOptions = (): {
  sizes: Option[];
  bases: Option[];
  sauces: Option[];
  ingredients: Option[];
} => {
  const details = useBowlDetails();
  return useMemo(
    () => ({
      sizes: (details[0].data as Size[]).map((size: Size) => ({
        label: `${size.name} - ${size.currency}${size.price.toFixed(2)}`,
        value: size,
        description: `${getSizeNumber(size)} ingredients`,
      })),
      bases: details[1].data.map(base => ({
        label: base.name,
        value: base,
      })),
      sauces: details[2].data.map(sauce => ({
        label: sauce.name,
        value: sauce,
      })),
      ingredients: details[3].data.map(ingredient => ({
        label: ingredient.name,
        value: ingredient,
      })),
    }),
    [details],
  );
};
