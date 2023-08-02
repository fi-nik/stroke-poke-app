import { useEffect, useState } from 'react';
import ExtraIngredientService from 'src/services/extraIngredientService';

export const useExtraIngredients = () => {
  const [extraIngredients, setExtraIngredients] = useState([]);
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

export const useExtraIngredient = (id: string) => {
  const [extraIngredient, setExtraIngredient] = useState(null);
  useEffect(() => {
    ExtraIngredientService.getExtraIngredientById(id)
      .then(setExtraIngredient)
      .catch(error => setExtraIngredient(null));
  }, [id]);

  return extraIngredient;
};
