import { useQuery } from '@tanstack/react-query';
import BowlService from 'src/services/bowlService';
import { Bowl, QueryKey, Response } from 'src/types';

export const useBowls = () => {
  const { data: response } = useQuery<Response<Bowl[]>>({
    queryKey: [QueryKey.ExtraIngredients],
    queryFn: () => BowlService.getBowls(),
  });
  return {
    bowls: response ? response.data : [],
    meta: response ? response.meta : null,
  };
};
