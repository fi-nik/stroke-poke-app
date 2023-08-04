import { useState, useCallback } from 'react';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { StepCounter } from 'src/components/StepCounter';
import { Option } from 'src/components/options/types';
import {
  Base,
  Bowl,
  BowlData,
  SectionKeys,
  Ingredient,
  Sauce,
  Size,
} from 'src/types';

import { BowlDetails } from './BowlDetails';
import { BowlSummary } from './BowlSummary';
import { BowlType } from './BowlType';
import { ExtraIngredients } from './ExtraIngredients';

type BowlDetailsData = {
  [SectionKeys.BowlSize]: Size;
  [SectionKeys.BowlBase]: Base;
  [SectionKeys.BowlSauce]: Sauce;
  [SectionKeys.BowlIngredients]: Record<string, Ingredient>;
};

type Props = {
  bowlData: BowlData;
  bowlOptions: Option[];
  baseOptions: Option[];
  sizeOptions: Option[];
  sauceOptions: Option[];
  ingredientOptions: Option[];
  extraIngredientsOptions: Option[];
};

function convertToMap<T extends { id: string | number }>(items: T[]) {
  const map = {};
  items.forEach(item => (map[item.id] = item));
  return map;
}

export const Steps = ({
  bowlData,
  bowlOptions,
  baseOptions,
  sizeOptions,
  sauceOptions,
  ingredientOptions,
  extraIngredientsOptions,
}: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const goBack = useCallback(
    () => setCurrentStep(current => current - 1),
    [setCurrentStep],
  );
  const [extraIngredients, setExtraIngredients] = useState(
    convertToMap(bowlData.extraIngredients),
  );
  const [bowlType, setBowlType] = useState<Bowl>(bowlData.type);
  const [bowlDetails, setBowlDetails] = useState<BowlDetailsData>({
    [SectionKeys.BowlSize]: bowlData.size,
    [SectionKeys.BowlBase]: bowlData.base,
    [SectionKeys.BowlSauce]: bowlData.sauce,
    [SectionKeys.BowlIngredients]: convertToMap(bowlData.ingredients),
  });

  return (
    <ScreenWrapper>
      <StepCounter current={currentStep} size={4} />
      {currentStep === 0 && (
        <BowlType
          initialValue={bowlType}
          options={bowlOptions}
          onConfirm={selectedBowlType => {
            setBowlType(selectedBowlType);
            setCurrentStep(1);
          }}
        />
      )}

      {currentStep === 1 && (
        <BowlDetails
          initialValues={bowlDetails}
          onConfirm={(bowlDetails: BowlDetailsData) => {
            setBowlDetails(bowlDetails);
            setCurrentStep(2);
          }}
          goBack={goBack}
          sizeOptions={sizeOptions}
          baseOptions={baseOptions}
          sauceOptions={sauceOptions}
          ingredientOptions={ingredientOptions}
        />
      )}

      {currentStep === 2 && (
        <ExtraIngredients
          initialValues={extraIngredients}
          goBack={goBack}
          size={bowlDetails[SectionKeys.BowlSize]}
          extraIngredients={extraIngredientsOptions}
          onConfirm={selectedExtraIngredients => {
            setExtraIngredients(selectedExtraIngredients);
            setCurrentStep(3);
          }}
        />
      )}

      {currentStep === 3 && (
        <BowlSummary
          bowlData={{
            id: bowlData.id,
            type: bowlType,
            size: bowlDetails[SectionKeys.BowlSize],
            sauce: bowlDetails[SectionKeys.BowlSauce],
            base: bowlDetails[SectionKeys.BowlBase],
            ingredients: Object.values(
              bowlDetails[SectionKeys.BowlIngredients],
            ),
            extraIngredients: Object.values(extraIngredients),
          }}
        />
      )}
    </ScreenWrapper>
  );
};
