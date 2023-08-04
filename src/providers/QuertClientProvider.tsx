import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseService from 'src/services/baseService';
import BowlService from 'src/services/bowlService';
import ExtraIngredientService from 'src/services/extraIngredientService';
import IngredientService from 'src/services/ingredientService';
import SauceService from 'src/services/sauceService';
import SizeService from 'src/services/sizeService';
import { QueryKey } from 'src/types';

const queryClient = new QueryClient();

const prefetchData = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.Sizes],
    queryFn: () => SizeService.getSizes(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.Bowls],
    queryFn: () => BowlService.getBowls(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.Bases],
    queryFn: () => BaseService.getBases(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.Sauces],
    queryFn: () => SauceService.getSauces(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.Ingredients],
    queryFn: () => IngredientService.getIngredients(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.ExtraIngredients],
    queryFn: () => ExtraIngredientService.getExtraIngredients(),
  });
};

prefetchData();

export function QueryProvider(props) {
  return <QueryClientProvider {...props} client={queryClient} />;
}
