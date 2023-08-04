import React, { useState, useEffect } from 'react';
import { Steps } from 'screens/Home/steps';
import {
  useBowlDetailsOptions,
  useBowlOptions,
  useExtraIngredientOptions,
} from 'src/hooks/home';
import { BowlData } from 'src/types';

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

  const [initialBowlData, setInitialBowlData] = useState(new BowlData());
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
