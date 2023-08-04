import React from 'react';
import { Card } from 'src/components/Card';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { ArrowRightIcon } from 'src/components/icons/ArrowRight';
import { Flex, FlexShrink } from 'src/components/layout';
import { Options } from 'src/components/options/Options';
import { Option, OptionConfig } from 'src/components/options/types';
import { useBowlDetailsForm } from 'src/hooks/home';
import { BowlDetailsData, SectionKeys } from 'src/types';
import styled from 'styled-components/native';

type Props = {
  goBack;
  onConfirm;
  sizeOptions: Option[];
  baseOptions: Option[];
  sauceOptions: Option[];
  ingredientOptions: Option[];
  initialValues: BowlDetailsData;
};
export function BowlDetails({
  sizeOptions,
  goBack,
  onConfirm,
  baseOptions,
  sauceOptions,
  ingredientOptions,
  initialValues,
}: Props) {
  const {
    errors,
    maxSelectedIngredients,
    values,
    selectedSize,
    onChangeSize,
    onChangeSauce,
    onChangeIngredients,
    onChangeBase,
    handleSubmit,
  } = useBowlDetailsForm({ onSubmit: onConfirm, initialValues });

  const data = [
    {
      key: SectionKeys.BowlSize,
      title: 'Pick a size',
      data: sizeOptions,
      multiselect: false,
      onChange: onChangeSize,
      error: errors[SectionKeys.BowlSize],
    },
    {
      key: SectionKeys.BowlBase,
      title: 'Pick the base',
      data: baseOptions,
      multiselect: false,
      onChange: onChangeBase,
      error: errors[SectionKeys.BowlBase],
    },
    {
      key: SectionKeys.BowlSauce,
      title: 'Pick a sauce',
      data: sauceOptions,
      multiselect: false,
      onChange: onChangeSauce,
      error: errors[SectionKeys.BowlSauce],
    },
    {
      key: SectionKeys.BowlIngredients,
      title: 'Pick other ingredients',
      description: 'Pick up to 5, 8 or 10 ingredients based on bowl size.',
      data: ingredientOptions,
      multiselect: true,
      onChange: onChangeIngredients,
      error:
        errors[SectionKeys.BowlIngredients] ||
        (maxSelectedIngredients &&
          `For selected bowl you can pick maximum ${selectedSize} ingredients.`),
      disabled: maxSelectedIngredients || !!errors[SectionKeys.BowlIngredients],
    },
  ];

  return (
    <Flex>
      <FlexShrink>
        <Card>
          <Options options={data as OptionConfig[]} selectedOptions={values} />
        </Card>
      </FlexShrink>

      <ActionButtons>
        <BackButton label="Back" onPress={goBack} />
        <NextButton
          label="Next"
          onPress={handleSubmit}
          RightIcon={<ArrowRightIcon />}
        />
      </ActionButtons>
    </Flex>
  );
}

const ActionButtons = styled.View`
  flex-shrink: 1;
  width: 100%;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

const BackButton = styled(SecondaryButton)`
  width: 50%;
`;

const NextButton = styled(PrimaryButton)`
  width: 50%;
`;
