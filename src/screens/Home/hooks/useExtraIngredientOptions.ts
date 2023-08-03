import { useEffect, useState, useMemo } from 'react';
import { Option } from 'src/components/options/types';
import ExtraIngredientService from 'src/services/extraIngredientService';
import { ExtraIngredient } from 'src/types';

 const useExtraIngredients = () => {
  const [extraIngredients, setExtraIngredients] = useState<ExtraIngredient[]>(
    [],
  );
  const [meta, setMeta] = useState(null);
  useEffect(() => {
    ExtraIngredientService.getExtraIngredients()
      .then(({ meta, data }) => {
        setExtraIngredients(data);
        setMeta(meta);
      })
      .catch(error => setExtraIngredients(null));
  }, []);

  return { extraIngredients, meta };
};

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

export const useExtraIngredient = (id: string) => {
  const [extraIngredient, setExtraIngredient] = useState(null);
  useEffect(() => {
    ExtraIngredientService.getExtraIngredientById(id)
      .then(setExtraIngredient)
      .catch(error => setExtraIngredient(null));
  }, [id]);

  return extraIngredient;
};
