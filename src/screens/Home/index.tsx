import React, { useCallback, useState } from 'react';
import { Ingredients } from 'screens/Home/steps/Ingredients';
import { PokeBowl } from 'screens/Home/steps/PokeBowl';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { StepCounter } from 'src/components/StepCounter';

const options = [
  { label: 'Chicken', value: 'bowl-0' },
  { label: 'Salmon', value: 'bowl-1' },
  { label: 'Tuna', value: 'bowl-2' },
  { label: 'Vegan', value: 'bowl-3' },
];
const sizeOptions = [
  { label: 'Small - $5.00', description: '(5 ingredients)', value: '5' },
  { label: 'Medium - $6.99', description: '(8 ingredients)', value: '8' },
  { label: 'Large - $8.99', description: '(10 ingredients)', value: '10' },
];
const baseOptions = [
  { label: 'White rice', value: 'base-0' },
  { label: 'Brown rice', value: 'base-1' },
  { label: 'Quinoa rice', value: 'base-2' },
];

const sauceOptions = [
  { label: 'Ponzu sauce', value: 'sauce-0' },
  { label: 'Ginger sauce', value: 'sauce-1' },
  { label: 'Sesame sauce', value: 'sauce-2' },
  { label: 'Eel sauce', value: 'sauce-3' },
  { label: 'Wasabi sauce', value: 'sauce-4' },
  { label: 'Korean spicy sauce', value: 'sauce-5' },
  { label: 'Soy sauce', value: 'sauce-6' },
  { label: 'Tai Peanut sauce', value: 'sauce-7' },
];

const otherIngredientOptions = [
  { label: 'Avocado', value: 'other-0' },
  { label: 'Edamame', value: 'other-1' },
  { label: 'Spring Onion', value: 'other-2' },
  { label: 'Chili Pepper', value: 'other-3' },
  { label: 'Shallots', value: 'other-4' },
  { label: 'Carrot', value: 'other-5' },
  { label: 'Green Salad', value: 'other-6' },
  { label: 'Beets', value: 'other-7' },
  { label: 'Pickles', value: 'other-8' },
  { label: 'Cucumber', value: 'other-9' },
  { label: 'Corn', value: 'other-10' },
  { label: 'Mango', value: 'other-11' },
  { label: 'Wasabi', value: 'other-12' },
  { label: 'Pineapple', value: 'other-13' },
  { label: 'Kohlrabi', value: 'other-14' },
  { label: 'Nori algae', value: 'other-15' },
];
export const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goBack = useCallback(() => setCurrentStep(0), []);

  return (
    <ScreenWrapper>
      <StepCounter current={currentStep} size={4} />
      {currentStep === 0 && (
        <PokeBowl
          options={options}
          onConfirm={selectedOption => {
            /*TODO: Add logic to save selected option to state */
            setCurrentStep(1);
          }}
        />
      )}
      {currentStep === 1 && (
        <Ingredients
          goBack={goBack}
          sizeOptions={sizeOptions}
          baseOptions={baseOptions}
          sauceOptions={sauceOptions}
          otherIngredientOptions={otherIngredientOptions}
        />
      )}
    </ScreenWrapper>
  );
};
