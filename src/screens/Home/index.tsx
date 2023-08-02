import React, { useCallback, useState } from 'react';
import { BowlDetails } from 'screens/Home/steps/BowlDetails';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { StepCounter } from 'src/components/StepCounter';
import {useBowlDetailsOptions, useBowlOptions} from 'src/hooks/bowls';

import { BowlSelection } from './steps/BowlSelection';

export const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const goBack = useCallback(() => setCurrentStep(0), []);
  const bowlOptions = useBowlOptions();
  const { sizes, bases, sauces, ingredients } = useBowlDetailsOptions();
  return (
    <ScreenWrapper>
      <StepCounter current={currentStep} size={4} />
      {currentStep === 0 && (
        <BowlSelection
          options={bowlOptions}
          onConfirm={selectedOption => {
            /*TODO: Add logic to save selected option to state */
            setCurrentStep(1);
          }}
        />
      )}
      {currentStep === 1 && (
        <BowlDetails
          goBack={goBack}
          sizeOptions={sizes}
          baseOptions={bases}
          sauceOptions={sauces}
          otherIngredientOptions={ingredients}
        />
      )}
    </ScreenWrapper>
  );
};
