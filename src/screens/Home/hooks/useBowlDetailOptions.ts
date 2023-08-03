import { useQueries } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Option } from 'src/components/options/types';
import BaseService from 'src/services/baseService';
import IngredientService from 'src/services/ingredientService';
import SauceService from 'src/services/sauceService';
import SizeService from 'src/services/sizeService';
import { Size } from 'src/types';
import { getSizeNumber } from 'src/utils/bowlSize';

function useBowlDetails() {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['sizes'],
        queryFn: () => SizeService.getSizes(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: ['bases'],
        queryFn: () => BaseService.getBases(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: ['sauces'],
        queryFn: () => SauceService.getSauces(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: ['ingredients'],
        queryFn: () => IngredientService.getIngredients(),
        placeholderData: { data: [], meta: null },
      },
    ],
  });
  return queries.map(query => query.data);
}

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
