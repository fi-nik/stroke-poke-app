import { useQueries } from '@tanstack/react-query';
import BaseService from 'src/services/baseService';
import IngredientService from 'src/services/ingredientService';
import SauceService from 'src/services/sauceService';
import SizeService from 'src/services/sizeService';
import { QueryKey } from 'src/types';

export const useBowlDetails = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKey.Sizes],
        queryFn: () => SizeService.getSizes(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: [QueryKey.Bases],
        queryFn: () => BaseService.getBases(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: [QueryKey.Sauces],
        queryFn: () => SauceService.getSauces(),
        placeholderData: { data: [], meta: null },
      },
      {
        queryKey: [QueryKey.Ingredients],
        queryFn: () => IngredientService.getIngredients(),
        placeholderData: { data: [], meta: null },
      },
    ],
  });
  return queries.map(query => query.data);
};
