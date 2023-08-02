import { useQueries } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { Option } from 'screens/Home/types';
import BaseService from 'src/services/baseService';
import BowlService from 'src/services/bowlService';
import IngredientService from 'src/services/ingredientService';
import SauceService from 'src/services/sauceService';
import SizeService from 'src/services/sizeService';
import { Bowl } from 'src/types';

export const useBowls = () => {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [meta, setMeta] = useState(null);
  useEffect(() => {
    BowlService.getBowls()
      .then(({ meta, data }) => {
        setBowls(data);
        setMeta(meta);
      })
      .catch(error => setBowls(null));
  }, []);

  return { bowls, meta };
};

export const useBowlOptions = (): Option[] => {
  const { bowls } = useBowls();
  return useMemo(
    () =>
      bowls.map(bowl => ({
        label: bowl.name,
        value: `${bowl.id}`,
        description: bowl.description,
      })),
    [bowls],
  );
};

export function useBowlDetails() {
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
      sizes: details[0].data.map(size => ({
        label: size.name,
        value: `${size.id}`,
        description: size.description,
      })),
      bases: details[1].data.map(base => ({
        label: base.name,
        value: `${base.id}`,
        description: base.description,
      })),
      sauces: details[2].data.map(sauce => ({
        label: sauce.name,
        value: `${sauce.id}`,
        description: sauce.description,
      })),
      ingredients: details[3].data.map(ingredient => ({
        label: ingredient.name,
        value: `${ingredient.id}`,
      })),
    }),
    [details],
  );
};
