import * as Crypto from 'expo-crypto';
import React, { useCallback, useState, useEffect } from 'react';
import { Steps } from 'screens/Home/steps';

import { useBowlDetailsOptions } from './hooks/useBowlDetailOptions';
import { useBowlOptions } from './hooks/useBowlOptions';
import { useExtraIngredientOptions } from './hooks/useExtraIngredientOptions';
const emptyData = {
  id: Crypto.randomUUID(),
  extraIngredients: [],
  ingredients: [],
  size: null,
  sauce: null,
  base: null,
  type: null,
};
export const HomeScreen = ({ route }) => {
  /* TODO: Fetch all options at once */
  const bowls = useBowlOptions();
  const { sizes, bases, sauces, ingredients } = useBowlDetailsOptions();
  const extraIngredients = useExtraIngredientOptions();

  useEffect(() => {
    if (route && route.params?.data) {
      setInitialBowlData(route.params.data);
    }
  }, [route]);

  const [initialBowlData, setInitialBowlData] = useState(emptyData);
  return (
    <Steps
      key={initialBowlData.id}
      bowlData={initialBowlData}
      bowlOptions={bowls}
      baseOptions={bases}
      sauceOptions={sauces}
      ingredientOptions={ingredients}
      extraIngredientsOptions={extraIngredients}
      sizeOptions={sizes}
    />
  );
};
