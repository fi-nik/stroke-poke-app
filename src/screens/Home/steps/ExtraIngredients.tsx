import React from 'react';
import { SectionKeys } from 'screens/Home/types';
import { Card } from 'src/components/Card';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { ArrowRight } from 'src/components/icons/arrow-right';
import { Flex, FlexShrink } from 'src/components/layout';
import { Options } from 'src/components/options/Options';
import { Option } from 'src/components/options/types';
import { Body } from 'src/components/text/Body';
import { Headline } from 'src/components/text/Headline';
import { ExtraIngredient } from 'src/types';
import { formatPrice } from 'src/utils/price';
import styled, { useTheme } from 'styled-components/native';

import { useExtraIngredientsForm } from '../hooks/useExtraIngredientsForm';

function getExtraSum(extraIngredients: ExtraIngredient[]) {
  let sum = 0;
  extraIngredients.forEach(ingredient => (sum += ingredient.price));
  return sum;
}

type Props = {
  goBack: () => void;
  onConfirm: (selectedExtraIngredients: ExtraIngredient[]) => void;
  extraIngredients: Option[];
  initialValues: Record<number, ExtraIngredient>;
  price: number;
};

export function ExtraIngredients({
  goBack,
  extraIngredients,
  onConfirm,
  initialValues,
  price,
}: Props) {
  const theme = useTheme();
  const { handleSubmit, values, onChange } = useExtraIngredientsForm({
    onSubmit: onConfirm,
    initialValues,
  });
  const data = [
    {
      key: SectionKeys.ExtraIngredients,
      title: 'Pick an extra ingredient',
      description:
        'Weather its more sashimi or an ingrediant you’d like to try out, feel free to add whatever you’d like.',
      data: extraIngredients,
      multiselect: true,
      onChange,
    },
  ];

  return (
    <Flex>
      <FlexShrink>
        <Card>
          <Options options={data} selectedOptions={values} />
        </Card>
      </FlexShrink>
      <PriceCard>
        <PriceContent>
          <Body>Regular price</Body>
          <Headline>{`$${price}`}</Headline>
        </PriceContent>
        <PriceContent addMarginTop>
          <Body colour={theme.colors.primary}>
            Price with extra ingredients
          </Body>
          <Headline colour={theme.colors.primary}>{`$${formatPrice(
            price +
              getExtraSum(Object.values(values[SectionKeys.ExtraIngredients])),
          )}`}</Headline>
        </PriceContent>
      </PriceCard>
      <ActionButtons>
        <SecondaryButton label="Back" onPress={goBack} />
        <PrimaryButton
          label="Next"
          onPress={handleSubmit}
          RightIcon={ArrowRight}
        />
      </ActionButtons>
    </Flex>
  );
}

const PriceCard = styled(Card)`
  margin-top: 15px;
`;

const PriceContent = styled.View<{ addMarginTop?: boolean }>`
  margin-top: ${({ addMarginTop = false }) => (addMarginTop ? 20 : 0)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const ActionButtons = styled.View`
  flex-shrink: 1;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;
