import { useQuery } from '@tanstack/react-query';
import ExtraIngredientService from 'src/services/extraIngredientService';
import { ExtraIngredient, QueryKey, Response } from 'src/types';

export const useExtraIngredients = () => {
  const { data: response } = useQuery<Response<ExtraIngredient[]>>({
    queryKey: [QueryKey.ExtraIngredients],
    queryFn: () => ExtraIngredientService.getExtraIngredients(),
  });
  return {
    extraIngredients: response ? response.data : [],
    meta: response ? response.meta : null,
  };
};
