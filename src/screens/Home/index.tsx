import React, { useCallback, useState } from 'react';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { StepCounter } from 'src/components/StepCounter';
import { Bowl } from 'src/types';

import { useBowlDetailsOptions } from './hooks/useBowlDetailOptions';
import { useBowlOptions } from './hooks/useBowlOptions';
import { useExtraIngredientOptions } from './hooks/useExtraIngredientOptions';
import { BowlDetails } from './steps/BowlDetails';
import { BowlType } from './steps/BowlType';
import { ExtraIngredients } from './steps/ExtraIngredients';
import { SectionKeys } from './types';

export const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const goBack = useCallback(
    () => setCurrentStep(current => current - 1),
    [setCurrentStep],
  );
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [bowlType, setBowlType] = useState<Bowl>(null);
  const [bowlDetails, setBowlDetails] = useState({
    [SectionKeys.BowlSize]: null,
    [SectionKeys.BowlBase]: null,
    [SectionKeys.BowlSauce]: null,
    [SectionKeys.BowlIngredients]: {},
  });
  const bowls = useBowlOptions();
  const { sizes, bases, sauces, ingredients } = useBowlDetailsOptions();
  const extraIngredientsOptions = useExtraIngredientOptions();

  return (
    <ScreenWrapper>
      <StepCounter current={currentStep} size={4} />
      {currentStep === 0 && (
        <BowlType
          initialValue={bowlType}
          options={bowls}
          onConfirm={selectedBowlType => {
            /*TODO: Add logic to save selected option to state */
            setBowlType(selectedBowlType);
            setCurrentStep(1);
          }}
        />
      )}
      {currentStep === 1 && (
        <BowlDetails
          initialValues={bowlDetails}
          onConfirm={bowlDetails => {
            setBowlDetails(bowlDetails);
            setCurrentStep(2);
          }}
          goBack={goBack}
          sizeOptions={sizes}
          baseOptions={bases}
          sauceOptions={sauces}
          ingredientOptions={ingredients}
        />
      )}
      {currentStep === 2 && (
        <ExtraIngredients
          initialValues={extraIngredients}
          goBack={goBack}
          price={bowlDetails[SectionKeys.BowlSize].price}
          extraIngredients={extraIngredientsOptions}
          onConfirm={selectedExtraIngredients => {
            setExtraIngredients(selectedExtraIngredients);
            setCurrentStep(3);
          }}
        />
      )}
    </ScreenWrapper>
  );
};
