import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseService from 'src/services/baseService';
import BowlService from 'src/services/bowlService';
import ExtraIngredientService from 'src/services/extraIngredientService';
import IngredientService from 'src/services/ingredientService';
import SauceService from 'src/services/sauceService';
import SizeService from 'src/services/sizeService';

const queryClient = new QueryClient();

const prefetchData = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: ['sizes'],
    queryFn: () => SizeService.getSizes(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['bowls'],
    queryFn: () => BowlService.getBowls(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['bases'],
    queryFn: () => BaseService.getBases(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['sauces'],
    queryFn: () => SauceService.getSauces(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['ingredients'],
    queryFn: () => IngredientService.getIngredients(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['extraIngredient'],
    queryFn: () => ExtraIngredientService.getExtraIngredients(),
  });
};
prefetchData();
export function QueryProvider(props) {
  return <QueryClientProvider {...props} client={queryClient} />;
}
